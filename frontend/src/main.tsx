import { injectStyles } from './lib/styles';
import { initializeLocale } from './lib/i18n';

async function initialize() {
  if (!document.body) await new Promise<void>(resolve => document.addEventListener('DOMContentLoaded', () => resolve(), { once: true }));
  const [{ default: steamCss }, { default: demoCss }] = await Promise.all([
    import('./styles/steam.css?inline'), import('./styles/demo.css?inline'),
  ]);
  // injectStyles() owns one #galex-styles node; concatenate so the demo shell
  // does not replace the Steam/Workshop rules it is supposed to preview.
  injectStyles(`${steamCss}\n${demoCss}`);
  await initializeLocale();
  const [{ createRoot }, { PreviewApp }, { ErrorBoundary }] = await Promise.all([
    import('react-dom/client'), import('./demo/PreviewApp'), import('./components/ErrorBoundary'),
  ]);
  const container = document.getElementById('root');
  if (!container) throw new Error('missing #root');
  createRoot(container).render(<ErrorBoundary><PreviewApp/></ErrorBoundary>);
}
void initialize().catch(error => console.error('[GaleX] Demo startup failed', error));
