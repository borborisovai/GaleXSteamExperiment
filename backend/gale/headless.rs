// GaleX integration for Gale. GPL-3.0-only; see LICENSE.gale.md.
// This file is applied to the pinned upstream source by ../prepare.py.
// All profile/install/config operations delegate to Gale's existing commands.
use std::{
    collections::HashMap,
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
        install::{InstallOptions, InstallResultExt, ModInstall, commands as install_commands},
        launch::commands as launch, update::commands as update,
    },
    state::ManagerExt,
    thunderstore::{Backend, FrontendMod, ModId, commands as store},
};

struct Session {
    token: String,
    port: u16,
    origin: String,
    session_file: PathBuf,
    tickets: Mutex<HashMap<String, (String, i64, String, Instant)>>,
    // Never change Gale's active game/profile halfway through a command.
    command_lock: Mutex<()>,
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
    profile::set_active_game(slug, app.clone()).map_err(|e| eyre!("{e:?}"))?;
    if let Some(id) = profile_id {
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
    Ok(())
}

/// Run the install queue inside the spawned task. `install_with_deps` returns
/// a future that borrows the `AppHandle`, so the handle must be owned by the
/// task and borrowed only after the task starts (Rust 2024 RPIT lifetimes).
async fn run_installs(
    app: AppHandle,
    installs: Vec<ModInstall>,
    profile_id: i64,
    options: InstallOptions,
    allow_multiple: bool,
) -> eyre::Result<()> {
    app.install_queue()
        .install_with_deps(installs, profile_id, options, allow_multiple, &app)?
        .await
        .ignore_cancel()
}

fn spawn_installs(
    app: &AppHandle,
    installs: Vec<ModInstall>,
    profile_id: i64,
    options: InstallOptions,
    allow_multiple: bool,
    label: &'static str,
) -> eyre::Result<()> {
    if !allow_multiple
        && installs.len() == 1
        && app
            .lock_manager()
            .profile_by_id(profile_id)?
            .1
            .has_mod(installs[0].uuid())
    {
        return Err(eyre!("mod is already installed"));
    }
    let handle = app.clone();
    tauri::async_runtime::spawn(async move {
        if let Err(error) = run_installs(handle.clone(), installs, profile_id, options, allow_multiple).await {
            crate::logger::log_webview_err(label, error, &handle);
        }
    });
    Ok(())
}

fn update_options() -> InstallOptions {
    InstallOptions::default()
        .cancel_individually()
        .before_install(Box::new(|install, profile| {
            // Remove the old version, but only for the mod being updated;
            // newly pulled dependencies must not be removed.
            if profile.has_mod(install.uuid()) {
                profile
                    .force_remove_mod(install.uuid())
                    .context("failed to remove existing version")?;
            }
            Ok(())
        }))
}

async fn dispatch(app: &AppHandle, method: &str, a: Value) -> eyre::Result<Value> {
    if !matches!(method, "snapshot" | "prefs" | "set_prefs" | "clear_download_cache") {
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
        "profiles" => serialize(profile::get_profile_info(app.clone()))?,
        "mods" => command_value(profile::query_profile(
            decode(a.get("args").cloned().unwrap_or_default())?,
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
        "install_mod" => {
            let id: ModId = decode(a["id"].clone())?;
            let (profile_id, item) = {
                let manager = app.lock_manager();
                let ts = app.lock_thunderstore();
                (
                    manager.active_profile().id,
                    ModInstall::try_from_id(id, &ts)?,
                )
            };
            spawn_installs(
                app,
                vec![item],
                profile_id,
                InstallOptions::default(),
                false,
                "GaleX install failed",
            )?;
            json!({"started": true})
        }
        "cancel_installs" => command_value(install_commands::cancel_all_installs(app.clone()))?,
        "update_mods" => {
            let uuids: Vec<Uuid> = decode(a["uuids"].clone())?;
            let (profile_id, installs) = {
                let mut manager = app.lock_manager();
                let ts = app.lock_thunderstore();
                let queue = app.install_queue().lock();
                let profile = manager.active_profile_mut();
                let mut installs = Vec::new();
                for uuid in uuids {
                    if let Some(update) = profile.check_update(uuid, &ts, &queue)? {
                        if !profile.is_update_ignored(&update) {
                            installs.push(ModInstall::from(update));
                        }
                    }
                }
                (profile.id, installs)
            };
            spawn_installs(app, installs, profile_id, update_options(), true, "GaleX update failed")?;
            json!({"started": true})
        }
        "ignore_package_updates" => command_value(update::ignore_package_updates(
            decode(a["uuid"].clone())?,
            app.clone(),
        ))?,
        "change_mod_version" => {
            let id: ModId = decode(a["id"].clone())?;
            let (profile_id, install) = {
                let manager = app.lock_manager();
                let ts = app.lock_thunderstore();
                let profile = manager.active_profile();
                let index = profile
                    .mods
                    .iter()
                    .position(|m| m.uuid() == id.package_uuid)
                    .ok_or_eyre("mod not found in profile")?;
                let enabled = profile.mods[index].enabled;
                let install_time = profile.mods[index].install_time;
                (
                    profile.id,
                    ModInstall::try_from_id(id, &ts)?
                        .with_state(enabled)
                        .with_index(index)
                        .with_time(install_time),
                )
            };
            spawn_installs(
                app,
                vec![install],
                profile_id,
                update_options(),
                true,
                "GaleX version change failed",
            )?;
            json!({"started": true})
        }
        "export_code" => command_value(export_cmd::export_code(app.clone()).await)?,
        "read_profile_code" => {
            command_value(import::read_profile_code(&string_arg(&a, "code")?, app.clone()).await)?
        }
        "read_profile_base64" => {
            let encoded = string_arg(&a, "base64")?;
            if encoded.len() > 20 * 1024 * 1024 {
                return Err(eyre!("profile archive exceeds 15 MiB"));
            }
            command_value(import::read_profile_base64(encoded, app.clone()).await)?
        }
        "import_profile" => command_value(
            import::import_profile(decode(a["data"].clone())?, Default::default(), app.clone()).await,
        )?,
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
        "launch" => command_value(
            launch::launch_game(app.clone(), a["vanilla"].as_bool().unwrap_or(false), None).await,
        )?,
        "fetch_mods" => command_value(store::trigger_mod_fetch(app.clone()))?,
        "clear_download_cache" => {
            command_value(install_commands::clear_download_cache(true, app.clone()).await)?
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
            crate::thunderstore::wait_for_fetch(app).await;
            let ts = app.lock_thunderstore();
            let found = ts.find_mod(&parts[0], &parts[1], &parts[2], Backend::Thunderstore)?;
            serialize(FrontendMod::from(found))?
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

async fn rpc(State(app): State<AppHandle>, headers: HeaderMap, Json(envelope): Json<Envelope>) -> Response {
    if !bearer(&headers) {
        return (StatusCode::UNAUTHORIZED, Json(json!({"error": "unauthorized"}))).into_response();
    }
    let session = SESSION.get().unwrap();
    // Snapshot is a health poll and must remain responsive during imports.
    let _guard = if envelope.method == "snapshot" {
        None
    } else {
        Some(session.command_lock.lock().await)
    };
    match dispatch(&app, &envelope.method, envelope.args).await {
        Ok(data) => Json(json!({"data": data})).into_response(),
        Err(error) => (StatusCode::BAD_REQUEST, Json(json!({"error": clean(error)}))).into_response(),
    }
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

async fn open_ticket(Query(q): Query<OpenTicket>) -> Response {
    let session = SESSION.get().unwrap();
    // Ticket is single use, binds the browser cookie to one game/profile.
    let context = session.tickets.lock().await.remove(&q.ticket);
    let Some((slug, profile_id, kind, expires)) = context else {
        return (StatusCode::FORBIDDEN, "Invalid or expired browser ticket").into_response();
    };
    if Instant::now() > expires {
        return (StatusCode::FORBIDDEN, "Browser ticket expired").into_response();
    }
    let cookie = format!("galex_session={}; HttpOnly; SameSite=Strict; Path=/", session.token);
    (
        [(header::SET_COOKIE, cookie)],
        Redirect::to(&format!(
            "/{}?slug={slug}&profileId={profile_id}",
            if kind == "export" { "export" } else { "config" }
        )),
    )
        .into_response()
}

async fn browser_url(State(app): State<AppHandle>, headers: HeaderMap, Json(a): Json<Value>) -> Response {
    if !bearer(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
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
    let mut tickets = session.tickets.lock().await;
    tickets.retain(|_, (_, _, _, expires)| *expires > Instant::now());
    if tickets.len() >= 32 {
        return StatusCode::TOO_MANY_REQUESTS.into_response();
    }
    tickets.insert(
        ticket.clone(),
        (slug, id, kind, Instant::now() + Duration::from_secs(60)),
    );
    Json(json!({"url": format!("http://127.0.0.1:{}/open?ticket={ticket}", session.port)})).into_response()
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
    let handle = app.clone();
    let session_file = SESSION.get().unwrap().session_file.clone();
    tauri::async_runtime::spawn(async move {
        wait_for_installs(&handle).await;
        std::fs::remove_file(&session_file).ok();
        handle.exit(0);
    });
    Json(json!({"ok": true})).into_response()
}

async fn config_page() -> Response {
    (
        [(
            header::CONTENT_SECURITY_POLICY,
            "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'; img-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
        )],
        Html(include_str!("config.html")),
    )
        .into_response()
}

async fn config_data(
    State(app): State<AppHandle>,
    Query(ctx): Query<BrowserContext>,
    headers: HeaderMap,
) -> Response {
    if !authorized(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
    }
    let _guard = SESSION.get().unwrap().command_lock.lock().await;
    if select(&app, &ctx.slug, Some(ctx.profile_id)).await.is_err() {
        return StatusCode::BAD_REQUEST.into_response();
    }
    match config::get_config_files(app) {
        Ok(files) => Json(files).into_response(),
        Err(e) => (StatusCode::BAD_REQUEST, clean(format!("{e:?}"))).into_response(),
    }
}

async fn config_save(
    State(app): State<AppHandle>,
    Query(ctx): Query<BrowserContext>,
    headers: HeaderMap,
    Json(a): Json<Value>,
) -> Response {
    if !authorized(&headers)
        || headers.get(header::ORIGIN).and_then(|v| v.to_str().ok())
            != Some(SESSION.get().unwrap().origin.as_str())
    {
        return StatusCode::FORBIDDEN.into_response();
    }
    let _guard = SESSION.get().unwrap().command_lock.lock().await;
    let result = async {
        select(&app, &ctx.slug, Some(ctx.profile_id)).await?;
        let file: PathBuf = decode(a["file"].clone())?;
        let section = string_arg(&a, "section")?;
        let entry = string_arg(&a, "entry")?;
        if a.get("reset").and_then(Value::as_bool).unwrap_or(false) {
            config::reset_config_entry(&file, &section, &entry, app).map_err(|e| eyre!("{e:?}"))?;
        } else {
            config::set_config_entry(&file, &section, &entry, decode(a["value"].clone())?, app)
                .map_err(|e| eyre!("{e:?}"))?;
        }
        Ok::<_, eyre::Report>(())
    }
    .await;
    match result {
        Ok(()) => Json(json!({"ok": true})).into_response(),
        Err(e) => (StatusCode::BAD_REQUEST, clean(e)).into_response(),
    }
}

async fn export_download(
    State(app): State<AppHandle>,
    Query(ctx): Query<BrowserContext>,
    headers: HeaderMap,
) -> Response {
    if !authorized(&headers) {
        return StatusCode::UNAUTHORIZED.into_response();
    }
    let _guard = SESSION.get().unwrap().command_lock.lock().await;
    if select(&app, &ctx.slug, Some(ctx.profile_id)).await.is_err() {
        return StatusCode::BAD_REQUEST.into_response();
    }
    let id = app.lock_manager().active_profile().id;
    match export::export_zip(&app, id, Cursor::new(Vec::new())).await {
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
            origin: format!("http://127.0.0.1:{port}"),
            session_file: session_file.clone(),
            tickets: Mutex::new(HashMap::new()),
            command_lock: Mutex::new(()),
        })
        .map_err(|_| eyre!("bridge already started"))?;
    let router = Router::new()
        .route("/rpc", post(rpc))
        .route("/shutdown", post(shutdown))
        .route("/browser-url", post(browser_url))
        .route("/open", get(open_ticket))
        .route("/config", get(config_page))
        .route("/config.js", get(|| async {
            ([(header::CONTENT_TYPE, "text/javascript")], include_str!("config.js"))
        }))
        .route("/config.css", get(|| async {
            ([(header::CONTENT_TYPE, "text/css")], include_str!("config.css"))
        }))
        .route("/api/config", get(config_data).post(config_save))
        .route("/export", get(export_download))
        .layer(DefaultBodyLimit::max(24 * 1024 * 1024))
        .with_state(app.clone());
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
                .retain(|_, (_, _, _, expires)| *expires > Instant::now());
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
        fn WaitForSingleObject(handle: isize, ms: u32) -> u32;
        fn CloseHandle(handle: isize) -> i32;
    }
    unsafe {
        let handle = OpenProcess(0x00100000, 0, pid);
        if handle == 0 {
            return false;
        }
        let result = WaitForSingleObject(handle, 0) == 258;
        CloseHandle(handle);
        result
    }
}
#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn parent_alive(_pid: u32) -> bool {
    true
}
