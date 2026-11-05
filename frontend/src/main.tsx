import cssText from './styles/theme.css?inline';
import { injectStyles } from './lib/styles';

declare const __GALEX_MODE__: 'app' | 'plugin';

injectStyles(cssText);

async function start() {
	if (__GALEX_MODE__ === 'plugin') {
		const { mountIntoSteam } = await import('./plugin/bootstrap');
		mountIntoSteam();
		return;
	}

	const { createRoot } = await import('react-dom/client');
	const { App } = await import('./App');
	const container = document.getElementById('root');
	if (!container) throw new Error('missing #root');
	createRoot(container).render(<App />);
}

void start();
