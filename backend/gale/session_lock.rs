// Shared by the normal Gale GUI and the headless build. Never allow two
// writers to the same SQLite database / profile directories.
use std::fs::{File, OpenOptions};
use std::io::ErrorKind;
use eyre::{Context, Result, bail};
use fs4::fs_std::FileExt;

pub struct SessionLock(File);

const LOCKED_MESSAGE: &str = "GALEX_SESSION_LOCKED: Gale session is locked. Close desktop Gale before using GaleX.";

/// The Lua parent may not capture stdout from a Windows GUI-subsystem child.
/// When headless, publish a machine-readable startup failure next to the
/// private session file so the plugin can render the lock screen reliably.
fn report_locked() {
    if let Ok(path) = std::env::var("GALEX_STARTUP_ERROR_FILE") {
        let _ = std::fs::write(path, r#"{"code":"gale_session_locked","error":"Gale session is locked. Close desktop Gale before using GaleX."}"#);
    }
}

fn clear_startup_error() {
    if let Ok(path) = std::env::var("GALEX_STARTUP_ERROR_FILE") {
        let _ = std::fs::remove_file(path);
    }
}

pub fn acquire() -> Result<SessionLock> {
    let dir = crate::util::path::default_app_data_dir();
    std::fs::create_dir_all(&dir).context("cannot create Gale data directory")?;
    let file = OpenOptions::new().read(true).write(true).create(true).truncate(false)
        .open(dir.join(".gale-session.lock")).context("cannot open Gale session lock")?;
    match file.try_lock_exclusive() {
        Ok(true) => { clear_startup_error(); Ok(SessionLock(file)) }
        Ok(false) => { report_locked(); bail!("{}", LOCKED_MESSAGE) }
        Err(error) if error.kind() == ErrorKind::WouldBlock => { report_locked(); bail!("{}", LOCKED_MESSAGE) }
        Err(error) => Err(error).context("cannot lock Gale session"),
    }
}

impl Drop for SessionLock {
    fn drop(&mut self) { let _ = self.0.unlock(); }
}
