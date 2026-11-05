import type {
	BrowseQuery,
	BrowseResult,
	Category,
	ConfigFile,
	ConfigValue,
	ExportResult,
	Game,
	GameSlug,
	Health,
	ImportResult,
	InstallTask,
	LogEntry,
	Mod,
	PackageDetail,
	Profile,
} from './types';

export const DEFAULT_DAEMON_PORT = 7788;
const API_PREFIX = '/api/v1';
const STORAGE_KEY = 'galex.apiBase';

export class ApiError extends Error {
	readonly status: number;
	readonly body: unknown;

	constructor(message: string, status: number, body?: unknown) {
		super(message);
		this.name = 'ApiError';
		this.status = status;
		this.body = body;
	}

	get isNetwork() {
		return this.status === 0;
	}
}

declare const __GALEX_MODE__: 'app' | 'plugin';
declare const __GALEX_VERSION__: string;

export const BUILD_MODE: 'app' | 'plugin' = __GALEX_MODE__;
export const UI_VERSION: string = __GALEX_VERSION__;

/**
 * In the browser we talk to the same origin (Vite proxies `/api` to the daemon).
 * Inside Steam the UI is served from `steamloopback.host`, so the daemon is
 * addressed directly on loopback.
 */
export function resolveApiBase(): string {
	const injected = (window as unknown as { __GALEX_API_BASE__?: string }).__GALEX_API_BASE__;
	const stored = safeStorageGet(STORAGE_KEY);
	const value = injected ?? stored;
	if (value) return value.replace(/\/+$/, '');
	return BUILD_MODE === 'plugin' ? `http://127.0.0.1:${DEFAULT_DAEMON_PORT}` : '';
}

export function setApiBase(base: string | null) {
	if (base) safeStorageSet(STORAGE_KEY, base.replace(/\/+$/, ''));
	else safeStorageRemove(STORAGE_KEY);
}

function safeStorageGet(key: string): string | null {
	try {
		return window.localStorage.getItem(key);
	} catch {
		return null;
	}
}
function safeStorageSet(key: string, value: string) {
	try {
		window.localStorage.setItem(key, value);
	} catch {
		/* Steam CEF can block storage in some contexts */
	}
}
function safeStorageRemove(key: string) {
	try {
		window.localStorage.removeItem(key);
	} catch {
		/* ignore */
	}
}

let apiBase = resolveApiBase();

export function getApiBase() {
	return apiBase;
}

export function setRuntimeApiBase(base: string | null) {
	setApiBase(base);
	apiBase = resolveApiBase();
}

export function apiUrl(path: string) {
	return `${apiBase}${API_PREFIX}${path}`;
}

export function eventStreamUrl() {
	return apiUrl('/events');
}

interface RequestOptions {
	method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
	body?: unknown;
	signal?: AbortSignal;
	timeoutMs?: number;
}

async function request<T>(path: string, opts: RequestOptions = {}): Promise<T> {
	const { method = 'GET', body, timeoutMs = 20_000 } = opts;
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeoutMs);
	const onAbort = () => controller.abort();
	opts.signal?.addEventListener('abort', onAbort);

	let response: Response;
	try {
		response = await fetch(apiUrl(path), {
			method,
			headers: body === undefined ? undefined : { 'content-type': 'application/json' },
			body: body === undefined ? undefined : JSON.stringify(body),
			signal: controller.signal,
			mode: 'cors',
			credentials: 'omit',
		});
	} catch (err) {
		throw new ApiError(
			controller.signal.aborted ? 'Backend did not answer in time' : 'Cannot reach the Gale daemon',
			0,
			err,
		);
	} finally {
		clearTimeout(timer);
		opts.signal?.removeEventListener('abort', onAbort);
	}

	if (response.status === 204) return undefined as T;

	const text = await response.text();
	let parsed: unknown = undefined;
	if (text) {
		try {
			parsed = JSON.parse(text);
		} catch {
			parsed = text;
		}
	}

	if (!response.ok) {
		const message =
			(parsed as { error?: string; message?: string } | undefined)?.error ??
			(parsed as { message?: string } | undefined)?.message ??
			`Request failed (${response.status})`;
		throw new ApiError(message, response.status, parsed);
	}

	return parsed as T;
}

function qs(params: Record<string, string | number | boolean | undefined | null>) {
	const search = new URLSearchParams();
	for (const [key, value] of Object.entries(params)) {
		if (value === undefined || value === null || value === '') continue;
		search.set(key, String(value));
	}
	const str = search.toString();
	return str ? `?${str}` : '';
}

export const api = {
	health: (signal?: AbortSignal) => request<Health>('/health', { signal, timeoutMs: 4000 }),

	games: () => request<Game[]>('/games'),

	manageGame: (slug: GameSlug, path?: string) =>
		request<Game>(`/games/${encodeURIComponent(slug)}/manage`, { method: 'POST', body: { path } }),

	toggleFavorite: (slug: GameSlug, favorite: boolean) =>
		request<void>(`/games/${encodeURIComponent(slug)}/favorite`, { method: 'PATCH', body: { favorite } }),

	listProfiles: (slug: GameSlug) => request<Profile[]>(`/games/${encodeURIComponent(slug)}/profiles`),

	createProfile: (slug: GameSlug, name: string, duplicateOf?: number) =>
		request<Profile>(`/games/${encodeURIComponent(slug)}/profiles`, {
			method: 'POST',
			body: { name, duplicateOf },
		}),

	updateProfile: (id: number, patch: { name?: string; customArgs?: string }) =>
		request<Profile>(`/profiles/${id}`, { method: 'PATCH', body: patch }),

	deleteProfile: (id: number) => request<void>(`/profiles/${id}`, { method: 'DELETE' }),

	activateProfile: (id: number) => request<Profile>(`/profiles/${id}/activate`, { method: 'POST' }),

	exportProfile: (id: number) => request<ExportResult>(`/profiles/${id}/export`),

	importProfile: (slug: GameSlug, code: string) =>
		request<ImportResult>('/import', { method: 'POST', body: { gameSlug: slug, code }, timeoutMs: 120_000 }),

	mods: (profileId: number) => request<Mod[]>(`/profiles/${profileId}/mods`),

	setModEnabled: (profileId: number, uuid: string, enabled: boolean) =>
		request<Mod>(`/profiles/${profileId}/mods/${uuid}`, { method: 'PATCH', body: { enabled } }),

	removeMod: (profileId: number, uuid: string, force = false) =>
		request<void>(`/profiles/${profileId}/mods/${uuid}${qs({ force })}`, { method: 'DELETE' }),

	changeModVersion: (profileId: number, uuid: string, versionId: string) =>
		request<InstallTask>(`/profiles/${profileId}/mods/${uuid}/version`, { method: 'PATCH', body: { versionId } }),

	setIgnoreUpdate: (profileId: number, uuid: string, ignore: boolean) =>
		request<Mod>(`/profiles/${profileId}/mods/${uuid}/ignore-update`, { method: 'PATCH', body: { ignore } }),

	install: (profileId: number, versionIds: string[]) =>
		request<InstallTask>(`/profiles/${profileId}/install`, {
			method: 'POST',
			body: { versionIds },
			timeoutMs: 30_000,
		}),

	updateMods: (profileId: number, uuids?: string[]) =>
		request<InstallTask>(`/profiles/${profileId}/update`, { method: 'POST', body: { uuids } }),

	cancelInstall: (taskId: string) => request<void>(`/installs/${taskId}/cancel`, { method: 'POST' }),

	installs: (slug?: GameSlug) => request<InstallTask[]>(`/installs${qs({ gameSlug: slug })}`),

	config: (profileId: number) => request<ConfigFile[]>(`/profiles/${profileId}/config`),

	setConfigEntry: (profileId: number, file: string, section: string, key: string, value: ConfigValue) =>
		request<ConfigFile>(`/profiles/${profileId}/config`, {
			method: 'PATCH',
			body: { file, section, key, value },
		}),

	resetConfigEntry: (profileId: number, file: string, section: string, key: string) =>
		request<ConfigFile>(`/profiles/${profileId}/config/reset`, {
			method: 'POST',
			body: { file, section, key },
		}),

	launch: (profileId: number, vanilla = false) =>
		request<{ ok: boolean; command: string }>(`/profiles/${profileId}/launch`, {
			method: 'POST',
			body: { vanilla },
		}),

	browse: (slug: GameSlug, query: BrowseQuery) =>
		request<BrowseResult>(
			`/store/${encodeURIComponent(slug)}/packages${qs({
				search: query.search,
				category: query.category,
				sort: query.sort,
				deprecated: query.includeDeprecated ? '1' : undefined,
				page: query.page,
				pageSize: query.pageSize,
			})}`,
		),

	categories: (slug: GameSlug) => request<Category[]>(`/store/${encodeURIComponent(slug)}/categories`),

	packageDetail: (fullName: string) => {
		const [owner, name] = fullName.split('-');
		return request<PackageDetail>(
			`/store/packages/${encodeURIComponent(owner ?? '')}/${encodeURIComponent(name ?? '')}`,
		);
	},

	logs: (limit = 200) => request<LogEntry[]>(`/logs${qs({ limit })}`),

	clearCache: () => request<{ freedBytes: number }>('/cache/clear', { method: 'POST', timeoutMs: 60_000 }),
};

export type Api = typeof api;
