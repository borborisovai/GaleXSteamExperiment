import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Badge, Button, TextInput, Toggle } from '../components/ui';
import { DEFAULT_DAEMON_PORT, UI_VERSION, getApiBase, setRuntimeApiBase } from '../lib/api';
import { actions } from '../lib/actions';
import { useCopyToClipboard } from '../lib/hooks';
import { activeGame, activeProfile, useAppState } from '../lib/store';

const QUICK_VIEWS: Array<'installed' | 'browse' | 'updates' | 'profiles' | 'config'> = [
	'installed',
	'browse',
	'updates',
	'profiles',
	'config',
];

export function SettingsView() {
	const state = useAppState();
	const game = activeGame(state);
	const profile = activeProfile(state);
	const [apiBase, setApiBase] = useState(getApiBase() || `http://127.0.0.1:${DEFAULT_DAEMON_PORT}`);
	const [args, setArgs] = useState(profile?.customArgs ?? '');
	const { copied, copy } = useCopyToClipboard();

	return (
		<div className="gx-view gx-view--settings">
			<header className="gx-view__head">
				<div>
					<h1>Settings</h1>
					<p>Bridge connection, launch behaviour and appearance of the in-Steam interface.</p>
				</div>
			</header>

			<div className="gx-settings">
				<section className="gx-card">
					<header className="gx-card__head">
						<Icon name="globe" size={16} />
						<div>
							<h2>Gale bridge</h2>
							<p>The daemon that owns profiles, downloads and installs.</p>
						</div>
						<Badge tone={state.connection === 'online' ? 'green' : state.connection === 'offline' ? 'red' : 'neutral'}>
							{state.connection}
						</Badge>
					</header>

					<div className="gx-card__row">
						<label className="gx-field">
							<span>Daemon address</span>
							<div className="gx-inlinefield">
								<TextInput value={apiBase} onChange={setApiBase} placeholder={`http://127.0.0.1:${DEFAULT_DAEMON_PORT}`} />
								<Button
									variant="primary"
									onClick={() => {
										setRuntimeApiBase(apiBase.trim() || null);
										void actions.reconnect();
									}}
								>
									Connect
								</Button>
							</div>
							<small className="gx-muted">
								Inside Steam the UI runs in CEF, so the daemon must listen on loopback and allow CORS.
							</small>
						</label>
					</div>

					<div className="gx-kv">
						<Row label="Status" value={state.connection === 'online' ? 'connected' : (state.connectionError ?? 'connecting')} />
						<Row label="Bridge version" value={state.health?.version ?? '—'} />
						<Row label="Gale core" value={state.health?.core ?? '—'} />
						<Row label="Data folder" value={state.health?.dataDir ?? '—'} mono />
						<Row label="Steam detected" value={state.health?.steamDetected ? 'yes' : 'not found'} />
						<Row label="Uptime" value={state.health ? `${Math.round(state.health.uptimeSec / 60)} min` : '—'} />
					</div>

					<div className="gx-card__actions">
						<Button icon="refresh" onClick={() => void actions.reconnect()}>
							Reconnect
						</Button>
						<Button icon="trash" loading={Boolean(state.busy.cache)} onClick={() => void actions.clearCache()}>
							Clear download cache
						</Button>
						<Button
							icon={copied ? 'check' : 'copy'}
							onClick={() => void copy(`galexd --port ${DEFAULT_DAEMON_PORT}`)}
						>
							{copied ? 'Copied' : 'Copy start command'}
						</Button>
					</div>
				</section>

				{game ? (
					<section className="gx-card">
						<header className="gx-card__head">
							<Icon name="package" size={16} />
							<div>
								<h2>{game.name}</h2>
								<p>
									{game.managed ? `${game.modLoader} · ${game.profileCount} profile(s)` : 'Not managed by GaleX yet'}
								</p>
							</div>
							{game.managed ? (
								<Badge tone="blue">{game.slug}</Badge>
							) : (
								<Button size="sm" variant="primary" icon="plus" onClick={() => void actions.manageGame(game.slug)}>
									Add
								</Button>
							)}
						</header>

						<div className="gx-kv">
							<Row label="Install folder" value={game.path ?? game.detectedPath ?? 'not detected'} mono />
							<Row label="Mod loader" value={game.modLoader} />
							<Row label="Active profile" value={profile?.name ?? '—'} />
						</div>

						<label className="gx-field">
							<span>Extra launch arguments</span>
							<textarea
								className="gx-textarea"
								rows={2}
								value={args}
								onChange={(event) => setArgs(event.target.value)}
								placeholder="-screen-width 1920 -screen-height 1080"
							/>
							<small className="gx-muted">
								Passed after the mod loader arguments. Steam launch options are managed by Gale itself.
							</small>
						</label>
						<div className="gx-card__actions">
							<Button
								variant="primary"
								disabled={!profile || args === (profile?.customArgs ?? '')}
								onClick={() => profile && void actions.setCustomArgs(profile.id, args)}
							>
								Save arguments
							</Button>
							<Button
								icon="star"
								onClick={() => void actions.toggleFavorite(game.slug, !game.favorite)}
								title="Pin this game to the top of the switcher"
							>
								{game.favorite ? 'Remove from favourites' : 'Add to favourites'}
							</Button>
						</div>
					</section>
				) : null}

				<section className="gx-card">
					<header className="gx-card__head">
						<Icon name="grid" size={16} />
						<div>
							<h2>Appearance</h2>
							<p>Tune the density of lists and the default landing view.</p>
						</div>
					</header>
					<div className="gx-card__row">
						<div className="gx-settingrow">
							<div>
								<strong>Compact rows</strong>
								<span className="gx-muted">Hide secondary metadata in the installed list.</span>
							</div>
							<Toggle checked={state.compact} onChange={actions.setCompact} label="Compact rows" />
						</div>
						<div className="gx-settingrow">
							<div>
								<strong>Quick switch</strong>
								<span className="gx-muted">Jump between the main views without leaving settings.</span>
							</div>
							<div className="gx-navchips">
								{QUICK_VIEWS.map((view) => (
									<Button
										key={view}
										size="sm"
										variant={state.view === view ? 'primary' : 'secondary'}
										onClick={() => actions.setView(view)}
									>
										{view}
									</Button>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="gx-card gx-card--about">
					<header className="gx-card__head">
						<Icon name="sparkles" size={16} />
						<div>
							<h2>About GaleX</h2>
							<p>Thunderstore mod management, embedded in the Steam client.</p>
						</div>
						<Badge tone="neutral">v{UI_VERSION}</Badge>
					</header>
					<div className="gx-kv">
						<Row label="Interface" value="Millennium plugin (React)" />
						<Row label="Backend" value="Gale core daemon (Rust)" />
						<Row label="License" value="GPL-3.0 — Gale © Kesomannen, Millennium © SteamClientHomebrew" />
					</div>
				</section>
			</div>
		</div>
	);
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
	return (
		<div className="gx-kv__row">
			<span>{label}</span>
			<strong className={mono ? 'gx-monospace' : undefined} title={value}>
				{value}
			</strong>
		</div>
	);
}
