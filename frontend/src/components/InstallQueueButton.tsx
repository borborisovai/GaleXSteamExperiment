import { actions } from '../lib/actions';
import { cx, formatBytes, relativeTime } from '../lib/format';
import { installCount, useAppState } from '../lib/store';
import type { InstallTask } from '../lib/types';
import { Icon } from './Icon';
import { Popover } from './Popover';
import { Badge, IconButton, ProgressBar } from './ui';

function statusLabel(task: InstallTask): string {
	switch (task.status) {
		case 'queued':
			return 'Queued';
		case 'downloading':
			return task.current ? `Downloading ${task.current}` : 'Downloading';
		case 'extracting':
			return task.current ? `Extracting ${task.current}` : 'Extracting';
		case 'done':
			return 'Completed';
		case 'failed':
			return task.error ?? 'Failed';
		case 'cancelled':
			return 'Cancelled';
	}
}

function TaskRow({ task }: { task: InstallTask }) {
	const active = task.status === 'queued' || task.status === 'downloading' || task.status === 'extracting';
	return (
		<div className={cx('gx-task', active && 'is-active')}>
			<div className="gx-task__head">
				<span className={cx('gx-task__status', `is-${task.status}`)}>
					{task.status === 'done' ? <Icon name="check" size={12} /> : null}
					{task.status === 'failed' ? <Icon name="warning" size={12} /> : null}
					{active ? <span className="gx-spinner gx-spinner--xs" /> : null}
				</span>
				<span className="gx-task__title">{statusLabel(task)}</span>
				{active ? (
					<IconButton
						icon="x"
						title="Cancel"
						size={13}
						onClick={() => void actions.cancelInstall(task.id)}
					/>
				) : (
					<span className="gx-task__time">{relativeTime(task.finishedAt ?? task.startedAt)}</span>
				)}
			</div>
			{active ? (
				<>
					<ProgressBar value={task.progress} />
					<div className="gx-task__meta">
						<span>
							{task.completed}/{task.total} packages
						</span>
						<span>{Math.round(task.progress * 100)}%</span>
					</div>
				</>
			) : null}
		</div>
	);
}

export function InstallQueueButton() {
	const state = useAppState();
	const active = installCount(state.tasks);
	const recent = state.tasks.slice(0, 6);

	return (
		<Popover
			align="end"
			width={340}
			trigger={({ open, toggle }) => (
				<button
					type="button"
					className={cx('gx-queuebtn', open && 'is-open', active > 0 && 'is-active')}
					onClick={toggle}
					title="Install queue"
				>
					{active > 0 ? <span className="gx-spinner gx-spinner--sm" /> : <Icon name="download" size={16} />}
					<span>{active > 0 ? `${active} in queue` : 'Queue'}</span>
					{active > 0 ? (
						<ProgressBar value={state.tasks.find((t) => t.status !== 'done')?.progress ?? 0} />
					) : null}
				</button>
			)}
		>
			{() => (
				<>
					<div className="gx-pop__head">
						<span>Install queue</span>
						<Badge tone={active > 0 ? 'blue' : 'neutral'}>{active > 0 ? `${active} running` : 'idle'}</Badge>
					</div>
					{recent.length === 0 ? (
						<p className="gx-pop__empty">Nothing installed yet. Pick a mod in Browse to get started.</p>
					) : (
						<div className="gx-pop__scroll gx-pop__scroll--tasks">
							{recent.map((task) => (
								<TaskRow key={task.id} task={task} />
							))}
						</div>
					)}
					<div className="gx-pop__foot">
						<Icon name="info" size={13} />
						<span>Cache: downloads are reused across profiles · {formatBytes(0)}</span>
					</div>
				</>
			)}
		</Popover>
	);
}
