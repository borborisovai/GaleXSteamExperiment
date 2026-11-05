import { useState } from 'react';
import { actions } from '../lib/actions';
import { cx, formatBytes, formatCount, relativeTime } from '../lib/format';
import { useAppState } from '../lib/store';
import type { Mod } from '../lib/types';
import { Icon } from './Icon';
import { MenuItem, MenuSeparator, Popover } from './Popover';
import { Avatar, Badge, ConfirmDialog, IconButton, Toggle } from './ui';

export function ModRow({ mod }: { mod: Mod }) {
	const state = useAppState();
	const [confirmRemove, setConfirmRemove] = useState(false);
	const dependants = mod.dependantUuids
		.map((uuid) => state.mods.find((m) => m.uuid === uuid))
		.filter((m): m is Mod => Boolean(m) && Boolean(m?.enabled));
	const hasUpdate = Boolean(mod.update) && !mod.ignoredUpdate;

	return (
		<>
			<div
				className={cx('gx-modrow', !mod.enabled && 'is-disabled', hasUpdate && 'has-update')}
				onClick={() => actions.openMod(mod.uuid)}
				role="button"
				tabIndex={0}
				onKeyDown={(event) => {
					if (event.key === 'Enter') actions.openMod(mod.uuid);
				}}
			>
				<Avatar name={mod.name} src={mod.iconUrl} size={state.compact ? 34 : 42} rounded={10} />

				<div className="gx-modrow__main">
					<div className="gx-modrow__titleline">
						<span className="gx-modrow__name">{mod.name}</span>
						{mod.deprecated ? <Badge tone="red">deprecated</Badge> : null}
						{mod.modpack ? <Badge tone="purple">modpack</Badge> : null}
						{mod.kind === 'local' ? <Badge tone="amber">local</Badge> : null}
						{mod.missingDependencies.length > 0 ? (
							<Badge tone="red" icon="warning">
								missing deps
							</Badge>
						) : null}
						{!mod.enabled && mod.dependantUuids.length > 0 ? (
							<Badge tone="amber" icon="warning">
								in use
							</Badge>
						) : null}
					</div>
					<div className="gx-modrow__sub">
						<span className="gx-modrow__author">{mod.author}</span>
						<span className="gx-dot" />
						<span>v{mod.version}</span>
						{!state.compact ? (
							<>
								<span className="gx-dot" />
								<span>{formatBytes(mod.sizeBytes)}</span>
								<span className="gx-dot" />
								<span>{relativeTime(mod.installTime)}</span>
							</>
						) : null}
					</div>
				</div>

				{hasUpdate && mod.update ? (
					<button
						type="button"
						className="gx-modrow__update"
						onClick={(event) => {
							event.stopPropagation();
							void actions.changeVersion(mod, mod.update!.versionId);
						}}
						title={`Update to ${mod.update.version}`}
					>
						<Icon name="arrow-up" size={12} />
						{mod.update.version}
					</button>
				) : null}

				{!state.compact ? (
					<div className="gx-modrow__stats">
						<span title={`${formatCount(mod.totalDownloads)} downloads`}>
							<Icon name="download" size={12} />
							{formatCount(mod.totalDownloads)}
						</span>
						<span title={`${mod.ratingScore} rating`}>
							<Icon name="star" size={12} />
							{mod.ratingScore}
						</span>
					</div>
				) : null}

				<Toggle
					size="sm"
					checked={mod.enabled}
					label={`Toggle ${mod.name}`}
					onChange={() => void actions.toggleMod(mod)}
				/>

				<Popover
					align="end"
					width={240}
					trigger={({ toggle }) => (
						<IconButton
							icon="settings"
							size={15}
							title="Mod actions"
							onClick={(event) => {
								event.stopPropagation();
								toggle();
							}}
						/>
					)}
				>
					{(close) => (
						<>
							<MenuItem
								icon="info"
								onClick={() => {
									actions.openMod(mod.uuid);
									close();
								}}
							>
								Details & versions
							</MenuItem>
							<MenuItem
								icon={mod.ignoredUpdate ? 'sparkles' : 'x'}
								disabled={!mod.update}
								onClick={() => {
									void actions.ignoreUpdate(mod, !mod.ignoredUpdate);
									close();
								}}
							>
								{mod.ignoredUpdate ? 'Un-ignore update' : 'Ignore this update'}
							</MenuItem>
							<MenuItem
								icon={mod.enabled ? 'x' : 'check'}
								onClick={() => {
									void actions.toggleMod(mod);
									close();
								}}
							>
								{mod.enabled ? 'Disable mod' : 'Enable mod'}
							</MenuItem>
							<MenuSeparator />
							<MenuItem
								icon="trash"
								disabled={dependants.length > 0}
								onClick={() => {
									setConfirmRemove(true);
									close();
								}}
							>
								Remove
								{dependants.length > 0 ? <em className="gx-menuitem__tag">blocks deps</em> : null}
							</MenuItem>
						</>
					)}
				</Popover>
			</div>

			{confirmRemove ? (
				<ConfirmDialog
					title={`Remove ${mod.name}?`}
					body={`The mod files will be deleted from the profile. ${
						dependants.length > 0 ? `${dependants.length} enabled mod(s) depend on it.` : ''
					}`}
					confirmLabel={dependants.length > 0 ? 'Remove anyway' : 'Remove'}
					danger
					onCancel={() => setConfirmRemove(false)}
					onConfirm={() => {
						setConfirmRemove(false);
						void actions.removeMod(mod, dependants.length > 0);
					}}
				>
					{dependants.length > 0 ? (
						<ul className="gx-dependencylist">
							{dependants.map((dep) => (
								<li key={dep.uuid}>
									<Icon name="warning" size={12} /> {dep.name}
								</li>
							))}
						</ul>
					) : null}
				</ConfirmDialog>
			) : null}
		</>
	);
}
