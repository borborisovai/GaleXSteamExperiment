import { useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../components/Icon';
import { Badge, Button, EmptyState, IconButton, Select, Skeleton, TextInput, Toggle } from '../components/ui';
import { api } from '../lib/api';
import { actions } from '../lib/actions';
import { cx } from '../lib/format';
import { useCopyToClipboard } from '../lib/hooks';
import { activeProfile, useAppState } from '../lib/store';
import type { ConfigEntry, ConfigFile, ConfigValue } from '../lib/types';

export function ConfigView() {
	const state = useAppState();
	const profile = activeProfile(state);
	const [files, setFiles] = useState<ConfigFile[] | undefined>(undefined);
	const [selected, setSelected] = useState<string | undefined>(undefined);
	const [search, setSearch] = useState('');
	const [error, setError] = useState<string | undefined>(undefined);
	const [savedAt, setSavedAt] = useState<number | undefined>(undefined);
	const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

	const profileId = profile?.id;

	useEffect(() => {
		if (!profileId) {
			setFiles([]);
			return;
		}
		let cancelled = false;
		setFiles(undefined);
		api
			.config(profileId)
			.then((list) => {
				if (cancelled) return;
				setFiles(list);
				setSelected(list[0]?.path);
			})
			.catch((err: unknown) => {
				if (!cancelled) setError(err instanceof Error ? err.message : String(err));
			});
		return () => {
			cancelled = true;
		};
	}, [profileId]);

	const filteredFiles = useMemo(() => {
		const needle = search.trim().toLowerCase();
		if (!files) return [];
		if (!needle) return files;
		return files.filter((file) => file.name.toLowerCase().includes(needle) || file.plugin?.toLowerCase().includes(needle));
	}, [files, search]);

	const file = files?.find((item) => item.path === selected);

	const reload = async (id: number) => {
		setSavedAt(undefined);
		try {
			const list = await api.config(id);
			setFiles(list);
			if (!list.some((item) => item.path === selected)) setSelected(list[0]?.path);
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err));
		}
	};

	const write = (entry: ConfigEntry, value: ConfigValue) => {
		if (!profileId || !file) return;
		setFiles((current) =>
			current?.map((item) =>
				item.path !== file.path
					? item
					: {
							...item,
							entries: item.entries.map((candidate) =>
								candidate.section === entry.section && candidate.key === entry.key
									? { ...candidate, value, modified: value !== candidate.defaultValue }
									: candidate,
							),
						},
			),
		);
		clearTimeout(saveTimer.current);
		saveTimer.current = setTimeout(() => {
			void actions.saveConfigEntry(profileId, file.path, entry.section, entry.key, value).then(() => {
				setSavedAt(Date.now());
			});
		}, 350);
	};

	const reset = (entry: ConfigEntry) => {
		if (!profileId || !file) return;
		void actions.resetConfigEntry(profileId, file.path, entry.section, entry.key).then((updated) => {
			if (updated) {
				setFiles((current) => current?.map((item) => (item.path === updated.path ? updated : item)));
				setSavedAt(Date.now());
			}
		});
	};

	if (!profile) {
		return <EmptyState icon="sliders" title="No profile selected" body="Pick a profile to edit its mod configuration." />;
	}

	if (error) {
		return <EmptyState icon="warning" title="Config files are unavailable" body={error} action={<Button onClick={() => setError(undefined)}>Retry</Button>} />;
	}

	return (
		<div className="gx-view gx-view--config">
			<header className="gx-view__head">
				<div>
					<h1>
						Configuration<span className="gx-count">{files?.length ?? 0}</span>
					</h1>
					<p>
						BepInEx and mod config files of <strong>{profile.name}</strong>. Values are written on the fly.
					</p>
				</div>
				<div className="gx-view__tools">
					{savedAt ? (
						<span className="gx-saved">
							<Icon name="check" size={12} /> saved
						</span>
					) : null}
					<Button size="sm" icon="refresh" onClick={() => void reload(profile.id)}>
						Reload
					</Button>
				</div>
			</header>

			<div className="gx-config">
				<aside className="gx-config__files">
					<TextInput value={search} onChange={setSearch} placeholder="Filter files…" icon="search" />
					{!files ? (
						<div className="gx-config__skeletons">
							<Skeleton height={34} />
							<Skeleton height={34} />
							<Skeleton height={34} />
						</div>
					) : filteredFiles.length === 0 ? (
						<p className="gx-muted gx-config__nofiles">
							No config files yet. Start the game once with a mod installed and BepInEx will generate them.
						</p>
					) : (
						filteredFiles.map((item) => (
							<button
								key={item.path}
								type="button"
								className={cx('gx-config__file', item.path === selected && 'is-active')}
								onClick={() => setSelected(item.path)}
							>
								<Icon name="sliders" size={14} />
								<div>
									<strong>{item.plugin ?? item.name}</strong>
									<span>{item.name}</span>
								</div>
								<span className="gx-count">{item.entries.length}</span>
							</button>
						))
					)}
				</aside>

				<section className="gx-config__body">
					{!file ? (
						files === undefined ? (
							<Skeleton height={220} radius={12} />
						) : (
							<EmptyState
								icon="sliders"
								title="Select a config file"
								body="Every mod that ships a BepInEx config appears on the left."
							/>
						)
					) : (
						<>
							<div className="gx-config__filehead">
								<div>
									<strong>{file.name}</strong>
									<span className="gx-monospace gx-muted">{file.path}</span>
								</div>
								<CopyPathButton path={file.path} />
							</div>
							{groupEntries(file.entries).map(([section, entries]) => (
								<div key={section} className="gx-config__section">
									<h3>
										<span>{section}</span>
										<Badge tone="neutral">{entries.length}</Badge>
									</h3>
									{entries.map((entry) => (
										<EntryRow
											key={`${entry.section}.${entry.key}`}
											entry={entry}
											onChange={(value) => write(entry, value)}
											onReset={() => reset(entry)}
										/>
									))}
								</div>
							))}
						</>
					)}
				</section>
			</div>
		</div>
	);
}

function CopyPathButton({ path }: { path: string }) {
	const { copied, copy } = useCopyToClipboard();
	return <IconButton icon={copied ? 'check' : 'copy'} title="Copy path" onClick={() => void copy(path)} size={14} />;
}

function EntryRow({
	entry,
	onChange,
	onReset,
}: {
	entry: ConfigEntry;
	onChange: (value: ConfigValue) => void;
	onReset: () => void;
}) {
	return (
		<div className={cx('gx-entry', entry.modified && 'is-modified')}>
			<div className="gx-entry__label">
				<strong>{entry.key}</strong>
				{entry.description ? <span title={entry.description}>{entry.description}</span> : null}
			</div>
			<div className="gx-entry__control">
				<EntryControl entry={entry} onChange={onChange} />
				{entry.modified ? (
					<IconButton icon="refresh" title="Reset to default" size={13} onClick={onReset} />
				) : null}
			</div>
		</div>
	);
}

function EntryControl({ entry, onChange }: { entry: ConfigEntry; onChange: (value: ConfigValue) => void }) {
	const [draft, setDraft] = useState(String(entry.value));
	const [capturing, setCapturing] = useState(false);

	useEffect(() => {
		setDraft(String(entry.value));
	}, [entry.value]);

	useEffect(() => {
		if (!capturing) return;
		const handler = (event: KeyboardEvent) => {
			event.preventDefault();
			event.stopPropagation();
			const parts: string[] = [];
			if (event.ctrlKey) parts.push('LeftControl');
			if (event.shiftKey) parts.push('LeftShift');
			if (event.altKey) parts.push('LeftAlt');
			const key = event.key.length === 1 ? event.key.toUpperCase() : event.key;
			if (!['Control', 'Shift', 'Alt', 'Meta'].includes(event.key)) parts.push(key);
			if (parts.length > 0) {
				onChange(parts.join(' + '));
				setCapturing(false);
			}
		};
		window.addEventListener('keydown', handler, true);
		return () => window.removeEventListener('keydown', handler, true);
	}, [capturing, onChange]);

	switch (entry.type) {
		case 'bool':
			return <Toggle checked={Boolean(entry.value)} onChange={(next) => onChange(next)} label={entry.key} />;

		case 'enum':
			return (
				<Select
					value={String(entry.value)}
					options={(entry.choices ?? []).map((choice) => ({ value: choice, label: choice }))}
					onChange={onChange}
					ariaLabel={entry.key}
				/>
			);

		case 'key':
			return (
				<div className="gx-keyfield">
					<input className="gx-number" value={String(entry.value)} onChange={(event) => onChange(event.target.value)} />
					<Button size="sm" variant={capturing ? 'primary' : 'secondary'} onClick={() => setCapturing((value) => !value)}>
						{capturing ? 'Press a key…' : 'Capture'}
					</Button>
				</div>
			);

		case 'int':
		case 'float':
			return (
				<div className="gx-numberfield">
					{entry.min !== undefined && entry.max !== undefined ? (
						<input
							type="range"
							min={entry.min}
							max={entry.max}
							step={entry.type === 'int' ? 1 : 0.01}
							value={Number(entry.value)}
							onChange={(event) => onChange(Number(event.target.value))}
						/>
					) : null}
					<input
						className="gx-number"
						type="number"
						value={draft}
						step={entry.type === 'int' ? 1 : 0.01}
						onChange={(event) => {
							setDraft(event.target.value);
							const parsed = Number(event.target.value);
							if (!Number.isNaN(parsed)) onChange(parsed);
						}}
					/>
				</div>
			);

		default:
			return (
				<input
					className="gx-number gx-number--wide"
					value={draft}
					onChange={(event) => {
						setDraft(event.target.value);
						onChange(event.target.value);
					}}
				/>
			);
	}
}

function groupEntries(entries: ConfigEntry[]): [string, ConfigEntry[]][] {
	const map = new Map<string, ConfigEntry[]>();
	for (const entry of entries) {
		const list = map.get(entry.section) ?? [];
		list.push(entry);
		map.set(entry.section, list);
	}
	return [...map.entries()];
}
