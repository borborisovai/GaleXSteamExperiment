import { actions } from '../lib/actions';
import { cx } from '../lib/format';
import { activeProfile, useAppState } from '../lib/store';
import { Icon } from './Icon';
import { MenuItem, MenuLabel, MenuSeparator, Popover } from './Popover';

export function ProfileSwitcher() {
	const state = useAppState();
	const profile = activeProfile(state);

	return (
		<Popover
			width={290}
			trigger={({ open, toggle }) => (
				<button
					type="button"
					className={cx('gx-switcher gx-switcher--ghost', open && 'is-open')}
					onClick={toggle}
					title="Switch profile"
				>
					<Icon name="layers" size={15} />
					<span className="gx-switcher__label">{profile?.name ?? 'No profile'}</span>
					<Icon name="chevron-down" size={13} />
				</button>
			)}
		>
			{(close) => (
				<>
					<MenuLabel>Profiles for this game</MenuLabel>
					{state.profiles.length === 0 ? <p className="gx-pop__empty">No profiles yet.</p> : null}
					{state.profiles.map((item) => (
						<MenuItem
							key={item.id}
							icon={item.id === state.profileId ? 'check' : 'folder'}
							active={item.id === state.profileId}
							onClick={() => {
								void actions.selectProfile(item.id);
								close();
							}}
							trailing={
								<span className="gx-menuitem__count">
									{item.enabledCount}/{item.modCount}
								</span>
							}
						>
							{item.name}
							{item.active ? <em className="gx-menuitem__tag">active</em> : null}
						</MenuItem>
					))}
					<MenuSeparator />
					<MenuItem
						icon="layers"
						onClick={() => {
							actions.setView('profiles');
							close();
						}}
					>
						Manage profiles…
					</MenuItem>
					<MenuItem
						icon="plus"
						onClick={() => {
							actions.setView('profiles');
							close();
						}}
					>
						New profile…
					</MenuItem>
				</>
			)}
		</Popover>
	);
}
