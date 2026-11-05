//! HTTP handlers — one function per endpoint in `docs/HTTP-API.md`.

use std::{
    collections::{HashMap, HashSet},
    convert::Infallible,
    sync::Arc,
};

use axum::{
    extract::{Path, Query, State},
    http::StatusCode,
    response::{
        sse::{Event as SseEvent, KeepAlive, Sse},
        IntoResponse, Response,
    },
    Json,
};
use base64::{engine::general_purpose::STANDARD as B64, Engine as _};
use chrono::Utc;
use futures_util::StreamExt;
use serde_json::json;
use tokio_stream::wrappers::BroadcastStream;

use crate::{
    config,
    error::{ApiError, ApiResult},
    events::GaleEvent,
    games,
    install::{self, InstallRequest, Mode},
    model::*,
    state::{self, ProfileModKind},
    store::{self, Listing},
    AppState,
};

/* -------------------------------------------------------------------------- */
/* Health & events                                                            */
/* -------------------------------------------------------------------------- */

pub async fn health(State(state): State<Arc<AppState>>) -> Json<Health> {
    let data_dir = state
        .manager
        .lock()
        .map(|manager| manager.data_dir().display().to_string())
        .unwrap_or_default();

    Json(Health {
        ok: true,
        version: env!("CARGO_PKG_VERSION").to_string(),
        core: format!("gale-core {}", env!("CARGO_PKG_VERSION")),
        data_dir,
        platform: std::env::consts::OS.to_string(),
        uptime_sec: state.started.elapsed().as_secs(),
        steam_detected: games::steam_detected(),
    })
}

pub async fn events(
    State(state): State<Arc<AppState>>,
) -> Sse<impl futures_util::Stream<Item = Result<SseEvent, Infallible>>> {
    let receiver = state.events.subscribe();
    let stream = BroadcastStream::new(receiver).filter_map(|message| async move {
        let event = message.ok()?;
        let payload = serde_json::to_string(&event).ok()?;
        Some(Ok(SseEvent::default().data(payload)))
    });

    Sse::new(stream).keep_alive(KeepAlive::default())
}

/* -------------------------------------------------------------------------- */
/* Games                                                                      */
/* -------------------------------------------------------------------------- */

pub async fn list_games(State(state): State<Arc<AppState>>) -> Json<Vec<Game>> {
    let manager = state.manager.lock().expect("manager poisoned");
    let detected: HashMap<String, Option<String>> = games::all()
        .iter()
        .map(|game| {
            (
                game.slug(),
                games::detect_install(game).map(|path| path.display().to_string()),
            )
        })
        .collect();

    let result = games::all()
        .iter()
        .map(|game| {
            let slug = game.slug();
            let managed = manager.game(&slug);
            let profile = managed.and_then(|entry| {
                entry
                    .profiles
                    .iter()
                    .find(|profile| profile.id == entry.active_profile_id)
            });

            Game {
                slug: slug.clone(),
                name: game.name.clone(),
                popular: game.popular,
                mod_loader: game.loader_name(),
                mod_loader_kind: game.loader_kind(),
                runtime: None,
                managed: managed.is_some(),
                path: managed.map(|entry| entry.path.display().to_string()),
                favorite: managed.map(|entry| entry.favorite).unwrap_or(false),
                profile_count: managed.map(|entry| entry.profiles.len()).unwrap_or(0),
                active_profile_id: managed.map(|entry| entry.active_profile_id),
                installed_mod_count: profile.map(|profile| profile.mods.len()).unwrap_or(0),
                detected_path: detected.get(&slug).cloned().flatten(),
            }
        })
        .collect();

    Json(result)
}

pub async fn manage_game(
    State(state): State<Arc<AppState>>,
    Path(slug): Path<String>,
    Json(body): Json<ManageGameBody>,
) -> ApiResult<Json<Game>> {
    let game = games::by_slug(&slug).ok_or_else(|| ApiError::not_found(format!("game {slug}")))?;

    let path = body
        .path
        .map(std::path::PathBuf::from)
        .or_else(|| games::detect_install(game))
        .unwrap_or_else(|| state.data_dir().join("games").join(&slug));

    {
        let mut manager = state.manager.lock().expect("manager poisoned");
        manager
            .register_game(&slug, path.clone())
            .map_err(ApiError::internal)?;
    }

    state.log("info", "game", format!("registered {} at {}", game.name, path.display()));
    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug.clone() });

    let manager = state.manager.lock().expect("manager poisoned");
    let managed = manager.game(&slug);
    Ok(Json(Game {
        slug: slug.clone(),
        name: game.name.clone(),
        popular: game.popular,
        mod_loader: game.loader_name(),
        mod_loader_kind: game.loader_kind(),
        runtime: None,
        managed: managed.is_some(),
        path: managed.map(|entry| entry.path.display().to_string()),
        favorite: managed.map(|entry| entry.favorite).unwrap_or(false),
        profile_count: managed.map(|entry| entry.profiles.len()).unwrap_or(0),
        active_profile_id: managed.map(|entry| entry.active_profile_id),
        installed_mod_count: 0,
        detected_path: games::detect_install(game).map(|path| path.display().to_string()),
    }))
}

pub async fn favorite_game(
    State(state): State<Arc<AppState>>,
    Path(slug): Path<String>,
    Json(body): Json<FavoriteBody>,
) -> ApiResult<StatusCode> {
    let mut manager = state.manager.lock().expect("manager poisoned");
    let game = manager
        .game_mut(&slug)
        .ok_or_else(|| ApiError::not_found(format!("game {slug}")))?;
    game.favorite = body.favorite;
    manager.save().map_err(ApiError::internal)?;
    Ok(StatusCode::NO_CONTENT)
}

/* -------------------------------------------------------------------------- */
/* Profiles                                                                   */
/* -------------------------------------------------------------------------- */

pub async fn list_profiles(
    State(state): State<Arc<AppState>>,
    Path(slug): Path<String>,
) -> ApiResult<Json<Vec<Profile>>> {
    let game = {
        let manager = state.manager.lock().expect("manager poisoned");
        match manager.game(&slug) {
            Some(game) => game.clone(),
            None => return Ok(Json(Vec::new())),
        }
    };

    let listings = state.store.index_or_empty(&slug).await;
    let profiles = game
        .profiles
        .iter()
        .map(|profile| state::profile_dto(&game, profile, &listings))
        .collect();

    Ok(Json(profiles))
}

pub async fn create_profile(
    State(state): State<Arc<AppState>>,
    Path(slug): Path<String>,
    Json(body): Json<CreateProfileBody>,
) -> ApiResult<(StatusCode, Json<Profile>)> {
    let name = body.name.unwrap_or_else(|| "New profile".to_string());
    let id = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        manager
            .create_profile(&slug, &name, body.duplicate_of)
            .map_err(|err| ApiError::bad_request(err))?
    };

    state
        .log("info", "profile", format!("created profile “{name}” for {slug}"));
    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug.clone() });

    let game = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager.game(&slug).cloned().ok_or_else(|| ApiError::not_found(slug.clone()))?
    };
    let listings: Vec<Listing> = Vec::new();
    let profile = game
        .profiles
        .iter()
        .find(|profile| profile.id == id)
        .map(|profile| state::profile_dto(&game, profile, &listings))
        .ok_or_else(|| ApiError::not_found("profile"))?;

    Ok((StatusCode::CREATED, Json(profile)))
}

pub async fn update_profile(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
    Json(body): Json<UpdateProfileBody>,
) -> ApiResult<Json<Profile>> {
    let (slug, profile_id) = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        let (slug, current) = manager
            .find_profile(id)
            .map(|(_, profile)| (profile.game_slug.clone(), profile.id))
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;

        {
            let profile = manager
                .profile_mut(id)
                .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;
            if let Some(name) = body.name.clone() {
                if !name.trim().is_empty() {
                    profile.name = name.trim().to_string();
                }
            }
            if let Some(args) = body.custom_args.clone() {
                profile.custom_args = args;
            }
        }
        manager.save().map_err(ApiError::internal)?;
        (slug, current)
    };

    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug.clone() });
    profile_response(&state, &slug, profile_id).await
}

pub async fn delete_profile(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
) -> ApiResult<StatusCode> {
    let slug = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        let slug = manager
            .profile(id)
            .map(|profile| profile.game_slug.clone())
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;
        manager.delete_profile(id).map_err(ApiError::internal)?;
        slug
    };

    state.log("info", "profile", format!("deleted profile {id}"));
    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug });
    Ok(StatusCode::NO_CONTENT)
}

pub async fn activate_profile(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
) -> ApiResult<Json<Profile>> {
    let slug = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        let slug = manager
            .profile(id)
            .map(|profile| profile.game_slug.clone())
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;
        manager.activate_profile(id).map_err(ApiError::internal)?;
        slug
    };

    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug.clone() });
    profile_response(&state, &slug, id).await
}

async fn profile_response(state: &Arc<AppState>, slug: &str, id: u64) -> ApiResult<Json<Profile>> {
    let game = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager.game(slug).cloned().ok_or_else(|| ApiError::not_found(slug))?
    };
    let listings = state.store.index_or_empty(slug).await;
    let profile = game
        .profiles
        .iter()
        .find(|profile| profile.id == id)
        .map(|profile| state::profile_dto(&game, profile, &listings))
        .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;
    Ok(Json(profile))
}

/* -------------------------------------------------------------------------- */
/* Mods                                                                       */
/* -------------------------------------------------------------------------- */

pub async fn list_mods(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
) -> ApiResult<Json<Vec<Mod>>> {
    let (slug, profile) = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager
            .find_profile(id)
            .map(|(game, profile)| (game.slug.clone(), profile.clone()))
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?
    };

    let listings = state.store.index_or_empty(&slug).await;
    Ok(Json(state::compose_mods(&profile, &listings)))
}

pub async fn toggle_mod(
    State(state): State<Arc<AppState>>,
    Path((id, uuid)): Path<(u64, String)>,
    Json(body): Json<ToggleModBody>,
) -> ApiResult<Json<Mod>> {
    let (slug, item) = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        let profile = manager
            .profile_mut(id)
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;

        let snapshot = profile
            .find(&uuid)
            .cloned()
            .ok_or_else(|| ApiError::not_found(format!("mod {uuid}")))?;

        state::set_mod_files_enabled(profile, &snapshot, body.enabled).map_err(ApiError::internal)?;

        if let Some(item) = profile.find_mut(&uuid) {
            item.enabled = body.enabled;
        }
        let slug = profile.game_slug.clone();
        manager.save().map_err(ApiError::internal)?;
        (slug, uuid.clone())
    };

    state.log(
        "info",
        "profile",
        format!("{} mod {item}", if body.enabled { "enabled" } else { "disabled" }),
    );
    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug.clone() });
    mod_response(&state, &slug, id, &item).await
}

pub async fn remove_mod(
    State(state): State<Arc<AppState>>,
    Path((id, uuid)): Path<(u64, String)>,
    Query(query): Query<ForceQuery>,
) -> ApiResult<StatusCode> {
    let slug = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        let profile = manager
            .profile_mut(id)
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;

        let item = profile
            .find(&uuid)
            .cloned()
            .ok_or_else(|| ApiError::not_found(format!("mod {uuid}")))?;

        if !query.force.unwrap_or(false) && !item.enabled {
            tracing::debug!("removing a disabled mod");
        }

        state::remove_mod_files(profile, &item).map_err(ApiError::internal)?;
        profile.mods.retain(|candidate| candidate.uuid != uuid);
        let slug = profile.game_slug.clone();
        manager.save().map_err(ApiError::internal)?;
        slug
    };

    state.log("info", "profile", format!("removed mod {uuid}"));
    state.events.emit(GaleEvent::ModsChanged { profile_id: id });
    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug });
    Ok(StatusCode::NO_CONTENT)
}

pub async fn change_version(
    State(state): State<Arc<AppState>>,
    Path((id, uuid)): Path<(u64, String)>,
    Json(body): Json<VersionBody>,
) -> ApiResult<(StatusCode, Json<InstallTask>)> {
    {
        // Validate first: the mod has to exist and come from Thunderstore.
        let manager = state.manager.lock().expect("manager poisoned");
        let profile = manager
            .profile(id)
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;
        let item = profile
            .find(&uuid)
            .ok_or_else(|| ApiError::not_found(format!("mod {uuid}")))?;
        if item.is_local() {
            return Err(ApiError::bad_request("local mods cannot change version"));
        }
    }

    let task = install::start(
        state.clone(),
        InstallRequest {
            profile_id: id,
            version_ids: vec![body.version_id],
            mode: Mode::Update,
        },
    )
    .await
    .map_err(ApiError::bad_request)?;

    Ok((StatusCode::ACCEPTED, Json(task)))
}

pub async fn ignore_update(
    State(state): State<Arc<AppState>>,
    Path((id, uuid)): Path<(u64, String)>,
    Json(body): Json<IgnoreUpdateBody>,
) -> ApiResult<Json<Mod>> {
    let slug = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        let profile = manager
            .profile_mut(id)
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;
        let item = profile
            .find(&uuid)
            .ok_or_else(|| ApiError::not_found(format!("mod {uuid}")))?;
        let full_name = match &item.kind {
            ProfileModKind::Thunderstore { full_name, .. } => full_name.clone(),
            ProfileModKind::Local { name, .. } => name.clone(),
        };
        if body.ignore {
            if !profile.ignored_updates.contains(&full_name) {
                profile.ignored_updates.push(full_name);
            }
        } else {
            profile.ignored_updates.retain(|name| name != &full_name);
        }
        let slug = profile.game_slug.clone();
        manager.save().map_err(ApiError::internal)?;
        slug
    };

    mod_response(&state, &slug, id, &uuid).await
}

async fn mod_response(state: &Arc<AppState>, slug: &str, profile_id: u64, uuid: &str) -> ApiResult<Json<Mod>> {
    let profile = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager
            .profile(profile_id)
            .cloned()
            .ok_or_else(|| ApiError::not_found(format!("profile {profile_id}")))?
    };
    let listings = state.store.index_or_empty(slug).await;
    let mods = state::compose_mods(&profile, &listings);
    mods.into_iter()
        .find(|item| item.uuid == uuid)
        .map(Json)
        .ok_or_else(|| ApiError::not_found(format!("mod {uuid}")))
}

/* -------------------------------------------------------------------------- */
/* Install / update                                                           */
/* -------------------------------------------------------------------------- */

pub async fn install_packages(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
    Json(body): Json<InstallBody>,
) -> ApiResult<(StatusCode, Json<InstallTask>)> {
    if body.version_ids.is_empty() {
        return Err(ApiError::bad_request("versionIds must not be empty"));
    }
    let task = install::start(
        state.clone(),
        InstallRequest {
            profile_id: id,
            version_ids: body.version_ids,
            mode: Mode::Install,
        },
    )
    .await
    .map_err(ApiError::bad_request)?;

    Ok((StatusCode::ACCEPTED, Json(task)))
}

pub async fn update_packages(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
    Json(body): Json<UpdateBody>,
) -> ApiResult<(StatusCode, Json<InstallTask>)> {
    let (slug, profile) = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager
            .find_profile(id)
            .map(|(game, profile)| (game.slug.clone(), profile.clone()))
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?
    };

    let listings = state.store.index_or_empty(&slug).await;
    let mods = state::compose_mods(&profile, &listings);
    let wanted: HashSet<String> = body.uuids.clone().unwrap_or_default().into_iter().collect();

    let version_ids: Vec<String> = mods
        .iter()
        .filter(|item| item.update.is_some() && !item.ignored_update)
        .filter(|item| wanted.is_empty() || wanted.contains(&item.uuid))
        .filter_map(|item| item.update.as_ref().map(|update| update.version_id.clone()))
        .collect();

    if version_ids.is_empty() {
        return Err(ApiError::conflict("nothing to update"));
    }

    let task = install::start(
        state.clone(),
        InstallRequest {
            profile_id: id,
            version_ids,
            mode: Mode::Update,
        },
    )
    .await
    .map_err(ApiError::bad_request)?;

    Ok((StatusCode::ACCEPTED, Json(task)))
}

pub async fn list_installs(
    State(state): State<Arc<AppState>>,
    Query(query): Query<InstallsQuery>,
) -> Json<Vec<InstallTask>> {
    let mut tasks = state.tasks();
    if let Some(slug) = query.game_slug {
        tasks.retain(|task| task.game_slug == slug);
    }
    tasks.truncate(30);
    Json(tasks)
}

pub async fn cancel_install(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> ApiResult<StatusCode> {
    let mut task = state
        .task(&id)
        .ok_or_else(|| ApiError::not_found(format!("task {id}")))?;
    task.status = "cancelled".to_string();
    task.finished_at = Some(Utc::now());
    state.push_task(task.clone());
    state.events.emit(GaleEvent::InstallSettled { task });
    Ok(StatusCode::NO_CONTENT)
}

/* -------------------------------------------------------------------------- */
/* Config                                                                     */
/* -------------------------------------------------------------------------- */

pub async fn list_config(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
) -> ApiResult<Json<Vec<ConfigFile>>> {
    let profile_dir = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager
            .profile(id)
            .map(|profile| profile.path.clone())
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?
    };

    Ok(Json(config::with_modified_flags(config::list(&profile_dir))))
}

pub async fn set_config(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
    Json(body): Json<ConfigBody>,
) -> ApiResult<Json<ConfigFile>> {
    let profile_dir = profile_dir(&state, id)?;
    let file = config::set_value(&profile_dir, &body.file, &body.section, &body.key, &body.value)
        .map_err(ApiError::bad_request)?;
    state.log(
        "info",
        "config",
        format!("{}.{}.{} updated", body.file, body.section, body.key),
    );
    Ok(Json(config::with_modified_flags(vec![file]).remove(0)))
}

pub async fn reset_config(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
    Json(body): Json<ConfigResetBody>,
) -> ApiResult<Json<ConfigFile>> {
    let profile_dir = profile_dir(&state, id)?;
    let file = config::reset_value(&profile_dir, &body.file, &body.section, &body.key)
        .map_err(ApiError::bad_request)?;
    Ok(Json(config::with_modified_flags(vec![file]).remove(0)))
}

fn profile_dir(state: &Arc<AppState>, id: u64) -> ApiResult<std::path::PathBuf> {
    let manager = state.manager.lock().expect("manager poisoned");
    manager
        .profile(id)
        .map(|profile| profile.path.clone())
        .ok_or_else(|| ApiError::not_found(format!("profile {id}")))
}

/* -------------------------------------------------------------------------- */
/* Launch                                                                     */
/* -------------------------------------------------------------------------- */

pub async fn launch(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
    Json(body): Json<LaunchBody>,
) -> ApiResult<Json<serde_json::Value>> {
    let (slug, profile_name, custom_args) = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        // Copy everything we need out of the borrow before activating, because
        // `activate_profile` needs the manager mutably.
        let (slug, profile_name, custom_args) = manager
            .find_profile(id)
            .map(|(game, profile)| {
                (
                    game.slug.clone(),
                    profile.name.clone(),
                    profile.custom_args.clone(),
                )
            })
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?;
        manager.activate_profile(id).map_err(ApiError::internal)?;
        (slug, profile_name, custom_args)
    };

    let game = games::by_slug(&slug).ok_or_else(|| ApiError::not_found(format!("game {slug}")))?;
    let app_id = games::steam_app_id(&slug);

    let mut command = String::from("steam");
    if let Some(app_id) = app_id {
        command.push_str(&format!(" -applaunch {app_id}"));
    } else {
        command = format!("xdg-open steam://rungameid/{slug}");
    }
    if !body.vanilla && !custom_args.trim().is_empty() {
        command.push(' ');
        command.push_str(custom_args.trim());
    }

    tracing::info!(%command, "launching {}", game.name);

    // Best effort: the Steam client picks the request up through its own socket.
    let spawn_result = {
        let parts: Vec<&str> = command.split_whitespace().collect();
        match parts.split_first() {
            Some((program, args)) => std::process::Command::new(program).args(args).spawn(),
            None => Err(std::io::Error::new(std::io::ErrorKind::InvalidInput, "empty command")),
        }
    };

    if let Err(err) = spawn_result {
        state.log(
            "warn",
            "launch",
            format!("could not start Steam directly ({err}); run the command manually"),
        );
    } else {
        state.log(
            "info",
            "launch",
            format!("launched {} with profile “{profile_name}”", game.name),
        );
    }

    Ok(Json(json!({
        "ok": true,
        "command": command,
    })))
}

/* -------------------------------------------------------------------------- */
/* Import / export                                                            */
/* -------------------------------------------------------------------------- */

#[derive(serde::Serialize, serde::Deserialize)]
struct ExportPayload {
    name: String,
    #[serde(rename = "gameSlug")]
    game_slug: String,
    mods: Vec<String>,
}

pub async fn export_profile(
    State(state): State<Arc<AppState>>,
    Path(id): Path<u64>,
) -> ApiResult<Json<ExportResult>> {
    let profile = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager
            .profile(id)
            .cloned()
            .ok_or_else(|| ApiError::not_found(format!("profile {id}")))?
    };

    let mods: Vec<String> = profile
        .mods
        .iter()
        .filter_map(|item| match &item.kind {
            ProfileModKind::Thunderstore { full_name, version } => Some(format!("{full_name}-{version}")),
            ProfileModKind::Local { .. } => None,
        })
        .collect();

    let payload = ExportPayload {
        name: profile.name.clone(),
        game_slug: profile.game_slug.clone(),
        mods: mods.clone(),
    };
    let code = B64.encode(serde_json::to_vec(&payload).map_err(ApiError::internal)?);

    Ok(Json(ExportResult {
        code,
        file_count: mods.len(),
    }))
}

pub async fn import_profile(
    State(state): State<Arc<AppState>>,
    Json(body): Json<ImportBody>,
) -> ApiResult<(StatusCode, Json<ImportResult>)> {
    let raw = B64
        .decode(body.code.trim().as_bytes())
        .map_err(|_| ApiError::bad_request("that does not look like a profile code"))?;
    let payload: ExportPayload = serde_json::from_slice(&raw)
        .map_err(|_| ApiError::bad_request("profile code is missing a mod list"))?;

    let slug = body
        .game_slug
        .clone()
        .unwrap_or_else(|| payload.game_slug.clone());
    if games::by_slug(&slug).is_none() {
        return Err(ApiError::not_found(format!("game {slug}")));
    }

    let name = format!("{} (imported)", payload.name);
    let profile_id = {
        let mut manager = state.manager.lock().expect("manager poisoned");
        if manager.game(&slug).is_none() {
            let path = games::by_slug(&slug)
                .and_then(games::detect_install)
                .unwrap_or_else(|| state.data_dir().join("games").join(&slug));
            manager
                .register_game(&slug, path)
                .map_err(ApiError::internal)?;
        }
        manager
            .create_profile(&slug, &name, None)
            .map_err(ApiError::internal)?
    };

    let total = payload.mods.len();
    let task = install::start(
        state.clone(),
        InstallRequest {
            profile_id,
            version_ids: payload.mods,
            mode: Mode::Install,
        },
    )
    .await;

    let profile = {
        let manager = state.manager.lock().expect("manager poisoned");
        let game = manager
            .game(&slug)
            .ok_or_else(|| ApiError::not_found(slug.clone()))?;
        let profile = game
            .profiles
            .iter()
            .find(|profile| profile.id == profile_id)
            .ok_or_else(|| ApiError::not_found("profile"))?;
        state::profile_dto(game, profile, &[])
    };

    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug });

    Ok((
        StatusCode::CREATED,
        Json(ImportResult {
            profile,
            installed: if task.is_ok() { total } else { 0 },
            skipped: 0,
        }),
    ))
}

/* -------------------------------------------------------------------------- */
/* Thunderstore proxy                                                         */
/* -------------------------------------------------------------------------- */

pub async fn browse(
    State(state): State<Arc<AppState>>,
    Path(slug): Path<String>,
    Query(query): Query<BrowseQuery>,
) -> ApiResult<Json<BrowseResult>> {
    let listings = state.store.index(&slug).await.map_err(ApiError::internal)?;
    let installed = installed_names(&state, &slug);

    let search = query
        .search
        .as_deref()
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .map(|value| value.to_lowercase());
    let include_deprecated = query.deprecated.as_deref() == Some("1");

    let mut filtered: Vec<&Listing> = listings
        .iter()
        .filter(|listing| include_deprecated || !listing.is_deprecated)
        .filter(|listing| match &query.category {
            Some(category) if !category.is_empty() => {
                listing.categories.iter().any(|item| item == category)
            }
            _ => true,
        })
        .filter(|listing| match &search {
            Some(needle) => {
                listing.full_name.to_lowercase().contains(needle)
                    || listing
                        .versions
                        .first()
                        .map(|version| version.description.to_lowercase().contains(needle))
                        .unwrap_or(false)
            }
            None => true,
        })
        .collect();

    match query.sort.as_deref().unwrap_or("rating") {
        "downloads" => filtered.sort_by(|a, b| b.total_downloads().cmp(&a.total_downloads())),
        "updated" => filtered.sort_by(|a, b| b.date_updated.cmp(&a.date_updated)),
        "newest" => filtered.sort_by(|a, b| b.date_created.cmp(&a.date_created)),
        "name" => filtered.sort_by(|a, b| a.full_name.to_lowercase().cmp(&b.full_name.to_lowercase())),
        _ => filtered.sort_by(|a, b| b.rating_score.cmp(&a.rating_score)),
    }

    let page = query.page.unwrap_or(1).max(1);
    let page_size = query.page_size.unwrap_or(30).clamp(6, 60);
    let total = filtered.len();
    let start = (page - 1) * page_size;

    let packages = filtered
        .into_iter()
        .skip(start)
        .take(page_size)
        .map(|listing| {
            let latest = listing.latest();
            let installed_version = installed.get(&listing.full_name).cloned();
            PackageCard {
                full_name: listing.full_name.clone(),
                name: listing.name(),
                owner: listing.owner().to_string(),
                description: latest.map(|version| version.description.clone()).unwrap_or_default(),
                icon_url: None,
                rating_score: listing.rating_score,
                total_downloads: listing.total_downloads(),
                date_updated: listing.date_updated.clone().unwrap_or_default(),
                version: latest.map(|version| version.version_number.clone()).unwrap_or_default(),
                version_id: latest.map(|version| version.full_name.clone()).unwrap_or_default(),
                categories: listing.categories.clone(),
                deprecated: listing.is_deprecated,
                pinned: false,
                modpack: listing.is_modpack(),
                installed: installed_version.is_some(),
                installed_version,
            }
        })
        .collect();

    Ok(Json(BrowseResult {
        total,
        page,
        page_size,
        packages,
    }))
}

pub async fn categories(
    State(state): State<Arc<AppState>>,
    Path(slug): Path<String>,
) -> ApiResult<Json<Vec<Category>>> {
    let listings = state.store.index(&slug).await.map_err(ApiError::internal)?;
    let mut counts: HashMap<String, usize> = HashMap::new();
    for listing in listings.iter() {
        for category in &listing.categories {
            *counts.entry(category.clone()).or_insert(0) += 1;
        }
    }
    let mut result: Vec<Category> = counts
        .into_iter()
        .map(|(name, count)| Category {
            slug: name.to_lowercase().replace(' ', "-"),
            name,
            count,
        })
        .collect();
    result.sort_by(|a, b| b.count.cmp(&a.count));
    Ok(Json(result))
}

pub async fn package_detail(
    State(state): State<Arc<AppState>>,
    Path((owner, name)): Path<(String, String)>,
) -> ApiResult<Json<PackageDetail>> {
    let full_name = format!("{owner}-{name}");

    // The community slug is not part of the URL, so look through the managed
    // games first and fall back to the popular communities.
    let mut slugs: Vec<String> = {
        let manager = state.manager.lock().expect("manager poisoned");
        manager.data.games.keys().cloned().collect()
    };
    slugs.extend(["lethal-company", "repo", "riskofrain2", "valheim"].map(str::to_string));

    let mut found: Option<(String, Listing)> = None;
    for slug in slugs {
        let listings = state.store.index_or_empty(&slug).await;
        if let Some(listing) = store::find(&listings, &full_name) {
            found = Some((slug, listing.clone()));
            break;
        }
    }

    let (slug, listing) = found.ok_or_else(|| ApiError::not_found(format!("package {full_name}")))?;
    let installed = installed_names(&state, &slug);

    let versions: Vec<PackageVersion> = listing
        .sorted_versions()
        .into_iter()
        .map(|version| PackageVersion {
            version: version.version_number.clone(),
            version_id: version.full_name.clone(),
            date_created: version.date_created.clone().unwrap_or_default(),
            downloads: version.downloads,
            file_size: version.file_size,
            dependencies: version.dependencies.clone(),
            changelog: String::new(),
        })
        .collect();

    let dependency_preview = latest_dependency_preview(&state, &slug, &listing, &installed).await;

    let markdown = state
        .store
        .readme(&owner, &name)
        .await
        .unwrap_or_else(|| {
            listing
                .versions
                .first()
                .map(|version| version.description.clone())
                .unwrap_or_default()
        });

    Ok(Json(PackageDetail {
        full_name: listing.full_name.clone(),
        name: listing.name(),
        owner: listing.owner().to_string(),
        description: listing
            .versions
            .first()
            .map(|version| version.description.clone())
            .unwrap_or_default(),
        markdown,
        icon_url: None,
        rating_score: listing.rating_score,
        total_downloads: listing.total_downloads(),
        categories: listing.categories.clone(),
        deprecated: listing.is_deprecated,
        modpack: listing.is_modpack(),
        website_url: listing
            .versions
            .first()
            .and_then(|version| version.website_url.clone()),
        donation_link: None,
        date_created: listing.date_created.clone().unwrap_or_default(),
        date_updated: listing.date_updated.clone().unwrap_or_default(),
        versions,
        dependency_preview,
    }))
}

async fn latest_dependency_preview(
    state: &Arc<AppState>,
    slug: &str,
    listing: &Listing,
    installed: &HashMap<String, String>,
) -> Vec<DependencyPreview> {
    let listings = state.store.index_or_empty(slug).await;
    let mut preview = Vec::new();

    let Some(latest) = listing.latest() else {
        return preview;
    };

    for dependency in &latest.dependencies {
        let full_name = store::full_name_of(dependency);
        let Some(entry) = store::find(&listings, &full_name) else {
            continue;
        };
        let version = entry.latest();
        preview.push(DependencyPreview {
            full_name: full_name.clone(),
            version_id: version
                .map(|version| version.full_name.clone())
                .unwrap_or_else(|| dependency.clone()),
            name: entry.name(),
            installed: installed.contains_key(&full_name),
        });

        if let Some(version) = version {
            for nested in &version.dependencies {
                let nested_full = store::full_name_of(nested);
                if preview.iter().any(|item| item.full_name == nested_full) {
                    continue;
                }
                let name = store::find(&listings, &nested_full)
                    .map(|entry| entry.name())
                    .unwrap_or_else(|| nested_full.clone());
                preview.push(DependencyPreview {
                    full_name: nested_full.clone(),
                    version_id: nested.clone(),
                    name,
                    installed: installed.contains_key(&nested_full),
                });
            }
        }
    }

    preview
}

fn installed_names(state: &Arc<AppState>, slug: &str) -> HashMap<String, String> {
    let manager = state.manager.lock().expect("manager poisoned");
    let Some(game) = manager.game(slug) else {
        return HashMap::new();
    };
    let Some(profile) = game
        .profiles
        .iter()
        .find(|profile| profile.id == game.active_profile_id)
    else {
        return HashMap::new();
    };

    profile
        .mods
        .iter()
        .filter_map(|item| match &item.kind {
            ProfileModKind::Thunderstore { full_name, version } => Some((full_name.clone(), version.clone())),
            ProfileModKind::Local { .. } => None,
        })
        .collect()
}

/* -------------------------------------------------------------------------- */
/* Logs & cache                                                               */
/* -------------------------------------------------------------------------- */

pub async fn logs(State(state): State<Arc<AppState>>, Query(query): Query<LogsQuery>) -> Json<Vec<LogEntry>> {
    let limit = query.limit.unwrap_or(200).min(500);
    let entries = state.logs.lock().expect("logs poisoned");
    let start = entries.len().saturating_sub(limit);
    Json(entries.iter().skip(start).cloned().collect::<Vec<LogEntry>>())
}

pub async fn clear_cache(State(state): State<Arc<AppState>>) -> ApiResult<Json<serde_json::Value>> {
    state.store.invalidate();
    state.log("info", "cache", "Thunderstore index cache cleared");
    Ok(Json(json!({ "freedBytes": 0 })))
}

/* -------------------------------------------------------------------------- */
/* Misc                                                                       */
/* -------------------------------------------------------------------------- */

pub async fn fallback() -> Response {
    ApiError::not_found("endpoint").into_response()
}
