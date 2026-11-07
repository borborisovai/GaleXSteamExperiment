import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Icon } from '../components/Icon';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { core, initializeSteamTransport, steamApi } from '../lib/bridge';
import { DocumentContext } from '../lib/DocumentContext';
import { initializeLocale } from '../lib/i18n';
import { GlobalSettings } from '../steam/GlobalSettings';
import { LinkInstaller } from '../steam/LinkInstaller';
import { refreshCatalog, startCatalog, subscribeCatalog } from '../steam/catalog';
import { subscribeClientSettings } from '../lib/clientSettings';
import { GaleDownloadsRoute } from '../steam/DownloadsPanel';
import { startProgressMonitor } from '../steam/progress';
import { installPropertiesAdapter, refreshPropertiesAdapter, setPropertiesDocumentContext } from '../steam/properties';
import { injectStyles } from '../lib/styles';
import cssText from '../styles/steam.css?inline';

declare const __GALEX_VERSION__: string;
declare global {
  interface Window {
    GaleX?: {openSettings:()=>void;openProperties:()=>void;dispose:()=>void};
    __GALEX_STEAM__?: {dispose:()=>void};
    MILLENNIUM_BACKEND_IPC?: {postMessage:(id:number,data:{pluginName:string})=>unknown};
    MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?: Record<string,unknown>;
    PLUGIN_LIST?: Record<string,Record<string,unknown>>;
    Millennium?: {AddWindowCreateHook?:(callback:(context:any)=>void)=>void;openQuickAccess?:(target:{plugin:string})=>Promise<void>};
  }
}
const name='GaleX';
export function pluginSettings(){return {title:'GaleX',icon:createElement(Icon,{name:'package',size:18}),content:createElement(ErrorBoundary,null,createElement(GlobalSettings)),linkQueued:(_payload:string)=>{refreshCatalog();return true;}};}

export async function mountIntoSteam(){
  window.__GALEX_STEAM__?.dispose();
  initializeSteamTransport();
  await initializeLocale();
  const cleanups:(()=>void)[]=[];const roots:Root[]=[];
  let disposed=false;let linkMounted=false;
  const stopCatalog=startCatalog();cleanups.push(stopCatalog);
  cleanups.push(subscribeClientSettings(()=>refreshPropertiesAdapter()));
  const stopProgress=startProgressMonitor();cleanups.push(stopProgress);
  const settings=pluginSettings();
  const previousSidebar=window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[name];
  const previousPlugin=window.PLUGIN_LIST?.[name];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS??={})[name]=settings;
  (window.PLUGIN_LIST??={})[name]={...previousPlugin,...settings};

  const documents=new Set<Document>([document]);
  injectStyles(cssText,document);
  const mountLinkRoot=(doc:Document)=>{
    if(disposed||linkMounted||!doc.body)return;
    linkMounted=true;
    const host=doc.createElement('div');host.id='galex-link-installer';doc.body.appendChild(host);
    const root=createRoot(host);roots.push(root);
    root.render(createElement(DocumentContext.Provider,{value:doc},createElement(ErrorBoundary,null,createElement(LinkInstaller))));
    cleanups.push(()=>host.remove());
  };
  const observe=(doc:Document,context?:any)=>{
    if(disposed||documents.has(doc))return;
    const windowName=String(context?.m_strName??context?.name??'');
    const title=String(context?.m_strTitle??context?.title??doc.title??'');
    const isMain=windowName.includes('SP Desktop')&&!windowName.includes('Login');
    setPropertiesDocumentContext(doc,{name:windowName,title,allowBodyFallback:doc!==document&&!isMain});
    documents.add(doc);injectStyles(cssText,doc);cleanups.push(installPropertiesAdapter(doc));
    // The install dialog must live in a visible Steam window, not the hidden
    // SharedJSContext document that loads the plugin bundle.
    if(isMain)mountLinkRoot(doc);
    void core.log(`window observed name=${windowName||'?'} title=${title||'?'} body=${!!doc.body} linkRoot=${linkMounted}`).catch(()=>{});
  };
  const observeWindow=(candidate:any,context?:any)=>{
    if(disposed||!candidate)return;
    const attach=()=>{if(!disposed&&candidate.document?.body){try{observe(candidate.document,context);}catch(error){console.warn('[GaleX] Cannot inspect property window',error);void core.log(`window inspect failed: ${String(error)}`).catch(()=>{});}}};
    if(candidate.document?.body){attach();return;}
    candidate.addEventListener?.('DOMContentLoaded',attach,{once:true});
    candidate.addEventListener?.('load',attach,{once:true});
    cleanups.push(()=>{candidate.removeEventListener?.('DOMContentLoaded',attach);candidate.removeEventListener?.('load',attach);});
  };
  cleanups.push(installPropertiesAdapter(document));
  try{
    const router=(steamApi() as any)?.routerHook;
    if(typeof router?.addPatch==='function'){
      // Steam has no public API for synthetic mod downloads. Wrap the real
      // Downloads route with a GaleX card backed by measured backend progress;
      // never enqueue a Steam app update just to draw a progress bar.
      const patch=(route:any)=>({...route,children:createElement(GaleDownloadsRoute,null,route.children)});
      router.addPatch('/library/downloads',patch,7);
      cleanups.push(()=>{try{router.removePatch?.('/library/downloads',patch,7);}catch{/* router already disposed */}});
    }
  }catch(error){console.warn('[GaleX] Downloads route patch unavailable',error);}
  try{
    const api=steamApi() as any;
    const addHook=api?.Millennium?.AddWindowCreateHook ?? api?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    if(typeof addHook==='function')addHook((context:any)=>{
      observeWindow(context?.window ?? context?.document?.defaultView ?? context?.BrowserWindow ?? context?.m_popup?.window ?? context?.m_popup ?? context?.m_BrowserWindow,context);
    });
    else console.warn('[GaleX] Window hook unavailable; observing the main Steam document only');
  }catch(error){console.warn('[GaleX] Window hook unavailable',error);}
  // Some Millennium builds load the plugin directly into the visible Steam
  // document, or fire the main-window hook before we register. Fall back to the
  // loading document so a queued Thunderstore link is never silently invisible.
  const linkFallback=window.setTimeout(()=>mountLinkRoot(document),3000);
  cleanups.push(()=>window.clearTimeout(linkFallback));
  cleanups.push(subscribeCatalog(()=>{for(const doc of documents){if(doc.defaultView?.closed)continue;try{refreshPropertiesAdapter(doc);}catch{/* closed CEF window */}}}));

  const dispose=()=>{
    if(disposed)return;disposed=true;
    cleanups.reverse().forEach(fn=>{try{fn();}catch{/* already closed */}});
    roots.forEach(r=>{try{r.unmount();}catch{/* already unmounted */}});
    if(previousSidebar===undefined)delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[name];else window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS![name]=previousSidebar;
    if(previousPlugin===undefined)delete window.PLUGIN_LIST?.[name];else window.PLUGIN_LIST![name]=previousPlugin;
    delete window.__GALEX_STEAM__;
    if(window.GaleX?.dispose===dispose)delete window.GaleX;
  };
  window.__GALEX_STEAM__={dispose};
  window.GaleX={openSettings:()=>{const api=steamApi() as any;void (api?.Millennium?.openQuickAccess?.({plugin:name}) ?? api?.openQuickAccess?.({plugin:name}) ?? window.Millennium?.openQuickAccess?.({plugin:name}));},openProperties:()=>steamApi()?.Navigation?.NavigateToAppProperties?.(),dispose};
  console.info(`[GaleX] frontend ${__GALEX_VERSION__} mounted`);
  void core.log(`frontend ${__GALEX_VERSION__} mounted; url=${location.href}`).catch(()=>{});
  const ipc=window.MILLENNIUM_BACKEND_IPC;
  if(typeof ipc?.postMessage==='function'){
    void Promise.resolve(ipc.postMessage(1,{pluginName:name}))
      .then(()=>console.info('[GaleX] backend notified that the frontend is loaded'))
      .catch(error=>console.warn('[GaleX] Frontend-loaded notification failed',error));
  }else console.warn('[GaleX] Millennium backend IPC is unavailable');
  return settings;
}
