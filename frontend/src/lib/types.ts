/**
 * Wire format of the Gale bridge daemon (`galexd`) — see `docs/HTTP-API.md`.
 *
 * Identifiers intentionally mirror Gale's own models:
 *  - `versionId`  = `<Owner>-<Name>-<Version>` (Thunderstore dependency string)
 *  - `fullName`   = `<Owner>-<Name>`
 *  - `uuid`       = stable per-mod id in a profile (Gale's `ProfileModKind::uuid`)
 */

export type GameSlug = string;

export type ModLoaderKind = 'bepinex' | 'melonloader' | 'shimloader' | 'gdweave' | 'none';

export interface Game {
	slug: string;
	name: string;
	popular: boolean;
	modLoader: string;
	modLoaderKind: ModLoaderKind;
	/** Runtime used by the mod loader, drives the little "BepInEx" chip. */
	runtime?: string;
	managed: boolean;
	path?: string;
	favorite: boolean;
	profileCount: number;
	activeProfileId?: number;
	installedModCount: number;
	/** Detected in a Steam library but not registered with GaleX yet. */
	detectedPath?: string;
}

export interface Profile {
	id: number;
	gameSlug: GameSlug;
	name: string;
	path: string;
	active: boolean;
	modCount: number;
	enabledCount: number;
	updateCount: number;
	customArgs: string;
	missing: boolean;
	/** Present when the profile is linked to Gale's cloud sync. */
	sync?: { id: number; name: string; lastSync?: string };
	createdAt?: string;
}

export type ModKind = 'thunderstore' | 'local';

export interface ModUpdate {
	version: string;
	versionId: string;
	publishedAt?: string;
	changelog?: string;
}

export interface Mod {
	uuid: string;
	kind: ModKind;
	enabled: boolean;
	name: string;
	author: string;
	fullName: string;
	version: string;
	versionId: string;
	description: string;
	iconUrl?: string;
	installTime: string;
	sizeBytes: number;
	dependencies: string[];
	/** Dependency strings required by this mod that are missing from the profile. */
	missingDependencies: string[];
	/** Enabled mods that depend on this one (blocking for uninstall/disable). */
	dependantUuids: string[];
	update?: ModUpdate | null;
	ignoredUpdate: boolean;
	categories: string[];
	ratingScore: number;
	totalDownloads: number;
	hasConfig: boolean;
	deprecated: boolean;
	modpack: boolean;
	/** Only for `kind === 'local'`. */
	localPath?: string;
}

export interface ModDependant {
	uuid: string;
	name: string;
	fullName: string;
	enabled: boolean;
}

export interface PackageCard {
	fullName: string;
	name: string;
	owner: string;
	description: string;
	iconUrl?: string;
	ratingScore: number;
	totalDownloads: number;
	dateUpdated: string;
	version: string;
	versionId: string;
	categories: string[];
	deprecated: boolean;
	pinned: boolean;
	modpack: boolean;
	installed: boolean;
	installedVersion?: string;
}

export interface PackageVersion {
	version: string;
	versionId: string;
	dateCreated: string;
	downloads: number;
	fileSize: number;
	dependencies: string[];
	changelog: string;
}

export interface PackageDetail {
	fullName: string;
	name: string;
	owner: string;
	description: string;
	markdown: string;
	iconUrl?: string;
	ratingScore: number;
	totalDownloads: number;
	categories: string[];
	deprecated: boolean;
	modpack: boolean;
	websiteUrl?: string;
	donationLink?: string;
	dateCreated: string;
	dateUpdated: string;
	versions: PackageVersion[];
	/** Resolved dependency closure for the newest version, flattened for preview. */
	dependencyPreview: { fullName: string; versionId: string; name: string; installed: boolean }[];
}

export interface Category {
	name: string;
	slug: string;
	count: number;
}

export type ConfigValue = boolean | number | string;

export type ConfigEntryType = 'bool' | 'int' | 'float' | 'string' | 'enum' | 'key' | 'raw';

export interface ConfigEntry {
	section: string;
	key: string;
	type: ConfigEntryType;
	value: ConfigValue;
	defaultValue?: ConfigValue;
	description?: string;
	choices?: string[];
	min?: number;
	max?: number;
	/** Set when the value in the file differs from the documented default. */
	modified: boolean;
}

export interface ConfigFile {
	path: string;
	name: string;
	plugin?: string;
	entries: ConfigEntry[];
}

export type InstallStatus = 'queued' | 'downloading' | 'extracting' | 'done' | 'failed' | 'cancelled';

export interface InstallTask {
	id: string;
	profileId: number;
	gameSlug: GameSlug;
	status: InstallStatus;
	/** 0..1 */
	progress: number;
	step: string;
	total: number;
	completed: number;
	current?: string;
	error?: string;
	startedAt: string;
	finishedAt?: string;
}

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
	id: number;
	at: string;
	level: LogLevel;
	scope: string;
	message: string;
}

export interface Health {
	ok: boolean;
	version: string;
	core: string;
	dataDir: string;
	platform: string;
	uptimeSec: number;
	steamDetected: boolean;
}

export interface ExportResult {
	code: string;
	fileCount: number;
}

export interface ImportResult {
	profile: Profile;
	installed: number;
	skipped: number;
}

export type GaleEvent =
	| { type: 'daemon.hello'; version: string }
	| { type: 'install.queued'; task: InstallTask }
	| { type: 'install.progress'; task: InstallTask }
	| { type: 'install.settled'; task: InstallTask }
	| { type: 'mods.changed'; profileId: number }
	| { type: 'profiles.changed'; gameSlug: GameSlug }
	| { type: 'log'; entry: LogEntry };

export type SortKey = 'rating' | 'downloads' | 'updated' | 'name' | 'newest';

export interface BrowseQuery {
	search?: string;
	category?: string;
	sort?: SortKey;
	includeDeprecated?: boolean;
	page?: number;
	pageSize?: number;
}

export interface BrowseResult {
	total: number;
	page: number;
	pageSize: number;
	packages: PackageCard[];
}
