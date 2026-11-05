//! Install pipeline: dependency resolution → download → extract → record.
//!
//! Mirrors Gale's `profile::install` queue, but pushes progress over SSE instead
//! of Tauri events. Every step is idempotent: reinstalling a package replaces its
//! files and keeps the profile-mod uuid stable.

use std::{
    collections::HashSet,
    io::{Cursor, Read, Write},
    path::{Path, PathBuf},
    sync::Arc,
};

use anyhow::{anyhow, Context, Result};
use chrono::Utc;
use uuid::Uuid;

use crate::{
    events::GaleEvent,
    model::InstallTask,
    state::{self, ProfileMod},
    store::{self, Listing},
    AppState,
};

pub const WORKER_VERSION: &str = env!("CARGO_PKG_VERSION");

#[derive(Debug, Clone)]
pub struct ResolvedPackage {
    pub full_name: String,
    pub version: String,
    pub version_id: String,
    pub description: String,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Mode {
    Install,
    Update,
}

impl Mode {
    fn label(self) -> &'static str {
        match self {
            Mode::Install => "Installing",
            Mode::Update => "Updating",
        }
    }
}

/// Resolves the transitive dependency closure for the requested version ids.
/// Packages already present in the profile are skipped unless explicitly asked
/// for, which matches how the Gale UI behaves.
pub fn resolve(version_ids: &[String], listings: &[Listing], installed: &HashSet<String>) -> Vec<ResolvedPackage> {
    let mut queue: Vec<(String, bool)> = version_ids.iter().map(|id| (id.clone(), true)).collect();
    let mut seen: HashSet<String> = HashSet::new();
    let mut resolved: Vec<ResolvedPackage> = Vec::new();

    while let Some((version_id, explicit)) = queue.pop() {
        let full_name = store::full_name_of(&version_id);
        let version = store::version_of(&version_id);
        if !seen.insert(format!("{full_name}-{version}")) {
            continue;
        }
        if !explicit && installed.contains(&full_name) {
            continue;
        }

        let listing_version = store::find(listings, &full_name).and_then(|entry| entry.version(&version));
        let description = listing_version
            .map(|entry| entry.description.clone())
            .unwrap_or_default();

        if let Some(deps) = listing_version.map(|entry| entry.dependencies.clone()) {
            for dep in deps {
                queue.push((dep, false));
            }
        }

        resolved.push(ResolvedPackage {
            full_name,
            version,
            version_id,
            description,
        });
    }

    // Dependencies first so a failure leaves fewer half-installed profiles.
    resolved.reverse();
    resolved
}

pub struct InstallRequest {
    pub profile_id: u64,
    pub version_ids: Vec<String>,
    pub mode: Mode,
}

/// Creates the task and starts the background worker. Returns immediately.
pub async fn start(state: Arc<AppState>, request: InstallRequest) -> Result<InstallTask> {
    let (slug, installed, label) = {
        let manager = state.manager.lock().expect("manager poisoned");
        let (game, profile) = manager
            .find_profile(request.profile_id)
            .ok_or_else(|| anyhow!("profile {} not found", request.profile_id))?;
        let installed: HashSet<String> = profile
            .mods
            .iter()
            .filter_map(|item| match &item.kind {
                state::ProfileModKind::Thunderstore { full_name, .. } => Some(full_name.clone()),
                state::ProfileModKind::Local { .. } => None,
            })
            .collect();
        (
            game.slug.clone(),
            installed,
            format!("{} into “{}”", request.mode.label(), profile.name),
        )
    };

    let listings = state.store.index(&slug).await?;
    let packages = resolve(&request.version_ids, &listings, &installed);
    if packages.is_empty() {
        return Err(anyhow!("nothing to install — every package is already present"));
    }

    let task = InstallTask {
        id: Uuid::new_v4().to_string(),
        profile_id: request.profile_id,
        game_slug: slug.clone(),
        status: "queued".to_string(),
        progress: 0.0,
        step: label,
        total: packages.len(),
        completed: 0,
        current: None,
        error: None,
        started_at: Utc::now(),
        finished_at: None,
    };

    state.push_task(task.clone());
    state.events.emit(GaleEvent::InstallQueued { task: task.clone() });
    state.log(
        "info",
        "install",
        format!("queued {} package(s) for profile {}", packages.len(), request.profile_id),
    );

    let worker_state = state.clone();
    let task_id = task.id.clone();
    tokio::spawn(async move {
        if let Err(err) = worker(worker_state.clone(), task_id.clone(), request.profile_id, slug, packages, request.mode).await {
            tracing::error!("install worker failed: {err:#}");
            if let Some(mut task) = worker_state.task(&task_id) {
                task.status = "failed".to_string();
                task.error = Some(err.to_string());
                task.finished_at = Some(Utc::now());
                worker_state.push_task(task.clone());
                worker_state.events.emit(GaleEvent::InstallSettled { task });
            }
        }
    });

    Ok(task)
}

async fn worker(
    state: Arc<AppState>,
    task_id: String,
    profile_id: u64,
    slug: String,
    packages: Vec<ResolvedPackage>,
    mode: Mode,
) -> Result<()> {
    let total = packages.len();

    for (index, package) in packages.iter().enumerate() {
        if state.task(&task_id).map(|task| task.status == "cancelled").unwrap_or(false) {
            return Ok(());
        }

        let profile_path = {
            let manager = state.manager.lock().expect("manager poisoned");
            manager
                .profile(profile_id)
                .map(|profile| profile.path.clone())
                .ok_or_else(|| anyhow!("profile disappeared"))?
        };

        update_task(&state, &task_id, |task| {
            task.status = "downloading".to_string();
            task.current = Some(format!("{} v{}", package.full_name, package.version));
            task.progress = index as f32 / total as f32;
        });

        let bytes = state.store.download(&package.version_id).await?;
        update_task(&state, &task_id, |task| {
            task.status = "extracting".to_string();
            task.progress = (index as f32 + 0.4) / total as f32;
        });

        let bepinex_layout = crate::games::by_slug(&slug)
            .map(|game| game.uses_bepinex_layout())
            .unwrap_or(true);
        let dest = profile_path.clone();
        let archive = bytes.clone();
        let files = tokio::task::spawn_blocking(move || extract_archive(&archive, &dest, bepinex_layout))
            .await
            .context("extraction panicked")??;

        {
            let mut manager = state.manager.lock().expect("manager poisoned");
            let profile = manager
                .profile_mut(profile_id)
                .ok_or_else(|| anyhow!("profile disappeared"))?;

            let uuid = state::mod_uuid(profile_id, &package.full_name).to_string();
            let existing_index = profile.mods.iter().position(|item| item.uuid == uuid);

            match existing_index {
                Some(index) => {
                    // Reinstall / version change: drop the previous files first so
                    // files removed between versions do not linger.
                    if mode == Mode::Update {
                        let snapshot = profile.mods[index].clone();
                        state::remove_mod_files(profile, &snapshot).ok();
                    }
                    let item = &mut profile.mods[index];
                    item.kind = state::ProfileModKind::Thunderstore {
                        full_name: package.full_name.clone(),
                        version: package.version.clone(),
                    };
                    item.files = files;
                    item.enabled = true;
                    item.install_time = Utc::now();
                }
                None => {
                    profile.mods.push(ProfileMod::thunderstore(
                        state::mod_uuid(profile_id, &package.full_name),
                        package.full_name.clone(),
                        package.version.clone(),
                        files,
                    ));
                }
            }

            if mode == Mode::Update {
                profile.ignored_updates.retain(|name| name != &package.full_name);
            }
        }

        state.log(
            "info",
            "install",
            format!("installed {} v{}", package.full_name, package.version),
        );

        update_task(&state, &task_id, |task| {
            task.completed = index + 1;
            task.progress = (index as f32 + 1.0) / total as f32;
        });
    }

    {
        let manager = state.manager.lock().expect("manager poisoned");
        manager.save()?;
    }

    let mut finished = state
        .task(&task_id)
        .ok_or_else(|| anyhow!("task vanished"))?;
    finished.status = "done".to_string();
    finished.progress = 1.0;
    finished.step = format!("{} {} package(s)", mode.label(), total);
    finished.current = None;
    finished.finished_at = Some(Utc::now());
    state.push_task(finished.clone());
    state.events.emit(GaleEvent::InstallSettled { task: finished });
    state.events.emit(GaleEvent::ModsChanged { profile_id });
    state.events.emit(GaleEvent::ProfilesChanged { game_slug: slug });

    Ok(())
}

fn update_task(state: &Arc<AppState>, task_id: &str, mutate: impl FnOnce(&mut InstallTask)) {
    let mut task = match state.task(task_id) {
        Some(task) => task,
        None => return,
    };
    mutate(&mut task);
    state.push_task(task.clone());
    state.events.emit(GaleEvent::InstallProgress { task });
}

/* -------------------------------------------------------------------------- */
/* Archive extraction                                                         */
/* -------------------------------------------------------------------------- */

/// Extracts a Thunderstore package into the profile directory.
///
/// * a single shared top-level folder (`BepInExPack_5.4.2100/…`) is stripped;
/// * BepInEx packages keep their own layout when they already use one of the
///   loader directories, otherwise loose files land in `BepInEx/plugins`;
/// * paths escaping the destination are rejected.
///
/// Returns the list of installed files, relative to `dest`.
pub fn extract_archive(bytes: &[u8], dest: &Path, bepinex_layout: bool) -> Result<Vec<String>> {
    let mut archive = zip::ZipArchive::new(Cursor::new(bytes)).context("opening the package archive")?;

    let mut names: Vec<String> = Vec::with_capacity(archive.len());
    for index in 0..archive.len() {
        let entry = archive.by_index(index)?;
        if entry.is_dir() {
            continue;
        }
        names.push(normalize(entry.name()));
    }

    let root = common_root(&names);
    let mut written: Vec<String> = Vec::with_capacity(names.len());

    for index in 0..archive.len() {
        let mut entry = archive.by_index(index)?;
        if entry.is_dir() {
            continue;
        }

        let raw = normalize(entry.name());
        let relative = match &root {
            Some(prefix) => raw.strip_prefix(prefix.as_str()).unwrap_or(&raw).trim_start_matches('/').to_string(),
            None => raw,
        };
        if relative.is_empty() {
            continue;
        }

        let mapped = map_path(&relative, bepinex_layout);
        if mapped.contains("..") {
            tracing::warn!(path = %mapped, "skipping unsafe archive path");
            continue;
        }

        let target = dest.join(&mapped);
        if let Some(parent) = target.parent() {
            std::fs::create_dir_all(parent)?;
        }

        let mut buffer = Vec::with_capacity(entry.size() as usize);
        entry.read_to_end(&mut buffer)?;
        let mut file = std::fs::File::create(&target)
            .with_context(|| format!("creating {}", target.display()))?;
        file.write_all(&buffer)?;
        written.push(mapped);
    }

    written.sort();
    written.dedup();
    Ok(written)
}

fn normalize(name: &str) -> String {
    name.replace('\\', "/")
}

fn common_root(names: &[String]) -> Option<String> {
    let mut iter = names.iter();
    let first = iter.next()?;
    let root = first.split('/').next()?.to_string();
    if root.is_empty() || !first.contains('/') {
        return None;
    }
    for name in iter {
        if name.split('/').next()? != root {
            return None;
        }
    }
    Some(root)
}

const LOADER_DIRS: [&str; 7] = ["bepinex", "plugins", "patchers", "config", "monomod", "doorstop", "libs"];

fn map_path(relative: &str, bepinex_layout: bool) -> String {
    if !bepinex_layout {
        return relative.to_string();
    }
    let first = relative.split('/').next().unwrap_or(relative).to_ascii_lowercase();
    if LOADER_DIRS.contains(&first.as_str()) || relative.to_ascii_lowercase().ends_with("doorstop_config.ini") {
        // `plugins/x.dll` is valid shorthand in some packs — keep it, BepInEx
        // resolves it relative to its own directory.
        return relative.to_string();
    }
    if relative.to_ascii_lowercase().ends_with(".dll")
        || relative.to_ascii_lowercase().ends_with(".cfg")
        || relative.to_ascii_lowercase().ends_with(".json")
    {
        return format!("BepInEx/plugins/{relative}");
    }
    format!("BepInEx/plugins/{relative}")
}

/// Copies a user-provided archive/folder into the profile as a local mod.
pub fn import_local(profile_dir: &Path, source: &Path) -> Result<Vec<String>> {
    let mut files = Vec::new();
    if source.is_dir() {
        for entry in walkdir::WalkDir::new(source) {
            let entry = entry?;
            if entry.file_type().is_dir() {
                continue;
            }
            let relative = entry.path().strip_prefix(source)?;
            let target = profile_dir.join("BepInEx/plugins").join(relative);
            if let Some(parent) = target.parent() {
                std::fs::create_dir_all(parent)?;
            }
            std::fs::copy(entry.path(), &target)?;
            files.push(format!("BepInEx/plugins/{}", relative.display()));
        }
    } else {
        let name = source
            .file_name()
            .map(|name| name.to_string_lossy().to_string())
            .unwrap_or_else(|| "imported.dll".to_string());
        let target = profile_dir.join("BepInEx/plugins").join(&name);
        if let Some(parent) = target.parent() {
            std::fs::create_dir_all(parent)?;
        }
        std::fs::copy(source, &target)?;
        files.push(format!("BepInEx/plugins/{name}"));
    }
    Ok(files)
}

/// `ZipArchive` is not `Send`; this keeps the blocking signature explicit for
/// callers that spawn it on the blocking pool.
pub fn extract_owned(path: PathBuf, dest: PathBuf, bepinex: bool) -> Result<Vec<String>> {
    let bytes = std::fs::read(&path)?;
    extract_archive(&bytes, &dest, bepinex)
}
