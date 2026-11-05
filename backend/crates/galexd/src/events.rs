//! Server-sent events pushed to the Millennium frontend.
//!
//! The serde tags must stay in sync with `frontend/src/lib/types.ts`
//! (`GaleEvent`); they are dotted strings such as `install.progress`.

use std::sync::atomic::{AtomicU64, Ordering};

use serde::Serialize;
use tokio::sync::broadcast;

use crate::model::{InstallTask, LogEntry};

#[derive(Clone, Debug, Serialize)]
#[serde(tag = "type")]
pub enum GaleEvent {
    #[serde(rename = "daemon.hello")]
    DaemonHello { version: String },
    #[serde(rename = "install.queued")]
    InstallQueued { task: InstallTask },
    #[serde(rename = "install.progress")]
    InstallProgress { task: InstallTask },
    #[serde(rename = "install.settled")]
    InstallSettled { task: InstallTask },
    #[serde(rename = "mods.changed")]
    ModsChanged {
        #[serde(rename = "profileId")]
        profile_id: u64,
    },
    #[serde(rename = "profiles.changed")]
    ProfilesChanged {
        #[serde(rename = "gameSlug")]
        game_slug: String,
    },
    #[serde(rename = "log")]
    Log { entry: LogEntry },
}

#[derive(Clone)]
pub struct EventBus {
    tx: broadcast::Sender<GaleEvent>,
    seq: std::sync::Arc<AtomicU64>,
}

impl EventBus {
    pub fn new() -> Self {
        let (tx, _rx) = broadcast::channel(1024);
        Self {
            tx,
            seq: std::sync::Arc::new(AtomicU64::new(1)),
        }
    }

    pub fn emit(&self, event: GaleEvent) {
        // A missing receiver simply means no UI is connected right now.
        let _ = self.tx.send(event);
    }

    pub fn subscribe(&self) -> broadcast::Receiver<GaleEvent> {
        self.tx.subscribe()
    }

    pub fn next_log_id(&self) -> u64 {
        self.seq.fetch_add(1, Ordering::Relaxed)
    }
}

impl Default for EventBus {
    fn default() -> Self {
        Self::new()
    }
}
