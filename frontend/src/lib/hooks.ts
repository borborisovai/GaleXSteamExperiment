import { useEffect, useRef, useState } from 'react';
import { api } from './api';
import type { PackageDetail } from './types';

const detailCache = new Map<string, PackageDetail>();

export interface AsyncResult<T> {
	data?: T;
	loading: boolean;
	error?: string;
}

/** Fetches a Thunderstore package with a tiny in-memory cache. */
export function usePackageDetail(fullName: string | undefined): AsyncResult<PackageDetail> {
	const [state, setState] = useState<AsyncResult<PackageDetail>>({
		data: fullName ? detailCache.get(fullName) : undefined,
		loading: Boolean(fullName) && !detailCache.has(fullName ?? ''),
	});

	useEffect(() => {
		if (!fullName) {
			setState({ loading: false });
			return;
		}
		const cached = detailCache.get(fullName);
		if (cached) {
			setState({ data: cached, loading: false });
			return;
		}
		let cancelled = false;
		setState({ loading: true });
		api
			.packageDetail(fullName)
			.then((detail) => {
				detailCache.set(fullName, detail);
				if (!cancelled) setState({ data: detail, loading: false });
			})
			.catch((err: unknown) => {
				if (!cancelled) setState({ loading: false, error: err instanceof Error ? err.message : String(err) });
			});
		return () => {
			cancelled = true;
		};
	}, [fullName]);

	return state;
}

export function useDebounced<T>(value: T, delay = 250): T {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);
	return debounced;
}

export function useCopyToClipboard(resetMs = 1600) {
	const [copied, setCopied] = useState(false);
	const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

	useEffect(() => () => clearTimeout(timer.current), []);

	const copy = async (value: string) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			clearTimeout(timer.current);
			timer.current = setTimeout(() => setCopied(false), resetMs);
			return true;
		} catch {
			return false;
		}
	};

	return { copied, copy };
}

/** Keeps the previous value around so drawers can animate out / avoid flicker. */
export function useStickyValue<T>(value: T | undefined): T | undefined {
	const ref = useRef<T | undefined>(value);
	if (value !== undefined) ref.current = value;
	return ref.current;
}
