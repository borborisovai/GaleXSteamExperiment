export function cx(...parts: Array<string | false | null | undefined>): string {
	return parts.filter(Boolean).join(' ');
}

export function formatBytes(bytes: number | undefined | null): string {
	if (!bytes || bytes < 0) return '—';
	const units = ['B', 'KB', 'MB', 'GB'];
	let value = bytes;
	let unit = 0;
	while (value >= 1024 && unit < units.length - 1) {
		value /= 1024;
		unit += 1;
	}
	const digits = value >= 100 || unit === 0 ? 0 : 1;
	return `${value.toFixed(digits)} ${units[unit]}`;
}

export function formatCount(count: number | undefined | null): string {
	if (count === undefined || count === null) return '—';
	if (count < 1000) return String(count);
	if (count < 1_000_000) return `${(count / 1000).toFixed(count < 10_000 ? 1 : 0)}k`;
	return `${(count / 1_000_000).toFixed(1)}M`;
}

export function relativeTime(input: string | number | Date | undefined | null): string {
	if (!input) return '—';
	const date = input instanceof Date ? input : new Date(input);
	const diffMs = Date.now() - date.getTime();
	if (Number.isNaN(diffMs)) return '—';
	const sec = Math.round(diffMs / 1000);
	if (sec < 45) return 'just now';
	const min = Math.round(sec / 60);
	if (min < 60) return `${min} min ago`;
	const hours = Math.round(min / 60);
	if (hours < 24) return `${hours} h ago`;
	const days = Math.round(hours / 24);
	if (days < 31) return `${days} d ago`;
	const months = Math.round(days / 30);
	if (months < 12) return `${months} mo ago`;
	return `${Math.round(months / 12)} y ago`;
}

export function shortDate(input: string | number | Date | undefined | null): string {
	if (!input) return '—';
	const date = input instanceof Date ? input : new Date(input);
	if (Number.isNaN(date.getTime())) return '—';
	return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function clockTime(input: string | number | Date | undefined | null): string {
	if (!input) return '';
	const date = input instanceof Date ? input : new Date(input);
	if (Number.isNaN(date.getTime())) return '';
	return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function initials(name: string): string {
	const cleaned = name.replace(/[^A-Za-z0-9 ]/g, ' ').trim();
	if (!cleaned) return '??';
	const words = cleaned.split(/\s+/).filter(Boolean);
	if (words.length === 1) return words[0]!.slice(0, 2).toUpperCase();
	return `${words[0]![0] ?? ''}${words[1]![0] ?? ''}`.toUpperCase();
}

/** Stable pastel gradient per package, used for generated cover art. */
export function gradientFor(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) % 360;
	}
	const a = hash;
	const b = (hash + 42) % 360;
	return `linear-gradient(135deg, hsl(${a} 62% 34%), hsl(${b} 58% 22%))`;
}

export function accentFor(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) % 360;
	}
	return `hsl(${hash} 70% 62%)`;
}

export function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}

export function debounce<A extends unknown[]>(fn: (...args: A) => void, delay = 250) {
	let timer: ReturnType<typeof setTimeout> | undefined;
	return (...args: A) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => fn(...args), delay);
	};
}

/** Splits `Owner-Name-1.2.3` into its parts without trusting the version format. */
export function splitVersionId(versionId: string): { owner: string; name: string; version: string } {
	const parts = versionId.split('-');
	if (parts.length < 3) return { owner: parts[0] ?? '', name: parts[1] ?? '', version: parts[2] ?? '' };
	const version = parts[parts.length - 1] ?? '';
	const owner = parts[0] ?? '';
	const name = parts.slice(1, -1).join('-');
	return { owner, name, version };
}
