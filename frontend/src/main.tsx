import cssText from './styles/theme.css?inline';
import { injectStyles } from './lib/styles';
declare const __GALEX_MODE__: 'app'|'plugin';
async function start(){
  injectStyles(cssText);
  if(__GALEX_MODE__==='plugin'){
    const {mountIntoSteam}=await import('./plugin/bootstrap');return mountIntoSteam();
  }
  const [{createRoot},{PreviewApp},{ErrorBoundary}]=await Promise.all([import('react-dom/client'),import('./demo/PreviewApp'),import('./components/ErrorBoundary')]);
  const container=document.getElementById('root');if(!container)throw new Error('missing #root');
  createRoot(container).render(<ErrorBoundary><PreviewApp/></ErrorBoundary>);
}
export default start;
if(__GALEX_MODE__==='app')void start().catch(error=>console.error('[GaleX] Startup failed',error));