//! Wire types. Field names and shapes mirror `frontend/src/lib/types.ts`
//! one-to-one — change both sides together (`docs/HTTP-API.md` is the contract).

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use serde_json::Value;

/* -------------------------------------------------------------------------- */
/* Games & profiles                                                           */
/* -------------------------------------------------------------------------- */

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Game {
    pub slug: String,
    pub name: String,
    pub popular: bool,
    pub mod_loader: String,
    pub mod_loader_kind: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub runtime: Option<String>,
    pub managed: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub path: Option<String>,
    pub favorite: bool,
    pub profile_count: usize,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub active_profile_id: Option<u64>,
    pub installed_mod_count: usize,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub detected_path: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Profile {
    pub id: u64,
    pub game_slug: String,
    pub name: String,
    pub path: String,
    pub active: bool,
    pub mod_count: usize,
    pub enabled_count: usize,
    pub update_count: usize,
    pub custom_args: String,
    pub missing: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_at: Option<DateTime<Utc>>,
}

/* -------------------------------------------------------------------------- */
/* Mods                                                                       */
/* -------------------------------------------------------------------------- */

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ModUpdate {
    pub version: String,
    pub version_id: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub published_at: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub changelog: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Mod {
    pub uuid: String,
    /// `thunderstore` or `local`.
    pub kind: String,
    pub enabled: bool,
    pub name: String,
    pub author: String,
    pub full_name: String,
    pub version: String,
    pub version_id: String,
    pub description: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub icon_url: Option<String>,
    pub install_time: DateTime<Utc>,
    pub size_bytes: u64,
    pub dependencies: Vec<String>,
    pub missing_dependencies: Vec<String>,
    pub dependant_uuids: Vec<String>,
    pub update: Option<ModUpdate>,
    pub ignored_update: bool,
    pub categories: Vec<String>,
    pub rating_score: u32,
    pub total_downloads: u64,
    pub has_config: bool,
    pub deprecated: bool,
    pub modpack: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub local_path: Option<String>,
}

/* -------------------------------------------------------------------------- */
/* Thunderstore                                                               */
/* -------------------------------------------------------------------------- */

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PackageCard {
    pub full_name: String,
    pub name: String,
    pub owner: String,
    pub description: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub icon_url: Option<String>,
    pub rating_score: u32,
    pub total_downloads: u64,
    pub date_updated: String,
    pub version: String,
    pub version_id: String,
    pub categories: Vec<String>,
    pub deprecated: bool,
    pub pinned: bool,
    pub modpack: bool,
    pub installed: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub installed_version: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PackageVersion {
    pub version: String,
    pub version_id: String,
    pub date_created: String,
    pub downloads: u32,
    pub file_size: u64,
    pub dependencies: Vec<String>,
    pub changelog: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DependencyPreview {
    pub full_name: String,
    pub version_id: String,
    pub name: String,
    pub installed: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PackageDetail {
    pub full_name: String,
    pub name: String,
    pub owner: String,
    pub description: String,
    pub markdown: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub icon_url: Option<String>,
    pub rating_score: u32,
    pub total_downloads: u64,
    pub categories: Vec<String>,
    pub deprecated: bool,
    pub modpack: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub website_url: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub donation_link: Option<String>,
    pub date_created: String,
    pub date_updated: String,
    pub versions: Vec<PackageVersion>,
    pub dependency_preview: Vec<DependencyPreview>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Category {
    pub name: String,
    pub slug: String,
    pub count: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct BrowseResult {
    pub total: usize,
    pub page: usize,
    pub page_size: usize,
    pub packages: Vec<PackageCard>,
}

/* -------------------------------------------------------------------------- */
/* Config                                                                     */
/* -------------------------------------------------------------------------- */

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ConfigEntry {
    pub section: String,
    pub key: String,
    #[serde(rename = "type")]
    pub kind: String,
    pub value: Value,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub default_value: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub choices: Option<Vec<String>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub min: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub max: Option<f64>,
    pub modified: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ConfigFile {
    pub path: String,
    pub name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub plugin: Option<String>,
    pub entries: Vec<ConfigEntry>,
}

/* -------------------------------------------------------------------------- */
/* Installs & logs                                                            */
/* -------------------------------------------------------------------------- */

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct InstallTask {
    pub id: String,
    pub profile_id: u64,
    pub game_slug: String,
    pub status: String,
    pub progress: f32,
    pub step: String,
    pub total: usize,
    pub completed: usize,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub current: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub error: Option<String>,
    pub started_at: DateTime<Utc>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub finished_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LogEntry {
    pub id: u64,
    pub at: DateTime<Utc>,
    pub level: String,
    pub scope: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Health {
    pub ok: bool,
    pub version: String,
    pub core: String,
    pub data_dir: String,
    pub platform: String,
    pub uptime_sec: u64,
    pub steam_detected: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ExportResult {
    pub code: String,
    pub file_count: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ImportResult {
    pub profile: Profile,
    pub installed: usize,
    pub skipped: usize,
}

/* -------------------------------------------------------------------------- */
/* Request bodies                                                             */
/* -------------------------------------------------------------------------- */

#[derive(Debug, Deserialize)]
pub struct ManageGameBody {
    #[serde(default)]
    pub path: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct FavoriteBody {
    pub favorite: bool,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CreateProfileBody {
    #[serde(default)]
    pub name: Option<String>,
    #[serde(default)]
    pub duplicate_of: Option<u64>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UpdateProfileBody {
    #[serde(default)]
    pub name: Option<String>,
    #[serde(default)]
    pub custom_args: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct ToggleModBody {
    pub enabled: bool,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct VersionBody {
    pub version_id: String,
}

#[derive(Debug, Deserialize)]
pub struct IgnoreUpdateBody {
    pub ignore: bool,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InstallBody {
    #[serde(default)]
    pub version_ids: Vec<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateBody {
    #[serde(default)]
    pub uuids: Option<Vec<String>>,
}

#[derive(Debug, Deserialize)]
pub struct LaunchBody {
    #[serde(default)]
    pub vanilla: bool,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ImportBody {
    #[serde(default)]
    pub game_slug: Option<String>,
    pub code: String,
}

#[derive(Debug, Deserialize)]
pub struct ConfigBody {
    pub file: String,
    pub section: String,
    pub key: String,
    pub value: Value,
}

#[derive(Debug, Deserialize)]
pub struct ConfigResetBody {
    pub file: String,
    pub section: String,
    pub key: String,
}

#[derive(Debug, Deserialize)]
pub struct ForceQuery {
    #[serde(default)]
    pub force: Option<bool>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BrowseQuery {
    #[serde(default)]
    pub search: Option<String>,
    #[serde(default)]
    pub category: Option<String>,
    #[serde(default)]
    pub sort: Option<String>,
    #[serde(default)]
    pub deprecated: Option<String>,
    #[serde(default)]
    pub page: Option<usize>,
    #[serde(default)]
    pub page_size: Option<usize>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LogsQuery {
    #[serde(default)]
    pub limit: Option<usize>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InstallsQuery {
    #[serde(default)]
    pub game_slug: Option<String>,
}
