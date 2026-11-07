// GaleX operation telemetry for the Steam downloads panel.
//
// The Steam client has no public "create a mod download" API. GaleX therefore
// renders a virtual download card in Steam's Downloads route, backed by these
// measurements. It never calls QueueAppUpdate: that would download the game.
//
// Network bytes are counted at the reqwest chunk boundary. Disk bytes are the
// bytes Gale actually writes while extracting/copying mod and config files
// (hard links correctly contribute zero). Rates are deltas between polls, not
// simulated curves. Progress totals come from Gale's install queue.
use std::{
    collections::VecDeque,
    sync::{
        Mutex,
        atomic::{AtomicU64, Ordering},
    },
    time::{Instant, SystemTime, UNIX_EPOCH},
};

use serde::Serialize;
use serde_json::{Value, json};
use tauri::{AppHandle, Listener};

use crate::{game, state::ManagerExt};

static NETWORK_BYTES: AtomicU64 = AtomicU64::new(0);
static DISK_BYTES: AtomicU64 = AtomicU64::new(0);
static STATE: Mutex<State> = Mutex::new(State {
    next_id: 1,
    operations: Vec::new(),
    batch: None,
    history: VecDeque::new(),
    last_sample: None,
});

struct State {
    next_id: u64,
    operations: Vec<Operation>,
    batch: Option<Batch>,
    history: VecDeque<Sample>,
    last_sample: Option<(Instant, u64, u64)>,
}

#[derive(Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct Operation {
    id: String,
    kind: String,
    slug: String,
    game_name: String,
    steam_app_id: Option<u32>,
    profile_id: Option<i64>,
    profile_name: Option<String>,
    status: String,
    started_at: u64,
    finished_at: Option<u64>,
    total_bytes: Option<u64>,
    completed_bytes: u64,
    total_mods: Option<usize>,
    completed_mods: usize,
    current_mod: Option<String>,
    phase: Option<String>,
}

#[derive(Clone)]
struct Batch {
    slug: String,
    game_name: String,
    steam_app_id: Option<u32>,
    profile_id: i64,
    profile_name: String,
    total_bytes: u64,
    completed_bytes: u64,
    total_mods: usize,
    completed_mods: usize,
    current_mod: Option<String>,
    phase: Option<String>,
    started_at: u64,
}

#[derive(Clone, Copy, Serialize)]
#[serde(rename_all = "camelCase")]
struct Sample {
    at: u64,
    network: u64,
    disk: u64,
}

fn now_ms() -> u64 {
    SystemTime::now().duration_since(UNIX_EPOCH).unwrap_or_default().as_millis() as u64
}

pub fn record_network(bytes: u64) {
    NETWORK_BYTES.fetch_add(bytes, Ordering::Relaxed);
}

pub fn record_disk(bytes: u64) {
    DISK_BYTES.fetch_add(bytes, Ordering::Relaxed);
}

/// Subscribe before flushing Gale's buffered events. The hidden headless webview
/// never loads the desktop frontend, so without this synthetic `ready` the
/// install-event buffer would never drain and progress would stay at zero.
pub fn init(app: &AppHandle) {
    app.listen_any("install_event", move |event| {
        let raw = event.payload();
        let Ok(mut value) = serde_json::from_str::<Value>(raw) else { return };
        if let Value::String(inner) = value {
            match serde_json::from_str::<Value>(&inner) {
                Ok(parsed) => value = parsed,
                Err(_) => return,
            }
        }
        let mut state = STATE.lock().unwrap();
        let Some(batch) = state.batch.as_mut() else { return };
        match value.get("type").and_then(Value::as_str) {
            Some("setTask") => {
                batch.current_mod = value.get("name").and_then(Value::as_str).map(str::to_owned);
                batch.phase = value.get("task").and_then(Value::as_str).map(str::to_owned);
            }
            Some("addProgress") => {
                let mods = value.get("mods").and_then(Value::as_u64).unwrap_or(0) as usize;
                let bytes = value.get("bytes").and_then(Value::as_i64).unwrap_or(0);
                batch.completed_mods = (batch.completed_mods + mods).min(batch.total_mods);
                if bytes >= 0 {
                    batch.completed_bytes = (batch.completed_bytes + bytes as u64).min(batch.total_bytes);
                } else {
                    batch.completed_bytes = batch.completed_bytes.saturating_sub((-bytes) as u64);
                }
            }
            Some("hide") => state.batch = None,
            _ => {}
        }
        drop(state);
    });
    // Flush events emitted while the hidden webview was starting. The headless
    // bridge has no desktop frontend to emit `ready`, so mark the buffer ready
    // directly instead of relying on a backend emit reaching a Rust listener.
    app.event_buffer().mark_ready();
}

fn game_info(slug: &str) -> (String, Option<u32>) {
    match game::from_slug(slug) {
        Some(game) => (game.name.to_string(), game.platforms.steam.as_ref().map(|steam| steam.id)),
        None => (slug.to_owned(), None),
    }
}

pub fn batch_started(app: &AppHandle, profile_id: i64, total_mods: usize, total_bytes: u64) {
    let manager = app.lock_manager();
    let Ok((game, profile)) = manager.profile_by_id(profile_id) else { return };
    let batch = Batch {
        slug: game.slug.to_string(),
        game_name: game.name.to_string(),
        steam_app_id: game.platforms.steam.as_ref().map(|steam| steam.id),
        profile_id,
        profile_name: profile.name.clone(),
        total_bytes,
        completed_bytes: 0,
        total_mods,
        completed_mods: 0,
        current_mod: None,
        phase: Some("download".into()),
        started_at: now_ms(),
    };
    drop(manager);
    STATE.lock().unwrap().batch = Some(batch);
}

pub struct OperationGuard {
    id: u64,
    finished: bool,
}

impl OperationGuard {
    pub fn complete(mut self, success: bool) {
        self.finished = true;
        finish(self.id, success);
    }
}

impl Drop for OperationGuard {
    fn drop(&mut self) {
        if !self.finished {
            finish(self.id, true);
        }
    }
}

fn finish(id: u64, success: bool) {
    let mut state = STATE.lock().unwrap();
    if let Some(operation) = state.operations.iter_mut().find(|operation| operation.id == id.to_string()) {
        operation.status = if success { "done" } else { "error" }.into();
        operation.finished_at = Some(now_ms());
        operation.phase = Some(operation.status.clone());
        if success {
            if let Some(total) = operation.total_bytes {
                operation.completed_bytes = total;
            }
            if let Some(total) = operation.total_mods {
                operation.completed_mods = total;
            }
        }
    }
}

pub fn start_operation(app: &AppHandle, kind: &str, slug: &str, profile_id: Option<i64>) -> OperationGuard {
    let (game_name, steam_app_id) = game_info(slug);
    let profile_name = profile_id.and_then(|id| {
        let manager = app.lock_manager();
        manager.profile_by_id(id).ok().map(|(_, profile)| profile.name.clone())
    });
    let mut state = STATE.lock().unwrap();
    let id = state.next_id;
    state.next_id += 1;
    state.operations.push(Operation {
        id: id.to_string(),
        kind: kind.to_owned(),
        slug: slug.to_owned(),
        game_name,
        steam_app_id,
        profile_id,
        profile_name,
        status: "active".into(),
        started_at: now_ms(),
        finished_at: None,
        total_bytes: None,
        completed_bytes: 0,
        total_mods: None,
        completed_mods: 0,
        current_mod: None,
        phase: Some("starting".into()),
    });
    OperationGuard { id, finished: false }
}

pub fn snapshot() -> Value {
    let network_total = NETWORK_BYTES.load(Ordering::Relaxed);
    let disk_total = DISK_BYTES.load(Ordering::Relaxed);
    let now = Instant::now();
    let mut state = STATE.lock().unwrap();
    let (network_rate, disk_rate) = match state.last_sample.replace((now, network_total, disk_total)) {
        Some((previous, network, disk)) => {
            let elapsed = now.saturating_duration_since(previous).as_secs_f64().max(0.001);
            (
                network_total.saturating_sub(network) as f64 / elapsed,
                disk_total.saturating_sub(disk) as f64 / elapsed,
            )
        }
        None => (0.0, 0.0),
    };
    state.history.push_back(Sample { at: now_ms(), network: network_rate as u64, disk: disk_rate as u64 });
    while state.history.len() > 60 {
        state.history.pop_front();
    }
    let cutoff = now_ms().saturating_sub(8_000);
    state.operations.retain(|operation| operation.status == "active" || operation.finished_at.unwrap_or(0) >= cutoff);

    let mut operations = state.operations.clone();
    if let Some(batch) = &state.batch {
        let target = operations
            .iter()
            .position(|operation| operation.status == "active" && operation.slug == batch.slug && operation.profile_id == Some(batch.profile_id))
            .or_else(|| operations.iter().position(|operation| operation.status == "active" && operation.slug == batch.slug));
        if let Some(index) = target {
            let operation = &mut operations[index];
            operation.profile_id = Some(batch.profile_id);
            operation.profile_name = Some(batch.profile_name.clone());
            operation.game_name = batch.game_name.clone();
            operation.steam_app_id = batch.steam_app_id;
            operation.total_bytes = Some(batch.total_bytes);
            operation.completed_bytes = batch.completed_bytes;
            operation.total_mods = Some(batch.total_mods);
            operation.completed_mods = batch.completed_mods;
            operation.current_mod = batch.current_mod.clone();
            operation.phase = batch.phase.clone();
        } else {
            operations.push(Operation {
                id: format!("batch-{}", batch.profile_id),
                kind: "install".into(),
                slug: batch.slug.clone(),
                game_name: batch.game_name.clone(),
                steam_app_id: batch.steam_app_id,
                profile_id: Some(batch.profile_id),
                profile_name: Some(batch.profile_name.clone()),
                status: "active".into(),
                started_at: batch.started_at,
                finished_at: None,
                total_bytes: Some(batch.total_bytes),
                completed_bytes: batch.completed_bytes,
                total_mods: Some(batch.total_mods),
                completed_mods: batch.completed_mods,
                current_mod: batch.current_mod.clone(),
                phase: batch.phase.clone(),
            });
        }
    }
    let active = operations.iter().any(|operation| operation.status == "active");
    json!({
        "active": active,
        "tasks": operations,
        "networkBytesPerSecond": network_rate as u64,
        "diskBytesPerSecond": disk_rate as u64,
        "history": state.history.iter().collect::<Vec<_>>(),
    })
}
