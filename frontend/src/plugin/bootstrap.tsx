import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../App';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Icon } from '../components/Icon';

declare global {
	interface Window {
		GaleX?: {
			open: () => void;
			close: () => void;
			toggle: () => void;
		};
		Millennium?: {
			AddWindowCreateHook?: (callback: (context: unknown) => void) => void;
		};
	}
}

const HOTKEY = (event: KeyboardEvent) => (event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'g';

/**
 * The Steam-side shell: a launcher pill docked into the client plus a modal
 * window that hosts the very same React app the browser build renders.
 */
function PluginShell() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if (HOTKEY(event)) {
				event.preventDefault();
				setOpen((value) => !value);
			} else if (event.key === 'Escape' && open) {
				setOpen(false);
			}
		};
		window.addEventListener('keydown', onKey, true);
		window.GaleX = {
			open: () => setOpen(true),
			close: () => setOpen(false),
			toggle: () => setOpen((value) => !value),
		};
		return () => {
			window.removeEventListener('keydown', onKey, true);
		};
	}, [open]);

	return (
		<>
			{!open ? (
				<button type="button" className="gx-launcher" onClick={() => setOpen(true)} title="GaleX mod manager (Ctrl+Shift+G)">
					<span className="gx-launcher__glyph">
						<span />
						<span />
					</span>
					<span className="gx-launcher__label">Mods</span>
				</button>
			) : null}

			{open ? (
				<div className="gx-plugin-window" role="dialog" aria-modal="true" aria-label="GaleX mod manager">
					<div className="gx-plugin-shell">
						<ErrorBoundary>
							<App />
						</ErrorBoundary>
						<button type="button" className="gx-plugin-close" onClick={() => setOpen(false)} title="Close (Esc)">
							<Icon name="x" size={15} />
						</button>
					</div>
				</div>
			) : null}
		</>
	);
}

/**
 * Entry point used by the Millennium bundle. Safe to call twice — watched
 * windows and client reloads re-run the injected module.
 */
export function mountIntoSteam() {
	if (document.getElementById('galex-steam-root')) return;

	const host = document.createElement('div');
	host.id = 'galex-steam-root';
	document.body.appendChild(host);

	createRoot(host).render(<PluginShell />);

	// Steam recreates the main window when switching between desktop and Big
	// Picture mode; make sure our launcher comes back with it.
	window.Millennium?.AddWindowCreateHook?.(() => {
		if (!document.getElementById('galex-steam-root')) {
			const retry = document.createElement('div');
			retry.id = 'galex-steam-root';
			document.body.appendChild(retry);
			createRoot(retry).render(<PluginShell />);
		}
	});
}
