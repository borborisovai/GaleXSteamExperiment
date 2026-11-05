import { useEffect, useMemo, useRef, useState } from 'react';
import { actions } from '../lib/actions';
import { cx } from '../lib/format';
import { useAppState, type ViewId } from '../lib/store';
import { Icon, type IconName } from './Icon';
import { TextInput } from './ui';

interface Command {
	id: string;
	label: string;
	hint?: string;
	icon: IconName;
	group: string;
	run: () => void;
}

const VIEW_COMMANDS: { id: ViewId; label: string; icon: IconName }[] = [
	{ id: 'installed', label: 'Go to Installed mods', icon: 'package' },
	{ id: 'browse', label: 'Go to Browse Thunderstore', icon: 'store' },
	{ id: 'updates', label: 'Go to Updates', icon: 'arrow-up' },
	{ id: 'profiles', label: 'Go to Profiles', icon: 'layers' },
	{ id: 'config', label: 'Go to Config files', icon: 'sliders' },
	{ id: 'logs', label: 'Go to Activity', icon: 'terminal' },
	{ id: 'settings', label: 'Go to Settings', icon: 'settings' },
];

export function CommandPalette() {
	const state = useAppState();
	const [query, setQuery] = useState('');
	const [index, setIndex] = useState(0);
	const listRef = useRef<HTMLDivElement>(null);

	const commands = useMemo<Command[]>(() => {
		const list: Command[] = VIEW_COMMANDS.map((view) => ({
			id: `view:${view.id}`,
			label: view.label,
			icon: view.icon,
			group: 'Navigate',
			run: () => actions.setView(view.id),
		}));

		list.push(
			{
				id: 'action:launch',
				label: 'Launch game with mods',
				hint: 'Enter',
				icon: 'play',
				group: 'Actions',
				run: () => void actions.launch(false),
			},
			{
				id: 'action:launch-vanilla',
				label: 'Launch vanilla',
				icon: 'power',
				group: 'Actions',
				run: () => void actions.launch(true),
			},
			{
				id: 'action:update-all',
				label: 'Update all packages',
				icon: 'arrow-up',
				group: 'Actions',
				run: () => void actions.updateMods(),
			},
			{
				id: 'action:refresh',
				label: 'Refresh profile',
				icon: 'refresh',
				group: 'Actions',
				run: () => void actions.refreshAll(),
			},
			{
				id: 'action:compact',
				label: state.compact ? 'Disable compact rows' : 'Enable compact rows',
				icon: 'grid',
				group: 'Actions',
				run: () => actions.setCompact(!state.compact),
			},
			{
				id: 'action:clear-search',
				label: 'Clear Thunderstore search',
				icon: 'search',
				group: 'Actions',
				run: () => actions.setSearch(''),
			},
		);

		for (const mod of state.mods.slice(0, 60)) {
			list.push({
				id: `mod:${mod.uuid}`,
				label: mod.name,
				hint: `v${mod.version} · ${mod.author}`,
				icon: 'package',
				group: 'Installed mods',
				run: () => actions.openMod(mod.uuid),
			});
		}

		return list;
	}, [state.mods, state.compact]);

	const filtered = useMemo(() => {
		const needle = query.trim().toLowerCase();
		if (!needle) return commands.slice(0, 10);
		return commands
			.filter((command) => `${command.label} ${command.hint ?? ''}`.toLowerCase().includes(needle))
			.slice(0, 12);
	}, [commands, query]);

	useEffect(() => {
		setIndex(0);
	}, [query]);

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				actions.togglePalette(false);
			} else if (event.key === 'ArrowDown') {
				event.preventDefault();
				setIndex((current) => Math.min(filtered.length - 1, current + 1));
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				setIndex((current) => Math.max(0, current - 1));
			} else if (event.key === 'Enter') {
				const command = filtered[index];
				if (command) {
					event.preventDefault();
					command.run();
					actions.togglePalette(false);
				}
			}
		};
		window.addEventListener('keydown', onKey, true);
		return () => window.removeEventListener('keydown', onKey, true);
	}, [filtered, index]);

	useEffect(() => {
		const active = listRef.current?.querySelector<HTMLElement>('.is-active');
		active?.scrollIntoView?.({ block: 'nearest' });
	}, [index]);

	if (!state.paletteOpen) return null;

	return (
		<div className="gx-palette-scrim" onMouseDown={() => actions.togglePalette(false)}>
			<div className="gx-palette" onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
				<div className="gx-palette__input">
					<TextInput
						value={query}
						onChange={setQuery}
						placeholder="Search commands, mods…"
						icon="search"
						autoFocus
						ariaLabel="Command palette"
					/>
					<kbd>esc</kbd>
				</div>
				<div className="gx-palette__list" ref={listRef}>
					{filtered.length === 0 ? (
						<p className="gx-pop__empty">No matching command.</p>
					) : (
						filtered.map((command, position) => (
							<button
								key={command.id}
								type="button"
								className={cx('gx-palette__item', position === index && 'is-active')}
								onMouseEnter={() => setIndex(position)}
								onClick={() => {
									command.run();
									actions.togglePalette(false);
								}}
							>
								<Icon name={command.icon} size={15} />
								<span className="gx-palette__label">{command.label}</span>
								{command.hint ? <span className="gx-palette__hint">{command.hint}</span> : null}
								<span className="gx-palette__group">{command.group}</span>
							</button>
						))
					)}
				</div>
			</div>
		</div>
	);
}
