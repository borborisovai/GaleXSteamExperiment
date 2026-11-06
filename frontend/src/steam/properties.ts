import type { Root } from 'react-dom/client';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { ModsView } from './ModsView';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { getCatalog, gameForApp } from './catalog';
import { core } from '../lib/bridge';
import type { SteamGame } from '../lib/types';

interface SavedStyle{display:string;hidden:boolean}
interface Injection {dialog:Element;list:Element;tab:HTMLElement;nativeTabs:HTMLElement[];panel:HTMLElement;root:Root;appid:number;slug:string;active:boolean;hidden:Map<HTMLElement,SavedStyle>;onNativeClick:(event:Event)=>void}
interface DocumentContext{title?:string;name?:string;allowBodyFallback:boolean}
const instances=new Map<Element,Injection>();
const observed=new Map<Document,{observer:MutationObserver;timer:number;dispose:()=>void}>();
const docContexts=new WeakMap<Document,DocumentContext>();
const lastReports=new Map<Document,string>();

export function setPropertiesDocumentContext(doc:Document,context:DocumentContext){docContexts.set(doc,context);}
function norm(value:string|undefined|null){return (value??'').replace(/\s+/g,' ').trim().toLowerCase();}
function loc(token:string,fallback:string){
  try{
    const lm=(window as any).LocalizationManager;
    const value=lm?.m_mapTokens?.get?.(token) ?? lm?.m_mapFallbackTokens?.get?.(token);
    if(typeof value==='string'&&value.length>0)return value;
  }catch{/* LocalizationManager is optional */}
  return fallback;
}
function tabLabels(){
  const general=new Set(['general','общие','allgemein','général','generale','general ','ogólny']);
  const secondary=new Set([
    'local files','installed files','локальные файлы','установленные файлы','lokale dateien','installierte dateien','fichiers locaux','fichiers installés',
    'updates','обновления','aktualisierungen','mises à jour','dlc','betas','бета-версии','beta-versionen','controller','контроллер','shortcut','ярлык',
    'game recording','запись игры','customization','настройка','workshop','мастерская',
  ]);
  for(const [token,fallback] of [['AppProperties_GeneralPage','General'],['AppProperties_General','General']] as const)general.add(norm(loc(token,fallback)));
  for(const [token,fallback] of [
    ['AppProperties_LocalFilesPage','Local Files'],['AppProperties_InstalledFilesPage','Installed Files'],['AppProperties_UpdatesPage','Updates'],
    ['AppProperties_DLCPage','DLC'],['AppProperties_BetasPage','Betas'],['AppProperties_ControllerPage','Controller'],['AppProperties_ShortcutPage','Shortcut'],
    ['AppProperties_GameRecording','Game Recording'],['AppProperties_Customization','Customization'],['AppProperties_WorkshopPage','Workshop'],
  ] as const)secondary.add(norm(loc(token,fallback)));
  return {general,secondary};
}
function report(doc:Document,signature:string,message:string){
  if(lastReports.get(doc)===signature)return;
  lastReports.set(doc,signature);
  void core.log(`properties: ${message}`).catch(()=>{/* diagnostics must never break the adapter */});
}
function appIdFromProps(props:any):number|undefined{
  if(!props||typeof props!=='object')return undefined;
  const candidates=[props.appid,props.appId,props.unAppID,props.m_unAppID,props.app,props.item?.appid,props.item?.appId,
    props.overview?.appid,props.overview?.m_unAppID,props.appOverview?.appid,props.appOverview?.m_unAppID,props.m_appOverview?.appid,
    props.m_appOverview?.m_unAppID,props.app?.appid,props.app?.m_unAppID,props.details?.appid,props.appDetails?.appid];
  for(const value of candidates)if(Number.isSafeInteger(value)&&value>0&&value<0x80000000)return value;
  return undefined;
}
function appIdFromDom(dialog:Element,extra:Element[]=[]):number|undefined {
  const nodes:Element[]=[dialog,...extra,...Array.from(dialog.querySelectorAll('*')).slice(0,300)];
  const seen=new Set<Element>();
  for(const node of nodes){
    if(seen.has(node))continue;seen.add(node);
    const key=Object.keys(node).find(k=>k.startsWith('__reactFiber$')||k.startsWith('__reactInternalInstance$'));
    let fiber=key?(node as any)[key]:undefined;
    for(let depth=0;fiber&&depth<40;depth++,fiber=fiber.return){
      const appid=appIdFromProps(fiber.memoizedProps)??appIdFromProps(fiber.pendingProps);
      if(appid)return appid;
    }
  }
  const explicit=(dialog.matches('[data-appid]')?dialog:dialog.querySelector<HTMLElement>('[data-appid]'))?.getAttribute('data-appid')??undefined;
  if(explicit&&/^\d+$/.test(explicit))return Number(explicit);
  const href=dialog.ownerDocument.defaultView?.location.pathname??'';const match=href.match(/\/(?:library\/app|properties)\/(\d+)/);if(match)return Number(match[1]);
  for(const image of Array.from(dialog.querySelectorAll('img'))) {const m=image.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);if(m)return Number(m[1]);}
  return undefined;
}
function appIdFromTitle(doc:Document,dialog:Element):number|undefined{
  const context=docContexts.get(doc);
  const rawTitles=[context?.title,doc.title,dialog.querySelector('h1,h2,[class*="Title"]')?.textContent];
  const template=loc('AppProperties_Title','Properties - %1$s');
  const patterns=[template,'Properties - %1$s','Properties: %1$s','Свойства — %1$s','Свойства: %1$s','Eigenschaften – %1$s','Eigenschaften: %1$s'];
  const names=new Set<string>();
  for(const raw of rawTitles){
    const title=norm(raw);if(!title||title==='steam')continue;
    let matched=false;
    for(const pattern of patterns){
      const parts=pattern.split('%1$s');if(parts.length<2)continue;
      const escaped=parts.map(p=>p.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/\s+/g,'\\s+'));
      const match=title.match(new RegExp('^\\s*'+escaped.join('\\s*(.+?)\\s*')+'\\s*$','i'));
      if(match?.[1]){names.add(norm(match[1]));matched=true;break;}
    }
    if(!matched&&!/properties|свойства|eigenschaften/.test(title))names.add(title);
  }
  if(!names.size)return undefined;
  try{
    const apps=(window as any).appStore?.m_mapApps;
    if(!apps?.forEach)return undefined;
    let found:number|undefined;
    apps.forEach((app:any,key:any)=>{
      if(found)return;
      const appid=Number(key??app?.appid??app?.m_unAppID);
      if(!Number.isSafeInteger(appid)||appid<=0||appid>=0x80000000)return;
      const name=norm(app?.display_name??app?.m_strDisplayName);
      if(name&&names.has(name))found=appid;
    });
    return found;
  }catch{return undefined;}
}
function itemRoot(candidate:HTMLElement,list:Element):HTMLElement{
  let node:HTMLElement=candidate;
  while(node.parentElement&&node.parentElement!==list)node=node.parentElement as HTMLElement;
  return node.parentElement===list?node:candidate;
}
function findTablist(dialog:Element):{list:Element;tabs:HTMLElement[]}|undefined {
  const {general,secondary}=tabLabels();
  const candidates=Array.from(dialog.querySelectorAll<HTMLElement>('*'))
    .filter(el=>{
      const text=norm(el.textContent);
      if(!general.has(text)&&!secondary.has(text))return false;
      if(el.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]'))return false;
      const parent=el.parentElement;
      return !(parent&&norm(parent.textContent)===text);
    });
  const generals=candidates.filter(el=>general.has(norm(el.textContent)));
  for(const start of generals){
    let node:Element|null=start;
    for(let depth=0;node&&depth<8;depth++,node=node.parentElement){
      if(node.querySelectorAll('*').length>300)continue;
      const contained=candidates.filter(el=>node!.contains(el));
      if(contained.length<2)continue;
      const tabs=Array.from(new Set(contained.map(el=>itemRoot(el,node!))));
      const texts=tabs.map(el=>norm(el.textContent));
      if(texts.some(text=>general.has(text))&&texts.some(text=>secondary.has(text)))return {list:node,tabs};
    }
  }
  return undefined;
}
function findDialogs(doc:Document):Element[]{
  const dialogs=new Set<Element>(Array.from(doc.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  const context=docContexts.get(doc);
  if(context?.allowBodyFallback&&doc.body)dialogs.add(doc.body);
  return Array.from(dialogs);
}
function nativePanels(injection:Injection):HTMLElement[]{
  return Array.from(injection.dialog.querySelectorAll<HTMLElement>('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]'))
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
function setTabLabel(clone:HTMLElement,original:string){
  const label=norm(original);
  if(norm(clone.textContent)===label){clone.textContent='Моды';return;}
  const descendants=Array.from(clone.querySelectorAll<HTMLElement>('*')).filter(el=>norm(el.textContent)===label);
  const target=descendants[descendants.length-1];
  if(target)target.textContent='Моды';else clone.textContent='Моды';
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
  const dialogs=findDialogs(doc);
  const skipped:string[]=[];let injected=0;
  for(const dialog of dialogs){
    if(instances.has(dialog)||dialog.querySelector('[data-galex-properties]'))continue;
    const found=findTablist(dialog);if(!found){skipped.push('no-tablist');continue;}
    const appid=appIdFromDom(dialog,found.tabs)??appIdFromTitle(doc,dialog);
    if(!appid){skipped.push('no-appid');continue;}
    const game=gameForApp(snapshot,appid);if(!game){skipped.push(`unsupported:${appid}`);continue;}
    const template=found.tabs.find(tab=>/workshop|мастерская/i.test(tab.textContent??''))??found.tabs[0]!;
    const originalLabel=norm(template.textContent);
    const tab=template.cloneNode(true) as HTMLElement;
    tab.removeAttribute('id');tab.removeAttribute('href');tab.setAttribute('role','tab');tab.setAttribute('aria-selected','false');
    tab.setAttribute('data-galex-properties','tab');tab.id=`galex-tab-${appid}`;tab.setAttribute('aria-controls',`galex-panel-${appid}`);
    setTabLabel(tab,originalLabel);if(tab.tagName==='A')tab.setAttribute('href','#galex-mods');
    found.list.appendChild(tab);
    const panel=doc.createElement('div');panel.id=`galex-panel-${appid}`;panel.setAttribute('role','tabpanel');
    panel.setAttribute('aria-labelledby',tab.id);panel.setAttribute('data-galex-properties','panel');panel.className='gx-injected-panel';panel.hidden=true;
    panel.style.flex='1';panel.style.minHeight='0';panel.style.overflow='hidden';
    const existing=dialog.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]');
    const panelHost=existing?.parentElement??found.list.parentElement?.parentElement??found.list.parentElement;
    panelHost?.appendChild(panel);
    const root=createRoot(panel);
    const injection:Injection={dialog,list:found.list,tab,nativeTabs:found.tabs,panel,root,appid:game.steamAppId!,slug:game.slug,active:false,hidden:new Map(),onNativeClick:(event:Event)=>{
      const target=event.target as Element|null;
      if(target?.closest?.('[data-galex-properties="tab"]'))return;
      if(target?.closest?.('[role="tab"],button,a')||found.tabs.some(item=>target&&item.contains(target)))deactivate(injection);
    }};
    instances.set(dialog,injection);render(injection,game,snapshot.installing);injected++;
    tab.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();activate(injection);});
    found.list.addEventListener('click',injection.onNativeClick,true);
    report(doc,`injected:${appid}`,`tab injected appid=${appid} slug=${game.slug}`);
  }
  if(dialogs.length&&docContexts.get(doc)?.allowBodyFallback){
    const signature=`${dialogs.length}/${injected}/${skipped.slice(0,4).join(',')}`;
    report(doc,signature,`dialogs=${dialogs.length} injected=${injected} skipped=${skipped.slice(0,4).join(',')||'none'}`);
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
  observer.observe(doc.body,{childList:true,subtree:true,attributes:true,attributeFilter:['role','data-appid','src','style','hidden','class']});
  const dispose=()=>{
    const entry=observed.get(doc);if(entry?.timer)clearTimeout(entry.timer);
    observer.disconnect();
    for(const [dialog,item] of Array.from(instances)){if(doc.contains(dialog))removeInjection(item);}
    observed.delete(doc);lastReports.delete(doc);
  };
  observed.set(doc,{observer,timer:0,dispose});schedule(doc);return dispose;
}
export function refreshPropertiesAdapter(doc:Document=document){scan(doc);}
