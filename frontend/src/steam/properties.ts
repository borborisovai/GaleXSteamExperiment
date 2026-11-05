import type { Root } from 'react-dom/client';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { ModsView } from './ModsView';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { getCatalog, gameForApp } from './catalog';
import type { SteamGame } from '../lib/types';

const GENERAL=['general','общие','allgemein','général'];
const LOCAL=['local files','локальные файлы','lokale dateien','fichiers locaux','dlc','updates','обновления'];
interface SavedStyle{display:string;hidden:boolean}
interface Injection {dialog:Element;list:Element;tab:HTMLElement;panel:HTMLElement;root:Root;appid:number;slug:string;active:boolean;hidden:Map<HTMLElement,SavedStyle>;onNativeClick:(event:Event)=>void}
const instances=new Map<Element,Injection>();
const observed=new Map<Document,{observer:MutationObserver;timer:number;dispose:()=>void}>();

function appIdFromDom(dialog:Element):number|undefined {
  // Prefer the dialog's own React overview / URL over incidental artwork.
  const nodes:Element[]=[dialog,...Array.from(dialog.querySelectorAll('*')).slice(0,80)];
  for(const node of nodes){
    const key=Object.keys(node).find(k=>k.startsWith('__reactFiber$')||k.startsWith('__reactInternalInstance$'));
    let fiber=key?(node as any)[key]:undefined;
    for(let depth=0;fiber&&depth<30;depth++,fiber=fiber.return){
      const p=fiber.memoizedProps??fiber.pendingProps;
      for(const value of [p?.appid,p?.appId,p?.overview?.appid,p?.appOverview?.appid,p?.app?.appid,p?.m_appOverview?.appid,p?.m_appOverview?.m_unAppID]){
        if(Number.isSafeInteger(value)&&value>0&&value<100000000)return value;
      }
    }
  }
  const explicit=(dialog.matches('[data-appid]')?dialog:dialog.querySelector<HTMLElement>('[data-appid]'))?.getAttribute('data-appid')??undefined;
  if(explicit&&/^\d+$/.test(explicit))return Number(explicit);
  const href=dialog.ownerDocument.defaultView?.location.pathname??'';const match=href.match(/\/(?:library\/app|properties)\/(\d+)/);if(match)return Number(match[1]);
  for(const image of Array.from(dialog.querySelectorAll('img'))) {const m=image.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);if(m)return Number(m[1]);}
  return undefined;
}
function findTablist(dialog:Element):{list:Element;tabs:HTMLElement[]}|undefined {
  const lists=[...Array.from(dialog.querySelectorAll('[role="tablist"]')),...Array.from(dialog.querySelectorAll('nav,aside,[class*="TabList"]'))];
  for(const list of lists){
    const tabs=Array.from(list.querySelectorAll<HTMLElement>('[role="tab"],button,a')).filter(el=>el.parentElement===list||el.parentElement?.parentElement===list);
    const text=tabs.map(tab=>tab.textContent?.trim().toLowerCase()??'');
    if(tabs.length>=3&&text.some(t=>GENERAL.includes(t))&&text.some(t=>LOCAL.includes(t)))return {list,tabs};
  }
  return undefined;
}
function nativePanels(injection:Injection):HTMLElement[]{
  return Array.from(injection.dialog.querySelectorAll<HTMLElement>('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"]'))
    .filter(el=>el!==injection.panel&&!el.contains(injection.panel)&&!el.hasAttribute('data-galex-properties'));
}
function hideNative(injection:Injection){
  for(const panel of nativePanels(injection)){
    if(!injection.hidden.has(panel))injection.hidden.set(panel,{display:panel.style.display,hidden:panel.hidden});
    if(panel.style.display!=='none')panel.style.display='none';
  }
}
function restoreNative(injection:Injection){
  injection.hidden.forEach((saved,panel)=>{panel.style.display=saved.display;panel.hidden=saved.hidden;});
  injection.hidden.clear();
}
function deactivate(injection:Injection){
  if(!injection.active)return;
  injection.active=false;injection.panel.hidden=true;
  injection.tab.setAttribute('aria-selected','false');injection.tab.classList.remove('gx-tab-active');
  restoreNative(injection);
}
function activate(injection:Injection){
  if(injection.active){hideNative(injection);injection.panel.hidden=false;return;}
  hideNative(injection);
  injection.dialog.querySelectorAll('[role="tab"]').forEach(tab=>{if(tab!==injection.tab)tab.setAttribute('aria-selected','false');});
  injection.active=true;injection.panel.hidden=false;
  injection.tab.setAttribute('aria-selected','true');injection.tab.classList.add('gx-tab-active');
}
function render(injection:Injection,game:SteamGame,installing:boolean){
  injection.root.render(createElement(ErrorBoundary,null,createElement(ModsView,{key:`${injection.slug}-${injection.appid}`,game,installing})));
}
function removeInjection(injection:Injection){
  deactivate(injection);
  injection.list.removeEventListener('click',injection.onNativeClick,true);
  instances.delete(injection.dialog);
  const {root,tab,panel}=injection;
  queueMicrotask(()=>{try{root.unmount();}catch{/* already unmounted */}tab.remove();panel.remove();});
}
function scan(doc:Document){
  const {snapshot}=getCatalog();
  for(const [dialog,injection] of Array.from(instances)){
    if(!doc.contains(dialog))continue;
    if(!dialog.isConnected||!injection.tab.isConnected||!injection.list.isConnected){removeInjection(injection);continue;}
    const game=snapshot?.ok?gameForApp(snapshot,injection.appid):undefined;
    if(!game){removeInjection(injection);continue;}
    if(injection.active)hideNative(injection);
    render(injection,game,snapshot!.installing);
  }
  if(!snapshot?.ok)return;
  const dialogs=Array.from(doc.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"]'));
  for(const dialog of dialogs){
    if(instances.has(dialog)||dialog.querySelector('[data-galex-properties]'))continue;
    const found=findTablist(dialog);if(!found)continue;
    const appid=appIdFromDom(dialog);const game=gameForApp(snapshot,appid??-1);if(!game)continue;
    const template=found.tabs.find(tab=>/workshop|мастерская/i.test(tab.textContent??''))??found.tabs[0]!;
    const tab=template.cloneNode(true) as HTMLElement;
    tab.removeAttribute('id');tab.removeAttribute('href');tab.setAttribute('role','tab');tab.setAttribute('aria-selected','false');
    tab.setAttribute('data-galex-properties','tab');tab.id=`galex-tab-${appid}`;tab.setAttribute('aria-controls',`galex-panel-${appid}`);
    tab.textContent='Моды';if(tab.tagName==='A')tab.setAttribute('href','#galex-mods');
    found.list.appendChild(tab);
    const panel=doc.createElement('div');panel.id=`galex-panel-${appid}`;panel.setAttribute('role','tabpanel');
    panel.setAttribute('aria-labelledby',tab.id);panel.setAttribute('data-galex-properties','panel');panel.className='gx-injected-panel';panel.hidden=true;
    panel.style.flex='1';panel.style.minHeight='0';panel.style.overflow='hidden';
    const existing=dialog.querySelector('[role="tabpanel"]');
    if(existing?.parentElement)existing.parentElement.appendChild(panel);else found.list.parentElement?.appendChild(panel);
    const root=createRoot(panel);
    const injection:Injection={dialog,list:found.list,tab,panel,root,appid:game.steamAppId!,slug:game.slug,active:false,hidden:new Map(),onNativeClick:(event:Event)=>{
      const target=event.target as Element|null;
      if(target?.closest?.('[data-galex-properties="tab"]'))return;
      if(target?.closest?.('[role="tab"],button,a'))deactivate(injection);
    }};
    instances.set(dialog,injection);render(injection,game,snapshot.installing);
    tab.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();activate(injection);});
    found.list.addEventListener('click',injection.onNativeClick,true);
  }
}
function schedule(doc:Document){
  const entry=observed.get(doc);if(!entry||entry.timer)return;
  entry.timer=window.setTimeout(()=>{entry.timer=0;scan(doc);},180);
}
/** Semantic adapter: no hardcoded Steam CSS hashes and no modification of
 * unsupported games. It also runs in secondary CEF property windows. */
export function installPropertiesAdapter(doc:Document=document){
  if(observed.has(doc))return observed.get(doc)!.dispose;
  const observer=new MutationObserver(()=>schedule(doc));
  observer.observe(doc.body,{childList:true,subtree:true,attributes:true,attributeFilter:['role','data-appid','src','style','hidden']});
  const dispose=()=>{
    const entry=observed.get(doc);if(entry?.timer)clearTimeout(entry.timer);
    observer.disconnect();
    for(const [dialog,item] of Array.from(instances)){if(doc.contains(dialog))removeInjection(item);}
    observed.delete(doc);
  };
  observed.set(doc,{observer,timer:0,dispose});schedule(doc);return dispose;
}
export function refreshPropertiesAdapter(doc:Document=document){scan(doc);}
