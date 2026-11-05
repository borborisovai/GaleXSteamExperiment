#!/usr/bin/env node
/**
 * GaleX development backend.
 *
 * A dependency-free implementation of the HTTP contract documented in
 * `docs/HTTP-API.md`. It is *not* the product backend — that is the Rust
 * `galexd` daemon in `backend/` — but it speaks the exact same protocol with
 * fixture data, so the Millennium UI can be developed in a browser and demoed
 * without Thunderstore access.
 *
 *   node devserver/src/server.js --port 7788
 */

import http from 'node:http';
import { randomUUID } from 'node:crypto';
import {
	CATEGORIES,
	CONFIG_FILES,
	GAMES,
	IGNORED_UPDATES,
	INSTALLED,
	LOCAL_MODS,
	LOG_SEED,
	PROFILES,
	PACKAGES,
	packagesFor,
} from './data.js';

const args = process.argv.slice(2);
const portArg = args.indexOf('--port');
const PORT = Number(portArg >= 0 ? args[portArg + 1] : process.env.GALEX_PORT ?? 7788);
const startedAt = Date.now();

/* ------------------------------------------------------------------ */
/* Mutable state                                                       */
/* ------------------------------------------------------------------ */

const state = {
	profiles: structuredClone(PROFILES),
	installed: structuredClone(INSTALLED),
	localMods: structuredClone(LOCAL_MODS),
	ignored: structuredClone(IGNORED_UPDATES),
	configs: structuredClone(CONFIG_FILES),
	tasks: [],
	logs: [],
	managedGames: new Set(GAMES.filter((game) => game.managed).map((game) => game.slug)),
	favorites: new Set(['lethal-company', 'repo']),
	nextProfileId: 100,
	logSeq: 1,
};

for (const entry of LOG_SEED) {
	state.logs.push({
		id: state.logSeq++,
		at: new Date(Date.now() - state.logSeq * 1000).toISOString(),
		level: entry.level,
		scope: entry.scope,
		message: entry.message,
	});
}

function log(level, scope, message) {
	const entry = { id: state.logSeq++, at: new Date().toISOString(), level, scope, message };
	state.logs.push(entry);
	if (state.logs.length > 500) state.logs.shift();
	broadcast({ type: 'log', entry });
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const clients = new Set();

function broadcast(event) {
	const payload = `data: ${JSON.stringify(event)}\n\n`;
	for (const res of clients) {
		try {
			res.write(payload);
		} catch {
			clients.delete(res);
		}
	}
}

function json(res, body, status = 200) {
	const payload = body === undefined ? '' : JSON.stringify(body);
	res.writeHead(status, {
		'content-type': 'application/json; charset=utf-8',
		'content-length': Buffer.byteLength(payload),
		'access-control-allow-origin': '*',
		'access-control-allow-headers': 'content-type',
		'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS',
		'cache-control': 'no-store',
	});
	res.end(payload);
}

function fail(res, status, message) {
	json(res, { error: message }, status);
}

function readBody(req) {
	return new Promise((resolve) => {
		let raw = '';
		req.on('data', (chunk) => {
			raw += chunk;
			if (raw.length > 4_000_000) req.destroy();
		});
		req.on('end', () => {
			if (!raw) return resolve({});
			try {
				resolve(JSON.parse(raw));
			} catch {
				resolve({});
			}
		});
	});
}

function uuidFor(profileId, fullName) {
	let hash = 0;
	const seed = `${profileId}:${fullName}`;
	for (let i = 0; i < seed.length; i += 1) hash = (hash * 33 + seed.charCodeAt(i)) >>> 0;
	return `m-${hash.toString(16).padStart(8, '0')}`;
}

function parseVersion(version) {
	return version.split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
}

function isNewer(candidate, current) {
	const a = parseVersion(candidate);
	const b = parseVersion(current);
	for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
		const left = a[i] ?? 0;
		const right = b[i] ?? 0;
		if (left !== right) return left > right;
	}
	return false;
}

function findPackage(fullName) {
	return PACKAGES.find((entry) => entry.fullName === fullName);
}

function gameForPackage(entry) {
	return GAMES.find((game) => game.slug === (entry.gameSlug ?? 'lethal-company'));
}

function profileOf(id) {
	return state.profiles.find((profile) => profile.id === Number(id));
}

function installedOf(profileId) {
	return state.installed[profileId] ?? [];
}

function activeProfileFor(gameSlug) {
	const list = state.profiles.filter((profile) => profile.gameSlug === gameSlug);
	return list.find((profile) => profile.active) ?? list[0];
}

function latestVersion(entry) {
	return entry.versions[0];
}

function toMod(profile, record) {
	const entry = findPackage(record.fullName);
	const records = installedOf(profile.id);
	const installedNames = new Set(records.map((other) => other.fullName));

	const version = entry?.versions.find((candidate) => candidate.version === record.version);
	const dependencies = version?.dependencies ?? [];

	const missing = (entry?.dependencies ?? [])
		.filter((dep) => !installedNames.has(dep))
		.map((dep) => {
			const depEntry = findPackage(dep);
			return `${dep}-${depEntry ? latestVersion(depEntry).version : '1.0.0'}`;
		});

	const dependants = records.filter((other) => {
		const otherEntry = findPackage(other.fullName);
		return otherEntry ? otherEntry.dependencies.includes(record.fullName) : false;
	});

	const latest = entry ? latestVersion(entry) : undefined;
	const hasUpdate = Boolean(latest && isNewer(latest.version, record.version));
	const ignored = (state.ignored[profile.id] ?? []).includes(record.fullName);

	return {
		uuid: uuidFor(profile.id, record.fullName),
		kind: 'thunderstore',
		enabled: record.enabled,
		name: entry ? entry.name : record.fullName,
		author: record.fullName.split('-')[0],
		fullName: record.fullName,
		version: record.version,
		versionId: `${record.fullName}-${record.version}`,
		description: entry ? entry.description : 'Unknown package',
		iconUrl: undefined,
		installTime: new Date(Date.now() - record.installedDaysAgo * 86_400_000).toISOString(),
		sizeBytes: latest ? latest.fileSize : 120_000,
		dependencies,
		missingDependencies: missing,
		dependantUuids: dependants.map((other) => uuidFor(profile.id, other.fullName)),
		update:
			hasUpdate && latest
				? { version: latest.version, versionId: latest.versionId, publishedAt: latest.dateCreated, changelog: latest.changelog }
				: null,
		ignoredUpdate: ignored,
		categories: entry ? entry.categories : [],
		ratingScore: entry ? entry.ratingScore : 0,
		totalDownloads: entry ? entry.totalDownloads : 0,
		hasConfig: Boolean((state.configs[profile.id] ?? []).length),
		deprecated: entry ? entry.deprecated : false,
		modpack: entry ? entry.modpack : false,
	};
}

function toLocalMod(profile, record) {
	return {
		uuid: record.uuid,
		kind: 'local',
		enabled: record.enabled,
		name: record.name,
		author: 'local',
		fullName: record.name,
		version: record.version,
		versionId: `${record.name}-${record.version}`,
		description: record.description ?? 'Locally imported package',
		iconUrl: undefined,
		installTime: new Date(Date.now() - record.installedDaysAgo * 86_400_000).toISOString(),
		sizeBytes: 48_000,
		dependencies: [],
		missingDependencies: [],
		dependantUuids: [],
		update: null,
		ignoredUpdate: false,
		categories: ['Locally imported'],
		ratingScore: 0,
		totalDownloads: 0,
		hasConfig: false,
		deprecated: false,
		modpack: false,
		localPath: record.localPath,
	};
}

function modsForProfile(profile) {
	const mods = installedOf(profile.id).map((record) => toMod(profile, record));
	for (const local of state.localMods[profile.id] ?? []) mods.push(toLocalMod(profile, local));
	return mods;
}

function profileSummary(profile) {
	const mods = modsForProfile(profile);
	return {
		id: profile.id,
		gameSlug: profile.gameSlug,
		name: profile.name,
		path: profile.path,
		active: profile.active,
		modCount: mods.length,
		enabledCount: mods.filter((mod) => mod.enabled).length,
		updateCount: mods.filter((mod) => mod.update && !mod.ignoredUpdate).length,
		customArgs: profile.customArgs ?? '',
		missing: false,
		createdAt: profile.createdAt,
	};
}

function gameSummary(game) {
	const managed = state.managedGames.has(game.slug);
	const profiles = state.profiles.filter((profile) => profile.gameSlug === game.slug);
	const active = profiles.find((profile) => profile.active);
	const installedCount = active ? modsForProfile(active).length : 0;
	return {
		slug: game.slug,
		name: game.name,
		popular: game.popular,
		modLoader: game.modLoader,
		modLoaderKind: game.modLoaderKind,
		runtime: game.runtime,
		managed,
		path: managed ? game.path : undefined,
		detectedPath: game.detectedPath,
		favorite: state.favorites.has(game.slug),
		profileCount: profiles.length,
		activeProfileId: active?.id,
		installedModCount: installedCount,
	};
}

/* ------------------------------------------------------------------ */
/* Install simulation                                                  */
/* ------------------------------------------------------------------ */

function resolveWithDependencies(versionIds) {
	const queue = [...versionIds];
	const seen = new Set();
	const result = [];
	while (queue.length) {
		const versionId = queue.shift();
		if (!versionId || seen.has(versionId)) continue;
		seen.add(versionId);
		const match = /^(.+)-(\d+\.\d+\.\d+.*)$/.exec(versionId);
		const fullName = match ? match[1] : versionId;
		const entry = findPackage(fullName);
		result.push({ versionId, fullName, version: match ? match[2] : '1.0.0', entry });
		if (entry) {
			for (const dep of entry.dependencies) {
				const depEntry = findPackage(dep);
				if (depEntry) queue.push(latestVersion(depEntry).versionId);
			}
		}
	}
	return result;
}

function startTask({ profile, kind, packages, label }) {
	const task = {
		id: randomUUID(),
		profileId: profile.id,
		gameSlug: profile.gameSlug,
		status: 'queued',
		progress: 0,
		step: label,
		total: packages.length,
		completed: 0,
		current: undefined,
		startedAt: new Date().toISOString(),
	};
	state.tasks.unshift(task);
	broadcast({ type: 'install.queued', task });

	let index = 0;
	const timer = setInterval(() => {
		if (task.status === 'cancelled' || task.status === 'failed') {
			clearInterval(timer);
			return;
		}
		const item = packages[index];
		if (!item) {
			task.status = 'done';
			task.progress = 1;
			task.step = `Installed ${packages.length} package(s)`;
			task.finishedAt = new Date().toISOString();
			applyPackages(profile, kind, packages);
			broadcast({ type: 'install.settled', task });
			broadcast({ type: 'mods.changed', profileId: profile.id });
			broadcast({ type: 'profiles.changed', gameSlug: profile.gameSlug });
			log('info', 'install', `${label}: finished (${packages.length} packages) into “${profile.name}”`);
			clearInterval(timer);
			return;
		}

		task.status = index === 0 ? 'downloading' : task.status;
		task.current = `${item.fullName} v${item.version}`;
		task.completed = index;
		task.progress = Math.min(0.98, (index + 0.5) / packages.length);
		if (index > 0 && index % 2 === 0) task.status = 'extracting';
		else task.status = 'downloading';
		broadcast({ type: 'install.progress', task });
		index += 1;
	}, 620);

	return task;
}

function applyPackages(profile, kind, packages) {
	const list = state.installed[profile.id] ?? (state.installed[profile.id] = []);
	for (const item of packages) {
		const existing = list.find((record) => record.fullName === item.fullName);
		if (kind === 'update' && existing) {
			existing.version = item.version;
			log('info', 'install', `Updated ${item.fullName} to v${item.version}`);
			continue;
		}
		if (existing) {
			existing.version = item.version;
			continue;
		}
		list.push({ fullName: item.fullName, version: item.version, enabled: true, installedDaysAgo: 0, dependencies: item.entry ? latestVersion(item.entry).dependencies : [] });
	}
}

/* ------------------------------------------------------------------ */
/* Routing                                                             */
/* ------------------------------------------------------------------ */

const notFound = (res) => fail(res, 404, 'Not found');

async function handle(req, res) {
	const url = new URL(req.url, `http://${req.headers.host ?? 'localhost'}`);
	const path = url.pathname.replace(/\/+$/, '') || '/';

	if (req.method === 'OPTIONS') {
		res.writeHead(204, {
			'access-control-allow-origin': '*',
			'access-control-allow-headers': 'content-type',
			'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS',
			'access-control-max-age': '600',
		});
		res.end();
		return;
	}

	// Simulated latency keeps loading states honest during development.
	await new Promise((resolve) => setTimeout(resolve, 25 + Math.random() * 45));

	/* --- health & events ------------------------------------------- */
	if (path === '/api/v1/health' && req.method === 'GET') {
		return json(res, {
			ok: true,
			version: '0.1.0-dev',
			core: 'gale-core (fixture backend)',
			dataDir: '~/.local/share/GaleX',
			platform: process.platform,
			uptimeSec: Math.round((Date.now() - startedAt) / 1000),
			steamDetected: true,
		});
	}

	if (path === '/api/v1/events' && req.method === 'GET') {
		res.writeHead(200, {
			'content-type': 'text/event-stream',
			'cache-control': 'no-cache, no-transform',
			connection: 'keep-alive',
			'access-control-allow-origin': '*',
			'x-accel-buffering': 'no',
		});
		res.write(`data: ${JSON.stringify({ type: 'daemon.hello', version: '0.1.0-dev' })}\n\n`);
		clients.add(res);
		const heartbeat = setInterval(() => {
			try {
				res.write(': ping\n\n');
			} catch {
				clearInterval(heartbeat);
			}
		}, 20_000);
		req.on('close', () => {
			clearInterval(heartbeat);
			clients.delete(res);
		});
		return;
	}

	/* --- games ------------------------------------------------------ */
	if (path === '/api/v1/games' && req.method === 'GET') {
		return json(res, GAMES.map(gameSummary));
	}

	const manageMatch = /^\/api\/v1\/games\/([^/]+)\/manage$/.exec(path);
	if (manageMatch && req.method === 'POST') {
		const slug = decodeURIComponent(manageMatch[1]);
		const game = GAMES.find((item) => item.slug === slug);
		if (!game) return notFound(res);
		state.managedGames.add(slug);
		if (!state.profiles.some((profile) => profile.gameSlug === slug)) {
			const id = state.nextProfileId++;
			state.profiles.push({
				id,
				gameSlug: slug,
				name: 'Default',
				active: true,
				createdAt: new Date().toISOString(),
				customArgs: '',
				path: `~/.local/share/GaleX/profiles/${slug}/Default`,
			});
			state.installed[id] = [];
		}
		log('info', 'game', `Registered ${game.name}`);
		return json(res, gameSummary(game));
	}

	const favoriteMatch = /^\/api\/v1\/games\/([^/]+)\/favorite$/.exec(path);
	if (favoriteMatch && req.method === 'PATCH') {
		const slug = decodeURIComponent(favoriteMatch[1]);
		const body = await readBody(req);
		if (body.favorite) state.favorites.add(slug);
		else state.favorites.delete(slug);
		const game = GAMES.find((item) => item.slug === slug);
		return game ? json(res, gameSummary(game)) : notFound(res);
	}

	const profilesMatch = /^\/api\/v1\/games\/([^/]+)\/profiles$/.exec(path);
	if (profilesMatch) {
		const slug = decodeURIComponent(profilesMatch[1]);
		if (req.method === 'GET') {
			return json(res, state.profiles.filter((profile) => profile.gameSlug === slug).map(profileSummary));
		}
		if (req.method === 'POST') {
			const body = await readBody(req);
			const name = String(body.name ?? '').trim() || 'New profile';
			const id = state.nextProfileId++;
			const source = body.duplicateOf ? state.profiles.find((profile) => profile.id === Number(body.duplicateOf)) : undefined;
			const profile = {
				id,
				gameSlug: slug,
				name,
				active: false,
				createdAt: new Date().toISOString(),
				customArgs: source?.customArgs ?? '',
				path: `~/.local/share/GaleX/profiles/${slug}/${name}`,
			};
			state.profiles.push(profile);
			state.installed[id] = source ? structuredClone(state.installed[source.id] ?? []) : [];
			if (source && state.configs[source.id]) state.configs[id] = structuredClone(state.configs[source.id]);
			log('info', 'profile', `Created profile “${name}”${source ? ` from ${source.name}` : ''}`);
			broadcast({ type: 'profiles.changed', gameSlug: slug });
			return json(res, profileSummary(profile), 201);
		}
	}

	/* --- profiles --------------------------------------------------- */
	const activateMatch = /^\/api\/v1\/profiles\/(\d+)\/activate$/.exec(path);
	if (activateMatch && req.method === 'POST') {
		const profile = profileOf(activateMatch[1]);
		if (!profile) return notFound(res);
		for (const item of state.profiles.filter((candidate) => candidate.gameSlug === profile.gameSlug)) {
			item.active = item.id === profile.id;
		}
		broadcast({ type: 'profiles.changed', gameSlug: profile.gameSlug });
		return json(res, profileSummary(profile));
	}

	const profileMatch = /^\/api\/v1\/profiles\/(\d+)$/.exec(path);
	if (profileMatch) {
		const profile = profileOf(profileMatch[1]);
		if (!profile) return notFound(res);
		if (req.method === 'PATCH') {
			const body = await readBody(req);
			if (typeof body.name === 'string' && body.name.trim()) profile.name = body.name.trim();
			if (typeof body.customArgs === 'string') profile.customArgs = body.customArgs;
			log('info', 'profile', `Updated profile “${profile.name}”`);
			broadcast({ type: 'profiles.changed', gameSlug: profile.gameSlug });
			return json(res, profileSummary(profile));
		}
		if (req.method === 'DELETE') {
			state.profiles = state.profiles.filter((item) => item.id !== profile.id);
			delete state.installed[profile.id];
			log('info', 'profile', `Deleted profile “${profile.name}”`);
			broadcast({ type: 'profiles.changed', gameSlug: profile.gameSlug });
			res.writeHead(204, { 'access-control-allow-origin': '*' });
			return res.end();
		}
	}

	const exportMatch = /^\/api\/v1\/profiles\/(\d+)\/export$/.exec(path);
	if (exportMatch && req.method === 'GET') {
		const profile = profileOf(exportMatch[1]);
		if (!profile) return notFound(res);
		const mods = installedOf(profile.id).map((record) => `${record.fullName}-${record.version}`);
		const code = Buffer.from(JSON.stringify({ name: profile.name, gameSlug: profile.gameSlug, mods })).toString('base64');
		return json(res, { code, fileCount: mods.length });
	}

	const modsMatch = /^\/api\/v1\/profiles\/(\d+)\/mods$/.exec(path);
	if (modsMatch && req.method === 'GET') {
		const profile = profileOf(modsMatch[1]);
		if (!profile) return notFound(res);
		return json(res, modsForProfile(profile));
	}

	const modMatch = /^\/api\/v1\/profiles\/(\d+)\/mods\/([^/]+)$/.exec(path);
	if (modMatch) {
		const profile = profileOf(modMatch[1]);
		if (!profile) return notFound(res);
		const uuid = decodeURIComponent(modMatch[2]);
		const list = installedOf(profile.id);
		const record = list.find((item) => uuidFor(profile.id, item.fullName) === uuid);
		const local = (state.localMods[profile.id] ?? []).find((item) => item.uuid === uuid);

		if (req.method === 'PATCH') {
			const body = await readBody(req);
			if (record) record.enabled = Boolean(body.enabled);
			if (local) state.localMods[profile.id] = state.localMods[profile.id].map((item) => (item.uuid === uuid ? { ...item, enabled: Boolean(body.enabled) } : item));
			const updated = modsForProfile(profile).find((item) => item.uuid === uuid);
			log('info', 'profile', `${body.enabled ? 'Enabled' : 'Disabled'} ${updated?.name ?? uuid}`);
			broadcast({ type: 'profiles.changed', gameSlug: profile.gameSlug });
			return updated ? json(res, updated) : notFound(res);
		}

		if (req.method === 'DELETE') {
			state.installed[profile.id] = list.filter((item) => uuidFor(profile.id, item.fullName) !== uuid);
			state.localMods[profile.id] = (state.localMods[profile.id] ?? []).filter((item) => item.uuid !== uuid);
			log('info', 'profile', `Removed mod ${uuid}`);
			broadcast({ type: 'mods.changed', profileId: profile.id });
			broadcast({ type: 'profiles.changed', gameSlug: profile.gameSlug });
			res.writeHead(204, { 'access-control-allow-origin': '*' });
			return res.end();
		}
	}

	const versionMatch = /^\/api\/v1\/profiles\/(\d+)\/mods\/([^/]+)\/version$/.exec(path);
	if (versionMatch && req.method === 'PATCH') {
		const profile = profileOf(versionMatch[1]);
		if (!profile) return notFound(res);
		const body = await readBody(req);
		const versionId = String(body.versionId ?? '');
		const match = /^(.+)-(\d+\.\d+\.\d+.*)$/.exec(versionId);
		const fullName = match ? match[1] : versionId;
		const version = match ? match[2] : '1.0.0';
		const entry = findPackage(fullName);
		const task = startTask({
			profile,
			kind: 'update',
			packages: [{ fullName, version, versionId, entry }],
			label: `Changing ${fullName} to v${version}`,
		});
		return json(res, task, 202);
	}

	const ignoreMatch = /^\/api\/v1\/profiles\/(\d+)\/mods\/([^/]+)\/ignore-update$/.exec(path);
	if (ignoreMatch && req.method === 'PATCH') {
		const profile = profileOf(ignoreMatch[1]);
		if (!profile) return notFound(res);
		const body = await readBody(req);
		const uuid = decodeURIComponent(ignoreMatch[2]);
		const record = installedOf(profile.id).find((item) => uuidFor(profile.id, item.fullName) === uuid);
		if (!record) return notFound(res);
		const set = new Set(state.ignored[profile.id] ?? []);
		if (body.ignore) set.add(record.fullName);
		else set.delete(record.fullName);
		state.ignored[profile.id] = [...set];
		const updated = modsForProfile(profile).find((item) => item.uuid === uuid);
		return updated ? json(res, updated) : notFound(res);
	}

	const installMatch = /^\/api\/v1\/profiles\/(\d+)\/install$/.exec(path);
	if (installMatch && req.method === 'POST') {
		const profile = profileOf(installMatch[1]);
		if (!profile) return notFound(res);
		const body = await readBody(req);
		const versionIds = Array.isArray(body.versionIds) ? body.versionIds.map(String) : [];
		if (versionIds.length === 0) return fail(res, 400, 'versionIds must not be empty');
		const packages = resolveWithDependencies(versionIds);
		const task = startTask({ profile, kind: 'install', packages, label: `Installing into “${profile.name}”` });
		return json(res, task, 202);
	}

	const updateMatch = /^\/api\/v1\/profiles\/(\d+)\/update$/.exec(path);
	if (updateMatch && req.method === 'POST') {
		const profile = profileOf(updateMatch[1]);
		if (!profile) return notFound(res);
		const body = await readBody(req);
		const mods = modsForProfile(profile);
		const targets = mods.filter((mod) => mod.update && !mod.ignoredUpdate && (!body.uuids || body.uuids.includes(mod.uuid)));
		const packages = targets.map((mod) => ({
			fullName: mod.fullName,
			version: mod.update.version,
			versionId: mod.update.versionId,
			entry: findPackage(mod.fullName),
		}));
		if (packages.length === 0) return fail(res, 409, 'Nothing to update');
		const task = startTask({ profile, kind: 'update', packages, label: `Updating ${packages.length} package(s)` });
		return json(res, task, 202);
	}

	const configMatch = /^\/api\/v1\/profiles\/(\d+)\/config$/.exec(path);
	if (configMatch) {
		const profile = profileOf(configMatch[1]);
		if (!profile) return notFound(res);
		if (req.method === 'GET') return json(res, state.configs[profile.id] ?? []);
		if (req.method === 'PATCH') {
			const body = await readBody(req);
			const file = (state.configs[profile.id] ?? []).find((item) => item.path === body.file);
			if (!file) return notFound(res);
			const entry = file.entries.find((item) => item.section === body.section && item.key === body.key);
			if (!entry) return notFound(res);
			entry.value = body.value;
			entry.modified = entry.value !== entry.defaultValue;
			log('info', 'config', `${file.name}: ${entry.section}.${entry.key} = ${JSON.stringify(entry.value)}`);
			return json(res, file);
		}
	}

	const configResetMatch = /^\/api\/v1\/profiles\/(\d+)\/config\/reset$/.exec(path);
	if (configResetMatch && req.method === 'POST') {
		const profile = profileOf(configResetMatch[1]);
		if (!profile) return notFound(res);
		const body = await readBody(req);
		const file = (state.configs[profile.id] ?? []).find((item) => item.path === body.file);
		if (!file) return notFound(res);
		const entry = file.entries.find((item) => item.section === body.section && item.key === body.key);
		if (!entry) return notFound(res);
		entry.value = entry.defaultValue;
		entry.modified = false;
		return json(res, file);
	}

	const launchMatch = /^\/api\/v1\/profiles\/(\d+)\/launch$/.exec(path);
	if (launchMatch && req.method === 'POST') {
		const profile = profileOf(launchMatch[1]);
		if (!profile) return notFound(res);
		const body = await readBody(req);
		const game = GAMES.find((item) => item.slug === profile.gameSlug);
		log('info', 'launch', `Launching ${game?.name ?? profile.gameSlug}${body.vanilla ? ' (vanilla)' : ''} with profile “${profile.name}”`);
		return json(res, {
			ok: true,
			command: `steam -applaunch ${steamAppId(profile.gameSlug)}${body.vanilla ? '' : ' --profile ' + profile.name}`,
		});
	}

	/* --- import ----------------------------------------------------- */
	if (path === '/api/v1/import' && req.method === 'POST') {
		const body = await readBody(req);
		let parsed;
		try {
			parsed = JSON.parse(Buffer.from(String(body.code ?? ''), 'base64').toString('utf8'));
		} catch {
			return fail(res, 400, 'That does not look like a profile code');
		}
		if (!parsed || !Array.isArray(parsed.mods)) return fail(res, 400, 'Profile code is missing a mod list');
		const slug = String(body.gameSlug ?? parsed.gameSlug ?? 'lethal-company');
		const id = state.nextProfileId++;
		const profile = {
			id,
			gameSlug: slug,
			name: parsed.name ? `${parsed.name} (imported)` : 'Imported profile',
			active: false,
			createdAt: new Date().toISOString(),
			customArgs: '',
			path: `~/.local/share/GaleX/profiles/${slug}/imported-${id}`,
		};
		state.profiles.push(profile);
		state.installed[id] = [];
		const packages = parsed.mods.map((versionId) => {
			const match = /^(.+)-(\d+\.\d+\.\d+.*)$/.exec(String(versionId));
			const fullName = match ? match[1] : String(versionId);
			return { fullName, version: match ? match[2] : '1.0.0', versionId, entry: findPackage(fullName) };
		});
		applyPackages(profile, 'install', packages);
		log('info', 'import', `Imported ${packages.length} mods into “${profile.name}”`);
		broadcast({ type: 'profiles.changed', gameSlug: slug });
		return json(res, { profile: profileSummary(profile), installed: packages.length, skipped: 0 }, 201);
	}

	/* --- install queue ---------------------------------------------- */
	if (path === '/api/v1/installs' && req.method === 'GET') {
		const slug = url.searchParams.get('gameSlug');
		const tasks = slug ? state.tasks.filter((task) => task.gameSlug === slug) : state.tasks;
		return json(res, tasks.slice(0, 30));
	}

	const cancelMatch = /^\/api\/v1\/installs\/([^/]+)\/cancel$/.exec(path);
	if (cancelMatch && req.method === 'POST') {
		const task = state.tasks.find((item) => item.id === cancelMatch[1]);
		if (!task) return notFound(res);
		task.status = 'cancelled';
		task.finishedAt = new Date().toISOString();
		broadcast({ type: 'install.settled', task });
		res.writeHead(204, { 'access-control-allow-origin': '*' });
		return res.end();
	}

	/* --- Thunderstore ------------------------------------------------ */
	const browseMatch = /^\/api\/v1\/store\/([^/]+)\/packages$/.exec(path);
	if (browseMatch && req.method === 'GET') {
		const slug = decodeURIComponent(browseMatch[1]);
		const search = (url.searchParams.get('search') ?? '').toLowerCase().trim();
		const category = url.searchParams.get('category');
		const sort = url.searchParams.get('sort') ?? 'rating';
		const includeDeprecated = url.searchParams.get('deprecated') === '1';
		const page = Math.max(1, Number(url.searchParams.get('page') ?? 1));
		const pageSize = Math.min(60, Math.max(6, Number(url.searchParams.get('pageSize') ?? 30)));

		const active = activeProfileFor(slug);
		const installedNames = active ? new Set(installedOf(active.id).map((record) => record.fullName)) : new Set();

		let list = packagesFor(slug).filter((entry) => includeDeprecated || !entry.deprecated);
		if (category) list = list.filter((entry) => entry.categories.includes(category));
		if (search) {
			list = list.filter((entry) =>
				`${entry.fullName} ${entry.description}`.toLowerCase().includes(search),
			);
		}
		list = [...list].sort((a, b) => {
			switch (sort) {
				case 'downloads':
					return b.totalDownloads - a.totalDownloads;
				case 'updated':
					return Date.parse(b.dateUpdated) - Date.parse(a.dateUpdated);
				case 'newest':
					return Date.parse(b.dateCreated) - Date.parse(a.dateCreated);
				case 'name':
					return a.name.localeCompare(b.name);
				default:
					return b.ratingScore - a.ratingScore;
			}
		});

		const total = list.length;
		const slice = list.slice((page - 1) * pageSize, page * pageSize);

		return json(res, {
			total,
			page,
			pageSize,
			packages: slice.map((entry) => ({
				fullName: entry.fullName,
				name: entry.name,
				owner: entry.owner,
				description: entry.description,
				iconUrl: entry.iconUrl,
				ratingScore: entry.ratingScore,
				totalDownloads: entry.totalDownloads,
				dateUpdated: entry.dateUpdated,
				version: latestVersion(entry).version,
				versionId: latestVersion(entry).versionId,
				categories: entry.categories,
				deprecated: entry.deprecated,
				pinned: false,
				modpack: entry.modpack,
				installed: installedNames.has(entry.fullName),
				installedVersion: installedOf(active?.id ?? -1).find((record) => record.fullName === entry.fullName)?.version,
			})),
		});
	}

	const categoriesMatch = /^\/api\/v1\/store\/([^/]+)\/categories$/.exec(path);
	if (categoriesMatch && req.method === 'GET') {
		const slug = decodeURIComponent(categoriesMatch[1]);
		const list = (CATEGORIES[slug] ?? ['Mods', 'Tools', 'Libraries']).map((name) => ({
			name,
			slug: name.toLowerCase().replace(/\s+/g, '-'),
			count: packagesFor(slug).filter((entry) => entry.categories.includes(name)).length,
		}));
		return json(res, list);
	}

	const packageMatch = /^\/api\/v1\/store\/packages\/([^/]+)\/([^/]+)$/.exec(path);
	if (packageMatch && req.method === 'GET') {
		const fullName = `${decodeURIComponent(packageMatch[1])}-${decodeURIComponent(packageMatch[2])}`;
		const entry = findPackage(fullName);
		if (!entry) return notFound(res);
		const game = gameForPackage(entry);
		const active = activeProfileFor(game?.slug ?? 'lethal-company');
		const installedNames = new Set(installedOf(active?.id ?? -1).map((record) => record.fullName));

		const dependencyPreview = [];
		for (const dep of entry.dependencies) {
			const depEntry = findPackage(dep);
			if (!depEntry) continue;
			dependencyPreview.push({
				fullName: dep,
				versionId: latestVersion(depEntry).versionId,
				name: depEntry.name,
				installed: installedNames.has(dep),
			});
			for (const nested of depEntry.dependencies) {
				const nestedEntry = findPackage(nested);
				if (!nestedEntry || dependencyPreview.some((item) => item.fullName === nested)) continue;
				dependencyPreview.push({
					fullName: nested,
					versionId: latestVersion(nestedEntry).versionId,
					name: nestedEntry.name,
					installed: installedNames.has(nested),
				});
			}
		}

		return json(res, {
			fullName: entry.fullName,
			name: entry.name,
			owner: entry.owner,
			description: entry.description,
			markdown: entry.markdown,
			iconUrl: entry.iconUrl,
			ratingScore: entry.ratingScore,
			totalDownloads: entry.totalDownloads,
			categories: entry.categories,
			deprecated: entry.deprecated,
			modpack: entry.modpack,
			websiteUrl: entry.websiteUrl,
			donationLink: entry.donationLink,
			dateCreated: entry.dateCreated,
			dateUpdated: entry.dateUpdated,
			versions: entry.versions,
			dependencyPreview,
		});
	}

	/* --- misc ------------------------------------------------------- */
	if (path === '/api/v1/logs' && req.method === 'GET') {
		const limit = Math.min(500, Number(url.searchParams.get('limit') ?? 200));
		return json(res, state.logs.slice(-limit));
	}

	if (path === '/api/v1/cache/clear' && req.method === 'POST') {
		log('info', 'cache', 'Download cache cleared');
		return json(res, { freedBytes: 1_284_331_520 });
	}

	return notFound(res);
}

function steamAppId(slug) {
	switch (slug) {
		case 'lethal-company':
			return 1966720;
		case 'repo':
			return 3241660;
		case 'riskofrain2':
			return 632360;
		case 'valheim':
			return 892970;
		default:
			return 0;
	}
}

const server = http.createServer((req, res) => {
	handle(req, res).catch((error) => {
		console.error(error);
		fail(res, 500, error instanceof Error ? error.message : 'internal error');
	});
});

server.listen(PORT, '0.0.0.0', () => {
	console.log(`GaleX dev backend listening on http://0.0.0.0:${PORT}`);
	console.log(`  • ${GAMES.length} games, ${PACKAGES.length} packages, ${state.profiles.length} profiles`);
	console.log('  • SSE: /api/v1/events');
});
