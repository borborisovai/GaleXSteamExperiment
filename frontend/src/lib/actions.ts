import { ApiError, api, resolveApiBase } from './api';
import { subscribeEvents } from './events';
import { loadPrefs, savePrefs, store, type Connection, type ViewId } from './store';
import type { ConfigValue, Game, InstallTask, Mod } from './types';

function errorMessage(err: unknown): string {
	if (err instanceof ApiError) {
		if (err.isNetwork) return 'The Gale daemon is not reachable on this port.';
		return err.message;
	}
	if (err instanceof Error) return err.message;
	return String(err);
}

function log(scope: string, level: 'info' | 'warn' | 'error', message: string) {
	store.pushLog({ id: Date.now() + Math.random(), at: new Date().toISOString(), level, scope, message });
}

function fail(title: string, err: unknown, body?: string) {
	const message = errorMessage(err);
	log('ui', 'error', `${title}: ${message}`);
	store.toast('error', title, body ?? message);
}

/* ------------------------------------------------------------------ */
/* Connection + bootstrap                                              */
/* ------------------------------------------------------------------ */

let stopEvents: (() => void) | null = null;
let healthTimer: ReturnType<typeof setInterval> | null = null;
let modsTimer: ReturnType<typeof setTimeout> | undefined;
let profilesTimer: ReturnType<typeof setTimeout> | undefined;

function setConnection(connection: Connection, connectionError?: string) {
	store.set({ connection, connectionError });
}

function startEvents() {
	stopEvents?.();
	stopEvents = subscribeEvents({
		onEvent: (event) => {
			switch (event.type) {
				case 'daemon.hello':
					log('daemon', 'info', `bridge v${event.version} connected`);
					break;
				case 'install.queued':
				case 'install.progress':
				case 'install.settled':
					upsertTask(event.task);
					break;
				case 'mods.changed':
					if (event.profileId === store.getState().profileId) scheduleRefreshMods();
					break;
				case 'profiles.changed':
					if (event.gameSlug === store.getState().gameSlug) scheduleRefreshProfiles();
					break;
				case 'log':
					store.pushLog(event.entry);
					break;
			}
		},
		onStatus: (status) => {
			if (status === 'open' && store.getState().connection === 'offline') {
				setConnection('online');
				void actions.refreshAll();
			}
		},
	});
}

function startHealthPolling() {
	if (healthTimer) return;
	healthTimer = setInterval(() => {
		void (async () => {
			try {
				const health = await api.health();
				if (store.getState().connection !== 'online') {
					setConnection('online');
					void actions.refreshAll();
				}
				store.set({ health });
			} catch (err) {
				if (store.getState().connection === 'online') {
					setConnection('offline', errorMessage(err));
				}
			}
		})();
	}, 15_000);
}

function stopAll() {
	stopEvents?.();
	stopEvents = null;
	if (healthTimer) {
		clearInterval(healthTimer);
		healthTimer = null;
	}
}

function upsertTask(task: InstallTask) {
	store.set((s) => {
		const idx = s.tasks.findIndex((t) => t.id === task.id);
		const tasks = idx >= 0 ? s.tasks.map((t) => (t.id === task.id ? task : t)) : [task, ...s.tasks];
		return { tasks };
	});
	if (task.status === 'done' || task.status === 'failed' || task.status === 'cancelled') {
		if (task.status === 'done') {
			store.toast('success', 'Installation finished', task.step || undefined);
		} else if (task.status === 'failed') {
			store.toast('error', 'Installation failed', task.error);
		}
		scheduleRefreshMods(true);
		scheduleRefreshProfiles(true);
	}
}

// Separate timers: the daemon emits "mods.changed" and "profiles.changed" back to
// back after an install, and a shared handle would swallow the mods refresh.
function scheduleRefreshMods(immediate = false) {
	clearTimeout(modsTimer);
	modsTimer = setTimeout(() => void actions.refreshMods(), immediate ? 120 : 450);
}

function scheduleRefreshProfiles(immediate = false) {
	clearTimeout(profilesTimer);
	profilesTimer = setTimeout(() => void actions.refreshProfiles(), immediate ? 120 : 450);
}

export const actions = {
	async bootstrap() {
		setConnection('booting');
		const prefs = loadPrefs();
		store.set({ view: prefs.view ?? 'installed', compact: Boolean(prefs.compact) });

		let health;
		try {
			health = await api.health();
		} catch (err) {
			setConnection('offline', errorMessage(err));
			log('daemon', 'error', `health check failed: ${errorMessage(err)}`);
			return;
		}

		store.set({ health, connection: 'online', bootstrapped: true });
		startEvents();
		startHealthPolling();

		await actions.refreshGames(prefs.gameSlug, prefs.profileId);
		await actions.refreshInstalls();
		await actions.refreshLogs();
	},

	async reconnect() {
		await actions.bootstrap();
	},

	async refreshGames(preferredSlug?: string, preferredProfileId?: number) {
		let games: Game[];
		try {
			games = await api.games();
		} catch (err) {
			fail('Could not load the game list', err);
			return;
		}
		store.set({ games });

		const state = store.getState();
		const managed = games.filter((g) => g.managed);
		const candidate =
			preferredSlug ??
			state.gameSlug ??
			loadPrefs().gameSlug ??
			managed.find((g) => g.favorite)?.slug ??
			managed[0]?.slug ??
			games.find((g) => g.popular)?.slug ??
			games[0]?.slug;

		if (candidate) await actions.selectGame(candidate, preferredProfileId, true);
		else store.set({ bootstrapped: true });
	},

	async selectGame(slug: string, preferredProfileId?: number, silent = false) {
		store.set({ gameSlug: slug, mods: [], profileId: undefined, modsLoading: true });
		savePrefs({ gameSlug: slug });
		await actions.refreshProfiles(preferredProfileId);
		await actions.refreshMods();
		if (!silent) log('ui', 'info', `switched to game ${slug}`);
	},

	async refreshProfiles(preferredProfileId?: number) {
		const { gameSlug } = store.getState();
		if (!gameSlug) return;
		try {
			const profiles = await api.listProfiles(gameSlug);
			const state = store.getState();
			const wanted = preferredProfileId ?? state.profileId ?? loadPrefs().profileId;
			const selected =
				profiles.find((p) => p.id === wanted) ?? profiles.find((p) => p.active) ?? profiles[0];
			store.set({ profiles, profileId: selected?.id });
			if (selected && selected.id !== state.profileId) {
				savePrefs({ profileId: selected.id });
				await actions.refreshMods();
			}
		} catch (err) {
			fail('Could not load profiles', err);
		}
	},

	async selectProfile(id: number) {
		store.set({ profileId: id, modsLoading: true });
		savePrefs({ profileId: id });
		await actions.refreshMods();
	},

	async refreshMods() {
		const { profileId } = store.getState();
		if (!profileId) {
			store.set({ mods: [], modsLoading: false });
			return;
		}
		store.set({ modsLoading: store.getState().mods.length === 0, modsError: undefined });
		try {
			const mods = await api.mods(profileId);
			if (store.getState().profileId !== profileId) return;
			store.set({ mods, modsLoading: false });
		} catch (err) {
			store.set({ modsLoading: false, modsError: errorMessage(err) });
			fail('Could not load installed mods', err);
		}
	},

	async refreshInstalls() {
		try {
			const tasks = await api.installs();
			store.set({ tasks });
		} catch {
			/* non critical */
		}
	},

	async refreshLogs() {
		try {
			const logs = await api.logs(200);
			store.set({ logs });
		} catch {
			/* non critical */
		}
	},

	async refreshAll() {
		await actions.refreshGames();
		await actions.refreshInstalls();
		await actions.refreshLogs();
	},

	setView(view: ViewId) {
		store.set({ view, paletteOpen: false });
		savePrefs({ view });
	},

	setSearch(search: string) {
		store.set({ search });
	},

	setCompact(compact: boolean) {
		store.set({ compact });
		savePrefs({ compact });
	},

	togglePalette(open?: boolean) {
		store.set((s) => ({ paletteOpen: open ?? !s.paletteOpen }));
	},

	openMod(uuid: string) {
		store.set({ selectedModUuid: uuid, selectedPackage: undefined });
	},

	closeMod() {
		store.set({ selectedModUuid: undefined });
	},

	openPackage(fullName: string) {
		store.set({ selectedPackage: fullName, selectedModUuid: undefined });
	},

	closePackage() {
		store.set({ selectedPackage: undefined });
	},

	async manageGame(slug: string) {
		try {
			await api.manageGame(slug);
			store.toast('success', 'Game added', 'GaleX created a default profile.');
			await actions.refreshGames(slug);
			actions.setView('installed');
		} catch (err) {
			fail('Could not add game', err);
		}
	},

	async toggleFavorite(slug: string, favorite: boolean) {
		try {
			await api.toggleFavorite(slug, favorite);
			store.set((s) => ({ games: s.games.map((g) => (g.slug === slug ? { ...g, favorite } : g)) }));
		} catch (err) {
			fail('Could not update favourite', err);
		}
	},

	async toggleMod(mod: Mod) {
		const { profileId } = store.getState();
		if (!profileId) return;
		const enabled = !mod.enabled;
		store.set((s) => ({
			mods: s.mods.map((m) => (m.uuid === mod.uuid ? { ...m, enabled } : m)),
		}));
		try {
			await api.setModEnabled(profileId, mod.uuid, enabled);
			await actions.refreshProfiles();
		} catch (err) {
			store.set((s) => ({
				mods: s.mods.map((m) => (m.uuid === mod.uuid ? { ...m, enabled: mod.enabled } : m)),
			}));
			fail(`Could not ${enabled ? 'enable' : 'disable'} ${mod.name}`, err);
		}
	},

	async setAllMods(enabled: boolean) {
		const { profileId, mods } = store.getState();
		if (!profileId) return;
		const targets = mods.filter((m) => m.enabled !== enabled);
		if (targets.length === 0) return;
		await store.withBusy('bulk-toggle', async () => {
			for (const mod of targets) {
				try {
					await api.setModEnabled(profileId, mod.uuid, enabled);
				} catch (err) {
					fail(`Could not change ${mod.name}`, err);
					break;
				}
			}
		});
		await actions.refreshMods();
		await actions.refreshProfiles();
	},

	async removeMod(mod: Mod, force = false) {
		const { profileId } = store.getState();
		if (!profileId) return;
		await store.withBusy(`remove:${mod.uuid}`, async () => {
			try {
				await api.removeMod(profileId, mod.uuid, force);
				store.set((s) => ({
					mods: s.mods.filter((m) => m.uuid !== mod.uuid),
					selectedModUuid: s.selectedModUuid === mod.uuid ? undefined : s.selectedModUuid,
				}));
				store.toast('success', 'Removed', `${mod.name} was removed from the profile.`);
				await actions.refreshProfiles();
			} catch (err) {
				fail(`Could not remove ${mod.name}`, err);
			}
		});
	},

	async install(versionIds: string[]) {
		const { profileId } = store.getState();
		if (!profileId || versionIds.length === 0) return;
		try {
			const task = await api.install(profileId, versionIds);
			upsertTask(task);
			store.toast('info', 'Queued', `${versionIds.length} package(s) added to the install queue.`);
			actions.setView('installed');
		} catch (err) {
			fail('Installation could not be queued', err);
		}
	},

	async updateMods(uuids?: string[]) {
		const { profileId, mods } = store.getState();
		if (!profileId) return;
		const count = uuids?.length ?? mods.filter((m) => m.update && !m.ignoredUpdate).length;
		if (count === 0) {
			store.toast('info', 'Everything is up to date');
			return;
		}
		try {
			const task = await api.updateMods(profileId, uuids);
			upsertTask(task);
			store.toast('info', 'Updating', `${count} mod(s) queued for update.`);
		} catch (err) {
			fail('Update could not be queued', err);
		}
	},

	async changeVersion(mod: Mod, versionId: string) {
		const { profileId } = store.getState();
		if (!profileId) return;
		try {
			const task = await api.changeModVersion(profileId, mod.uuid, versionId);
			upsertTask(task);
			store.toast('info', 'Changing version', `${mod.name} → ${versionId.split('-').pop()}`);
		} catch (err) {
			fail('Could not change version', err);
		}
	},

	async ignoreUpdate(mod: Mod, ignore: boolean) {
		const { profileId } = store.getState();
		if (!profileId) return;
		try {
			const updated = await api.setIgnoreUpdate(profileId, mod.uuid, ignore);
			store.set((s) => ({ mods: s.mods.map((m) => (m.uuid === mod.uuid ? updated : m)) }));
			store.toast('info', ignore ? 'Update ignored' : 'Update un-ignored', mod.name);
		} catch (err) {
			fail('Could not update preferences', err);
		}
	},

	async cancelInstall(taskId: string) {
		try {
			await api.cancelInstall(taskId);
		} catch (err) {
			fail('Could not cancel the task', err);
		}
	},

	async launch(vanilla = false) {
		const { profileId } = store.getState();
		if (!profileId) return;
		await store.withBusy('launch', async () => {
			try {
				const result = await api.launch(profileId, vanilla);
				store.toast('success', 'Launching', result.command);
			} catch (err) {
				fail('Could not launch the game', err);
			}
		});
	},

	async createProfile(name: string, duplicateOf?: number) {
		const { gameSlug } = store.getState();
		if (!gameSlug) return;
		try {
			const profile = await api.createProfile(gameSlug, name, duplicateOf);
			await actions.refreshProfiles(profile.id);
			store.toast('success', 'Profile created', name);
			return profile;
		} catch (err) {
			fail('Could not create the profile', err);
		}
	},

	async renameProfile(id: number, name: string) {
		try {
			await api.updateProfile(id, { name });
			await actions.refreshProfiles(id);
			store.toast('success', 'Profile renamed', name);
		} catch (err) {
			fail('Could not rename the profile', err);
		}
	},

	async setCustomArgs(id: number, customArgs: string) {
		try {
			await api.updateProfile(id, { customArgs });
			await actions.refreshProfiles(id);
		} catch (err) {
			fail('Could not save launch arguments', err);
		}
	},

	async activateProfile(id: number) {
		try {
			await api.activateProfile(id);
			await actions.refreshProfiles(id);
			store.toast('success', 'Profile activated');
		} catch (err) {
			fail('Could not activate the profile', err);
		}
	},

	async deleteProfile(id: number) {
		try {
			await api.deleteProfile(id);
			await actions.refreshProfiles();
			store.toast('success', 'Profile deleted');
		} catch (err) {
			fail('Could not delete the profile', err);
		}
	},

	async exportProfile(id: number): Promise<string | undefined> {
		return store.withBusy('export', async () => {
			try {
				const result = await api.exportProfile(id);
				log('ui', 'info', `exported profile ${id} (${result.fileCount} files)`);
				return result.code;
			} catch (err) {
				fail('Export failed', err);
				return undefined;
			}
		});
	},

	async importCode(code: string) {
		const { gameSlug } = store.getState();
		if (!gameSlug) return;
		return store.withBusy('import', async () => {
			try {
				const result = await api.importProfile(gameSlug, code);
				await actions.refreshProfiles(result.profile.id);
				store.toast(
					'success',
					'Profile imported',
					`${result.installed} mod(s) restored, ${result.skipped} skipped.`,
				);
				return result;
			} catch (err) {
				fail('Import failed', err);
				return undefined;
			}
		});
	},

	async saveConfigEntry(profileId: number, file: string, section: string, key: string, value: ConfigValue) {
		try {
			const updated = await api.setConfigEntry(profileId, file, section, key, value);
			return updated;
		} catch (err) {
			fail('Could not write the config value', err);
			return undefined;
		}
	},

	async resetConfigEntry(profileId: number, file: string, section: string, key: string) {
		try {
			return await api.resetConfigEntry(profileId, file, section, key);
		} catch (err) {
			fail('Could not reset the config value', err);
			return undefined;
		}
	},

	async clearCache() {
		return store.withBusy('cache', async () => {
			try {
				const result = await api.clearCache();
				store.toast('success', 'Download cache cleared', `Freed ${result.freedBytes} bytes.`);
			} catch (err) {
				fail('Could not clear the cache', err);
			}
		});
	},

	currentApiBase: () => resolveApiBase(),
	stopAll,
};
