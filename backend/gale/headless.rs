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
        install::commands as install_commands,
        launch::commands as launch, update::commands as update,
    },
    state::ManagerExt,
    thunderstore::{Backend, FrontendMod, commands as store},
};

struct Session {
    token: String,
    port: u16,
    origin: String,
    session_file: PathBuf,
    tickets: Mutex<HashMap<String, Ticket>>,
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
        "install_mod" => command_value(install_commands::install_mod(decode(a["id"].clone())?, app.clone()).await)?,
        "cancel_installs" => command_value(install_commands::cancel_all_installs(app.clone()))?,
        "update_mods" => command_value(update::update_mods(decode(a["uuids"].clone())?, true, app.clone()).await)?,
        "ignore_package_updates" => command_value(update::ignore_package_updates(
            decode(a["uuid"].clone())?,
            app.clone(),
        ))?,
        "change_mod_version" => command_value(update::change_mod_version(decode(a["id"].clone())?, app.clone()).await)?,
        "export_code" => command_value(export_cmd::export_code(app.clone()).await)?,
        "list_export_files" => command_value(export_cmd::list_export_files(app.clone()))?,
        "set_excluded_export_files" => command_value(export_cmd::set_excluded_export_files(app.clone(), decode(a["excludedFiles"].clone())?))?,
        "copy_dependency_strings" => command_value(export_cmd::copy_dependency_strings(app.clone()))?,
        "copy_debug_info" => command_value(export_cmd::copy_debug_info(app.clone()))?,
        "read_profile_code" => {
            let key = a.get("key").or_else(|| a.get("code")).and_then(Value::as_str)
                .ok_or_eyre("missing profile code")?.to_owned();
            command_value(import::read_profile_code(&key, app.clone()).await)?
        }
        "read_profile_base64" => {
            let encoded = string_arg(&a, "base64")?;
            if encoded.len() > 20 * 1024 * 1024 {
                return Err(eyre!("profile archive exceeds 15 MiB"));
            }
            command_value(import::read_profile_base64(encoded, app.clone()).await)?
        }
        "import_profile" => {
            let options = decode(a.get("options").cloned().unwrap_or_else(|| json!({})))?;
            command_value(import::import_profile(decode(a["data"].clone())?, options, app.clone()).await)?
        }
        "read_profile_file" => command_value(import::read_profile_file(decode(a["path"].clone())?, app.clone()).await)?,
        "import_local_mod_base64" => {
            let encoded = string_arg(&a, "base64")?;
            if encoded.len() > 20 * 1024 * 1024 { return Err(eyre!("local mod archive exceeds 15 MiB")); }
            command_value(import::import_local_mod_base64(encoded, app.clone()).await)?
        }
        "get_r2modman_info" => {
            let path: Option<PathBuf> = match a.get("path") { Some(Value::String(s)) if !s.is_empty() => Some(PathBuf::from(s)), _ => None };
            command_value(import::get_r2modman_info(path, app.clone()))?
        }
        "import_r2modman" => command_value(import::import_r2modman(decode(a["path"].clone())?, decode(a["include"].clone())?, app.clone()).await)?,
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
    let _guard = if matches!(envelope.method.as_str(), "snapshot" | "cancel_installs") {
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
struct Ticket {
    slug: String,
    profile_id: i64,
    kind: String,
    lang: String,
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

async fn open_ticket(Query(q): Query<OpenTicket>) -> Response {
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
        format!("/config?slug={}&profileId={}&lang={}", ticket.slug, ticket.profile_id, ticket.lang)
    };
    ([(header::SET_COOKIE, cookie)], Redirect::to(&target)).into_response()
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
    let lang = a.get("lang").and_then(Value::as_str).unwrap_or("english")
        .chars().filter(|c| c.is_ascii_alphanumeric() || *c == '-' || *c == '_').take(32).collect::<String>();
    let mut tickets = session.tickets.lock().await;
    tickets.retain(|_, ticket| ticket.expires > Instant::now());
    if tickets.len() >= 32 {
        return StatusCode::TOO_MANY_REQUESTS.into_response();
    }
    tickets.insert(ticket.clone(), Ticket { slug, profile_id: id, kind, lang, expires: Instant::now() + Duration::from_secs(60) });
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

async fn config_page() -> Response {
    ([(header::CONTENT_SECURITY_POLICY, CONFIG_CSP)], Html(include_str!("config-ui/index.html"))).into_response()
}
async fn config_js() -> Response {
    ([(header::CONTENT_TYPE, "text/javascript"), (header::CONTENT_SECURITY_POLICY, CONFIG_CSP)], include_str!("config-ui/app.js")).into_response()
}
async fn config_css() -> Response {
    ([(header::CONTENT_TYPE, "text/css"), (header::CONTENT_SECURITY_POLICY, CONFIG_CSP)], include_str!("config-ui/app.css")).into_response()
}

/// Cookie-authenticated RPC for the upstream Gale config UI. Only config
/// commands are exposed to the browser document; the session token never is.
async fn browser_command(
    State(app): State<AppHandle>,
    Query(ctx): Query<BrowserContext>,
    headers: HeaderMap,
    Json(command): Json<BrowserCommand>,
) -> Response {
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
    match dispatch(&app, &command.method, args).await {
        Ok(data) => Json(json!({"data": data})).into_response(),
        Err(error) => (StatusCode::BAD_REQUEST, Json(json!({"error": clean(error)}))).into_response(),
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
            origin: format!("http://steamloopback.host:{port}"),
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
        .route("/config/app.js", get(config_js))
        .route("/config/app.css", get(config_css))
        .route("/api/command", post(browser_command))
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
