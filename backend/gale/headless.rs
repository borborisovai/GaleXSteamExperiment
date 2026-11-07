// GaleX integration for Gale. GPL-3.0-only; see LICENSE.gale.md.
// This file is applied to the pinned upstream source by ../prepare.py.
// All profile/install/config operations delegate to Gale's existing commands.
use std::{
    collections::HashMap,
    future::Future,
    io::Cursor,
    net::SocketAddr,
    path::PathBuf,
    time::{Duration, Instant},
};

use axum::{
    extract::{DefaultBodyLimit, Query, State},
    http::{HeaderMap, StatusCode, header},
    response::{Html, IntoResponse, Redirect, Response},
    routing::{get, post},
    Json, Router,
};
use eyre::{Context as _, OptionExt, eyre};
use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use tauri::AppHandle;
use tokio::sync::{Mutex, OnceCell};
use uuid::Uuid;

use crate::{
    config::commands as config,
    game,
    prefs::commands as prefs,
    profile::{
        commands as profile, export, export::commands as export_cmd, import::commands as import,
        install::commands as install_commands,
        launch::commands as launch, update::commands as update,
    },
    state::ManagerExt,
    thunderstore::{Backend, FrontendMod, commands as store},
};

#[derive(Clone)]
enum JobState {
    Running,
    Done(Value),
    Failed(String),
}

struct Job {
    state: JobState,
    created: Instant,
}

struct Session {
    token: String,
    port: u16,
    host: String,
    origin: String,
    session_file: PathBuf,
    tickets: Mutex<HashMap<String, Ticket>>,
    // Never change Gale's active game/profile halfway through a command.
    command_lock: Mutex<()>,
    // Heavy commands run in the background so the single Millennium Lua VM is
    // never blocked long enough to hit the parent RPC timeout.
    jobs: Mutex<HashMap<String, Job>>,
}
static SESSION: OnceCell<Session> = OnceCell::const_new();

#[derive(Deserialize)]
struct Envelope {
    method: String,
    #[serde(default)]
    args: Value,
}

fn decode<T: serde::de::DeserializeOwned>(value: Value) -> eyre::Result<T> {
    Ok(serde_json::from_value(value)?)
}

fn string_arg(args: &Value, key: &str) -> eyre::Result<String> {
    Ok(args
        .get(key)
        .and_then(Value::as_str)
        .ok_or_eyre("missing string argument")?
        .to_owned())
}

fn serialize<T: Serialize>(value: T) -> eyre::Result<Value> {
    Ok(serde_json::to_value(value)?)
}

/// Gale's command functions use a private `CommandError` wrapper. Convert it
/// into an `eyre::Report` before serializing the successful value.
fn command_value<T: Serialize>(result: crate::util::cmd::Result<T>) -> eyre::Result<Value> {
    match result {
        Ok(value) => serialize(value),
        Err(error) => Err(eyre!("{error:?}")),
    }
}

fn clean(value: impl std::fmt::Display) -> String {
    // Do not send internal error chains / local paths to a web page.
    value.to_string()
}

async fn select(app: &AppHandle, slug: &str, profile_id: Option<i64>) -> eyre::Result<()> {
    game::from_slug(slug).ok_or_eyre("unknown Thunderstore game")?;
    let (current_slug, current_profile) = {
        let manager = app.lock_manager();
        (
            manager.active_game.slug.to_string(),
            manager.active_profile().id,
        )
    };
    // Re-selecting the same game/profile must not restart Gale's Thunderstore
    // fetch loop or sync socket subscriptions on every RPC.
    let game_changed = current_slug != slug;
    if game_changed {
        profile::set_active_game(slug, app.clone()).map_err(|e| eyre!("{e:?}"))?;
    }
    if let Some(id) = profile_id {
        if game_changed || current_profile != id {
            let index = {
                let manager = app.lock_manager();
                manager
                    .active_game()
                    .profiles
                    .iter()
                    .position(|p| p.id == id)
                    .ok_or_eyre("profile does not belong to this game")?
            };
            profile::set_active_profile(index, app.clone())
                .await
                .map_err(|e| eyre!("{e:?}"))?;
        }
    }
    Ok(())
}

async fn dispatch(
    app: &AppHandle,
    method: &str,
    a: Value,
    operation: &mut Option<crate::progress::OperationGuard>,
) -> eyre::Result<Value> {
    if !matches!(method, "snapshot" | "progress" | "cancel_installs" | "prefs" | "set_prefs" | "clear_download_cache" | "job_result") {
        select(
            app,
            &string_arg(&a, "slug")?,
            a.get("profileId").and_then(Value::as_i64),
        )
        .await?;
    }
    let value = match method {
        "snapshot" => {
            let games: Vec<_> = game::list()
                .map(|g| {
                    json!({
                        "slug": g.slug,
                        "name": g.name,
                        "modLoader": g.mod_loader.as_str(),
                        "steamAppId": g.platforms.steam.as_ref().map(|s| s.id),
                        "backends": g.backends,
                    })
                })
                .collect();
            let active_slug = app.lock_manager().active_game.slug.clone();
            json!({
                "ok": true, "bridgeVersion": 2, "core": "Gale", "coreVersion": env!("CARGO_PKG_VERSION"),
                "games": games, "activeSlug": active_slug, "dataDir": app.lock_prefs().data_dir.get(),
                "installing": app.install_queue().lock().is_processing(),
            })
        }
        "progress" => crate::progress::snapshot(),
        "job_result" => {
            let id = string_arg(&a, "jobId")?;
            let mut jobs = SESSION.get().unwrap().jobs.lock().await;
            let Some(job) = jobs.remove(&id) else {
                return Err(eyre!("unknown or expired GaleX job"));
            };
            match job.state.clone() {
                JobState::Running => {
                    jobs.insert(id, job);
                    json!({ "status": "running" })
                }
                JobState::Done(data) => json!({ "status": "done", "data": data }),
                JobState::Failed(error) => json!({ "status": "error", "error": error }),
            }
        }
        "profiles" => serialize(profile::get_profile_info(app.clone()))?,
        "mods" => command_value(profile::query_profile(
            decode(a.get("args").cloned().unwrap_or_else(|| json!({})))?,
            app.clone(),
        ))?,
        "prefs" => serialize(prefs::get_prefs(app.clone()))?,
        "set_prefs" => command_value(prefs::set_prefs(
            decode(a.get("value").cloned().unwrap_or_default())?,
            app.clone(),
        ))?,
        "create_profile" => command_value(profile::create_profile(
            string_arg(&a, "name")?,
            None,
            app.clone(),
        ))?,
        "rename_profile" => command_value(profile::rename_profile(string_arg(&a, "name")?, app.clone()))?,
        "duplicate_profile" => {
            command_value(profile::duplicate_profile(string_arg(&a, "name")?, app.clone()))?
        }
        "delete_profile" => command_value(profile::delete_profile(
            a["id"].as_i64().ok_or_eyre("invalid profile id")?,
            app.clone(),
        ))?,
        // `select` has already activated the requested profile id.
        "activate_profile" => serialize(profile::get_profile_info(app.clone()))?,
        "toggle_mod" => command_value(profile::toggle_mod(decode(a["uuid"].clone())?, app.clone()))?,
        "force_toggle_mods" => command_value(profile::force_toggle_mods(
            decode(a["uuids"].clone())?,
            app.clone(),
        ))?,
        "remove_mod" => command_value(profile::remove_mod(decode(a["uuid"].clone())?, app.clone()))?,
        "force_remove_mods" => command_value(profile::force_remove_mods(
            decode(a["uuids"].clone())?,
            app.clone(),
        ))?,
        "set_all_mods_state" => command_value(profile::set_all_mods_state(
            a["enable"].as_bool().ok_or_eyre("invalid state")?,
            app.clone(),
        ))?,
        // Context-menu parity with desktop Gale. Both commands operate on the
        // active profile selected above; neither accepts a filesystem path.
        "get_dependants" => command_value(profile::get_dependants(decode(a["uuid"].clone())?, app.clone()))?,
        "open_mod_dir" => command_value(profile::open_mod_dir(decode(a["uuid"].clone())?, app.clone()))?,
        // Return the real path so Steam can open it through its own shell API;
        // `open::that_detached` inside the headless child is not reliable.
        "mod_dir" => {
            let uuid: Uuid = decode(a["uuid"].clone())?;
            let path = app.lock_manager().active_profile().mod_dir_path(uuid).map_err(|e| eyre!("{e:?}"))?;
            json!(path.to_string_lossy())
        }
        "install_mod" => {
            let id = decode(a["id"].clone())?;
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(install_commands::install_mod(id, handle).await) }).await?
        }
        "cancel_installs" => command_value(install_commands::cancel_all_installs(app.clone()))?,
        "update_mods" => {
            let uuids = decode(a["uuids"].clone())?;
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(update::update_mods(uuids, true, handle).await) }).await?
        }
        "ignore_package_updates" => command_value(update::ignore_package_updates(
            decode(a["uuid"].clone())?,
            app.clone(),
        ))?,
        "change_mod_version" => {
            let id = decode(a["id"].clone())?;
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(update::change_mod_version(id, handle).await) }).await?
        }
        "export_code" => {
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(export_cmd::export_code(handle).await) }).await?
        }
        "list_export_files" => command_value(export_cmd::list_export_files(app.clone()))?,
        "set_excluded_export_files" => command_value(export_cmd::set_excluded_export_files(app.clone(), decode(a["excludedFiles"].clone())?))?,
        "copy_dependency_strings" => command_value(export_cmd::copy_dependency_strings(app.clone()))?,
        "copy_debug_info" => command_value(export_cmd::copy_debug_info(app.clone()))?,
        "read_profile_code" => {
            let key = a.get("key").or_else(|| a.get("code")).and_then(Value::as_str)
                .ok_or_eyre("missing profile code")?.to_owned();
            store::trigger_mod_fetch(app.clone()).ok();
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(import::read_profile_code(&key, handle).await) }).await?
        }
        "read_profile_base64" => {
            let encoded = string_arg(&a, "base64")?;
            if encoded.len() > 20 * 1024 * 1024 {
                return Err(eyre!("profile archive exceeds 15 MiB"));
            }
            store::trigger_mod_fetch(app.clone()).ok();
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(import::read_profile_base64(encoded, handle).await) }).await?
        }
        "import_profile" => {
            let options = decode(a.get("options").cloned().unwrap_or_else(|| json!({})))?;
            let data = decode(a["data"].clone())?;
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(import::import_profile(data, options, handle).await) }).await?
        }
        "read_profile_file" => {
            store::trigger_mod_fetch(app.clone()).ok();
            let path = decode(a["path"].clone())?;
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(import::read_profile_file(path, handle).await) }).await?
        }
        "import_local_mod" => {
            let path = decode(a["path"].clone())?;
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(import::import_local_mod(path, handle).await) }).await?
        }
        "import_local_mod_base64" => {
            let encoded = string_arg(&a, "base64")?;
            if encoded.len() > 20 * 1024 * 1024 { return Err(eyre!("local mod archive exceeds 15 MiB")); }
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(import::import_local_mod_base64(encoded, handle).await) }).await?
        }
        "get_r2modman_info" => {
            let path: Option<PathBuf> = match a.get("path") { Some(Value::String(s)) if !s.is_empty() => Some(PathBuf::from(s)), _ => None };
            command_value(import::get_r2modman_info(path, app.clone()))?
        }
        "import_r2modman" => {
            let path = decode(a["path"].clone())?;
            let include = decode(a["include"].clone())?;
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(import::import_r2modman(path, include, handle).await) }).await?
        }
        "config" => command_value(config::get_config_files(app.clone()))?,
        "set_config_entry" => {
            let file: PathBuf = decode(a["file"].clone())?;
            command_value(config::set_config_entry(
                &file,
                &string_arg(&a, "section")?,
                &string_arg(&a, "entry")?,
                decode(a["value"].clone())?,
                app.clone(),
            ))?
        }
        "reset_config_entry" => {
            let file: PathBuf = decode(a["file"].clone())?;
            command_value(config::reset_config_entry(
                &file,
                &string_arg(&a, "section")?,
                &string_arg(&a, "entry")?,
                app.clone(),
            ))?
        }
        "reset_config_file" => {
            let file: PathBuf = decode(a["file"].clone())?;
            command_value(config::reset_config_file(&file, app.clone()))?
        }
        "open_config_file" => {
            let file: PathBuf = decode(a["file"].clone())?;
            command_value(config::open_config_file(&file, app.clone()))?
        }
        "delete_config_file" => {
            let file: PathBuf = decode(a["file"].clone())?;
            command_value(config::delete_config_file(&file, app.clone()))?
        }
        // Steam, not GaleX, owns the Play button. Expose Gale's resolved
        // mod-loader/custom arguments so the frontend can persist them in
        // Steam launch options (including non-Steam shortcut overrides).
        "launch_plan" => {
            let args = launch::get_steam_launch_args(app.clone()).map_err(|e| eyre!("{e:?}"))?;
            let platform = if cfg!(target_os = "windows") { "windows" }
                else if cfg!(target_os = "linux") { "linux" }
                else { "macos" };
            json!({ "args": args, "platform": platform })
        }
        "launch" => command_value(
            launch::launch_game(app.clone(), a["vanilla"].as_bool().unwrap_or(false), None).await,
        )?,
        "fetch_mods" => command_value(store::trigger_mod_fetch(app.clone()))?,
        "clear_download_cache" => {
            let handle = app.clone();
            spawn_job(operation.take(), async move { command_value(install_commands::clear_download_cache(true, handle).await) }).await?
        }
        "resolve_link" => {
            let url = string_arg(&a, "url")?;
            let path = url
                .strip_prefix("ror2mm://v1/install/thunderstore.io/")
                .ok_or_eyre("unsupported install link")?
                .trim_end_matches('/');
            let parts: Vec<_> = path.split('/').collect();
            if parts.len() != 3
                || parts.iter().any(|p| {
                    p.is_empty()
                        || !p
                            .bytes()
                            .all(|b| b.is_ascii_alphanumeric() || b"-_.~%".contains(&b))
                })
            {
                return Err(eyre!("invalid package link"));
            }
            let parts: Vec<String> = parts
                .iter()
                .map(|p| {
                    percent_encoding::percent_decode_str(p)
                        .decode_utf8_lossy()
                        .into_owned()
                })
                .collect();
            store::trigger_mod_fetch(app.clone()).ok();
            let handle = app.clone();
            spawn_job(operation.take(), async move {
                crate::thunderstore::wait_for_fetch(&handle).await;
                let ts = handle.lock_thunderstore();
                let found = ts.find_mod(&parts[0], &parts[1], &parts[2], Backend::Thunderstore)?;
                serialize(FrontendMod::from(found))
            }).await?
        }
        _ => return Err(eyre!("command is not exposed by GaleX")),
    };
    Ok(value)
}

fn bearer(headers: &HeaderMap) -> bool {
    let session = SESSION.get().expect("session initialized");
    headers.get(header::AUTHORIZATION).and_then(|v| v.to_str().ok())
        == Some(format!("Bearer {}", session.token).as_str())
}

fn header_str<'a>(headers: &'a HeaderMap, name: &str) -> Option<&'a str> {
    headers.get(name).and_then(|v| v.to_str().ok())
}

/// The browser document is only served on Steam's loopback hostname. Direct
/// 127.0.0.1/localhost requests and forwarded/proxied requests are rejected, so
/// the config UI cannot be reached through a normal browser or a proxy exit.
fn browser_guard(headers: &HeaderMap) -> Result<(), Response> {
    let session = SESSION.get().expect("session initialized");
    let proxied = ["via", "forwarded", "x-forwarded-host", "x-forwarded-for", "x-real-ip"]
        .iter()
        .any(|name| headers.contains_key(*name));
    let host_ok = header_str(headers, "host").is_some_and(|host| host.eq_ignore_ascii_case(&session.host));
    if proxied || !host_ok {
        return Err(StatusCode::FORBIDDEN.into_response());
    }
    Ok(())
}

/// Lua is the only HTTP client allowed to use the bearer-token RPC endpoints.
/// A browser cannot set this header on a simple cross-origin request, and the
/// bridge deliberately sends no CORS headers.
fn lua_client(headers: &HeaderMap) -> bool {
    header_str(headers, "x-galex-client") == Some("millennium-lua")
}

async fn rpc(State(app): State<AppHandle>, headers: HeaderMap, Json(envelope): Json<Envelope>) -> Response {
    if !bearer(&headers) {
        return (StatusCode::UNAUTHORIZED, Json(json!({"error": "unauthorized"}))).into_response();
    }
    if !lua_client(&headers) {
        return StatusCode::FORBIDDEN.into_response();
    }
    let session = SESSION.get().unwrap();
    // Health/progress polls and job polling must remain responsive while a
    // background install holds the command lock.
    let _guard = if lock_exempt(&envelope.method) {
        None
    } else {
        Some(session.command_lock.lock().await)
    };
    let mut operation = progress_operation(&app, &envelope);
    let result = dispatch(&app, &envelope.method, envelope.args, &mut operation).await;
    if let Some(operation) = operation {
        operation.complete(result.is_ok());
    }
    match result {
        Ok(data) => Json(json!({"data": data})).into_response(),
        Err(error) => (StatusCode::BAD_REQUEST, Json(json!({"error": clean(error)}))).into_response(),
    }
}

/// Long-running commands get a virtual Steam download card. The guard is
/// created before dispatch so the UI can show activity while Gale is fetching
/// catalogs, reading archives or waiting on the install queue.
fn progress_operation(app: &AppHandle, envelope: &Envelope) -> Option<crate::progress::OperationGuard> {
    // Lua forwards the inner Gale command as the RPC envelope method.
    let method = envelope.method.as_str();
    let kind = match method {
        "install_mod" => "install",
        "update_mods" | "change_mod_version" => "update",
        "import_profile" | "import_r2modman" => "import",
        "import_local_mod" | "import_local_mod_base64" => "local-import",
        "read_profile_code" | "read_profile_base64" | "read_profile_file" => "read-profile",
        "export_code" => "export",
        _ => return None,
    };
    let args = &envelope.args;
    let active_slug = app.lock_manager().active_game.slug.clone();
    let slug = args.get("slug").and_then(Value::as_str).unwrap_or(&active_slug);
    let profile_id = args.get("profileId").and_then(Value::as_i64);
    Some(crate::progress::start_operation(app, kind, slug, profile_id))
}

/// Read-only polls and job status must not queue behind a background install.
fn lock_exempt(method: &str) -> bool {
    matches!(
        method,
        "snapshot" | "progress" | "cancel_installs" | "job_result" | "prefs"
            | "mods" | "profiles" | "get_dependants" | "config" | "list_export_files"
            | "get_r2modman_info" | "launch_plan"
    )
}

async fn spawn_job(
    operation: Option<crate::progress::OperationGuard>,
    future: impl Future<Output = eyre::Result<Value>> + Send + 'static,
) -> eyre::Result<Value> {
    let session = SESSION.get().unwrap();
    let id = Uuid::new_v4().to_string();
    {
        let mut jobs = session.jobs.lock().await;
        jobs.retain(|_, job| matches!(&job.state, JobState::Running) || job.created.elapsed() < Duration::from_secs(3600));
        jobs.insert(id.clone(), Job { state: JobState::Running, created: Instant::now() });
    }
    let job_id = id.clone();
    let _ = tokio::spawn(async move {
        let session = SESSION.get().unwrap();
        // Preserve the original command serialization for the whole operation,
        // not just for the short HTTP dispatch that started it.
        let _command_guard = session.command_lock.lock().await;
        let result = future.await;
        let success = result.is_ok();
        let state = match result {
            Ok(data) => JobState::Done(data),
            Err(error) => JobState::Failed(clean(error)),
        };
        session.jobs.lock().await.insert(job_id, Job { state, created: Instant::now() });
        if let Some(operation) = operation {
            operation.complete(success);
        }
    });
    Ok(json!({ "jobId": id }))
}

#[derive(Deserialize)]
struct BrowserContext {
    slug: String,
    #[serde(rename = "profileId")]
    profile_id: i64,
}
#[derive(Deserialize)]
struct OpenTicket {
    ticket: String,
}
struct Ticket {
    slug: String,
    profile_id: i64,
    kind: String,
    lang: String,
    file: Option<String>,
    expires: Instant,
}
#[derive(Deserialize)]
struct BrowserCommand {
    method: String,
    #[serde(default)]
    args: Value,
}

fn authorized(headers: &HeaderMap) -> bool {
    let token = &SESSION.get().expect("session initialized").token;
    headers
        .get(header::COOKIE)
        .and_then(|v| v.to_str().ok())
        .is_some_and(|cookies| {
            cookies
                .split(';')
                .any(|c| c.trim() == format!("galex_session={token}"))
        })
}

async fn open_ticket(headers: HeaderMap, Query(q): Query<OpenTicket>) -> Response {
    if let Err(response) = browser_guard(&headers) {
        return response;
    }
    let session = SESSION.get().unwrap();
    // Ticket is single use, binds the browser cookie to one game/profile.
    let context = session.tickets.lock().await.remove(&q.ticket);
    let Some(ticket) = context else {
        return (StatusCode::FORBIDDEN, "Invalid or expired browser ticket").into_response();
    };
    if Instant::now() > ticket.expires {
        return (StatusCode::FORBIDDEN, "Browser ticket expired").into_response();
    }
    let cookie = format!("galex_session={}; HttpOnly; SameSite=Strict; Path=/", session.token);
    let target = if ticket.kind == "export" {
        format!("/export?slug={}&profileId={}", ticket.slug, ticket.profile_id)
    } else {
        let mut target = format!("/config?slug={}&profileId={}&lang={}", ticket.slug, ticket.profile_id, ticket.lang);
        if let Some(file) = ticket.file {
            target.push_str("&file=");
            target.push_str(&percent_encoding::utf8_percent_encode(&file, percent_encoding::NON_ALPHANUMERIC).collect::<String>());
        }
        target
    };
    ([(header::SET_COOKIE, cookie)], Redirect::to(&target)).into_response()
}

async fn browser_url(State(app): State<AppHandle>, headers: HeaderMap, Json(a): Json<Value>) -> Response {
    if !bearer(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
    }
    if !lua_client(&headers) {
        return StatusCode::FORBIDDEN.into_response();
    }
    let session = SESSION.get().unwrap();
    let _guard = session.command_lock.lock().await;
    let slug = match string_arg(&a, "slug") {
        Ok(s) => s,
        Err(_) => return StatusCode::BAD_REQUEST.into_response(),
    };
    let id = a["profileId"].as_i64();
    if select(&app, &slug, id).await.is_err() {
        return StatusCode::BAD_REQUEST.into_response();
    }
    let id = app.lock_manager().active_profile().id;
    let ticket = Uuid::new_v4().to_string();
    let kind = a.get("kind").and_then(Value::as_str).unwrap_or("config").to_owned();
    if !matches!(kind.as_str(), "config" | "export") {
        return StatusCode::BAD_REQUEST.into_response();
    }
    let lang = a.get("lang").and_then(Value::as_str).unwrap_or("english")
        .chars().filter(|c| c.is_ascii_alphanumeric() || *c == '-' || *c == '_').take(32).collect::<String>();
    // "Edit config" on a mod row deep-links to that mod's own file. The value
    // is a Gale-relative config path, never an absolute or parent-traversal path.
    let file = match a.get("file").and_then(Value::as_str) {
        None | Some("") => None,
        Some(raw) => {
            let invalid = kind != "config" || raw.chars().any(|c| c == '\0' || c == ':') || raw.starts_with('/') || raw.starts_with('\\') || raw.split(|c| c == '/' || c == '\\').any(|part| part.is_empty() || part == "." || part == "..");
            if invalid { return StatusCode::BAD_REQUEST.into_response(); }
            Some(raw.to_owned())
        }
    };
    let mut tickets = session.tickets.lock().await;
    tickets.retain(|_, ticket| ticket.expires > Instant::now());
    if tickets.len() >= 32 {
        return StatusCode::TOO_MANY_REQUESTS.into_response();
    }
    tickets.insert(ticket.clone(), Ticket { slug, profile_id: id, kind, lang, file, expires: Instant::now() + Duration::from_secs(60) });
    Json(json!({"url": format!("http://steamloopback.host:{}/open?ticket={ticket}", session.port)})).into_response()
}

/// Wait until both the active batch and all pending batches are gone. Checking
/// only `is_processing` would miss queued batches; waiting unconditionally on
/// `wait_for_empty` would hang when the queue has never been used.
async fn wait_for_installs(app: &AppHandle) {
    loop {
        let profile_ids: Vec<i64> = app
            .lock_manager()
            .games
            .values()
            .flat_map(|game| game.profiles.iter().map(|profile| profile.id))
            .collect();
        let pending = {
            let queue = app.install_queue().lock();
            queue.is_processing() || profile_ids.iter().any(|id| queue.has_any_for_profile(*id))
        };
        if !pending {
            return;
        }
        let _ = tokio::time::timeout(Duration::from_millis(200), app.install_queue().wait_for_empty()).await;
    }
}

async fn shutdown(State(app): State<AppHandle>, headers: HeaderMap) -> Response {
    if !bearer(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
    }
    if !lua_client(&headers) {
        return StatusCode::FORBIDDEN.into_response();
    }
    let handle = app.clone();
    let session_file = SESSION.get().unwrap().session_file.clone();
    tauri::async_runtime::spawn(async move {
        wait_for_installs(&handle).await;
        std::fs::remove_file(&session_file).ok();
        handle.exit(0);
    });
    Json(json!({"ok": true})).into_response()
}

const CONFIG_CSP: &str = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'";

async fn config_page(headers: HeaderMap) -> Response {
    if let Err(response) = browser_guard(&headers) {
        return response;
    }
    if !authorized(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
    }
    ([(header::CONTENT_SECURITY_POLICY, CONFIG_CSP), (header::CACHE_CONTROL, "no-store"), (header::X_CONTENT_TYPE_OPTIONS, "nosniff")], Html(include_str!("config-ui/index.html"))).into_response()
}
async fn config_js(headers: HeaderMap) -> Response {
    if let Err(response) = browser_guard(&headers) {
        return response;
    }
    ([(header::CONTENT_TYPE, "text/javascript"), (header::CONTENT_SECURITY_POLICY, CONFIG_CSP), (header::CACHE_CONTROL, "no-store"), (header::X_CONTENT_TYPE_OPTIONS, "nosniff")], include_str!("config-ui/app.js")).into_response()
}
async fn config_css(headers: HeaderMap) -> Response {
    if let Err(response) = browser_guard(&headers) {
        return response;
    }
    ([(header::CONTENT_TYPE, "text/css"), (header::CONTENT_SECURITY_POLICY, CONFIG_CSP), (header::CACHE_CONTROL, "no-store"), (header::X_CONTENT_TYPE_OPTIONS, "nosniff")], include_str!("config-ui/app.css")).into_response()
}

/// Cookie-authenticated RPC for the upstream Gale config UI. Only config
/// commands are exposed to the browser document; the session token never is.
async fn browser_command(
    State(app): State<AppHandle>,
    Query(ctx): Query<BrowserContext>,
    headers: HeaderMap,
    Json(command): Json<BrowserCommand>,
) -> Response {
    if let Err(response) = browser_guard(&headers) {
        return response;
    }
    if !authorized(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
    }
    if headers.get(header::ORIGIN).and_then(|v| v.to_str().ok())
        != Some(SESSION.get().unwrap().origin.as_str())
    {
        return StatusCode::FORBIDDEN.into_response();
    }
    if !matches!(command.method.as_str(), "config" | "set_config_entry" | "reset_config_entry" | "reset_config_file" | "open_config_file" | "delete_config_file") {
        return StatusCode::FORBIDDEN.into_response();
    }
    let _guard = SESSION.get().unwrap().command_lock.lock().await;
    let mut args = command.args;
    if !args.is_object() { args = json!({}); }
    args["slug"] = json!(ctx.slug);
    args["profileId"] = json!(ctx.profile_id);
    match dispatch(&app, &command.method, args, &mut None).await {
        Ok(data) => Json(json!({"data": data})).into_response(),
        Err(error) => (StatusCode::BAD_REQUEST, Json(json!({"error": clean(error)}))).into_response(),
    }
}

async fn export_download(
    State(app): State<AppHandle>,
    Query(ctx): Query<BrowserContext>,
    headers: HeaderMap,
) -> Response {
    if let Err(response) = browser_guard(&headers) {
        return response;
    }
    if !authorized(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
    }
    let _guard = SESSION.get().unwrap().command_lock.lock().await;
    if select(&app, &ctx.slug, Some(ctx.profile_id)).await.is_err() {
        return StatusCode::BAD_REQUEST.into_response();
    }
    let id = app.lock_manager().active_profile().id;
    let operation = crate::progress::start_operation(&app, "export", &ctx.slug, Some(id));
    let result = export::export_zip(&app, id, Cursor::new(Vec::new())).await;
    operation.complete(result.is_ok());
    match result {
        Ok(bytes) => (
            [
                (header::CONTENT_TYPE, "application/zip"),
                (header::CONTENT_DISPOSITION, "attachment; filename=\"profile.r2z\""),
            ],
            bytes.into_inner(),
        )
            .into_response(),
        Err(_) => (StatusCode::BAD_REQUEST, "Could not export profile").into_response(),
    }
}

pub fn enabled() -> bool {
    std::env::var("GALEX_HEADLESS").as_deref() == Ok("1")
}

pub fn start(app: &AppHandle) -> eyre::Result<()> {
    let token = std::env::var("GALEX_TOKEN").context("GALEX_TOKEN is required")?;
    if token.len() < 32 {
        return Err(eyre!("invalid bridge token"));
    }
    let session_file: PathBuf = std::env::var("GALEX_SESSION_FILE")
        .context("GALEX_SESSION_FILE is required")?
        .into();
    let parent_pid: u32 = std::env::var("GALEX_PARENT_PID")
        .context("GALEX_PARENT_PID is required")?
        .parse()?;
    let address: SocketAddr = ([127, 0, 0, 1], 0).into();
    let std_listener = std::net::TcpListener::bind(address)?;
    std_listener.set_nonblocking(true)?;
    let port = std_listener.local_addr()?.port();
    SESSION
        .set(Session {
            token: token.clone(),
            port,
            host: format!("steamloopback.host:{port}"),
            origin: format!("http://steamloopback.host:{port}"),
            session_file: session_file.clone(),
            tickets: Mutex::new(HashMap::new()),
            command_lock: Mutex::new(()),
            jobs: Mutex::new(HashMap::new()),
        })
        .map_err(|_| eyre!("bridge already started"))?;
    let router = Router::new()
        .route("/rpc", post(rpc))
        .route("/shutdown", post(shutdown))
        .route("/browser-url", post(browser_url))
        .route("/open", get(open_ticket))
        .route("/config", get(config_page))
        .route("/config/app.js", get(config_js))
        .route("/config/app.css", get(config_css))
        .route("/api/command", post(browser_command))
        .route("/export", get(export_download))
        .layer(DefaultBodyLimit::max(24 * 1024 * 1024))
        .with_state(app.clone());
    crate::progress::init(app);
    let payload = json!({"pid": std::process::id(), "port": port, "token": token, "bridgeVersion": 2});
    write_private(&session_file, serde_json::to_vec(&payload)?)?;
    let handle = app.clone();
    // Convert the std listener inside the runtime: Tauri's setup hook is not
    // guaranteed to run with a Tokio reactor entered on the current thread.
    tauri::async_runtime::spawn(async move {
        let listener = match tokio::net::TcpListener::from_std(std_listener) {
            Ok(listener) => listener,
            Err(err) => {
                tracing::error!("GaleX bridge listener: {err}");
                handle.exit(1);
                return;
            }
        };
        if let Err(err) = axum::serve(listener, router).await {
            tracing::error!("GaleX bridge: {err}");
            handle.exit(1);
        }
    });
    let handle = app.clone();
    tauri::async_runtime::spawn(async move {
        loop {
            tokio::time::sleep(Duration::from_secs(2)).await;
            if !parent_alive(parent_pid) {
                // Never kill an install halfway through, including pending batches.
                wait_for_installs(&handle).await;
                std::fs::remove_file(&session_file).ok();
                handle.exit(0);
                break;
            }
            SESSION
                .get()
                .unwrap()
                .tickets
                .lock()
                .await
                .retain(|_, ticket| ticket.expires > Instant::now());
        }
    });
    Ok(())
}

fn write_private(path: &std::path::Path, bytes: Vec<u8>) -> eyre::Result<()> {
    use std::io::Write;
    let mut options = std::fs::OpenOptions::new();
    options.write(true).create_new(true);
    #[cfg(unix)]
    {
        use std::os::unix::fs::OpenOptionsExt;
        options.mode(0o600);
    }
    options.open(path)?.write_all(&bytes)?;
    Ok(())
}

#[cfg(target_os = "linux")]
fn parent_alive(pid: u32) -> bool {
    std::path::Path::new(&format!("/proc/{pid}")).exists()
}
#[cfg(target_os = "windows")]
fn parent_alive(pid: u32) -> bool {
    #[link(name = "kernel32")]
    unsafe extern "system" {
        fn OpenProcess(access: u32, inherit: i32, pid: u32) -> isize;
        fn GetExitCodeProcess(handle: isize, exit_code: *mut u32) -> i32;
        fn GetLastError() -> u32;
        fn CloseHandle(handle: isize) -> i32;
    }
    unsafe {
        // PROCESS_QUERY_LIMITED_INFORMATION is enough to ask whether the parent
        // is still active. If the OS refuses access, do not kill the bridge just
        // because the watchdog cannot inspect a living parent.
        let handle = OpenProcess(0x1000, 0, pid);
        if handle == 0 {
            return GetLastError() != 87; // ERROR_INVALID_PARAMETER
        }
        let mut exit_code = 0u32;
        let ok = GetExitCodeProcess(handle, &mut exit_code);
        CloseHandle(handle);
        ok == 0 || exit_code == 259 // STILL_ACTIVE
    }
}
#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn parent_alive(_pid: u32) -> bool {
    true
}
