import type { Transport } from '../lib/bridge';
import type { ProfileQuery, ProfileMod, QueryArgs, ActionResult } from '../lib/types';
import { defaultQuery } from '../lib/types';
import { demoMods, demoPrefs, demoProfiles, demoSnapshot } from './data';
const mods = structuredClone(demoMods);
const profiles = structuredClone(demoProfiles);
const prefs = structuredClone(demoPrefs);
const perProfile = new Map<string, ProfileMod[]>();
const keyOf=(slug:string,id:number)=>`${slug}:${id}`;
let sequence = 10;
function current(slug: string) { return profiles[slug] ?? {activeId:1,profiles:[]}; }
function list(slug: string, id?: number) { const p = current(slug); const key = keyOf(slug,id ?? p.activeId); if (!perProfile.has(key)) perProfile.set(key, (id ?? p.activeId) === 1 ? structuredClone(mods) : []); return perProfile.get(key)!; }
const reply = (data: unknown) => ({ok:true,data});
export const demoTransport: Transport = async (method, payload) => {
  await new Promise(resolve=>setTimeout(resolve, 140));
  if (method === 'snapshot') return reply({...demoSnapshot});
  if (method === 'restart') return reply(null);
  if (method === 'dismiss_link') return reply(null);
  if (method === 'browser_url') return reply({url:'demo://config'});
  try {
  const envelope = payload as {method:string;args:{slug:string;profileId?:number;[key:string]:any}};
  const a = envelope.args;
  const p = current(a.slug);
  const rows = list(a.slug,a.profileId);
  const target = rows.find(m=>m.data.uuid === a.uuid);
  let data: unknown = null;
  switch(envelope.method) {
    case 'profiles': data = p; break;
    case 'mods': {
      const args: QueryArgs = {...defaultQuery,...a.args};
      let result = rows.filter(m=>(args.includeDisabled || m.enabled) && (args.includeEnabled || !m.enabled));
      const term = args.searchTerm?.toLowerCase();
      if (term) result = result.filter(m=>(m.data.name+' '+m.data.author+' '+m.data.description).toLowerCase().includes(term));
      if (args.includeCategories.length) result = result.filter(m=>m.data.categories?.some(c=>args.includeCategories.includes(c)));
      result = [...result].sort((x,y)=>(args.sortBy==='diskSpace'?x.data.fileSize-y.data.fileSize:x.data.name.localeCompare(y.data.name))*(args.sortOrder==='ascending'?1:-1));
      data = {mods:result,totalModCount:rows.length,updates:a.slug==='lethal-company'?[{fullName:'RugbugRedfern-Skinwalkers-5.1.0',ignore:false,old:'5.0.0',new:'5.1.0',updatedId:{packageUuid:'demo-package-4',versionUuid:'demo-version-4-new'}}]:[],unknownMods:[]} satisfies ProfileQuery; break;
    }
    case 'prefs': data = prefs; break;
    case 'set_prefs': Object.assign(prefs,a.value); break;
    case 'create_profile': case 'duplicate_profile': {
      if (!a.name?.trim() || p.profiles.some(x=>x.name===a.name.trim())) throw new Error('Профиль с таким именем уже существует');
      const id = ++sequence; p.profiles.push({id,name:a.name.trim(),modCount:0,customArgs:'',missing:false});
      perProfile.set(keyOf(a.slug,id),envelope.method==='duplicate_profile'?structuredClone(rows):[]); break;
    }
    case 'rename_profile': { const profile = p.profiles.find(x=>x.id===(a.profileId??p.activeId)); if(profile) profile.name=a.name; break; }
    case 'delete_profile': {
      if(p.profiles.length<=1) throw new Error('Нельзя удалить последний профиль');
      p.profiles=p.profiles.filter(x=>x.id!==a.id); profiles[a.slug]=p;
      if(p.activeId===a.id) p.activeId=p.profiles[0]!.id; perProfile.delete(keyOf(a.slug,a.id)); break;
    }
    case 'activate_profile': if(!p.profiles.some(x=>x.id===a.profileId))throw new Error('Профиль не найден');p.activeId=a.profileId!;break;
    case 'clear_download_cache': data=0;break;
    case 'toggle_mod': {
      if(target?.enabled && target.data.uuid==='demo-package-0' && rows.some(m=>m.enabled&&m.data.uuid!=='demo-package-0')) data={type:'confirm',dependants:[{fullName:'Evaisa-LethalLib',uuid:'demo-package-1'}]} satisfies ActionResult;
      else if(target) {target.enabled=!target.enabled;data={type:'done'};} break;
    }
    case 'force_toggle_mods': rows.forEach(m=>{if(a.uuids.includes(m.data.uuid))m.enabled=!m.enabled;}); break;
    case 'remove_mod': {
      const dependants=target?.data.uuid==='demo-package-0'?[{fullName:'Evaisa-LethalLib',uuid:'demo-package-1'}]:[];
      if(dependants.length)data={type:'confirm',dependants} satisfies ActionResult;
      else {perProfile.set(keyOf(a.slug,a.profileId??p.activeId),rows.filter(m=>m.data.uuid!==a.uuid));data={type:'done'};}
      break;
    }
    case 'force_remove_mods': perProfile.set(keyOf(a.slug,a.profileId??p.activeId),rows.filter(m=>!a.uuids.includes(m.data.uuid))); break;
    case 'set_all_mods_state': rows.forEach(m=>m.enabled=a.enable); break;
    case 'update_mods': case 'install_mod': case 'change_mod_version': break;
    case 'ignore_package_updates': break;
    case 'fetch_mods': break;
    case 'export_code': data={type:'success',code:'00000000-0000-4000-8000-000000000001',backend:'Thunderstore'}; break;
    case 'read_profile_code': case 'read_profile_base64': data={manifest:{name:'Импортированный профиль',mods:mods.map(m=>({name:m.data.name}))},path:'/demo/import',deleteAfterImport:false,missingMods:[]}; break;
    case 'import_profile': { const id=++sequence;p.profiles.push({id,name:a.data.manifest.name||'Импортированный профиль',modCount:mods.length,customArgs:'',missing:false});perProfile.set(keyOf(a.slug,id),structuredClone(mods));break; }
    case 'config': data=[{displayName:'AinaVT-LethalConfig.cfg',relativePath:'BepInEx/config/AinaVT-LethalConfig.cfg',type:'ok',sections:[{name:'General',entries:[{name:'ShowInGame',description:'Показывать меню настроек в игре',value:{type:'bool',content:true},default:{type:'bool',content:true}},{name:'MaxPlayers',description:'Максимальное число игроков',value:{type:'int',content:{value:16,range:{start:4,end:32}}},default:{type:'int',content:{value:4,range:{start:4,end:32}}}}]}]}];break;
    case 'set_config_entry': case 'reset_config_entry': break;
    case 'launch': throw new Error('Запуск игр недоступен в браузерном демо. В Steam используется Gale.');
    default: throw new Error('Демо: команда не поддерживается — '+envelope.method);
  }
  p.profiles.forEach(profile=>profile.modCount=list(a.slug,profile.id).length);
  return reply(data);
  } catch (error) { return {ok:false,error:error instanceof Error?error.message:String(error)}; }
};