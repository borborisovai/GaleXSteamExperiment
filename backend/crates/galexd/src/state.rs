//! Persistent manager state: managed games, their profiles and installed mods.
//!
//! The on-disk format is Gale-compatible in spirit (`ProfileMod` keeps
//! `enabled` / `installTime` and the Thunderstore identifier as `fullName`), so a
//! profile folder written here can be opened by Gale and vice versa.

use std::{
    collections::{HashMap, HashSet},
    path::{Path, PathBuf},
};

use anyhow::{Context, Result};
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::model::{Mod, ModUpdate, Profile as ProfileDto};
use crate::store::{self, Listing};

pub const STATE_FILE: &str = "state.json";

#[derive(Serialize, Deserialize, Clone, Debug, Default)]
#[serde(rename_all = "camelCase")]
pub struct SaveData {
    pub games: HashMap<String, ManagedGame>,
    pub active_game: Option<String>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct ManagedGame {
    pub slug: String,
    pub path: PathBuf,
    pub favorite: bool,
    pub profiles: Vec<Profile>,
    pub active_profile_id: u64,
    pub next_profile_id: u64,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Profile {
    pub id: u64,
    pub game_slug: String,
    pub name: String,
    pub path: PathBuf,
    #[serde(default)]
    pub mods: Vec<ProfileMod>,
    #[serde(default)]
    pub custom_args: String,
    #[serde(default = "Utc::now")]
    pub created_at: DateTime<Utc>,
    /// Full names the user pinned to their current version.
    #[serde(default)]
    pub ignored_updates: Vec<String>,
}

impl Profile {
    pub fn has_mod(&self, full_name: &str) -> bool {
        self.mods.iter().any(|item| match &item.kind {
            ProfileModKind::Thunderstore { full_name: existing, .. } => existing == full_name,
            ProfileModKind::Local { .. } => false,
        })
    }

    pub fn thunderstore_mod(&self, full_name: &str) -> Option<&ProfileMod> {
        self.mods.iter().find(|item| match &item.kind {
            ProfileModKind::Thunderstore { full_name: existing, .. } => existing == full_name,
            ProfileModKind::Local { .. } => false,
        })
    }

    pub fn find(&self, uuid: &str) -> Option<&ProfileMod> {
        self.mods.iter().find(|item| item.uuid == uuid)
    }

    pub fn find_mut(&mut self, uuid: &str) -> Option<&mut ProfileMod> {
        self.mods.iter_mut().find(|item| item.uuid == uuid)
    }
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(rename_all = "camelCase")]
pub struct ProfileMod {
    pub uuid: String,
    pub enabled: bool,
    #[serde(default = "Utc::now")]
    pub install_time: DateTime<Utc>,
    #[serde(flatten)]
    pub kind: ProfileModKind,
    /// Files installed by this package, relative to the profile directory.
    /// Needed to toggle (`.old`) and uninstall it later.
    #[serde(default)]
    pub files: Vec<String>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
#[serde(untagged)]
pub enum ProfileModKind {
    Thunderstore { full_name: String, version: String },
    Local { name: String, version: String, local_path: String },
}

impl ProfileMod {
    pub fn thunderstore(uuid: Uuid, full_name: impl Into<String>, version: impl Into<String>, files: Vec<String>) -> Self {
        Self {
            uuid: uuid.to_string(),
            enabled: true,
            install_time: Utc::now(),
            kind: ProfileModKind::Thunderstore {
                full_name: full_name.into(),
                version: version.into(),
            },
            files,
        }
    }

    pub fn display_name(&self) -> String {
        match &self.kind {
            ProfileModKind::Thunderstore { full_name, .. } => {
                full_name.splitn(2, '-').nth(1).unwrap_or(full_name).to_string()
            }
            ProfileModKind::Local { name, .. } => name.clone(),
        }
    }

    pub fn is_local(&self) -> bool {
        matches!(self.kind, ProfileModKind::Local { .. })
    }
}

pub struct Manager {
    pub data: SaveData,
    path: PathBuf,
    data_dir: PathBuf,
}

impl Manager {
    pub fn load(data_dir: &Path) -> Result<Self> {
        std::fs::create_dir_all(data_dir).ok();
        let path = data_dir.join(STATE_FILE);
        let data = if path.exists() {
            let raw = std::fs::read_to_string(&path).with_context(|| format!("reading {}", path.display()))?;
            serde_json::from_str(&raw).unwrap_or_else(|err| {
                tracing::error!("state.json is corrupt ({err}); starting with an empty manager");
                SaveData::default()
            })
        } else {
            SaveData::default()
        };

        Ok(Self {
            data,
            path,
            data_dir: data_dir.to_path_buf(),
        })
    }

    pub fn save(&self) -> Result<()> {
        let json = serde_json::to_string_pretty(&self.data)?;
        let tmp = self.path.with_extension("json.tmp");
        std::fs::write(&tmp, json)?;
        std::fs::rename(&tmp, &self.path)?;
        Ok(())
    }

    pub fn data_dir(&self) -> &Path {
        &self.data_dir
    }

    pub fn game(&self, slug: &str) -> Option<&ManagedGame> {
        self.data.games.get(slug)
    }

    pub fn game_mut(&mut self, slug: &str) -> Option<&mut ManagedGame> {
        self.data.games.get_mut(slug)
    }

    pub fn register_game(&mut self, slug: &str, path: PathBuf) -> Result<u64> {
        let data_dir = self.data_dir.clone();
        let entry = self.data.games.entry(slug.to_string()).or_insert_with(|| ManagedGame {
            slug: slug.to_string(),
            path: path.clone(),
            favorite: false,
            profiles: Vec::new(),
            active_profile_id: 0,
            next_profile_id: 1,
        });

        if entry.path.as_os_str().is_empty() {
            entry.path = path;
        }

        if entry.profiles.is_empty() {
            let next_id = entry.next_profile_id;
            entry.next_profile_id += 1;
            entry.active_profile_id = next_id;
            let profile_path = profile_dir(&data_dir, slug, "Default", next_id);
            entry.profiles.push(Profile {
                id: next_id,
                game_slug: slug.to_string(),
                name: "Default".to_string(),
                path: profile_path,
                mods: Vec::new(),
                custom_args: String::new(),
                created_at: Utc::now(),
                ignored_updates: Vec::new(),
            });
        }

        let active_profile_id = entry.active_profile_id;
        let profile_paths: Vec<PathBuf> = entry.profiles.iter().map(|profile| profile.path.clone()).collect();

        self.data.active_game = Some(slug.to_string());
        self.save()?;

        for profile_path in profile_paths {
            std::fs::create_dir_all(&profile_path).ok();
        }

        Ok(active_profile_id)
    }

    pub fn create_profile(&mut self, slug: &str, name: &str, duplicate_of: Option<u64>) -> Result<u64> {
        let data_dir = self.data_dir.clone();
        let game = self
            .data
            .games
            .get_mut(slug)
            .with_context(|| format!("game {slug} is not managed"))?;

        let id = game.next_profile_id;
        game.next_profile_id += 1;
        let path = profile_dir(&data_dir, slug, name, id);

        // Clone everything we need from the source profile so the borrow ends
        // before we append the new entry.
        let source = duplicate_of
            .and_then(|wanted| game.profiles.iter().find(|profile| profile.id == wanted))
            .map(|profile| {
                (
                    profile.path.clone(),
                    profile.mods.clone(),
                    profile.custom_args.clone(),
                    profile.ignored_updates.clone(),
                )
            });

        let mut mods = Vec::new();
        let mut custom_args = String::new();
        let mut ignored_updates = Vec::new();
        if let Some((source_path, source_mods, source_args, source_ignored)) = source {
            copy_dir(&source_path, &path).ok();
            mods = source_mods;
            custom_args = source_args;
            ignored_updates = source_ignored;
        }
        std::fs::create_dir_all(&path).ok();

        game.profiles.push(Profile {
            id,
            game_slug: slug.to_string(),
            name: name.to_string(),
            path,
            mods,
            custom_args,
            created_at: Utc::now(),
            ignored_updates,
        });

        self.save()?;
        Ok(id)
    }

    pub fn delete_profile(&mut self, id: u64) -> Result<()> {
        let remove = self.remove_profile_dir(id, true)?;
        if let Some((slug, _)) = remove {
            if let Some(game) = self.data.games.get_mut(&slug) {
                if game.active_profile_id == id {
                    if let Some(first) = game.profiles.first() {
                        game.active_profile_id = first.id;
                    }
                }
            }
            self.save()?;
        }
        Ok(())
    }

    fn remove_profile_dir(&mut self, id: u64, delete_files: bool) -> Result<Option<(String, PathBuf)>> {
        let mut found: Option<(String, PathBuf)> = None;
        for game in self.data.games.values_mut() {
            if let Some(index) = game.profiles.iter().position(|profile| profile.id == id) {
                let profile = game.profiles.remove(index);
                found = Some((game.slug.clone(), profile.path));
                break;
            }
        }
        if let (Some((_, path)), true) = (&found, delete_files) {
            std::fs::remove_dir_all(path).ok();
        }
        Ok(found)
    }

    pub fn activate_profile(&mut self, id: u64) -> Result<()> {
        let mut active_slug: Option<String> = None;
        for game in self.data.games.values_mut() {
            if game.profiles.iter().any(|profile| profile.id == id) {
                game.active_profile_id = id;
                active_slug = Some(game.slug.clone());
                break;
            }
        }
        if let Some(slug) = active_slug {
            self.data.active_game = Some(slug);
        }
        self.save()
    }

    pub fn find_profile(&self, id: u64) -> Option<(&ManagedGame, &Profile)> {
        self.data.games.values().find_map(|game| {
            game.profiles
                .iter()
                .find(|profile| profile.id == id)
                .map(|profile| (game, profile))
        })
    }

    pub fn profile(&self, id: u64) -> Option<&Profile> {
        self.find_profile(id).map(|(_, profile)| profile)
    }

    pub fn profile_mut(&mut self, id: u64) -> Option<&mut Profile> {
        self.data
            .games
            .values_mut()
            .find_map(|game| game.profiles.iter_mut().find(|profile| profile.id == id))
    }
}

pub fn profile_dir(data_dir: &Path, slug: &str, name: &str, id: u64) -> PathBuf {
    let sanitized: String = name
        .chars()
        .map(|ch| if ch.is_alphanumeric() || ch == ' ' || ch == '-' || ch == '_' { ch } else { '_' })
        .collect();
    let folder = format!("{}-{}", sanitized.trim(), id);
    data_dir.join("profiles").join(slug).join(folder)
}

fn copy_dir(from: &Path, to: &Path) -> Result<()> {
    for entry in walkdir::WalkDir::new(from) {
        let entry = entry?;
        let relative = entry.path().strip_prefix(from)?;
        let target = to.join(relative);
        if entry.file_type().is_dir() {
            std::fs::create_dir_all(&target)?;
        } else {
            if let Some(parent) = target.parent() {
                std::fs::create_dir_all(parent)?;
            }
            std::fs::copy(entry.path(), &target)?;
        }
    }
    Ok(())
}

/* -------------------------------------------------------------------------- */
/* Composition helpers                                                        */
/* -------------------------------------------------------------------------- */

pub fn profile_dto(game: &ManagedGame, profile: &Profile, listings: &[Listing]) -> ProfileDto {
    let mods = compose_mods(profile, listings);
    let enabled = mods.iter().filter(|item| item.enabled).count();
    let updates = mods
        .iter()
        .filter(|item| item.update.is_some() && !item.ignored_update)
        .count();

    ProfileDto {
        id: profile.id,
        game_slug: profile.game_slug.clone(),
        name: profile.name.clone(),
        path: profile.path.display().to_string(),
        active: game.active_profile_id == profile.id,
        mod_count: mods.len(),
        enabled_count: enabled,
        update_count: updates,
        custom_args: profile.custom_args.clone(),
        missing: !profile.path.exists(),
        created_at: Some(profile.created_at),
    }
}

pub fn compose_mods(profile: &Profile, listings: &[Listing]) -> Vec<Mod> {
    let installed_names: HashSet<&str> = profile
        .mods
        .iter()
        .filter_map(|item| match &item.kind {
            ProfileModKind::Thunderstore { full_name, .. } => Some(full_name.as_str()),
            ProfileModKind::Local { .. } => None,
        })
        .collect();

    let has_config = profile.path.join("BepInEx/config").is_dir();

    let mut mods: Vec<Mod> = profile
        .mods
        .iter()
        .map(|item| match &item.kind {
            ProfileModKind::Thunderstore { full_name, version } => {
                let listing = store::find(listings, full_name);
                let installed_version = listing.and_then(|entry| entry.version(version));
                let latest = listing.and_then(|entry| entry.latest());

                let dependencies: Vec<String> = installed_version
                    .map(|entry| entry.dependencies.clone())
                    .unwrap_or_default();

                let missing: Vec<String> = dependencies
                    .iter()
                    .filter(|dep| !installed_names.contains(store::full_name_of(dep).as_str()))
                    .cloned()
                    .collect();

                let dependants: Vec<String> = profile
                    .mods
                    .iter()
                    .filter(|other| {
                        if other.uuid == item.uuid {
                            return false;
                        }
                        match &other.kind {
                            ProfileModKind::Thunderstore { full_name: other_name, version: other_version } => {
                                let deps = store::find(listings, other_name)
                                    .and_then(|entry| entry.version(other_version))
                                    .map(|entry| entry.dependencies.clone())
                                    .unwrap_or_default();
                                deps.iter().any(|dep| store::full_name_of(dep) == *full_name)
                            }
                            ProfileModKind::Local { .. } => false,
                        }
                    })
                    .map(|other| other.uuid.clone())
                    .collect();

                let update = match (latest, listing) {
                    (Some(latest), Some(_)) => {
                        if store::cmp_versions(&latest.version_number, version) == std::cmp::Ordering::Greater {
                            Some(ModUpdate {
                                version: latest.version_number.clone(),
                                version_id: latest.full_name.clone(),
                                published_at: latest.date_created.clone(),
                                changelog: None,
                            })
                        } else {
                            None
                        }
                    }
                    _ => None,
                };

                Mod {
                    uuid: item.uuid.clone(),
                    kind: "thunderstore".to_string(),
                    enabled: item.enabled,
                    name: item.display_name(),
                    author: full_name.split('-').next().unwrap_or(full_name).to_string(),
                    full_name: full_name.clone(),
                    version: version.clone(),
                    version_id: format!("{full_name}-{version}"),
                    description: installed_version
                        .map(|entry| entry.description.clone())
                        .unwrap_or_default(),
                    icon_url: None,
                    install_time: item.install_time,
                    size_bytes: installed_version.map(|entry| entry.file_size).unwrap_or(0),
                    dependencies,
                    missing_dependencies: missing,
                    dependant_uuids: dependants,
                    update,
                    ignored_update: profile.ignored_updates.contains(full_name),
                    categories: listing.map(|entry| entry.categories.clone()).unwrap_or_default(),
                    rating_score: listing.map(|entry| entry.rating_score).unwrap_or(0),
                    total_downloads: listing.map(|entry| entry.total_downloads()).unwrap_or(0),
                    has_config,
                    deprecated: listing.map(|entry| entry.is_deprecated).unwrap_or(false),
                    modpack: listing.map(|entry| entry.is_modpack()).unwrap_or(false),
                    local_path: None,
                }
            }
            ProfileModKind::Local { name, version, local_path } => Mod {
                uuid: item.uuid.clone(),
                kind: "local".to_string(),
                enabled: item.enabled,
                name: name.clone(),
                author: "local".to_string(),
                full_name: name.clone(),
                version: version.clone(),
                version_id: format!("{name}-{version}"),
                description: "Locally imported package".to_string(),
                icon_url: None,
                install_time: item.install_time,
                size_bytes: item.files.iter().fold(0u64, |acc, file| {
                    acc + profile
                        .path
                        .join(file)
                        .metadata()
                        .map(|meta| meta.len())
                        .unwrap_or(0)
                }),
                dependencies: Vec::new(),
                missing_dependencies: Vec::new(),
                dependant_uuids: Vec::new(),
                update: None,
                ignored_update: false,
                categories: vec!["Locally imported".to_string()],
                rating_score: 0,
                total_downloads: 0,
                has_config: false,
                deprecated: false,
                modpack: false,
                local_path: Some(local_path.clone()),
            },
        })
        .collect();

    mods.sort_by(|a, b| a.name.to_lowercase().cmp(&b.name.to_lowercase()));
    mods
}

/// Renames the files of a mod to `*.old` (disable) or back (enable).
pub fn set_mod_files_enabled(profile: &Profile, item: &ProfileMod, enabled: bool) -> Result<()> {
    for relative in &item.files {
        let path = profile.path.join(relative);
        let target = if enabled {
            path.clone()
        } else {
            PathBuf::from(format!("{}.old", path.display()))
        };
        let source = if enabled {
            PathBuf::from(format!("{}.old", path.display()))
        } else {
            path.clone()
        };

        if source.exists() && !target.exists() {
            if let Some(parent) = target.parent() {
                std::fs::create_dir_all(parent).ok();
            }
            std::fs::rename(&source, &target)
                .with_context(|| format!("renaming {}", source.display()))?;
        }
    }
    Ok(())
}

pub fn remove_mod_files(profile: &Profile, item: &ProfileMod) -> Result<()> {
    for relative in &item.files {
        let path = profile.path.join(relative);
        let old = PathBuf::from(format!("{}.old", path.display()));
        std::fs::remove_file(&path).ok();
        std::fs::remove_file(&old).ok();
    }
    Ok(())
}

/// Deterministic uuid per (profile, package) so the UI keeps stable keys.
pub fn mod_uuid(profile_id: u64, full_name: &str) -> Uuid {
    Uuid::new_v5(&Uuid::NAMESPACE_OID, format!("galex:{profile_id}:{full_name}").as_bytes())
}
