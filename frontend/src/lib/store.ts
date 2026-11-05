import { useSyncExternalStore } from 'react';
import type { Game, Health, InstallTask, LogEntry, Mod, Profile } from './types';

export type ViewId = 'installed' | 'browse' | 'updates' | 'profiles' | 'config' | 'logs' | 'settings';
export type Connection = 'booting' | 'online' | 'offline';

export interface Toast {
	id: number;
	kind: 'info' | 'success' | 'error';
	title: string;
	body?: string;
}

export interface AppState {
	connection: Connection;
	connectionError?: string;
	health?: Health;

	games: Game[];
	gameSlug?: string;

	profiles: Profile[];
	profileId?: number;

	mods: Mod[];
	modsLoading: boolean;
	modsError?: string;

	tasks: InstallTask[];
	logs: LogEntry[];

	view: ViewId;
	/** Text typed into the global search field; the browse view owns the results. */
	search: string;
	/** Mod detail drawer (installed mod uuid). */
	selectedModUuid?: string;
	/** Store package drawer (`Owner-Name`). */
	selectedPackage?: string;

	toasts: Toast[];
	paletteOpen: boolean;
	compact: boolean;

	/** Keys of in-flight one-shot actions, used to disable buttons. */
	busy: Record<string, boolean>;

	bootstrapped: boolean;
}

export const initialState: AppState = {
	connection: 'booting',
	games: [],
	profiles: [],
	mods: [],
	modsLoading: false,
	tasks: [],
	logs: [],
	view: 'installed',
	search: '',
	toasts: [],
	paletteOpen: false,
	compact: false,
	busy: {},
	bootstrapped: false,
};

type Listener = () => void;

class Store {
	private state: AppState = initialState;
	private listeners = new Set<Listener>();
	private toastSeq = 1;

	getState = (): AppState => this.state;

	subscribe = (listener: Listener): (() => void) => {
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	};

	set(patch: Partial<AppState> | ((state: AppState) => Partial<AppState>)) {
		const next = typeof patch === 'function' ? patch(this.state) : patch;
		this.state = { ...this.state, ...next };
		this.listeners.forEach((l) => l());
	}

	toast(kind: Toast['kind'], title: string, body?: string) {
		const toast: Toast = { id: this.toastSeq++, kind, title, body };
		this.set((s) => ({ toasts: [...s.toasts, toast] }));
		if (kind !== 'error') {
			setTimeout(() => this.dismissToast(toast.id), 4200);
		} else {
			setTimeout(() => this.dismissToast(toast.id), 9000);
		}
		return toast.id;
	}

	dismissToast(id: number) {
		this.set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
	}

	pushLog(entry: LogEntry) {
		this.set((s) => ({ logs: [...s.logs.slice(-399), entry] }));
	}

	/** Marks a one-shot action as running so the UI can show spinners. */
	async withBusy<T>(key: string, fn: () => Promise<T>): Promise<T | undefined> {
		this.set((s) => ({ busy: { ...s.busy, [key]: true } }));
		try {
			return await fn();
		} finally {
			this.set((s) => {
				const busy = { ...s.busy };
				delete busy[key];
				return { busy };
			});
		}
	}
}

export const store = new Store();

export function useAppState(): AppState {
	return useSyncExternalStore(store.subscribe, store.getState, store.getState);
}

export function useBusy(key: string): boolean {
	const state = useAppState();
	return Boolean(state.busy[key]);
}

/* ------------------------------------------------------------------ */
/* Derived selectors                                                   */
/* ------------------------------------------------------------------ */

export function activeGame(state: AppState): Game | undefined {
	return state.games.find((g) => g.slug === state.gameSlug);
}

export function activeProfile(state: AppState): Profile | undefined {
	return state.profiles.find((p) => p.id === state.profileId);
}

export function selectedMod(state: AppState): Mod | undefined {
	return state.mods.find((m) => m.uuid === state.selectedModUuid);
}

export function modsWithUpdates(mods: Mod[]): Mod[] {
	return mods.filter((m) => m.update && !m.ignoredUpdate);
}

export function installCount(tasks: InstallTask[]): number {
	return tasks.filter((t) => t.status === 'queued' || t.status === 'downloading' || t.status === 'extracting')
		.length;
}

/* ------------------------------------------------------------------ */
/* UI preferences (persisted in localStorage)                          */
/* ------------------------------------------------------------------ */

const PREF_KEY = 'galex.prefs';

interface Prefs {
	gameSlug?: string;
	profileId?: number;
	view?: ViewId;
	compact?: boolean;
}

export function loadPrefs(): Prefs {
	try {
		const raw = window.localStorage.getItem(PREF_KEY);
		return raw ? (JSON.parse(raw) as Prefs) : {};
	} catch {
		return {};
	}
}

export function savePrefs(patch: Prefs) {
	try {
		const current = loadPrefs();
		window.localStorage.setItem(PREF_KEY, JSON.stringify({ ...current, ...patch }));
	} catch {
		/* ignore */
	}
}
