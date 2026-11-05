import { useState } from 'react';
import { actions } from '../lib/actions';
import { cx, formatBytes, formatCount, relativeTime, shortDate } from '../lib/format';
import { usePackageDetail } from '../lib/hooks';
import { selectedMod, useAppState } from '../lib/store';
import type { Mod } from '../lib/types';
import { Icon } from './Icon';
import { Markdown } from './Markdown';
import { Avatar, Badge, Button, ConfirmDialog, Drawer, EmptyState, Skeleton, Toggle } from './ui';

type Tab = 'about' | 'versions' | 'dependencies';

export function ModDetailDrawer() {
	const state = useAppState();
	const mod = selectedMod(state);
	if (!mod) return null;
	return <ModDetailInner key={mod.uuid} mod={mod} />;
}

function ModDetailInner({ mod }: { mod: Mod }) {
	const state = useAppState();
	const [tab, setTab] = useState<Tab>('about');
	const [confirmRemove, setConfirmRemove] = useState(false);
	const detail = usePackageDetail(mod.fullName);

	const dependants = mod.dependantUuids
		.map((uuid) => state.mods.find((m) => m.uuid === uuid))
		.filter((m): m is Mod => Boolean(m));
	const missing = mod.missingDependencies.filter((dep) => !state.mods.some((m) => m.versionId === dep));
	const hasUpdate = Boolean(mod.update) && !mod.ignoredUpdate;

	return (
		<>
			<Drawer
				onClose={() => actions.closeMod()}
				width={620}
				title={
					<span className="gx-drawer__titlerow">
						<Avatar name={mod.name} src={mod.iconUrl} size={40} rounded={10} />
						<span>
							{mod.name}
							{mod.deprecated ? <Badge tone="red">deprecated</Badge> : null}
						</span>
					</span>
				}
				subtitle={
					<>
						{mod.author} · v{mod.version} · {formatBytes(mod.sizeBytes)} · installed {relativeTime(mod.installTime)}
					</>
				}
				footer={
					<div className="gx-drawer__actions">
						<Button
							icon={mod.enabled ? 'x' : 'check'}
							variant={mod.enabled ? 'secondary' : 'success'}
							onClick={() => void actions.toggleMod(mod)}
						>
							{mod.enabled ? 'Disable' : 'Enable'}
						</Button>
						{hasUpdate && mod.update ? (
							<Button
								variant="primary"
								icon="arrow-up"
								onClick={() => void actions.changeVersion(mod, mod.update!.versionId)}
							>
								Update to {mod.update.version}
							</Button>
						) : null}
						<Button icon="trash" variant="danger" onClick={() => setConfirmRemove(true)}>
							Remove
						</Button>
					</div>
				}
			>
				<div className="gx-detail">
					<div className="gx-detail__hero">
						<div className="gx-detail__stats">
							<Stat label="Rating" value={formatCount(mod.ratingScore)} icon="star" />
							<Stat label="Downloads" value={formatCount(mod.totalDownloads)} icon="download" />
							<Stat label="Size" value={formatBytes(mod.sizeBytes)} icon="package" />
							<Stat label="Dependencies" value={String(mod.dependencies.length)} icon="layers" />
						</div>
						<div className="gx-detail__switchrow">
							<span>
								Enabled in profile
								{mod.ignoredUpdate ? <em className="gx-muted"> · update ignored</em> : null}
							</span>
							<Toggle checked={mod.enabled} label="Toggle mod" onChange={() => void actions.toggleMod(mod)} />
						</div>
					</div>

					{missing.length > 0 ? (
						<div className="gx-callout gx-callout--warn">
							<Icon name="warning" size={15} />
							<div>
								<strong>Missing dependencies</strong>
								<p>These packages are required but not installed in this profile.</p>
								<div className="gx-callout__actions">
									{missing.map((dep) => (
										<Button key={dep} size="sm" icon="download" onClick={() => void actions.install([dep])}>
											{dep}
										</Button>
									))}
								</div>
							</div>
						</div>
					) : null}

					{dependants.length > 0 ? (
						<div className="gx-callout">
							<Icon name="layers" size={15} />
							<div>
								<strong>Used by {dependants.length} mod(s)</strong>
								<p>{dependants.map((d) => d.name).join(', ')}</p>
							</div>
						</div>
					) : null}

					<div className="gx-tabs">
						{(
							[
								['about', 'About'],
								['versions', `Versions (${detail.data?.versions.length ?? '…'})`],
								['dependencies', `Dependencies (${mod.dependencies.length})`],
							] as [Tab, string][]
						).map(([id, label]) => (
							<button
								key={id}
								type="button"
								className={cx('gx-tabs__item', tab === id && 'is-active')}
								onClick={() => setTab(id)}
							>
								{label}
							</button>
						))}
					</div>

					{tab === 'about' ? (
						<div className="gx-detail__about">
							{detail.loading ? (
								<>
									<Skeleton height={14} />
									<Skeleton height={14} width="92%" />
									<Skeleton height={14} width="76%" />
								</>
							) : detail.error ? (
								<p className="gx-muted">{detail.error}</p>
							) : detail.data?.markdown ? (
								<Markdown source={detail.data.markdown} />
							) : (
								<p className="gx-muted">{mod.description}</p>
							)}
						</div>
					) : null}

					{tab === 'versions' ? (
						<div className="gx-versionlist">
							{detail.loading ? <Skeleton height={48} /> : null}
							{detail.data?.versions.map((version) => {
								const current = version.versionId === mod.versionId;
								return (
									<div key={version.versionId} className={cx('gx-version', current && 'is-current')}>
										<div>
											<strong>v{version.version}</strong>
											<span className="gx-muted">
												{shortDate(version.dateCreated)} · {formatBytes(version.fileSize)} ·{' '}
												{formatCount(version.downloads)} downloads
											</span>
										</div>
										{current ? (
											<Badge tone="green" icon="check">
												installed
											</Badge>
										) : (
											<Button
												size="sm"
												icon="download"
												onClick={() => void actions.changeVersion(mod, version.versionId)}
											>
												Use this
											</Button>
										)}
									</div>
								);
							})}
						</div>
					) : null}

					{tab === 'dependencies' ? (
						mod.dependencies.length === 0 ? (
							<EmptyState icon="layers" title="No dependencies" body="This package is standalone." />
						) : (
							<ul className="gx-deplist">
								{mod.dependencies.map((dep) => {
									const installed = state.mods.find((m) => m.fullName === dep.split('-').slice(0, -1).join('-'));
									return (
										<li key={dep} className={cx('gx-deplist__item', !installed && 'is-missing')}>
											<Icon name={installed ? (installed.enabled ? 'check' : 'x') : 'warning'} size={14} />
											<div>
												<strong>{dep.split('-').slice(0, -1).join('-')}</strong>
												<span className="gx-muted">{dep}</span>
											</div>
											{installed ? (
												<Badge tone={installed.enabled ? 'green' : 'amber'}>
													{installed.enabled ? 'installed' : 'disabled'}
												</Badge>
											) : (
												<Button size="sm" icon="download" onClick={() => void actions.install([dep])}>
													Install
												</Button>
											)}
										</li>
									);
								})}
							</ul>
						)
					) : null}

					<div className="gx-detail__foot">
						<span>
							<Icon name="clock" size={12} /> Install time {relativeTime(mod.installTime)}
						</span>
						{mod.kind === 'local' && mod.localPath ? (
							<span className="gx-monospace">{mod.localPath}</span>
						) : (
							<span className="gx-monospace">{mod.versionId}</span>
						)}
					</div>
				</div>
			</Drawer>

			{confirmRemove ? (
				<ConfirmDialog
					title={`Remove ${mod.name}?`}
					body="Files are deleted from the profile folder. This cannot be undone."
					confirmLabel="Remove"
					danger
					onCancel={() => setConfirmRemove(false)}
					onConfirm={() => {
						setConfirmRemove(false);
						void actions.removeMod(mod, dependants.length > 0);
					}}
				/>
			) : null}
		</>
	);
}

function Stat({ label, value, icon }: { label: string; value: string; icon: 'star' | 'download' | 'package' | 'layers' }) {
	return (
		<div className="gx-stat">
			<Icon name={icon} size={14} />
			<strong>{value}</strong>
			<span>{label}</span>
		</div>
	);
}
