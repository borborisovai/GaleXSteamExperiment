// Shared by the normal Gale GUI and the headless build. Never allow two
// writers to the same SQLite database / profile directories.
use std::fs::{File, OpenOptions};
use eyre::{Context, Result, bail};
use fs4::fs_std::FileExt;

pub struct SessionLock(File);

pub fn acquire() -> Result<SessionLock> {
    let dir = crate::util::path::default_app_data_dir();
    std::fs::create_dir_all(&dir).context("cannot create Gale data directory")?;
    let file = OpenOptions::new().read(true).write(true).create(true).truncate(false)
        .open(dir.join(".gale-session.lock")).context("cannot open Gale session lock")?;
    if !file.try_lock_exclusive().context("cannot lock Gale session")? {
        bail!("Gale уже открыт. Закройте настольный Gale перед запуском GaleX; данные и профили у них общие.");
    }
    Ok(SessionLock(file))
}

impl Drop for SessionLock {
    fn drop(&mut self) { let _ = self.0.unlock(); }
}