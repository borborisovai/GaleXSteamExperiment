import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Button, TextInput } from '../components/ui';
import { DEFAULT_DAEMON_PORT, getApiBase, setRuntimeApiBase } from '../lib/api';
import { actions } from '../lib/actions';
import { useCopyToClipboard } from '../lib/hooks';
import { useAppState } from '../lib/store';

export function OfflineView() {
	const state = useAppState();
	const [base, setBase] = useState(getApiBase() || `http://127.0.0.1:${DEFAULT_DAEMON_PORT}`);
	const { copied, copy } = useCopyToClipboard();

	return (
		<div className="gx-offline">
			<div className="gx-offline__card">
				<div className="gx-offline__badge">
					<Icon name="power" size={22} />
				</div>
				<h1>The Gale bridge is not running</h1>
				<p>
					GaleX keeps all mod management in a small local daemon built on Gale's core. Start it once and the
					interface connects automatically.
				</p>

				<div className="gx-offline__steps">
					<div className="gx-offline__step">
						<span className="gx-offline__num">1</span>
						<div>
							<strong>Start the daemon</strong>
							<pre>
								<code>galexd</code>
							</pre>
							<small>Runs as a user service on Linux, or via the tray launcher on Windows.</small>
						</div>
					</div>
					<div className="gx-offline__step">
						<span className="gx-offline__num">2</span>
						<div>
							<strong>Keep it on loopback</strong>
							<pre>
								<code>galexd --port {DEFAULT_DAEMON_PORT}</code>
							</pre>
							<small>The interface talks to 127.0.0.1 only — nothing is exposed to the network.</small>
						</div>
					</div>
				</div>

				<div className="gx-offline__actions">
					<Button icon="refresh" variant="primary" onClick={() => void actions.reconnect()}>
						Try again
					</Button>
					<Button icon={copied ? 'check' : 'copy'} onClick={() => void copy(`galexd --port ${DEFAULT_DAEMON_PORT}`)}>
						{copied ? 'Copied' : 'Copy command'}
					</Button>
				</div>

				<div className="gx-offline__manual">
					<label>
						<span>Custom daemon address</span>
						<div className="gx-inlinefield">
							<TextInput value={base} onChange={setBase} placeholder={`http://127.0.0.1:${DEFAULT_DAEMON_PORT}`} />
							<Button
								onClick={() => {
									setRuntimeApiBase(base.trim() || null);
									void actions.reconnect();
								}}
							>
								Use
							</Button>
						</div>
					</label>
					{state.connectionError ? <p className="gx-offline__error">{state.connectionError}</p> : null}
				</div>

				<footer className="gx-offline__foot">
					<Icon name="info" size={13} />
					<span>
						Installed with <code>scripts/install.sh</code>? The daemon is registered as a systemd user unit and
						starts with your session.
					</span>
				</footer>
			</div>
		</div>
	);
}
