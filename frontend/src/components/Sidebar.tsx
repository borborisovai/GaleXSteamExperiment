import { actions } from '../lib/actions';
import { cx } from '../lib/format';
import { activeGame, activeProfile, modsWithUpdates, useAppState, type ViewId } from '../lib/store';
import { Icon, type IconName } from './Icon';
import { Button } from './ui';

interface NavItem {
	id: ViewId;
	label: string;
	icon: IconName;
	hint?: string;
}

const NAV: NavItem[] = [
	{ id: 'installed', label: 'Installed', icon: 'package' },
	{ id: 'browse', label: 'Browse', icon: 'store' },
	{ id: 'updates', label: 'Updates', icon: 'arrow-up' },
	{ id: 'profiles', label: 'Profiles', icon: 'layers' },
	{ id: 'config', label: 'Config', icon: 'sliders' },
	{ id: 'logs', label: 'Activity', icon: 'terminal' },
];

export function Sidebar() {
	const state = useAppState();
	const game = activeGame(state);
	const profile = activeProfile(state);
	const updates = modsWithUpdates(state.mods).length;
	const enabled = state.mods.filter((m) => m.enabled).length;

	const badgeFor = (id: ViewId): number | undefined => {
		if (id === 'updates' && updates > 0) return updates;
		if (id === 'installed' && state.mods.length > 0) return state.mods.length;
		return undefined;
	};

	return (
		<aside className="gx-sidebar">
			<div className="gx-brand">
				<div className="gx-brand__mark">
					<span />
					<span />
				</div>
				<div className="gx-brand__text">
					<strong>GaleX</strong>
					<small>mod manager</small>
				</div>
			</div>

			<nav className="gx-nav">
				{NAV.map((item) => {
					const badge = badgeFor(item.id);
					return (
						<button
							key={item.id}
							type="button"
							className={cx('gx-nav__item', state.view === item.id && 'is-active')}
							onClick={() => actions.setView(item.id)}
						>
							<Icon name={item.icon} size={17} />
							<span className="gx-nav__label">{item.label}</span>
							{badge !== undefined ? (
								<span className={cx('gx-nav__badge', item.id === 'updates' && 'is-accent')}>{badge}</span>
							) : null}
						</button>
					);
				})}
			</nav>

			<div className="gx-sidebar__spacer" />

			{game && profile ? (
				<div className="gx-session">
					<div className="gx-session__head">
						<Icon name="layers" size={13} />
						<span>{profile.name}</span>
					</div>
					<div className="gx-session__meter">
						<div
							className="gx-session__meter-fill"
							style={{ width: `${state.mods.length ? (enabled / state.mods.length) * 100 : 0}%` }}
						/>
					</div>
					<div className="gx-session__stats">
						<span>
							<strong>{enabled}</strong>/{state.mods.length} enabled
						</span>
						{updates > 0 ? <span className="gx-session__warn">{updates} updates</span> : <span>up to date</span>}
					</div>
					<Button
						full
						size="sm"
						variant="primary"
						icon="play"
						loading={Boolean(state.busy.launch)}
						onClick={() => void actions.launch(false)}
						title="Launch the game through Steam with this profile applied"
					>
						Launch
					</Button>
				</div>
			) : null}

			<footer className="gx-sidebar__foot">
				<button type="button" className="gx-nav__item gx-nav__item--sub" onClick={() => actions.setView('settings')}>
					<Icon name="settings" size={16} />
					<span className="gx-nav__label">Settings</span>
				</button>
				<div className={cx('gx-conn', `gx-conn--${state.connection}`)}>
					<span className="gx-conn__dot" />
					<span>
						{state.connection === 'online'
							? `bridge v${state.health?.version ?? '?'}`
							: state.connection === 'offline'
								? 'bridge offline'
								: 'connecting…'}
					</span>
				</div>
			</footer>
		</aside>
	);
}
