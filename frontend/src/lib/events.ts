import { eventStreamUrl } from './api';
import type { GaleEvent } from './types';

export interface EventHandlers {
	onEvent: (event: GaleEvent) => void;
	onStatus?: (status: 'connecting' | 'open' | 'closed') => void;
}

/**
 * Server-sent events from the Gale daemon: install progress, profile mutations,
 * log lines. EventSource reconnects on its own, but we add a backoff wrapper so
 * a stopped daemon does not hammer the socket after the Steam client wakes up.
 */
export function subscribeEvents({ onEvent, onStatus }: EventHandlers): () => void {
	let source: EventSource | null = null;
	let closed = false;
	let attempt = 0;
	let timer: ReturnType<typeof setTimeout> | undefined;

	const connect = () => {
		if (closed) return;
		onStatus?.('connecting');
		let es: EventSource;
		try {
			es = new EventSource(eventStreamUrl());
		} catch {
			scheduleRetry();
			return;
		}
		source = es;

		es.onopen = () => {
			attempt = 0;
			onStatus?.('open');
		};

		es.onmessage = (message) => {
			if (!message.data) return;
			try {
				onEvent(JSON.parse(message.data) as GaleEvent);
			} catch {
				/* malformed frame — ignore */
			}
		};

		es.onerror = () => {
			onStatus?.('closed');
			es.close();
			source = null;
			scheduleRetry();
		};
	};

	const scheduleRetry = () => {
		if (closed) return;
		const delay = Math.min(15_000, 1000 * 2 ** attempt);
		attempt += 1;
		timer = setTimeout(connect, delay);
	};

	connect();

	return () => {
		closed = true;
		if (timer) clearTimeout(timer);
		source?.close();
		source = null;
		onStatus?.('closed');
	};
}
