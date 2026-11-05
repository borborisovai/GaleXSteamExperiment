import { useMemo, useState } from 'react';
import { ModRow } from '../components/ModRow';
import { Icon } from '../components/Icon';
import { Button, Chip, EmptyState, IconButton, Segmented, Select, Skeleton } from '../components/ui';
import { actions } from '../lib/actions';
import { cx } from '../lib/format';
import { activeGame, activeProfile, modsWithUpdates, useAppState } from '../lib/store';
import type { Mod } from '../lib/types';

type Filter = 'all' | 'enabled' | 'disabled' | 'updates' | 'problems' | 'local';
type Sort = 'name' | 'installed' | 'size' | 'downloads';

const SORTS: { value: Sort; label: string }[] = [
	{ value: 'name', label: 'Name A–Z' },
	{ value: 'installed', label: 'Recently installed' },
	{ value: 'size', label: 'Largest first' },
	{ value: 'downloads', label: 'Most downloaded' },
];

export function InstalledView() {
	const state = useAppState();
	const game = activeGame(state);
	const profile = activeProfile(state);
	const [filter, setFilter] = useState<Filter>('all');
	const [sort, setSort] = useState<Sort>('name');

	const updates = modsWithUpdates(state.mods);
	const problems = state.mods.filter((m) => m.missingDependencies.length > 0);

	const visible = useMemo(() => {
		let list = [...state.mods];
		switch (filter) {
			case 'enabled':
				list = list.filter((m) => m.enabled);
				break;
			case 'disabled':
				list = list.filter((m) => !m.enabled);
				break;
			case 'updates':
				list = list.filter((m) => m.update && !m.ignoredUpdate);
				break;
			case 'problems':
				list = list.filter((m) => m.missingDependencies.length > 0);
				break;
			case 'local':
				list = list.filter((m) => m.kind === 'local');
				break;
			default:
				break;
		}
		return sortMods(list, sort);
	}, [state.mods, filter, sort]);

	if (!game) {
		return <EmptyState icon="globe" title="No game selected" body="Pick a Thunderstore community in the header to begin." />;
	}

	if (!game.managed) {
		return (
			<div className="gx-view">
				<EmptyState
					icon="plus"
					title={`Set up ${game.name}`}
					body={`GaleX will create a profile folder and install ${game.modLoader} on first install. Nothing is written to ${
						game.detectedPath ?? 'the game folder'
					} until then.`}
					action={
						<Button variant="primary" icon="plus" onClick={() => void actions.manageGame(game.slug)}>
							Add {game.name}
						</Button>
					}
				/>
			</div>
		);
	}

	if (!profile) {
		return (
			<EmptyState
				icon="layers"
				title="No profile yet"
				body="Profiles keep separate mod setups for the same game."
				action={
					<Button variant="primary" icon="plus" onClick={() => actions.setView('profiles')}>
						Create a profile
					</Button>
				}
			/>
		);
	}

	return (
		<div className="gx-view">
			<header className="gx-view__head">
				<div>
					<h1>
						Installed mods
						<span className="gx-count">{state.mods.length}</span>
					</h1>
					<p>
						{profile.name} · {state.mods.filter((m) => m.enabled).length} enabled
						{updates.length > 0 ? ` · ${updates.length} update${updates.length === 1 ? '' : 's'} available` : ''}
					</p>
				</div>
				<div className="gx-view__tools">
					{state.mods.length > 0 ? (
						<>
							<Button size="sm" icon="check" onClick={() => void actions.setAllMods(true)}>
								Enable all
							</Button>
							<Button size="sm" icon="x" onClick={() => void actions.setAllMods(false)}>
								Disable all
							</Button>
						</>
					) : null}
					<IconButton icon="refresh" title="Refresh" onClick={() => void actions.refreshMods()} />
					<Segmented
						value={state.compact ? 'compact' : 'cozy'}
						options={[
							{ value: 'cozy', label: 'Cozy', icon: 'list' },
							{ value: 'compact', label: 'Compact', icon: 'grid' },
						]}
						onChange={(value) => actions.setCompact(value === 'compact')}
					/>
				</div>
			</header>

			<div className="gx-filterbar">
				<div className="gx-filterbar__chips">
					<Chip active={filter === 'all'} onClick={() => setFilter('all')} count={state.mods.length}>
						All
					</Chip>
					<Chip active={filter === 'enabled'} onClick={() => setFilter('enabled')}>
						Enabled
					</Chip>
					<Chip active={filter === 'disabled'} onClick={() => setFilter('disabled')}>
						Disabled
					</Chip>
					<Chip active={filter === 'updates'} onClick={() => setFilter('updates')} tone="accent" count={updates.length}>
						Updates
					</Chip>
					<Chip active={filter === 'problems'} onClick={() => setFilter('problems')} count={problems.length}>
						Needs attention
					</Chip>
					<Chip active={filter === 'local'} onClick={() => setFilter('local')}>
						Local
					</Chip>
				</div>
				<Select value={sort} options={SORTS} onChange={setSort} ariaLabel="Sort mods" />
			</div>

			{state.modsLoading ? (
				<div className="gx-modlist">
					{Array.from({ length: 6 }).map((_, index) => (
						<div key={index} className="gx-modrow gx-modrow--skeleton">
							<Skeleton height={42} width={42} radius={10} />
							<div className="gx-modrow__main">
								<Skeleton height={13} width="38%" />
								<Skeleton height={11} width="24%" />
							</div>
							<Skeleton height={20} width={38} radius={10} />
						</div>
					))}
				</div>
			) : state.mods.length === 0 ? (
				<EmptyState
					icon="store"
					title="This profile is empty"
					body="Browse Thunderstore to install your first mod. Dependencies are resolved automatically."
					action={
						<Button variant="primary" icon="store" onClick={() => actions.setView('browse')}>
							Browse Thunderstore
						</Button>
					}
				/>
			) : visible.length === 0 ? (
				<EmptyState
					icon="filter"
					title="Nothing matches this filter"
					body="Try another filter, or clear it to see every installed mod."
					action={<Button onClick={() => setFilter('all')}>Show all mods</Button>}
				/>
			) : (
				<div className={cx('gx-modlist', state.compact && 'gx-modlist--compact')}>
					{visible.map((mod) => (
						<ModRow key={mod.uuid} mod={mod} />
					))}
				</div>
			)}

			{state.modsError ? (
				<div className="gx-callout gx-callout--warn">
					<Icon name="warning" size={15} />
					<div>
						<strong>The mod list could not be loaded</strong>
						<p>{state.modsError}</p>
					</div>
				</div>
			) : null}
		</div>
	);
}

function sortMods(mods: Mod[], sort: Sort): Mod[] {
	const copy = [...mods];
	switch (sort) {
		case 'installed':
			return copy.sort((a, b) => Date.parse(b.installTime) - Date.parse(a.installTime));
		case 'size':
			return copy.sort((a, b) => b.sizeBytes - a.sizeBytes);
		case 'downloads':
			return copy.sort((a, b) => b.totalDownloads - a.totalDownloads);
		default:
			return copy.sort((a, b) => a.name.localeCompare(b.name));
	}
}
