import { useEffect } from 'react';
import { CommandPalette } from './components/CommandPalette';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ModDetailDrawer } from './components/ModDetail';
import { PackageDrawer } from './components/PackageDrawer';
import { Sidebar } from './components/Sidebar';
import { Toasts } from './components/Toasts';
import { TopBar } from './components/TopBar';
import { Skeleton } from './components/ui';
import { actions } from './lib/actions';
import { useAppState } from './lib/store';
import { BrowseView } from './views/BrowseView';
import { ConfigView } from './views/ConfigView';
import { InstalledView } from './views/InstalledView';
import { LogsView } from './views/LogsView';
import { OfflineView } from './views/OfflineView';
import { ProfilesView } from './views/ProfilesView';
import { SettingsView } from './views/SettingsView';
import { UpdatesView } from './views/UpdatesView';

function ViewRouter() {
	const { view } = useAppState();
	switch (view) {
		case 'browse':
			return <BrowseView />;
		case 'updates':
			return <UpdatesView />;
		case 'profiles':
			return <ProfilesView />;
		case 'config':
			return <ConfigView />;
		case 'logs':
			return <LogsView />;
		case 'settings':
			return <SettingsView />;
		default:
			return <InstalledView />;
	}
}

function Splash() {
	return (
		<div className="gx-splash">
			<div className="gx-splash__mark">
				<span />
				<span />
			</div>
			<div className="gx-splash__text">
				<h1>GaleX</h1>
				<p>Connecting to the Gale bridge…</p>
			</div>
			<div className="gx-splash__bars">
				<Skeleton height={10} width={180} radius={6} />
				<Skeleton height={10} width={120} radius={6} />
			</div>
		</div>
	);
}

export function App() {
	const state = useAppState();

	useEffect(() => {
		void actions.bootstrap();
		return () => actions.stopAll();
	}, []);

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			const mod = event.ctrlKey || event.metaKey;
			if (mod && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				actions.togglePalette();
			}
			if (mod && event.key.toLowerCase() === 'r' && event.shiftKey) {
				event.preventDefault();
				void actions.refreshAll();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	if (state.connection === 'booting') {
		return (
			<div className="gx-app gx-app--splash">
				<Splash />
			</div>
		);
	}

	if (state.connection === 'offline') {
		return (
			<div className="gx-app gx-app--offline">
				<OfflineView />
				<Toasts />
			</div>
		);
	}

	return (
		<ErrorBoundary>
			<div className="gx-app">
				<div className="gx-glow gx-glow--one" />
				<div className="gx-glow gx-glow--two" />
				<Sidebar />
				<div className="gx-main">
					<TopBar />
					<main className="gx-content">
						<ViewRouter />
					</main>
				</div>
				<ModDetailDrawer />
				<PackageDrawer />
				<CommandPalette />
				<Toasts />
			</div>
		</ErrorBoundary>
	);
}
