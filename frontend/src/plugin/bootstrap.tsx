import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Icon } from '../components/Icon';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { initializeSteamTransport, steamApi } from '../lib/bridge';
import { GlobalSettings } from '../steam/GlobalSettings';
import { LinkInstaller } from '../steam/LinkInstaller';
import { startCatalog, subscribeCatalog } from '../steam/catalog';
import { installPropertiesAdapter, refreshPropertiesAdapter } from '../steam/properties';
import { injectStyles } from '../lib/styles';
import cssText from '../styles/theme.css?inline';

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
export function pluginSettings(){return {title:'GaleX',icon:createElement(Icon,{name:'package',size:18}),content:createElement(ErrorBoundary,null,createElement(GlobalSettings))};}

export function mountIntoSteam(){
  window.__GALEX_STEAM__?.dispose();
  initializeSteamTransport();
  const cleanups:(()=>void)[]=[];const roots:Root[]=[];
  let disposed=false;
  const stopCatalog=startCatalog();cleanups.push(stopCatalog);
  const settings=pluginSettings();
  const previousSidebar=window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[name];
  const previousPlugin=window.PLUGIN_LIST?.[name];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS??={})[name]=settings;
  (window.PLUGIN_LIST??={})[name]={...previousPlugin,...settings};

  const host=document.createElement('div');host.id='galex-steam-events';document.body.appendChild(host);
  const root=createRoot(host);roots.push(root);root.render(createElement(ErrorBoundary,null,createElement(LinkInstaller)));
  // Observe the real properties dialog instead of covering Steam with an app.
  const documents=new Set<Document>([document]);
  const observe=(doc:Document)=>{
    if(disposed||documents.has(doc))return;
    documents.add(doc);injectStyles(cssText,doc);cleanups.push(installPropertiesAdapter(doc));
  };
  const observeWindow=(candidate:any)=>{
    if(disposed||!candidate)return;
    const attach=()=>{if(!disposed&&candidate.document?.body){try{observe(candidate.document);}catch(error){console.warn('[GaleX] Cannot inspect property window',error);}}};
    if(candidate.document?.body){attach();return;}
    // AddWindowCreateHook can fire before the popup has parsed its <body>.
    candidate.addEventListener?.('DOMContentLoaded',attach,{once:true});
    candidate.addEventListener?.('load',attach,{once:true});
    cleanups.push(()=>{candidate.removeEventListener?.('DOMContentLoaded',attach);candidate.removeEventListener?.('load',attach);});
  };
  cleanups.push(installPropertiesAdapter(document));
  try{
    const api=steamApi() as any;
    const addHook=api?.Millennium?.AddWindowCreateHook ?? api?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    if(typeof addHook==='function')addHook((context:any)=>{
      observeWindow(context?.window ?? context?.document?.defaultView ?? context?.BrowserWindow ?? context?.m_popup?.window ?? context?.m_popup ?? context?.m_BrowserWindow);
    });
    else console.warn('[GaleX] Window hook unavailable; observing the main Steam document only');
  }catch(error){console.warn('[GaleX] Window hook unavailable',error);}
  cleanups.push(subscribeCatalog(()=>{for(const doc of documents){if(doc.defaultView?.closed)continue;try{refreshPropertiesAdapter(doc);}catch{/* closed CEF window */}}}));

  const dispose=()=>{
    if(disposed)return;disposed=true;
    cleanups.reverse().forEach(fn=>{try{fn();}catch{/* already closed */}});
    roots.forEach(r=>{try{r.unmount();}catch{/* already unmounted */}});host.remove();
    if(previousSidebar===undefined)delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[name];else window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS![name]=previousSidebar;
    if(previousPlugin===undefined)delete window.PLUGIN_LIST?.[name];else window.PLUGIN_LIST![name]=previousPlugin;
    delete window.__GALEX_STEAM__;
    if(window.GaleX?.dispose===dispose)delete window.GaleX;
  };
  window.__GALEX_STEAM__={dispose};
  window.GaleX={openSettings:()=>{const api=steamApi() as any;void (api?.Millennium?.openQuickAccess?.({plugin:name}) ?? api?.openQuickAccess?.({plugin:name}) ?? window.Millennium?.openQuickAccess?.({plugin:name}));},openProperties:()=>steamApi()?.Navigation?.NavigateToAppProperties?.(),dispose};
  console.info(`[GaleX] frontend ${__GALEX_VERSION__} mounted`);
  // Raw loose-file plugins do not get Millennium's compiler-generated wrapper.
  // Send the same FRONT_END_LOADED notification ourselves, after registering the
  // entry/settings and starting the catalog. main.tsx makes this idempotent.
  const ipc=window.MILLENNIUM_BACKEND_IPC;
  if(typeof ipc?.postMessage==='function'){
    void Promise.resolve(ipc.postMessage(1,{pluginName:name}))
      .then(()=>console.info('[GaleX] backend notified that the frontend is loaded'))
      .catch(error=>console.warn('[GaleX] Frontend-loaded notification failed',error));
  }else console.warn('[GaleX] Millennium backend IPC is unavailable');
  return settings;
}
