import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Icon } from './Icon';
import { Button } from './ui';

interface Props {
	children: ReactNode;
}

interface State {
	error?: Error;
}

/**
 * Steam's CEF has no reload button for injected plugins, so a render error would
 * otherwise blank the overlay until the client restarts. Catch it, keep the rest
 * of the app (toasts, launcher) alive, and offer a soft reset.
 */
export class ErrorBoundary extends Component<Props, State> {
	state: State = {};

	static getDerivedStateFromError(error: Error): State {
		return { error };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error('[GaleX] render error', error, info.componentStack);
	}

	render() {
		const { error } = this.state;
		if (!error) return this.props.children;
		return (
			<div className="gx-crash">
				<div className="gx-crash__card">
					<span className="gx-crash__icon">
						<Icon name="warning" size={22} />
					</span>
					<h2>Something broke in the interface</h2>
					<p>The mod manager hit an unexpected state. Your profile on disk is untouched.</p>
					<pre>{error.message}</pre>
					<div className="gx-crash__actions">
						<Button variant="primary" icon="refresh" onClick={() => this.setState({ error: undefined })}>
							Try again
						</Button>
						<Button onClick={() => window.location.reload()}>Reload interface</Button>
					</div>
				</div>
			</div>
		);
	}
}
