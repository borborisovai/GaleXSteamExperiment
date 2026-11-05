import { useEffect, useState } from 'react';
import { actions } from '../lib/actions';
import { activeProfile, modsWithUpdates, useAppState } from '../lib/store';
import { GameSwitcher } from './GameSwitcher';
import { Icon } from './Icon';
import { InstallQueueButton } from './InstallQueueButton';
import { MenuItem, Popover } from './Popover';
import { ProfileSwitcher } from './ProfileSwitcher';
import { Badge, Button, IconButton, TextInput } from './ui';

export function TopBar() {
	const state = useAppState();
	const profile = activeProfile(state);
	const updates = modsWithUpdates(state.mods).length;
	const [search, setSearch] = useState(state.search);

	useEffect(() => {
		setSearch(state.search);
	}, [state.search]);

	useEffect(() => {
		if (search === state.search) return;
		const timer = setTimeout(() => {
			actions.setSearch(search);
			if (search.trim() && state.view !== 'browse') actions.setView('browse');
		}, 280);
		return () => clearTimeout(timer);
	}, [search, state.search, state.view]);

	return (
		<header className="gx-topbar">
			<div className="gx-topbar__left">
				<GameSwitcher />
				<span className="gx-topbar__divider" />
				<ProfileSwitcher />
				{updates > 0 ? (
					<button type="button" className="gx-updates-pill" onClick={() => actions.setView('updates')}>
						<Icon name="arrow-up" size={12} />
						{updates} update{updates === 1 ? '' : 's'}
					</button>
				) : null}
			</div>

			<div className="gx-topbar__right">
				<TextInput
					className="gx-topbar__search"
					value={search}
					onChange={setSearch}
					placeholder="Search Thunderstore…"
					icon="search"
					ariaLabel="Search Thunderstore packages"
				/>
				<InstallQueueButton />
				<IconButton
					icon="refresh"
					title="Refresh profile data"
					onClick={() => void actions.refreshAll()}
					className={state.busy.refresh ? 'is-spinning' : undefined}
				/>
				<div className="gx-launchgroup">
					<Button
						variant="primary"
						icon="play"
						loading={Boolean(state.busy.launch)}
						onClick={() => void actions.launch(false)}
						disabled={!profile}
					>
						Launch
					</Button>
					<Popover
						align="end"
						width={250}
						trigger={({ open, toggle }) => (
							<button
								type="button"
								className={`gx-launchgroup__more${open ? ' is-open' : ''}`}
								onClick={toggle}
								aria-label="More launch options"
							>
								<Icon name="chevron-down" size={14} />
							</button>
						)}
					>
						{(close) => (
							<>
								<MenuItem
									icon="play"
									onClick={() => {
										void actions.launch(false);
										close();
									}}
								>
									Launch with mods
								</MenuItem>
								<MenuItem
									icon="power"
									onClick={() => {
										void actions.launch(true);
										close();
									}}
								>
									Launch vanilla
								</MenuItem>
								<MenuItem
									icon="sliders"
									onClick={() => {
										actions.setView('settings');
										close();
									}}
									trailing={<Badge tone="neutral">args</Badge>}
								>
									Launch options
								</MenuItem>
							</>
						)}
					</Popover>
				</div>
			</div>
		</header>
	);
}
