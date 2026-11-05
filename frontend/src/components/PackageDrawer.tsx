import { useEffect, useState } from 'react';
import { actions } from '../lib/actions';
import { cx, formatBytes, formatCount, relativeTime, shortDate } from '../lib/format';
import { usePackageDetail } from '../lib/hooks';
import { useAppState } from '../lib/store';
import { Icon } from './Icon';
import { Markdown } from './Markdown';
import { Badge, Button, Drawer, EmptyState, Select, Skeleton } from './ui';

export function PackageDrawer() {
	const state = useAppState();
	const fullName = state.selectedPackage;
	if (!fullName) return null;
	return <PackageDrawerInner key={fullName} fullName={fullName} />;
}

function PackageDrawerInner({ fullName }: { fullName: string }) {
	const state = useAppState();
	const detail = usePackageDetail(fullName);
	const [versionId, setVersionId] = useState<string | undefined>(undefined);

	const allVersions = detail.data?.versions ?? [];
	// Thunderstore occasionally repeats a version; keep the list keyed by versionId.
	const versions = allVersions.filter(
		(version, index) => allVersions.findIndex((other) => other.versionId === version.versionId) === index,
	);
	const selectedVersion = versions.find((v) => v.versionId === versionId) ?? versions[0];
	const installedMod = state.mods.find((m) => m.fullName === fullName);

	useEffect(() => {
		if (!versionId && versions[0]) setVersionId(versions[0].versionId);
	}, [versionId, versions]);

	const installing = Boolean(
		state.tasks.find(
			(t) =>
				(t.status === 'queued' || t.status === 'downloading' || t.status === 'extracting') &&
				t.current?.includes(detail.data?.name ?? '\u0000'),
		),
	);

	return (
		<Drawer
			onClose={() => actions.closePackage()}
			width={640}
			title={detail.data?.name ?? fullName}
			subtitle={
				detail.data ? (
					<>
						{detail.data.owner} · v{selectedVersion?.version ?? '—'} · {formatCount(detail.data.totalDownloads)}{' '}
						downloads
					</>
				) : (
					'Loading package…'
				)
			}
			footer={
				<div className="gx-drawer__actions">
					{selectedVersion ? (
						<>
							<Select
								value={selectedVersion.versionId}
								options={versions.map((version) => ({
									value: version.versionId,
									label: `v${version.version} · ${shortDate(version.dateCreated)}`,
								}))}
								onChange={setVersionId}
								ariaLabel="Package version"
							/>
							<Button
								variant="primary"
								icon="download"
								loading={installing}
								onClick={() => void actions.install([selectedVersion.versionId])}
							>
								{installedMod ? 'Reinstall' : 'Install'} {selectedVersion.dependencies.length > 0 ? '+ deps' : ''}
							</Button>
						</>
					) : (
						<Button disabled>Nothing to install</Button>
					)}
				</div>
			}
		>
			{detail.loading ? (
				<div className="gx-detail">
					<Skeleton height={60} radius={12} />
					<Skeleton height={14} />
					<Skeleton height={14} width="85%" />
					<Skeleton height={14} width="70%" />
				</div>
			) : detail.error ? (
				<EmptyState icon="warning" title="Could not load the package" body={detail.error} />
			) : detail.data ? (
				<div className="gx-detail">
					<div className="gx-pkghero">
						<div className="gx-pkghero__stats">
							<div>
								<strong>{formatCount(detail.data.ratingScore)}</strong>
								<span>rating</span>
							</div>
							<div>
								<strong>{formatCount(detail.data.totalDownloads)}</strong>
								<span>downloads</span>
							</div>
							<div>
								<strong>{detail.data.versions.length}</strong>
								<span>versions</span>
							</div>
							<div>
								<strong>{relativeTime(detail.data.dateUpdated)}</strong>
								<span>updated</span>
							</div>
						</div>
						<div className="gx-pkghero__badges">
							{installedMod ? (
								<Badge tone="green" icon="check">
									installed v{installedMod.version}
								</Badge>
							) : null}
							{detail.data.deprecated ? <Badge tone="red">deprecated</Badge> : null}
							{detail.data.modpack ? <Badge tone="purple">modpack</Badge> : null}
							{detail.data.categories.slice(0, 4).map((category) => (
								<span key={category} className="gx-tag">
									{category}
								</span>
							))}
						</div>
					</div>

					{detail.data.dependencyPreview.length > 0 ? (
						<section className="gx-section">
							<h3>
								Dependencies <span className="gx-count">{detail.data.dependencyPreview.length}</span>
							</h3>
							<p className="gx-muted">Resolved automatically when installing. Installed ones are skipped.</p>
							<ul className="gx-deplist">
								{detail.data.dependencyPreview.map((dep) => (
									<li key={dep.versionId} className={cx('gx-deplist__item', dep.installed && 'is-ok')}>
										<Icon name={dep.installed ? 'check' : 'download'} size={14} />
										<div>
											<strong>{dep.name}</strong>
											<span className="gx-muted">{dep.versionId}</span>
										</div>
										<Badge tone={dep.installed ? 'green' : 'blue'}>
											{dep.installed ? 'installed' : 'will install'}
										</Badge>
									</li>
								))}
							</ul>
						</section>
					) : null}

					{selectedVersion ? (
						<section className="gx-section">
							<h3>Selected version</h3>
							<div className="gx-version is-current">
								<div>
									<strong>v{selectedVersion.version}</strong>
									<span className="gx-muted">
										{shortDate(selectedVersion.dateCreated)} · {formatBytes(selectedVersion.fileSize)} ·{' '}
										{formatCount(selectedVersion.downloads)} downloads · {selectedVersion.dependencies.length} deps
									</span>
								</div>
								<Badge tone="blue">{selectedVersion.versionId}</Badge>
							</div>
							{selectedVersion.changelog ? (
								<div className="gx-changelog">
									<Markdown source={selectedVersion.changelog} />
								</div>
							) : null}
						</section>
					) : null}

					<section className="gx-section">
						<h3>Readme</h3>
						{detail.data.markdown ? (
							<Markdown source={detail.data.markdown} />
						) : (
							<p className="gx-muted">{detail.data.description || 'No description provided.'}</p>
						)}
					</section>

					{detail.data.websiteUrl ? (
						<a className="gx-link" href={detail.data.websiteUrl} target="_blank" rel="noreferrer noopener">
							<Icon name="external" size={13} /> Open on Thunderstore
						</a>
					) : null}
				</div>
			) : null}
		</Drawer>
	);
}
