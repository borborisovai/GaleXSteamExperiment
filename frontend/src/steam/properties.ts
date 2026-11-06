import type { Root } from 'react-dom/client';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { ModsView } from './ModsView';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { getCatalog, gameForApp } from './catalog';
import { core } from '../lib/bridge';
import { t } from '../lib/i18n';
import { DocumentContext } from '../lib/DocumentContext';
import type { SteamGame } from '../lib/types';

interface SavedStyle{display:string;hidden:boolean}
/* When Steam renders a real DialogContent tabpanel we reuse that element as the
   Mods panel instead of hiding it and appending a bespoke sibling. The React
   root lives in a small mount node inside the native DialogBody; the native
   children are hidden (not removed) and restored on deactivation. */
interface AdoptedContent{shell:HTMLElement;body:HTMLElement;header:HTMLElement|null;headerText:string;shellStyle:SavedStyle;bodyStyle:SavedStyle;labelledBy:string|null;id:string|null;children:Map<HTMLElement,SavedStyle>}
interface Injection {dialog:Element;list:Element;tab:HTMLElement;nativeTabs:HTMLElement[];panel:HTMLElement;mount:HTMLElement;adopted?:AdoptedContent;root:Root;appid:number;slug:string;active:boolean;hidden:Map<HTMLElement,SavedStyle>;nativeClasses:Map<Element,string>;selectedDelta:string[];onNativeClick:(event:Event)=>void;resize?:ResizeObserver;sizePanel:()=>void}
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
/* Steam renders each properties page inside a semantic DialogContent tabpanel
   (DialogContent > DialogContent_InnerWidth > DialogHeader + DialogBody). Reuse
   that live element as the Mods panel instead of hiding it and appending a
   bespoke sibling: the React root mounts into the native DialogBody, the native
   DialogHeader becomes the Mods title, and the native children are hidden (not
   removed) so Steam's own padding/background/scroll chain keeps working. */
function findNativeContent(dialog:Element):HTMLElement|undefined{
  const candidates=Array.from(dialog.querySelectorAll<HTMLElement>('[role="tabpanel"],[class*="DialogContent"]'))
    .filter(el=>el.classList.contains('DialogContent')&&!el.hasAttribute('data-galex-properties'));
  return candidates.find(el=>el.style.display!=='none'&&!el.hidden)??candidates[0];
}
function adoptedBody(shell:HTMLElement):HTMLElement{
  return shell.querySelector<HTMLElement>('.DialogBody')??shell.querySelector<HTMLElement>('.DialogContent_InnerWidth')??shell;
}
function makeAdopted(shell:HTMLElement):AdoptedContent{
  const body=adoptedBody(shell);
  const header=shell.querySelector<HTMLElement>('.DialogHeader');
  return {shell,body,header:header??null,headerText:header?.textContent??'',shellStyle:{display:shell.style.display,hidden:shell.hidden},bodyStyle:{display:body.style.display,hidden:body.hidden},labelledBy:shell.getAttribute('aria-labelledby'),id:shell.id,children:new Map()};
}
function showAdopted(injection:Injection){
  let a=injection.adopted;if(!a)return;
  // Steam swaps the DialogContent element when the native route changes; re-
  // acquire the live one instead of pointing at a detached node.
  if(!a.shell.isConnected){const fresh=findNativeContent(injection.dialog);if(!fresh)return;injection.panel=fresh;injection.adopted=a=makeAdopted(fresh);}
  // Every write is guarded so re-asserting on each MutationObserver scan does
  // not queue identical attribute mutations and spin the observer.
  if(a.shell.getAttribute('data-galex-properties')!=='panel')a.shell.setAttribute('data-galex-properties','panel');
  if(a.shell.getAttribute('aria-labelledby')!==injection.tab.id)a.shell.setAttribute('aria-labelledby',injection.tab.id);
  if(a.shell.hidden)a.shell.hidden=false;
  if(a.shell.style.display==='none')a.shell.style.display=a.shellStyle.display;
  for(const child of Array.from(a.body.children)){
    const el=child as HTMLElement;if(el===injection.mount)continue;
    if(!a.children.has(el))a.children.set(el,{display:el.style.display,hidden:el.hidden});
    if(el.style.display!=='none')el.style.display='none';if(!el.hidden)el.hidden=true;
  }
  if(injection.mount.parentElement!==a.body)a.body.appendChild(injection.mount);
  if(injection.mount.hidden)injection.mount.hidden=false;
  if(a.header&&a.header.textContent!==t('mods'))a.header.textContent=t('mods');
  const controls=a.shell.id||injection.tab.getAttribute('aria-controls');
  if(controls&&injection.tab.getAttribute('aria-controls')!==controls){
    injection.tab.setAttribute('aria-controls',controls);
    injection.tab.querySelectorAll('[aria-controls]').forEach(node=>{if(node.getAttribute('aria-controls')!==controls)node.setAttribute('aria-controls',controls);});
  }
}
function hideAdopted(injection:Injection){
  const a=injection.adopted;if(!a)return;
  a.children.forEach((saved,el)=>{if(el.isConnected){el.style.display=saved.display;el.hidden=saved.hidden;}});
  a.children.clear();
  if(a.header&&a.header.isConnected)a.header.textContent=a.headerText;
  injection.mount.remove();
  if(a.shell.isConnected){
    a.shell.removeAttribute('data-galex-properties');
    if(a.labelledBy===null)a.shell.removeAttribute('aria-labelledby');else a.shell.setAttribute('aria-labelledby',a.labelledBy);
    a.shell.style.display=a.shellStyle.display;a.shell.hidden=a.shellStyle.hidden;
  }
}
/* Steam can mount the tablist before the route's DialogContent (lazy render).
   The first scan then builds the fallback sibling; once a real DialogContent
   appears, upgrade the existing injection to adopt it instead of keeping the
   bespoke panel next to the native one. */
function upgradeToAdopted(injection:Injection,shell:HTMLElement){
  const doc=injection.dialog.ownerDocument;
  const mount=doc.createElement('div');mount.className='gx-adopted-mount';mount.setAttribute('data-galex-mount','');mount.hidden=true;
  const wasActive=injection.active;
  // Un-hide native panels first so makeAdopted captures the shell's real
  // visibility (hideNative may have hidden it while the fallback was active).
  restoreNative(injection);
  injection.resize?.disconnect();injection.resize=undefined;
  const oldPanel=injection.panel,oldRoot=injection.root;
  injection.adopted=makeAdopted(shell);injection.panel=shell;injection.mount=mount;injection.root=createRoot(mount);injection.sizePanel=()=>{};
  try{oldRoot.unmount();}catch{/* already unmounted */}
  oldPanel.remove();
  if(wasActive){showAdopted(injection);hideNative(injection);}
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
/* Steam highlights the active properties page with CSS-module classes, not
   only aria-selected. Clear those classes while Mods is active, otherwise the
   previous page (Customization/Workshop/etc.) stays visually selected. */
function isSelectedClass(token:string){
  return /Active|Selected|Current/.test(token) || /^(active|selected|current)$/i.test(token) || /[_-](active|selected|current)([_-]|$)/i.test(token);
}
function stripSelected(root:Element,saved?:Map<Element,string>,extra:string[]=[]){
  for(const node of [root,...Array.from(root.querySelectorAll('*'))]){
    const className=node.getAttribute('class');if(!className)continue;
    const tokens=className.split(/\s+/).filter(Boolean);
    const kept=tokens.filter(token=>!isSelectedClass(token)&&!extra.includes(token));
    if(kept.length===tokens.length)continue;
    if(saved&&!saved.has(node))saved.set(node,className);
    if(kept.length)node.setAttribute('class',kept.join(' '));else node.removeAttribute('class');
  }
}
function suppressNativeSelection(injection:Injection){
  for(const tab of injection.nativeTabs)stripSelected(tab,injection.nativeClasses,injection.selectedDelta);
  injection.list.querySelectorAll('[role="tab"]').forEach(tab=>{if(tab!==injection.tab){stripSelected(tab,injection.nativeClasses,injection.selectedDelta);tab.setAttribute('aria-selected','false');}});
}
/* Highlight the injected tab with Steam's own selected class so it is pixel
   identical to native tabs; fall back to gx-tab-active only when Steam exposes
   no distinguishable selected token (older/mock DOM). */
function paintTab(injection:Injection,selected:boolean){
  const {tab,selectedDelta}=injection;
  const useSteam=selectedDelta.length>0;
  tab.classList.toggle('gx-tab-active',selected&&!useSteam);
  for(const token of selectedDelta)tab.classList.toggle(token,selected);
  for(const node of [tab,...Array.from(tab.querySelectorAll('[role="tab"]'))])node.setAttribute('aria-selected',selected?'true':'false');
}
function restoreNativeSelection(injection:Injection){
  injection.nativeClasses.forEach((className,node)=>{if(node.isConnected)node.setAttribute('class',className);});
  injection.nativeClasses.clear();
}
function deactivate(injection:Injection){
  if(!injection.active)return;
  injection.active=false;
  if(injection.adopted)hideAdopted(injection);else injection.panel.hidden=true;
  paintTab(injection,false);
  restoreNativeSelection(injection);
  restoreNative(injection);
}
function activate(injection:Injection){
  // Re-adopt before hideNative: a freshly rendered Steam DialogContent must
  // carry the panel marker first, otherwise nativePanels would hide it.
  if(injection.active){if(injection.adopted)showAdopted(injection);else injection.panel.hidden=false;hideNative(injection);return;}
  if(injection.adopted)showAdopted(injection);
  hideNative(injection);
  suppressNativeSelection(injection);
  injection.active=true;
  if(!injection.adopted)injection.panel.hidden=false;
  injection.sizePanel();
  paintTab(injection,true);
}
function render(injection:Injection,game:SteamGame,installing:boolean){
  injection.root.render(createElement(DocumentContext.Provider,{value:injection.dialog.ownerDocument},createElement(ErrorBoundary,null,createElement(ModsView,{key:`${injection.slug}-${injection.appid}`,game,installing,embedded:!!injection.adopted}))));
}
function removeInjection(injection:Injection){
  deactivate(injection);
  injection.resize?.disconnect();
  injection.list.removeEventListener('click',injection.onNativeClick,true);
  instances.delete(injection.dialog);
  const {root,tab,panel,mount,adopted}=injection;
  queueMicrotask(()=>{try{root.unmount();}catch{/* already unmounted */}tab.remove();if(adopted)mount.remove();else panel.remove();});
}
function setTabLabel(clone:HTMLElement,original:string){
  const label=norm(original);const mods=t('mods');
  // Steam wraps the caption in an inner label node that carries the padding and
  // typography. Replace only that leaf's text; assigning clone.textContent would
  // flatten the wrapper and make the Mods tab render unlike its neighbours.
  const descendants=Array.from(clone.querySelectorAll<HTMLElement>('*')).filter(el=>norm(el.textContent)===label);
  const target=descendants[descendants.length-1];
  if(target)target.textContent=mods;else clone.textContent=mods;
}
function classTokens(el:Element):string[]{return (el.getAttribute('class')??'').split(/\s+/).filter(Boolean);}
/* Steam marks the active properties tab with a hashed CSS-module class, not a
   readable "Active" token. Diff a selected vs an unselected native tab to learn
   that token so the injected tab can reuse Steam's own highlight. */
function selectionDelta(tabs:HTMLElement[]):string[]{
  const selected=tabs.find(tab=>tab.getAttribute('aria-selected')==='true');
  const idle=tabs.find(tab=>tab.getAttribute('aria-selected')==='false');
  if(!selected||!idle)return [];
  const idleTokens=new Set(classTokens(idle));
  return classTokens(selected).filter(token=>!idleTokens.has(token));
}
function scan(doc:Document){
  const {snapshot}=getCatalog();
  for(const [dialog,injection] of Array.from(instances)){
    if(!doc.contains(dialog))continue;
    if(!dialog.isConnected||!injection.tab.isConnected||!injection.list.isConnected){removeInjection(injection);continue;}
    const game=snapshot?.ok?gameForApp(snapshot,injection.appid):undefined;
    if(!game){removeInjection(injection);continue;}
    if(!injection.adopted){const shell=findNativeContent(dialog);if(shell)upgradeToAdopted(injection,shell);}
    if(injection.active){if(injection.adopted)showAdopted(injection);hideNative(injection);suppressNativeSelection(injection);}
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
    const selectedDelta=selectionDelta(found.tabs);
    const tab=template.cloneNode(true) as HTMLElement;
    stripSelected(tab,undefined,selectedDelta);
    // The clone duplicates the template's inner ids/aria-controls; repoint them
    // at the GaleX panel so the tablist stays accessible and ids remain unique.
    tab.querySelectorAll('[id]').forEach(node=>node.removeAttribute('id'));
    tab.querySelectorAll('[aria-controls]').forEach(node=>node.setAttribute('aria-controls',`galex-panel-${appid}`));
    tab.removeAttribute('id');tab.removeAttribute('href');tab.setAttribute('role','tab');tab.setAttribute('aria-selected','false');
    tab.setAttribute('data-galex-properties','tab');tab.id=`galex-tab-${appid}`;tab.setAttribute('aria-controls',`galex-panel-${appid}`);
    setTabLabel(tab,originalLabel);if(tab.tagName==='A')tab.setAttribute('href','#galex-mods');
    found.list.appendChild(tab);
    // Prefer Steam's own DialogContent tabpanel as the Mods surface. Only fall
    // back to a bespoke sibling panel when the client exposes no DialogContent
    // (older builds / semantic mocks).
    const shell=findNativeContent(dialog);
    let panel:HTMLElement;let mount:HTMLElement;let adopted:AdoptedContent|undefined;let root:Root;let sizePanel:()=>void;let resize:ResizeObserver|undefined;
    if(shell){
      mount=doc.createElement('div');mount.className='gx-adopted-mount';mount.setAttribute('data-galex-mount','');mount.hidden=true;
      adopted=makeAdopted(shell);
      panel=shell;root=createRoot(mount);
      // The native DialogContentTransition → DialogContent → InnerWidth →
      // DialogBody flex chain already bounds the height; no manual sizing.
      sizePanel=()=>{};
    }else{
      panel=doc.createElement('div');panel.id=`galex-panel-${appid}`;panel.setAttribute('role','tabpanel');
      panel.setAttribute('aria-labelledby',tab.id);panel.setAttribute('data-galex-properties','panel');panel.className='gx-injected-panel';panel.hidden=true;
      panel.style.flex='1';panel.style.minHeight='0';panel.style.overflow='hidden';
      const existing=dialog.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]');
      const panelHost=existing?.parentElement??found.list.parentElement?.parentElement??found.list.parentElement;
      panelHost?.appendChild(panel);
      mount=panel;root=createRoot(panel);
      // Steam's property content host is not always a flex column with a definite
      // height. Size the injected panel to the host so the mod list can scroll.
      sizePanel=()=>{
        const host=panel.parentElement,view=doc.defaultView;if(!host||!view)return;
        const hostStyle=view.getComputedStyle(host),dialogStyle=view.getComputedStyle(dialog);
        const pixels=(value:string)=>Number.parseFloat(value)||0;
        const padding=pixels(hostStyle.paddingTop)+pixels(hostStyle.paddingBottom);
        const hostHeight=Math.max(0,host.clientHeight-padding);
        // An auto-height Steam content host grows with its children. Measuring it
        // alone makes the list infinitely tall; bound it by the property dialog.
        const available=Math.floor(dialog.getBoundingClientRect().bottom-host.getBoundingClientRect().top-pixels(hostStyle.paddingBottom)-pixels(dialogStyle.paddingBottom));
        const height=available>0?Math.min(hostHeight||available,available):hostHeight;
        if(height>0)panel.style.height=`${height}px`;
      };
      if(typeof ResizeObserver==='function'&&panel.parentElement){resize=new ResizeObserver(sizePanel);resize.observe(panel.parentElement);resize.observe(dialog);sizePanel();}
    }
    const injection:Injection={dialog,list:found.list,tab,nativeTabs:found.tabs,panel,mount,adopted,root,appid:game.steamAppId!,slug:game.slug,active:false,hidden:new Map(),nativeClasses:new Map(),selectedDelta,resize,sizePanel,onNativeClick:(event:Event)=>{
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
