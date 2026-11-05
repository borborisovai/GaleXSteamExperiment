//! Game catalogue and Steam library detection.
//!
//! `games.json` is vendored from Gale (GPL-3.0, © Kesomannen) so GaleX knows the
//! exact same 240 Thunderstore communities, their mod loader and the folder name
//! the game uses inside `steamapps/common`.

use std::{
    path::{Path, PathBuf},
    sync::LazyLock,
};

use serde::Deserialize;

const BUNDLED_GAMES: &str = include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/../../assets/games.json"));

#[derive(Debug, Clone, Default, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ModLoaderInfo {
    #[serde(default)]
    pub name: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GameData {
    pub name: String,
    #[serde(default)]
    pub slug: Option<String>,
    #[serde(default)]
    pub popular: bool,
    #[serde(default)]
    pub r2dir_name: Option<String>,
    #[serde(default)]
    pub mod_loader: ModLoaderInfo,
}

impl GameData {
    pub fn slug(&self) -> String {
        self.slug
            .clone()
            .unwrap_or_else(|| kebab_case(&self.name))
    }

    pub fn directory(&self) -> String {
        self.r2dir_name
            .clone()
            .unwrap_or_else(|| pascal_case(&kebab_case(&self.name)))
    }

    pub fn loader_name(&self) -> String {
        if self.mod_loader.name.is_empty() {
            "BepInEx".to_string()
        } else {
            self.mod_loader.name.clone()
        }
    }

    pub fn loader_kind(&self) -> String {
        match self.loader_name().to_ascii_lowercase().as_str() {
            "bepinex" => "bepinex".into(),
            "bepisloader" => "bepinex".into(),
            "melonloader" => "melonloader".into(),
            "shimloader" => "shimloader".into(),
            "gdweave" => "gdweave".into(),
            other => other.to_string(),
        }
    }

    /// BepInEx-family loaders share the `BepInEx/plugins` layout.
    pub fn uses_bepinex_layout(&self) -> bool {
        matches!(self.loader_kind().as_str(), "bepinex" | "shimloader")
    }
}

static GAMES: LazyLock<Vec<GameData>> = LazyLock::new(|| {
    serde_json::from_str(BUNDLED_GAMES).unwrap_or_else(|err| {
        tracing::error!("bundled games.json is corrupt: {err}");
        Vec::new()
    })
});

pub fn all() -> &'static [GameData] {
    &GAMES
}

pub fn by_slug(slug: &str) -> Option<&'static GameData> {
    GAMES.iter().find(|game| game.slug() == slug)
}

pub fn kebab_case(input: &str) -> String {
    let mut out = String::with_capacity(input.len());
    let mut last_dash = true;
    for ch in input.chars() {
        if ch.is_alphanumeric() {
            for lower in ch.to_lowercase() {
                out.push(lower);
            }
            last_dash = false;
        } else if !last_dash {
            out.push('-');
            last_dash = true;
        }
    }
    while out.ends_with('-') {
        out.pop();
    }
    out
}

fn pascal_case(input: &str) -> String {
    input
        .split('-')
        .filter(|part| !part.is_empty())
        .map(|part| {
            let mut chars = part.chars();
            match chars.next() {
                Some(first) => first.to_uppercase().collect::<String>() + chars.as_str(),
                None => String::new(),
            }
        })
        .collect()
}

/* -------------------------------------------------------------------------- */
/* Steam library discovery                                                    */
/* -------------------------------------------------------------------------- */

static STEAM_LIBRARIES: LazyLock<Vec<PathBuf>> = LazyLock::new(discover_libraries);

/// Candidate `steamapps` directories, discovered once per process.
pub fn steam_libraries() -> &'static [PathBuf] {
    &STEAM_LIBRARIES
}

fn discover_libraries() -> Vec<PathBuf> {
    let mut roots: Vec<PathBuf> = Vec::new();
    let home = dirs::home_dir();

    if let Some(home) = &home {
        roots.push(home.join(".steam/steam"));
        roots.push(home.join(".steam/root"));
        roots.push(home.join(".local/share/Steam"));
        roots.push(home.join(".var/app/com.valvesoftware.Steam/.local/share/Steam"));
    }
    if cfg!(windows) {
        roots.push(PathBuf::from("C:/Program Files (x86)/Steam"));
        roots.push(PathBuf::from("C:/Program Files/Steam"));
    }

    let mut libraries: Vec<PathBuf> = Vec::new();
    for root in roots {
        let steamapps = root.join("steamapps");
        if steamapps.is_dir() && !libraries.contains(&steamapps) {
            libraries.push(steamapps.clone());
        }
        // Additional libraries are declared in libraryfolders.vdf.
        let vdf = steamapps.join("libraryfolders.vdf");
        if let Ok(text) = std::fs::read_to_string(&vdf) {
            for line in text.lines() {
                let trimmed = line.trim();
                if !trimmed.starts_with("\"path\"") && !trimmed.starts_with("\"Path\"") {
                    continue;
                }
                if let Some(value) = quoted_value(trimmed) {
                    let candidate = PathBuf::from(value).join("steamapps");
                    if candidate.is_dir() && !libraries.contains(&candidate) {
                        libraries.push(candidate);
                    }
                }
            }
        }
    }
    libraries
}

fn quoted_value(line: &str) -> Option<String> {
    let mut parts = line.split('"').skip(1);
    let _key = parts.next()?;
    let value = parts.next()?;
    Some(value.replace("\\\\", "\\"))
}

/// Tries to locate `steamapps/common/<dir>` for a known game.
pub fn detect_install(game: &GameData) -> Option<PathBuf> {
    let dir = game.directory();
    steam_libraries()
        .iter()
        .map(|library| library.join("common").join(&dir))
        .find(|candidate| candidate.is_dir())
}

pub fn steam_detected() -> bool {
    !steam_libraries().is_empty()
}

/// `steam -applaunch <id>` needs the numeric id; Thunderstore does not carry it,
/// so we keep a small table for the communities this build is tested against and
/// fall back to the `steam://rungameid/` deep link otherwise.
pub fn steam_app_id(slug: &str) -> Option<u32> {
    Some(match slug {
        "lethal-company" => 1_966_720,
        "repo" => 3_241_660,
        "riskofrain2" => 632_360,
        "valheim" => 892_970,
        "content-warning" => 2_889_840,
        "peak" => 2_962_200,
        "rounds" => 1_558_999,
        "vrising" => 1_600_429,
        "subnautica" => 264_710,
        "muck" => 1_626_451,
        _ => return None,
    })
}

pub fn profile_root(data_dir: &Path, slug: &str) -> PathBuf {
    data_dir.join("profiles").join(slug)
}
