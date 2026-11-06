import cssText from './styles/theme.css?inline';
import { injectStyles } from './lib/styles';

declare const __GALEX_MODE__: 'app'|'plugin';

async function initialize() {
  // Millennium appends the plugin as a module script after Steam is ready.
  // Keep this safe for an ordinary module script placed in <head> as well.
  if (!document.body) await new Promise<void>(resolve => document.addEventListener('DOMContentLoaded', () => resolve(), { once: true }));
  injectStyles(cssText);
  if (__GALEX_MODE__ === 'plugin') {
    const { mountIntoSteam } = await import('./plugin/bootstrap');
    return mountIntoSteam();
  }
  const [{ createRoot }, { PreviewApp }, { ErrorBoundary }] = await Promise.all([
    import('react-dom/client'), import('./demo/PreviewApp'), import('./components/ErrorBoundary'),
  ]);
  const container = document.getElementById('root');
  if (!container) throw new Error('missing #root');
  createRoot(container).render(<ErrorBoundary><PreviewApp/></ErrorBoundary>);
}

let startup: Promise<unknown> | undefined;
function start(): Promise<unknown> {
  if (!startup) startup = initialize().catch(error => { startup = undefined; throw error; });
  return startup;
}

export default start;

// Millennium 3.6.x's loose-file loader appends index.js as <script type="module">
// and does not invoke its default export. Only the compiler-generated wrapper
// (or our smoke test) calls default(). Auto-start the raw bundle as well, while
// caching the promise so both entry paths share exactly one mount/handshake.
void start().catch(error => console.error('[GaleX] Startup failed', error));
