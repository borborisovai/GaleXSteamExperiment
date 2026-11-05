import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Avatar, Badge, Button, ConfirmDialog, EmptyState, Modal, Skeleton, TextInput } from '../components/ui';
import { actions } from '../lib/actions';
import { cx, relativeTime } from '../lib/format';
import { useCopyToClipboard } from '../lib/hooks';
import { activeGame, useAppState } from '../lib/store';
import type { Profile } from '../lib/types';

export function ProfilesView() {
	const state = useAppState();
	const game = activeGame(state);
	const [creating, setCreating] = useState(false);
	const [importing, setImporting] = useState(false);
	const [renaming, setRenaming] = useState<Profile | undefined>(undefined);
	const [deleting, setDeleting] = useState<Profile | undefined>(undefined);
	const [exported, setExported] = useState<{ name: string; code: string } | undefined>(undefined);

	if (!game) return <EmptyState icon="globe" title="No game selected" />;

	if (!game.managed) {
		return (
			<EmptyState
				icon="plus"
				title={`Set up ${game.name} first`}
				body="Profiles live inside the game's Gale data folder."
				action={
					<Button variant="primary" icon="plus" onClick={() => void actions.manageGame(game.slug)}>
						Add {game.name}
					</Button>
				}
			/>
		);
	}

	return (
		<div className="gx-view">
			<header className="gx-view__head">
				<div>
					<h1>
						Profiles<span className="gx-count">{state.profiles.length}</span>
					</h1>
					<p>Separate mod setups for {game.name}. The active profile is what “Launch” starts.</p>
				</div>
				<div className="gx-view__tools">
					<Button icon="download" onClick={() => setImporting(true)}>
						Import code
					</Button>
					<Button variant="primary" icon="plus" onClick={() => setCreating(true)}>
						New profile
					</Button>
				</div>
			</header>

			<div className="gx-profilegrid">
				{state.modsLoading && state.profiles.length === 0 ? <Skeleton height={170} radius={14} /> : null}
				{state.profiles.map((profile) => (
					<div key={profile.id} className={cx('gx-profilecard', profile.active && 'is-active')}>
						<div className="gx-profilecard__top">
							<Avatar name={profile.name} size={38} rounded={10} />
							<div>
								<strong>{profile.name}</strong>
								<span className="gx-muted">
									{profile.modCount} mods · {profile.enabledCount} enabled
								</span>
							</div>
							{profile.active ? <Badge tone="green">active</Badge> : null}
							{profile.updateCount > 0 ? <Badge tone="amber">{profile.updateCount} updates</Badge> : null}
						</div>

						<div className="gx-profilecard__meter">
							<div
								className="gx-profilecard__meter-fill"
								style={{ width: `${profile.modCount ? (profile.enabledCount / profile.modCount) * 100 : 0}%` }}
							/>
						</div>

						<div className="gx-profilecard__meta">
							<span title={profile.path}>
								<Icon name="folder" size={12} /> {shortenPath(profile.path)}
							</span>
							{profile.createdAt ? <span>{relativeTime(profile.createdAt)}</span> : null}
						</div>

						<div className="gx-profilecard__actions">
							{profile.active ? (
								<Button size="sm" variant="secondary" icon="folder" onClick={() => void actions.selectProfile(profile.id)}>
									Open
								</Button>
							) : (
								<Button
									size="sm"
									variant="primary"
									icon="check"
									onClick={() => void actions.activateProfile(profile.id)}
								>
									Activate
								</Button>
							)}
							<Button
								size="sm"
								icon="download"
								loading={Boolean(state.busy.export)}
								onClick={() =>
									void actions.exportProfile(profile.id).then((code) => {
										if (code) setExported({ name: profile.name, code });
									})
								}
							>
								Export
							</Button>
							<Button size="sm" icon="copy" onClick={() => setRenaming(profile)}>
								Rename
							</Button>
							<Button size="sm" icon="plus" onClick={() => void actions.createProfile(`${profile.name} copy`, profile.id)}>
								Duplicate
							</Button>
							<Button size="sm" variant="danger" icon="trash" onClick={() => setDeleting(profile)}>
								Delete
							</Button>
						</div>
					</div>
				))}
			</div>

			{creating ? <CreateProfileModal onClose={() => setCreating(false)} /> : null}
			{importing ? <ImportModal onClose={() => setImporting(false)} /> : null}
			{renaming ? <RenameModal profile={renaming} onClose={() => setRenaming(undefined)} /> : null}
			{deleting ? (
				<ConfirmDialog
					title={`Delete “${deleting.name}”?`}
					body="All mods inside this profile are deleted from disk. Exported codes stay valid."
					confirmLabel="Delete profile"
					danger
					onCancel={() => setDeleting(undefined)}
					onConfirm={() => {
						void actions.deleteProfile(deleting.id);
						setDeleting(undefined);
					}}
				/>
			) : null}
			{exported ? <ExportModal name={exported.name} code={exported.code} onClose={() => setExported(undefined)} /> : null}
		</div>
	);
}

function CreateProfileModal({ onClose }: { onClose: () => void }) {
	const state = useAppState();
	const [name, setName] = useState('');
	const [duplicateOf, setDuplicateOf] = useState<number | undefined>(undefined);

	return (
		<Modal
			title="New profile"
			onClose={onClose}
			footer={
				<>
					<Button onClick={onClose}>Cancel</Button>
					<Button
						variant="primary"
						icon="plus"
						disabled={!name.trim()}
						onClick={() => {
							void actions.createProfile(name.trim(), duplicateOf);
							onClose();
						}}
					>
						Create
					</Button>
				</>
			}
		>
			<label className="gx-field">
				<span>Profile name</span>
				<TextInput value={name} onChange={setName} placeholder="e.g. Modded co-op" autoFocus />
			</label>
			<label className="gx-field">
				<span>Start from</span>
				<div className="gx-radio">
					<button
						type="button"
						className={cx('gx-radio__item', duplicateOf === undefined && 'is-active')}
						onClick={() => setDuplicateOf(undefined)}
					>
						<Icon name="sparkles" size={15} />
						<div>
							<strong>Empty profile</strong>
							<span>Start clean, nothing installed.</span>
						</div>
					</button>
					{state.profiles.map((profile) => (
						<button
							key={profile.id}
							type="button"
							className={cx('gx-radio__item', duplicateOf === profile.id && 'is-active')}
							onClick={() => setDuplicateOf(profile.id)}
						>
							<Icon name="copy" size={15} />
							<div>
								<strong>Copy of {profile.name}</strong>
								<span>{profile.modCount} mods duplicated.</span>
							</div>
						</button>
					))}
				</div>
			</label>
		</Modal>
	);
}

function RenameModal({ profile, onClose }: { profile: Profile; onClose: () => void }) {
	const [name, setName] = useState(profile.name);
	return (
		<Modal
			title="Rename profile"
			onClose={onClose}
			footer={
				<>
					<Button onClick={onClose}>Cancel</Button>
					<Button
						variant="primary"
						disabled={!name.trim()}
						onClick={() => {
							void actions.renameProfile(profile.id, name.trim());
							onClose();
						}}
					>
						Save
					</Button>
				</>
			}
		>
			<label className="gx-field">
				<span>Name</span>
				<TextInput value={name} onChange={setName} autoFocus />
			</label>
			<p className="gx-muted">Renaming keeps the folder path, so nothing needs to be reinstalled.</p>
		</Modal>
	);
}

function ImportModal({ onClose }: { onClose: () => void }) {
	const state = useAppState();
	const [code, setCode] = useState('');
	return (
		<Modal
			title="Import a profile code"
			onClose={onClose}
			footer={
				<>
					<Button onClick={onClose}>Cancel</Button>
					<Button
						variant="primary"
						icon="download"
						loading={Boolean(state.busy.import)}
						disabled={!code.trim()}
						onClick={() => {
							void actions.importCode(code.trim()).then((result) => {
								if (result) onClose();
							});
						}}
					>
						Import
					</Button>
				</>
			}
		>
			<label className="gx-field">
				<span>Profile code</span>
				<textarea
					className="gx-textarea"
					value={code}
					onChange={(event) => setCode(event.target.value)}
					placeholder="Paste a Gale, r2modman or Thunderstore profile code"
					rows={5}
					autoFocus
				/>
			</label>
			<p className="gx-muted">Every package is downloaded from Thunderstore and installed into a new profile.</p>
		</Modal>
	);
}

function ExportModal({ name, code, onClose }: { name: string; code: string; onClose: () => void }) {
	const { copied, copy } = useCopyToClipboard();
	return (
		<Modal
			title={`Export “${name}”`}
			onClose={onClose}
			footer={
				<>
					<Button onClick={onClose}>Close</Button>
					<Button variant="primary" icon={copied ? 'check' : 'copy'} onClick={() => void copy(code)}>
						{copied ? 'Copied' : 'Copy code'}
					</Button>
				</>
			}
		>
			<p className="gx-muted">Share this code to reproduce the exact mod list in Gale, r2modman or GaleX.</p>
			<textarea className="gx-textarea gx-monospace" value={code} readOnly rows={6} onFocus={(event) => event.target.select()} />
		</Modal>
	);
}

function shortenPath(path: string) {
	const parts = path.split(/[\\/]/).filter(Boolean);
	if (parts.length <= 3) return path;
	return `…/${parts.slice(-2).join('/')}`;
}
