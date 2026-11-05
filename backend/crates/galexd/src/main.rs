//! GaleX bridge daemon.
//!
//! Exposes Gale's mod-management core over a loopback HTTP + SSE API that the
//! Millennium plugin renders inside the Steam client.
//!
//! ```text
//! galexd --port 7788 --data-dir ~/.local/share/GaleX
//! ```

mod config;
mod error;
mod events;
mod games;
mod install;
mod model;
mod routes;
mod state;
mod store;

use std::{
    collections::VecDeque,
    net::SocketAddr,
    path::PathBuf,
    sync::{Arc, Mutex},
    time::Instant,
};

use anyhow::{Context, Result};
use axum::{
    routing::{get, patch, post},
    Router,
};
use chrono::Utc;
use tower_http::cors::{Any, CorsLayer};

use crate::{
    events::{EventBus, GaleEvent},
    model::{InstallTask, LogEntry},
    state::Manager,
    store::Thunderstore,
};

pub const VERSION: &str = env!("CARGO_PKG_VERSION");
const MAX_LOG_ENTRIES: usize = 500;

pub struct AppState {
    pub store: Thunderstore,
    pub manager: Mutex<Manager>,
    pub tasks: Mutex<Vec<InstallTask>>,
    pub logs: Mutex<VecDeque<LogEntry>>,
    pub events: EventBus,
    pub started: Instant,
}

impl AppState {
    pub fn new(data_dir: PathBuf) -> Result<Self> {
        let manager = Manager::load(&data_dir)?;
        Ok(Self {
            store: Thunderstore::new()?,
            manager: Mutex::new(manager),
            tasks: Mutex::new(Vec::new()),
            logs: Mutex::new(VecDeque::new()),
            events: EventBus::new(),
            started: Instant::now(),
        })
    }

    pub fn data_dir(&self) -> PathBuf {
        self.manager
            .lock()
            .map(|manager| manager.data_dir().to_path_buf())
            .unwrap_or_default()
    }

    pub fn log(&self, level: &str, scope: &str, message: impl Into<String>) {
        let entry = LogEntry {
            id: self.events.next_log_id(),
            at: Utc::now(),
            level: level.to_string(),
            scope: scope.to_string(),
            message: message.into(),
        };

        if let Ok(mut logs) = self.logs.lock() {
            logs.push_back(entry.clone());
            while logs.len() > MAX_LOG_ENTRIES {
                logs.pop_front();
            }
        }

        self.events.emit(GaleEvent::Log { entry });
    }

    pub fn push_task(&self, task: InstallTask) {
        if let Ok(mut tasks) = self.tasks.lock() {
            if let Some(existing) = tasks.iter_mut().find(|item| item.id == task.id) {
                *existing = task;
            } else {
                tasks.insert(0, task);
            }
            tasks.truncate(60);
        }
    }

    pub fn task(&self, id: &str) -> Option<InstallTask> {
        self.tasks
            .lock()
            .ok()?
            .iter()
            .find(|task| task.id == id)
            .cloned()
    }

    pub fn tasks(&self) -> Vec<InstallTask> {
        self.tasks
            .lock()
            .map(|tasks| tasks.clone())
            .unwrap_or_default()
    }
}

fn router(state: Arc<AppState>) -> Router {
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    Router::new()
        .route("/api/v1/health", get(routes::health))
        .route("/api/v1/events", get(routes::events))
        .route("/api/v1/games", get(routes::list_games))
        .route("/api/v1/games/:slug/manage", post(routes::manage_game))
        .route("/api/v1/games/:slug/favorite", patch(routes::favorite_game))
        .route(
            "/api/v1/games/:slug/profiles",
            get(routes::list_profiles).post(routes::create_profile),
        )
        .route(
            "/api/v1/profiles/:id",
            patch(routes::update_profile).delete(routes::delete_profile),
        )
        .route("/api/v1/profiles/:id/activate", post(routes::activate_profile))
        .route("/api/v1/profiles/:id/export", get(routes::export_profile))
        .route("/api/v1/profiles/:id/mods", get(routes::list_mods))
        .route(
            "/api/v1/profiles/:id/mods/:uuid",
            patch(routes::toggle_mod).delete(routes::remove_mod),
        )
        .route(
            "/api/v1/profiles/:id/mods/:uuid/version",
            patch(routes::change_version),
        )
        .route(
            "/api/v1/profiles/:id/mods/:uuid/ignore-update",
            patch(routes::ignore_update),
        )
        .route("/api/v1/profiles/:id/install", post(routes::install_packages))
        .route("/api/v1/profiles/:id/update", post(routes::update_packages))
        .route(
            "/api/v1/profiles/:id/config",
            get(routes::list_config).patch(routes::set_config),
        )
        .route("/api/v1/profiles/:id/config/reset", post(routes::reset_config))
        .route("/api/v1/profiles/:id/launch", post(routes::launch))
        .route("/api/v1/import", post(routes::import_profile))
        .route("/api/v1/installs", get(routes::list_installs))
        .route("/api/v1/installs/:id/cancel", post(routes::cancel_install))
        .route("/api/v1/store/:slug/packages", get(routes::browse))
        .route("/api/v1/store/:slug/categories", get(routes::categories))
        .route(
            "/api/v1/store/packages/:owner/:name",
            get(routes::package_detail),
        )
        .route("/api/v1/logs", get(routes::logs))
        .route("/api/v1/cache/clear", post(routes::clear_cache))
        .fallback(routes::fallback)
        .layer(cors)
        .with_state(state)
}

struct Args {
    host: String,
    port: u16,
    data_dir: PathBuf,
}

fn parse_args() -> Args {
    let mut host = "127.0.0.1".to_string();
    let mut port: u16 = 7788;
    let mut data_dir = dirs::data_dir()
        .unwrap_or_else(|| PathBuf::from("."))
        .join("GaleX");

    let mut args = std::env::args().skip(1);
    while let Some(arg) = args.next() {
        match arg.as_str() {
            "--port" | "-p" => {
                if let Some(value) = args.next() {
                    port = value.parse().unwrap_or(port);
                }
            }
            "--host" => {
                if let Some(value) = args.next() {
                    host = value;
                }
            }
            "--data-dir" => {
                if let Some(value) = args.next() {
                    data_dir = PathBuf::from(value);
                }
            }
            "--help" | "-h" => {
                println!("galexd {VERSION} — GaleX bridge\n");
                println!("  --port <PORT>       listen port (default 7788)");
                println!("  --host <HOST>       listen address (default 127.0.0.1)");
                println!("  --data-dir <PATH>   state & profile storage (default ~/.local/share/GaleX)");
                std::process::exit(0);
            }
            "--version" | "-V" => {
                println!("galexd {VERSION}");
                std::process::exit(0);
            }
            other => {
                eprintln!("unknown argument: {other} (try --help)");
                std::process::exit(2);
            }
        }
    }

    Args { host, port, data_dir }
}

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "galexd=info,tower_http=warn".into()),
        )
        .init();

    let args = parse_args();
    let state = Arc::new(
        AppState::new(args.data_dir.clone())
            .with_context(|| format!("initialising state in {}", args.data_dir.display()))?,
    );

    state.log("info", "daemon", format!("GaleX bridge {VERSION} starting"));
    state.log(
        "info",
        "daemon",
        format!("data folder: {}", args.data_dir.display()),
    );

    let games = games::all().len();
    if games > 0 {
        state.log("info", "games", format!("{games} Thunderstore communities loaded"));
    } else {
        state.log("error", "games", "games.json could not be parsed");
    }

    let app = router(state.clone());
    let address: SocketAddr = format!("{}:{}", args.host, args.port)
        .parse()
        .with_context(|| format!("invalid listen address {}:{}", args.host, args.port))?;

    let listener = tokio::net::TcpListener::bind(address)
        .await
        .with_context(|| format!("binding {address}"))?;

    tracing::info!("listening on http://{address}");
    println!("GaleX bridge listening on http://{address}");
    println!("  • API:  http://{address}/api/v1/health");
    println!("  • SSE:  http://{address}/api/v1/events");
    println!("  • data: {}", args.data_dir.display());

    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await?;

    Ok(())
}

async fn shutdown_signal() {
    let ctrl_c = async {
        tokio::signal::ctrl_c().await.ok();
    };

    #[cfg(unix)]
    let terminate = async {
        if let Ok(mut signal) = tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate()) {
            signal.recv().await;
        }
    };

    #[cfg(not(unix))]
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }

    tracing::info!("shutting down");
}
