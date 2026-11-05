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

declare global { interface Window { GaleX?:{openSettings:()=>void;openProperties:()=>void;dispose:()=>void};__GALEX_STEAM__?:{dispose:()=>void};MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?:Record<string,unknown>;PLUGIN_LIST?:Record<string,Record<string,unknown>>;Millennium?:{AddWindowCreateHook?:(callback:(context:any)=>void)=>void;openQuickAccess?:(target:{plugin:string})=>Promise<void>}; } }
const name='GaleX';
export function pluginSettings(){return {title:'GaleX',icon:createElement(Icon,{name:'package',size:18}),content:createElement(ErrorBoundary,null,createElement(GlobalSettings))};}
export function mountIntoSteam(){
  if(window.__GALEX_STEAM__){window.__GALEX_STEAM__.dispose();}
  initializeSteamTransport();
  const cleanups:(()=>void)[]=[];const roots:Root[]=[];
  const stopCatalog=startCatalog();cleanups.push(stopCatalog);
  const settings=pluginSettings();
  const previousSidebar=window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[name];
  const previousPlugin=window.PLUGIN_LIST?.[name];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS??={})[name]=settings;
  (window.PLUGIN_LIST??={})[name]={...previousPlugin,...settings};
  let disposed=false;
  const host=document.createElement('div');host.id='galex-steam-events';document.body.appendChild(host);
  const root=createRoot(host);roots.push(root);root.render(createElement(ErrorBoundary,null,createElement(LinkInstaller)));
  // Observe the real properties dialog instead of covering Steam with an app.
  const documents=new Set<Document>([document]);
  const observe=(doc:Document)=>{if(documents.has(doc))return;documents.add(doc);injectStyles(cssText,doc);cleanups.push(installPropertiesAdapter(doc));};
  cleanups.push(installPropertiesAdapter(document));
  try{window.Millennium?.AddWindowCreateHook?.((context:any)=>{
    if(disposed)return;
    const candidate=context?.window?.document??context?.document??context?.BrowserWindow?.document??context?.m_popup?.window?.document??context?.m_popup?.document??context?.m_BrowserWindow?.document;
    if(candidate?.body){try{observe(candidate);}catch(error){console.warn('[GaleX] Cannot inspect property window',error);}}
  });}catch(error){console.warn('[GaleX] Window hook unavailable',error);}
  cleanups.push(subscribeCatalog(()=>{for(const doc of documents){try{refreshPropertiesAdapter(doc);}catch{/* closed CEF window */}}}));
  const dispose=()=>{if(disposed)return;disposed=true;cleanups.reverse().forEach(fn=>{try{fn();}catch{/* already closed */}});roots.forEach(r=>r.unmount());host.remove();if(previousSidebar===undefined)delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[name];else window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS![name]=previousSidebar;if(previousPlugin===undefined)delete window.PLUGIN_LIST?.[name];else window.PLUGIN_LIST![name]=previousPlugin;delete window.__GALEX_STEAM__;};
  window.__GALEX_STEAM__={dispose};
  window.GaleX={openSettings:()=>{const api=steamApi() as any;void (api?.openQuickAccess?.({plugin:name})??window.Millennium?.openQuickAccess?.({plugin:name}));},openProperties:()=>steamApi()?.Navigation?.NavigateToAppProperties?.(),dispose};
  return settings;
}