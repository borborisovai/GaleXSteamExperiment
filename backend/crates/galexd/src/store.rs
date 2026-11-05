//! Thunderstore client.
//!
//! Endpoints are the same ones Gale uses:
//!  * index:    `GET https://thunderstore.io/c/{slug}/api/v1/package-listing-index/`
//!  * download: `GET https://thunderstore.io/package/download/{owner}/{name}/{version}`
//!
//! Each community index is a multi-megabyte JSON array, so it is cached in memory
//! and shared between requests via `Arc`.

use std::{
    collections::HashMap,
    sync::{Arc, Mutex},
    time::{Duration, Instant},
};

use anyhow::{anyhow, Context, Result};
use serde::Deserialize;

pub const THUNDERSTORE: &str = "https://thunderstore.io";
const INDEX_TTL: Duration = Duration::from_secs(15 * 60);

#[derive(Debug, Clone, Deserialize)]
pub struct ListingVersion {
    pub full_name: String,
    #[serde(default)]
    pub version_number: String,
    #[serde(default)]
    pub description: String,
    #[serde(default)]
    pub downloads: u32,
    #[serde(default)]
    pub file_size: u64,
    #[serde(default)]
    pub dependencies: Vec<String>,
    #[serde(default)]
    pub date_created: Option<String>,
    #[serde(default)]
    pub website_url: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct Listing {
    pub full_name: String,
    #[serde(default)]
    pub categories: Vec<String>,
    #[serde(default)]
    pub rating_score: u32,
    #[serde(default)]
    pub is_deprecated: bool,
    #[serde(default)]
    pub date_created: Option<String>,
    #[serde(default)]
    pub date_updated: Option<String>,
    #[serde(default)]
    pub versions: Vec<ListingVersion>,
}

impl Listing {
    pub fn owner(&self) -> &str {
        self.full_name.split('-').next().unwrap_or(&self.full_name)
    }

    pub fn name(&self) -> String {
        self.full_name.splitn(2, '-').nth(1).unwrap_or(&self.full_name).to_string()
    }

    /// Thunderstore returns versions newest-first; sort defensively by semver.
    pub fn sorted_versions(&self) -> Vec<&ListingVersion> {
        let mut versions: Vec<&ListingVersion> = self.versions.iter().collect();
        versions.sort_by(|a, b| cmp_versions(&b.version_number, &a.version_number));
        versions
    }

    pub fn latest(&self) -> Option<&ListingVersion> {
        self.sorted_versions().into_iter().next()
    }

    pub fn version(&self, version_number: &str) -> Option<&ListingVersion> {
        self.versions
            .iter()
            .find(|candidate| candidate.version_number == version_number)
    }

    pub fn total_downloads(&self) -> u64 {
        self.versions.iter().map(|v| u64::from(v.downloads)).sum()
    }

    pub fn is_modpack(&self) -> bool {
        self.categories.iter().any(|category| category == "Modpacks")
    }
}

pub fn cmp_versions(a: &str, b: &str) -> std::cmp::Ordering {
    match (semver::Version::parse(a), semver::Version::parse(b)) {
        (Ok(left), Ok(right)) => left.cmp(&right),
        _ => a.cmp(b),
    }
}

pub struct Thunderstore {
    client: reqwest::Client,
    cache: Mutex<HashMap<String, CacheEntry>>,
}

struct CacheEntry {
    fetched: Instant,
    listings: Arc<Vec<Listing>>,
}

impl Thunderstore {
    pub fn new() -> Result<Self> {
        let client = reqwest::Client::builder()
            .user_agent(concat!("GaleX/", env!("CARGO_PKG_VERSION")))
            .timeout(Duration::from_secs(60))
            .build()
            .context("failed to build the HTTP client")?;
        Ok(Self {
            client,
            cache: Mutex::new(HashMap::new()),
        })
    }

    fn cached(&self, slug: &str) -> Option<Arc<Vec<Listing>>> {
        let cache = self.cache.lock().ok()?;
        let entry = cache.get(slug)?;
        if entry.fetched.elapsed() < INDEX_TTL {
            Some(entry.listings.clone())
        } else {
            None
        }
    }

    pub fn invalidate(&self) {
        if let Ok(mut cache) = self.cache.lock() {
            cache.clear();
        }
    }

    /// Returns the package index for a Thunderstore community.
    pub async fn index(&self, slug: &str) -> Result<Arc<Vec<Listing>>> {
        if let Some(cached) = self.cached(slug) {
            return Ok(cached);
        }

        let url = format!("{THUNDERSTORE}/c/{slug}/api/v1/package-listing-index/");
        tracing::debug!(%url, "fetching Thunderstore index");
        let response = self
            .client
            .get(&url)
            .send()
            .await
            .with_context(|| format!("GET {url}"))?;

        if !response.status().is_success() {
            return Err(anyhow!("Thunderstore answered {} for {url}", response.status()));
        }

        let listings: Vec<Listing> = response.json().await.context("decoding the package index")?;
        let listings = Arc::new(listings);

        if let Ok(mut cache) = self.cache.lock() {
            cache.insert(
                slug.to_string(),
                CacheEntry {
                    fetched: Instant::now(),
                    listings: listings.clone(),
                },
            );
        }

        Ok(listings)
    }

    pub async fn index_or_empty(&self, slug: &str) -> Arc<Vec<Listing>> {
        match self.index(slug).await {
            Ok(listings) => listings,
            Err(err) => {
                tracing::warn!("could not load the index for {slug}: {err}");
                Arc::new(Vec::new())
            }
        }
    }

    /// Downloads a package archive (`owner-name-1.2.3`).
    pub async fn download(&self, version_id: &str) -> Result<Vec<u8>> {
        let (owner, name, version) = split_version_id(version_id)
            .ok_or_else(|| anyhow!("malformed version id: {version_id}"))?;
        let url = format!("{THUNDERSTORE}/package/download/{owner}/{name}/{version}");
        tracing::info!(%url, "downloading package");
        let response = self
            .client
            .get(&url)
            .send()
            .await
            .with_context(|| format!("GET {url}"))?;

        if !response.status().is_success() {
            return Err(anyhow!("download failed with {}", response.status()));
        }

        Ok(response.bytes().await?.to_vec())
    }

    /// Fetches the rendered readme from the experimental package endpoint.
    pub async fn readme(&self, owner: &str, name: &str) -> Option<String> {
        let url = format!("{THUNDERSTORE}/api/experimental/package/{owner}/{name}/");
        let value: serde_json::Value = self.client.get(&url).send().await.ok()?.json().await.ok()?;
        value
            .get("latest")
            .and_then(|latest| latest.get("description"))
            .and_then(|description| description.as_str())
            .map(str::to_string)
    }
}

pub fn split_version_id(version_id: &str) -> Option<(&str, String, &str)> {
    let mut parts = version_id.splitn(2, '-');
    let owner = parts.next()?;
    let rest = parts.next()?;
    let (name, version) = rest.rsplit_once('-')?;
    Some((owner, name.to_string(), version))
}

pub fn full_name_of(version_id: &str) -> String {
    match split_version_id(version_id) {
        Some((owner, name, _)) => format!("{owner}-{name}"),
        None => version_id.to_string(),
    }
}

pub fn version_of(version_id: &str) -> String {
    match split_version_id(version_id) {
        Some((_, _, version)) => version.to_string(),
        None => "0.0.0".to_string(),
    }
}

pub fn find<'a>(listings: &'a [Listing], full_name: &str) -> Option<&'a Listing> {
    listings.iter().find(|listing| listing.full_name == full_name)
}
