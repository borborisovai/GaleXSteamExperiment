import { useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../components/Icon';
import { Badge, Button, Chip, EmptyState, ProgressBar, TextInput, Toggle } from '../components/ui';
import { actions } from '../lib/actions';
import { clockTime, cx, relativeTime } from '../lib/format';
import { useAppState } from '../lib/store';
import type { LogLevel } from '../lib/types';

const LEVELS: { value: LogLevel | 'all'; label: string }[] = [
	{ value: 'all', label: 'Everything' },
	{ value: 'info', label: 'Info' },
	{ value: 'warn', label: 'Warnings' },
	{ value: 'error', label: 'Errors' },
];

export function LogsView() {
	const state = useAppState();
	const [level, setLevel] = useState<LogLevel | 'all'>('all');
	const [search, setSearch] = useState('');
	const [follow, setFollow] = useState(true);
	const bottomRef = useRef<HTMLDivElement>(null);

	const entries = useMemo(() => {
		const needle = search.trim().toLowerCase();
		return state.logs.filter((entry) => {
			if (level !== 'all' && entry.level !== level) return false;
			if (!needle) return true;
			return (
				entry.message.toLowerCase().includes(needle) ||
				entry.scope.toLowerCase().includes(needle)
			);
		});
	}, [state.logs, level, search]);

	useEffect(() => {
		if (!follow) return;
		bottomRef.current?.scrollIntoView?.({ block: 'end' });
	}, [entries.length, follow]);

	const activeTasks = state.tasks.filter((t) => t.status === 'queued' || t.status === 'downloading' || t.status === 'extracting');

	return (
		<div className="gx-view">
			<header className="gx-view__head">
				<div>
					<h1>
						Activity<span className="gx-count">{entries.length}</span>
					</h1>
					<p>Live feed from the Gale bridge: downloads, installs, profile writes and errors.</p>
				</div>
				<div className="gx-view__tools">
					<label className="gx-inlinefield">
						<Toggle size="sm" checked={follow} onChange={setFollow} label="Follow output" />
						<span>Follow</span>
					</label>
					<Button size="sm" icon="refresh" onClick={() => void actions.refreshLogs()}>
						Reload
					</Button>
				</div>
			</header>

			{activeTasks.length > 0 ? (
				<div className="gx-queuestrip">
					{activeTasks.map((task) => (
						<div key={task.id} className="gx-queuestrip__item">
							<div className="gx-queuestrip__head">
								<span className="gx-spinner gx-spinner--xs" />
								<strong>{task.current ?? task.step}</strong>
								<span>
									{task.completed}/{task.total}
								</span>
								<Button size="sm" variant="ghost" icon="x" onClick={() => void actions.cancelInstall(task.id)}>
									Cancel
								</Button>
							</div>
							<ProgressBar value={task.progress} />
						</div>
					))}
				</div>
			) : null}

			<div className="gx-filterbar">
				<div className="gx-filterbar__chips">
					{LEVELS.map((item) => (
						<Chip key={item.value} active={level === item.value} onClick={() => setLevel(item.value)}>
							{item.label}
						</Chip>
					))}
				</div>
				<TextInput value={search} onChange={setSearch} placeholder="Filter output…" icon="search" />
			</div>

			<div className="gx-log">
				{entries.length === 0 ? (
					<EmptyState icon="terminal" title="Nothing logged yet" body="Install a mod or refresh a profile to see events here." />
				) : (
					<>
						{entries.map((entry) => (
							<div key={entry.id} className={cx('gx-log__row', `is-${entry.level}`)}>
								<span className="gx-log__time">{clockTime(entry.at)}</span>
								<Badge tone={entry.level === 'error' ? 'red' : entry.level === 'warn' ? 'amber' : 'neutral'}>
									{entry.level}
								</Badge>
								<span className="gx-log__scope">{entry.scope}</span>
								<span className="gx-log__message">{entry.message}</span>
							</div>
						))}
						<div ref={bottomRef} />
					</>
				)}
			</div>

			<div className="gx-log__foot">
				<Icon name="info" size={13} />
				<span>
					Bridge log written to the daemon's data folder. Last event {entries.length > 0 ? relativeTime(entries[entries.length - 1]?.at) : '—'}.
				</span>
			</div>
		</div>
	);
}
