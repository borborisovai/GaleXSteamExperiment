import { useMemo, useState } from 'react';
import { actions } from '../lib/actions';
import { cx } from '../lib/format';
import { activeGame, useAppState } from '../lib/store';
import type { Game } from '../lib/types';
import { Icon } from './Icon';
import { MenuLabel, MenuSeparator, Popover } from './Popover';
import { Avatar, Badge, Spinner, TextInput } from './ui';

function GameRow({ game, active, onPick }: { game: Game; active: boolean; onPick: () => void }) {
	return (
		<button type="button" className={cx('gx-gamerow', active && 'is-active')} onClick={onPick} role="menuitem">
			<Avatar name={game.name} size={30} rounded={8} />
			<div className="gx-gamerow__text">
				<span className="gx-gamerow__name">{game.name}</span>
				<span className="gx-gamerow__meta">
					{game.managed ? `${game.installedModCount} mods · ${game.modLoader}` : game.modLoader}
				</span>
			</div>
			{game.managed ? (
				game.activeProfileId ? (
					<Badge tone="blue">profile</Badge>
				) : null
			) : (
				<span className="gx-gamerow__add">
					<Icon name="plus" size={13} />
					add
				</span>
			)}
		</button>
	);
}

export function GameSwitcher() {
	const state = useAppState();
	const game = activeGame(state);
	const [filter, setFilter] = useState('');

	const { favorites, managed, others } = useMemo(() => {
		const needle = filter.trim().toLowerCase();
		const matches = state.games.filter((g) => !needle || g.name.toLowerCase().includes(needle));
		return {
			favorites: matches.filter((g) => g.managed && g.favorite),
			managed: matches.filter((g) => g.managed && !g.favorite),
			others: matches.filter((g) => !g.managed).slice(0, 40),
		};
	}, [state.games, filter]);

	return (
		<Popover
			width={340}
			panelClassName="gx-pop__panel--games"
			trigger={({ open, toggle }) => (
				<button type="button" className={cx('gx-switcher', open && 'is-open')} onClick={toggle}>
					{game ? <Avatar name={game.name} size={26} rounded={7} /> : <Spinner size={16} />}
					<span className="gx-switcher__label">{game?.name ?? 'Select a game'}</span>
					<Icon name="chevron-down" size={14} />
				</button>
			)}
		>
			{(close) => (
				<>
					<div className="gx-pop__search">
						<TextInput value={filter} onChange={setFilter} placeholder="Find a game…" icon="search" autoFocus />
					</div>
					<div className="gx-pop__scroll">
						{favorites.length > 0 ? <MenuLabel>Favourites</MenuLabel> : null}
						{favorites.map((g) => (
							<GameRow
								key={g.slug}
								game={g}
								active={g.slug === state.gameSlug}
								onPick={() => {
									void actions.selectGame(g.slug);
									close();
								}}
							/>
						))}
						{managed.length > 0 ? <MenuLabel>Your games</MenuLabel> : null}
						{managed.map((g) => (
							<GameRow
								key={g.slug}
								game={g}
								active={g.slug === state.gameSlug}
								onPick={() => {
									void actions.selectGame(g.slug);
									close();
								}}
							/>
						))}
						{others.length > 0 ? <MenuSeparator /> : null}
						{others.length > 0 ? <MenuLabel>Thunderstore communities</MenuLabel> : null}
						{others.map((g) => (
							<GameRow
								key={g.slug}
								game={g}
								active={g.slug === state.gameSlug}
								onPick={() => {
									void actions.manageGame(g.slug);
									close();
								}}
							/>
						))}
						{matchesEmpty(favorites.length, managed.length, others.length) ? (
							<p className="gx-pop__empty">No community matches “{filter}”.</p>
						) : null}
					</div>
					<div className="gx-pop__foot">
						<Icon name="globe" size={13} />
						<span>{state.games.length} Thunderstore communities available</span>
					</div>
				</>
			)}
		</Popover>
	);
}

function matchesEmpty(a: number, b: number, c: number) {
	return a + b + c === 0;
}
