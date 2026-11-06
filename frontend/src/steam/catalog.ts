import { useSyncExternalStore } from 'react';
import { core, message } from '../lib/bridge';
import { t } from '../lib/i18n';
import type { Snapshot } from '../lib/types';
export interface CatalogState {snapshot?:Snapshot;error:string;loading:boolean}
let state:CatalogState={error:'',loading:true};
const listeners=new Set<()=>void>();
let timer:ReturnType<typeof setTimeout>|undefined;
let stopped=true;let pending=false;let generation=0;
function publish(next:CatalogState){state=next;listeners.forEach(fn=>fn());}
async function poll(){
  if(stopped||pending)return;pending=true;const current=generation;
  try{const snapshot=await core.snapshot();if(!stopped&&current===generation)publish({snapshot,error:snapshot.ok?'':t('incompatibleBridge'),loading:false});}
  catch(error){if(!stopped&&current===generation)publish({...state,error:message(error),loading:false});}
  finally{pending=false;if(!stopped)timer=setTimeout(()=>void poll(),document.visibilityState==='hidden'?15000:3000);}
}
export function startCatalog(){if(!stopped)return()=>stopCatalog();stopped=false;generation++;void poll();return()=>stopCatalog();}
function stopCatalog(){stopped=true;generation++;clearTimeout(timer);}
export function refreshCatalog(){clearTimeout(timer);void poll();}
export function getCatalog(){return state;}
export function useCatalog(){return useSyncExternalStore(fn=>{listeners.add(fn);return()=>listeners.delete(fn);},getCatalog,getCatalog);}
export function gameForApp(snapshot:Snapshot|undefined,appid:number){return snapshot?.games.find(game=>game.steamAppId===appid);}
export function subscribeCatalog(fn:()=>void){listeners.add(fn);return()=>{listeners.delete(fn);};}
