import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Markdown } from '../components/Markdown';
import { Avatar, Badge, Button, EmptyState, Skeleton, Toggle } from '../components/ui';
import { actions } from '../lib/actions';
import { cx, relativeTime } from '../lib/format';
import { modsWithUpdates, useAppState } from '../lib/store';
import type { Mod } from '../lib/types';

export function UpdatesView() {
	const state = useAppState();
	const updates = modsWithUpdates(state.mods);
	const ignored = state.mods.filter((m) => m.update && m.ignoredUpdate);
	const [expanded, setExpanded] = useState<string | undefined>(undefined);
	const [onlyIgnored, setOnlyIgnored] = useState(false);

	const list = onlyIgnored ? ignored : updates;

	return (
		<div className="gx-view">
			<header className="gx-view__head">
				<div>
					<h1>
						Updates
						{updates.length > 0 ? <span className="gx-count">{updates.length}</span> : null}
					</h1>
					<p>
						{updates.length === 0
							? 'Every installed package is on its latest version.'
							: `${updates.length} package${updates.length === 1 ? '' : 's'} can be updated. Your profile is backed up before files are replaced.`}
					</p>
				</div>
				<div className="gx-view__tools">
					<label className="gx-inlinefield">
						<Toggle size="sm" checked={onlyIgnored} onChange={setOnlyIgnored} label="Show ignored updates" />
						<span>Ignored ({ignored.length})</span>
					</label>
					<Button
						variant="primary"
						icon="arrow-up"
						disabled={updates.length === 0}
						onClick={() => void actions.updateMods()}
					>
						Update all
					</Button>
				</div>
			</header>

			{state.modsLoading ? (
				<div className="gx-modlist">
					<Skeleton height={72} radius={12} />
					<Skeleton height={72} radius={12} />
				</div>
			) : list.length === 0 ? (
				<EmptyState
					icon={onlyIgnored ? 'pin' : 'check'}
					title={onlyIgnored ? 'No ignored updates' : 'Everything is up to date'}
					body={
						onlyIgnored
							? 'Updates you pin are listed here so you can bring them back later.'
							: 'New releases appear here as soon as Thunderstore publishes them.'
					}
					action={
						onlyIgnored ? (
							<Button onClick={() => setOnlyIgnored(false)}>Back to available updates</Button>
						) : (
							<Button icon="refresh" onClick={() => void actions.refreshMods()}>
								Check again
							</Button>
						)
					}
				/>
			) : (
				<div className="gx-updatelist">
					{list.map((mod) => (
						<UpdateCard
							key={mod.uuid}
							mod={mod}
							expanded={expanded === mod.uuid}
							onToggleExpand={() => setExpanded(expanded === mod.uuid ? undefined : mod.uuid)}
						/>
					))}
				</div>
			)}
		</div>
	);
}

function UpdateCard({ mod, expanded, onToggleExpand }: { mod: Mod; expanded: boolean; onToggleExpand: () => void }) {
	const update = mod.update;
	if (!update) return null;
	return (
		<div className={cx('gx-updatecard', expanded && 'is-open')}>
			<div className="gx-updatecard__head">
				<Avatar name={mod.name} src={mod.iconUrl} size={40} rounded={10} />
				<div className="gx-updatecard__main">
					<div className="gx-updatecard__title">
						<strong>{mod.name}</strong>
						<span className="gx-versionchip">{mod.version}</span>
						<Icon name="arrow-right" size={13} />
						<span className="gx-versionchip is-new">{update.version}</span>
						{mod.ignoredUpdate ? <Badge tone="amber">pinned</Badge> : null}
					</div>
					<span className="gx-muted">
						{mod.author} · released {relativeTime(update.publishedAt ?? new Date().toISOString())}
					</span>
				</div>
				<div className="gx-updatecard__actions">
					<Button size="sm" onClick={onToggleExpand} icon={expanded ? 'chevron-down' : 'chevron-right'}>
						Changelog
					</Button>
					<Button size="sm" icon={mod.ignoredUpdate ? 'sparkles' : 'pin'} onClick={() => void actions.ignoreUpdate(mod, !mod.ignoredUpdate)}>
						{mod.ignoredUpdate ? 'Unpin' : 'Ignore'}
					</Button>
					<Button size="sm" variant="primary" icon="arrow-up" onClick={() => void actions.changeVersion(mod, update.versionId)}>
						Update
					</Button>
				</div>
			</div>
			{expanded ? (
				<div className="gx-updatecard__body">
					{update.changelog ? (
						<Markdown source={update.changelog} />
					) : (
						<p className="gx-muted">The author did not publish a changelog for this version.</p>
					)}
					<div className="gx-updatecard__foot">
						<span className="gx-monospace">{update.versionId}</span>
					</div>
				</div>
			) : null}
		</div>
	);
}
