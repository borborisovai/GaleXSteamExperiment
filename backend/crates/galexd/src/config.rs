//! BepInEx `.cfg` reader/writer.
//!
//! BepInEx emits a very regular format:
//!
//! ```ini
//! [Section]
//!
//! ## Short description of the setting
//! # Setting type: Single
//! # Default value: 0.35
//! FogDensity = 0.42
//! ```
//!
//! We read those comment hints to give the UI typed controls (bool switch, enum
//! dropdown, slider with min/max) and rewrite a single value in place while
//! keeping every other byte of the file intact.

use std::path::{Path, PathBuf};

use anyhow::{Context, Result};
use serde_json::{json, Value};

use crate::model::{ConfigEntry, ConfigFile};

#[derive(Debug, Clone)]
enum Line {
    Raw(String),
    Section(String),
    Entry { key: String, value: String },
}

#[derive(Debug, Clone)]
struct Parsed {
    lines: Vec<Line>,
}

impl Parsed {
    fn parse(text: &str) -> Self {
        let mut lines = Vec::new();
        for raw in text.lines() {
            let trimmed = raw.trim();
            if trimmed.starts_with('[') && trimmed.ends_with(']') {
                let name = trimmed[1..trimmed.len() - 1].trim().to_string();
                lines.push(Line::Section(name));
                continue;
            }
            if trimmed.is_empty() || trimmed.starts_with('#') || trimmed.starts_with(';') {
                lines.push(Line::Raw(raw.to_string()));
                continue;
            }
            match trimmed.split_once('=') {
                Some((key, value)) => lines.push(Line::Entry {
                    key: key.trim().to_string(),
                    value: value.trim().to_string(),
                }),
                None => lines.push(Line::Raw(raw.to_string())),
            }
        }
        Self { lines }
    }

    fn render(&self) -> String {
        let mut out = String::new();
        for line in &self.lines {
            match line {
                Line::Raw(raw) => out.push_str(raw),
                Line::Section(name) => {
                    out.push('[');
                    out.push_str(name);
                    out.push(']');
                }
                Line::Entry { key, value } => {
                    out.push_str(key);
                    out.push_str(" = ");
                    out.push_str(value);
                }
            }
            out.push('\n');
        }
        out
    }

    fn set(&mut self, section: &str, key: &str, value: &str) -> bool {
        let mut current = String::new();
        for line in self.lines.iter_mut() {
            match line {
                Line::Section(name) => current = name.clone(),
                Line::Entry { key: entry_key, value: entry_value } => {
                    if current == section && entry_key == key {
                        *entry_value = value.to_string();
                        return true;
                    }
                }
                Line::Raw(_) => {}
            }
        }
        false
    }

    fn get(&self, section: &str, key: &str) -> Option<String> {
        let mut current = String::new();
        for line in &self.lines {
            match line {
                Line::Section(name) => current = name.clone(),
                Line::Entry { key: entry_key, value } => {
                    if current == section && entry_key == key {
                        return Some(value.clone());
                    }
                }
                Line::Raw(_) => {}
            }
        }
        None
    }
}

fn config_dir(profile_dir: &Path) -> PathBuf {
    profile_dir.join("BepInEx").join("config")
}

/// Lists every `.cfg` file below `BepInEx/config`.
pub fn list(profile_dir: &Path) -> Vec<ConfigFile> {
    let dir = config_dir(profile_dir);
    let mut files = Vec::new();
    if !dir.is_dir() {
        return files;
    }

    for entry in walkdir::WalkDir::new(&dir).into_iter().flatten() {
        if !entry.file_type().is_file() {
            continue;
        }
        let path = entry.path();
        if path.extension().and_then(|ext| ext.to_str()) != Some("cfg") {
            continue;
        }
        let Ok(text) = std::fs::read_to_string(path) else {
            continue;
        };
        let relative = path
            .strip_prefix(profile_dir)
            .unwrap_or(path)
            .display()
            .to_string();
        let name = path
            .file_name()
            .map(|name| name.to_string_lossy().to_string())
            .unwrap_or_else(|| relative.clone());

        files.push(ConfigFile {
            plugin: plugin_name(&name),
            path: relative.replace('\\', "/"),
            name,
            entries: parse_entries(&text),
        });
    }

    files.sort_by(|a, b| a.name.to_lowercase().cmp(&b.name.to_lowercase()));
    files
}

fn plugin_name(file_name: &str) -> Option<String> {
    let stem = file_name.trim_end_matches(".cfg");
    // BepInEx names files after the plugin GUID: `com.author.plugin.cfg`.
    if stem.contains('.') {
        let parts: Vec<&str> = stem.split('.').collect();
        parts.last().map(|part| capitalize(part))
    } else {
        None
    }
}

fn capitalize(input: &str) -> String {
    let mut chars = input.chars();
    match chars.next() {
        Some(first) => first.to_uppercase().collect::<String>() + chars.as_str(),
        None => String::new(),
    }
}

/// Parses entries of a single file: typed value, default and description.
pub fn parse_entries(text: &str) -> Vec<ConfigEntry> {
    let mut entries = Vec::new();
    let mut section = String::from("General");
    let mut pending: Vec<String> = Vec::new();

    for raw in text.lines() {
        let trimmed = raw.trim();
        if trimmed.starts_with('[') && trimmed.ends_with(']') {
            section = trimmed[1..trimmed.len() - 1].trim().to_string();
            pending.clear();
            continue;
        }
        if trimmed.starts_with('#') || trimmed.starts_with(';') {
            pending.push(trimmed.trim_start_matches(|ch| ch == '#' || ch == ';').trim().to_string());
            continue;
        }
        if trimmed.is_empty() {
            continue;
        }
        let Some((key, raw_value)) = trimmed.split_once('=') else {
            continue;
        };
        let key = key.trim().to_string();
        let raw_value = raw_value.trim().to_string();

        let setting_type = find_hint(&pending, "Setting type:");
        let default_raw = find_hint(&pending, "Default value:");
        let choices = find_hint(&pending, "Acceptable values:").map(|value| {
            value
                .split(',')
                .map(|part| part.trim().to_string())
                .filter(|part| !part.is_empty())
                .collect::<Vec<String>>()
        });
        let description = pending
            .iter()
            .find(|line| !line.starts_with("Setting type:") && !line.starts_with("Default value:") && !line.starts_with("Acceptable values:") && !line.is_empty())
            .cloned();

        let kind = infer_type(&raw_value, setting_type.as_deref(), choices.as_ref());
        let value = typed_value(&raw_value, &kind);
        let default_value = default_raw.as_deref().map(|raw| typed_value(raw, &kind));

        entries.push(ConfigEntry {
            section: section.clone(),
            key,
            kind,
            value,
            default_value,
            description,
            choices,
            min: None,
            max: None,
            modified: false,
        });
        pending.clear();
    }

    entries
}

fn find_hint(lines: &[String], prefix: &str) -> Option<String> {
    lines
        .iter()
        .find(|line| line.starts_with(prefix))
        .map(|line| line[prefix.len()..].trim().to_string())
}

fn infer_type(raw: &str, setting_type: Option<&str>, choices: Option<&Vec<String>>) -> String {
    if let Some(choices) = choices {
        if choices.len() > 1 {
            return "enum".to_string();
        }
    }
    if let Some(setting_type) = setting_type {
        let lowered = setting_type.to_ascii_lowercase();
        if lowered.contains("boolean") || lowered.contains("bool") {
            return "bool".to_string();
        }
        if lowered.contains("integer") || lowered.contains("int") {
            return "int".to_string();
        }
        if lowered.contains("single") || lowered.contains("float") || lowered.contains("double") {
            return "float".to_string();
        }
        if lowered.contains("enum") {
            return "enum".to_string();
        }
        if lowered.contains("keycode") {
            return "key".to_string();
        }
        if lowered.contains("string") {
            return "string".to_string();
        }
    }

    match raw {
        "true" | "false" => "bool".to_string(),
        _ => {
            if raw.parse::<i64>().is_ok() {
                "int".to_string()
            } else if raw.parse::<f64>().is_ok() {
                "float".to_string()
            } else {
                "string".to_string()
            }
        }
    }
}

fn typed_value(raw: &str, kind: &str) -> Value {
    match kind {
        "bool" => json!(raw.eq_ignore_ascii_case("true")),
        "int" => json!(raw.parse::<i64>().unwrap_or(0)),
        "float" => json!(raw.parse::<f64>().unwrap_or(0.0)),
        _ => json!(raw),
    }
}

fn render_value(value: &Value) -> String {
    match value {
        Value::Bool(inner) => inner.to_string(),
        Value::Number(inner) => inner.to_string(),
        Value::String(inner) => inner.clone(),
        Value::Null => String::new(),
        other => other.to_string(),
    }
}

fn read_parsed(profile_dir: &Path, relative: &str) -> Result<(PathBuf, Parsed)> {
    let path = profile_dir.join(relative.replace('/', std::path::MAIN_SEPARATOR_STR));
    let text = std::fs::read_to_string(&path).with_context(|| format!("reading {}", path.display()))?;
    Ok((path, Parsed::parse(&text)))
}

fn build_file(_profile_dir: &Path, relative: &str, parsed: &Parsed) -> ConfigFile {
    let name = Path::new(relative)
        .file_name()
        .map(|name| name.to_string_lossy().to_string())
        .unwrap_or_else(|| relative.to_string());

    ConfigFile {
        path: relative.to_string(),
        name: name.clone(),
        plugin: plugin_name(&name),
        entries: parse_entries(&parsed.render()),
    }
}

/// Writes a single value and returns the refreshed file description.
pub fn set_value(profile_dir: &Path, relative: &str, section: &str, key: &str, value: &Value) -> Result<ConfigFile> {
    let (path, mut parsed) = read_parsed(profile_dir, relative)?;
    let rendered = render_value(value);
    if !parsed.set(section, key, &rendered) {
        anyhow::bail!("{section}.{key} does not exist in {relative}");
    }
    std::fs::write(&path, parsed.render())?;
    Ok(build_file(profile_dir, relative, &parsed))
}

/// Restores the documented default, if the file carries one.
pub fn reset_value(profile_dir: &Path, relative: &str, section: &str, key: &str) -> Result<ConfigFile> {
    let (path, parsed) = read_parsed(profile_dir, relative)?;
    let text = parsed.render();
    let entry = parse_entries(&text)
        .into_iter()
        .find(|entry| entry.section == section && entry.key == key)
        .with_context(|| format!("{section}.{key} does not exist in {relative}"))?;
    let default = entry
        .default_value
        .with_context(|| format!("no documented default for {section}.{key}"))?;

    let mut parsed = Parsed::parse(&text);
    let rendered = render_value(&default);
    parsed.set(section, key, &rendered);
    std::fs::write(&path, parsed.render())?;
    Ok(build_file(profile_dir, relative, &parsed))
}

/// Marks entries whose value differs from the documented default.
pub fn with_modified_flags(mut files: Vec<ConfigFile>) -> Vec<ConfigFile> {
    for file in files.iter_mut() {
        for entry in file.entries.iter_mut() {
            entry.modified = match &entry.default_value {
                Some(default) => default != &entry.value,
                None => false,
            };
        }
    }
    files
}
