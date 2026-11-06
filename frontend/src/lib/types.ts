export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
export interface SteamGame { slug: string; name: string; modLoader: string; steamAppId?: number; backends: string[] }
export interface Snapshot { ok: boolean; bridgeVersion: number; core: string; coreVersion: string; games: SteamGame[]; activeSlug: string; dataDir: string; installing: boolean; pendingLinks: { url: string; slug: string }[] }
export interface Profile { id: number; name: string; modCount: number; customArgs: string; missing: boolean; sync?: unknown }
export interface Profiles { activeId: number; profiles: Profile[] }
export interface ModId { packageUuid: string; versionUuid: string; backend?: 'Thunderstore' | 'Hexium' }
export interface ModData { name: string; description?: string; author?: string; version?: string; uuid: string; versionUuid: string; fileSize: number; downloads?: number; rating?: number; categories?: string[]; dependencies?: string[]; type: 'remote' | 'local'; backend: 'Thunderstore' | 'Hexium'; isDeprecated: boolean; versions: { name: string; uuid: string }[]; websiteUrl?: string; icon?: string }
export interface ProfileMod { enabled: boolean; data: ModData; configFile?: string }
export interface AvailableUpdate { fullName: string; ignore: boolean; old: string; new: string; updatedId: ModId }
export interface ProfileQuery { mods: ProfileMod[]; totalModCount: number; updates: AvailableUpdate[]; unknownMods: { fullName: string; uuid: string }[] }
export type ActionResult = { type: 'done' } | { type: 'confirm'; dependants: { fullName: string; uuid: string }[] };
export interface GamePrefs { dirOverride?: string | null; customArgs: string; launchMode: { type: 'launcher' } | { type: 'direct'; content: { instances: number; intervalSecs: number } }; platform?: string | null; showSteamLaunchOptions: boolean; backend: 'All' | 'Thunderstore' | 'Hexium' }
export interface Prefs { dataDir: string; fetchModsAutomatically: boolean; zoomFactor: number; pullBeforeLaunch: boolean; language: string; backendSkipConfirm: boolean; gamePrefs: Record<string, GamePrefs> }
export interface ImportData { manifest: { name?: string; mods: unknown[] }; path: string; deleteAfterImport: boolean; missingMods: string[] }
export interface Context { slug: string; profileId?: number }
export type QueryArgs = { maxCount?: number; searchTerm?: string; includeCategories: string[]; excludeCategories: string[]; includeNsfw: boolean; includeDeprecated: boolean; includeDisabled: boolean; includeEnabled: boolean; sortBy: 'name' | 'author' | 'installDate' | 'diskSpace' | 'downloads'; sortOrder: 'ascending' | 'descending' };
export const defaultQuery: QueryArgs = { includeCategories: [], excludeCategories: [], includeNsfw: false, includeDeprecated: true, includeDisabled: true, includeEnabled: true, sortBy: 'name', sortOrder: 'ascending' };