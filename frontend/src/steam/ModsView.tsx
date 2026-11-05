import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../components/Icon';
import { core, message, openSteamBrowser } from '../lib/bridge';
import { defaultQuery, type ActionResult, type Context, type ImportData, type ProfileMod, type ProfileQuery, type Profiles, type QueryArgs, type SteamGame } from '../lib/types';
import { Burger, Button, bytes, Confirm, IconButton, Modal, Notice, Select, Toggle } from './ui';

type Filter = 'all'|'enabled'|'disabled'|'updates';
type PendingAction = {title:string;description:string;uuids:string[];kind:'toggle'|'remove';force:boolean};
const emptyQuery: ProfileQuery = {mods:[],totalModCount:0,updates:[],unknownMods:[]};

export function ModsView({game,demo=false,installing=false}: {game:SteamGame;demo?:boolean;installing?:boolean}) {
  const [profiles,setProfiles]=useState<Profiles>({activeId:0,profiles:[]});
  const [profileId,setProfileId]=useState<number>();
  const [query,setQuery]=useState<ProfileQuery>(emptyQuery);
  const [search,setSearch]=useState('');
  const [debounced,setDebounced]=useState('');
  const [filter,setFilter]=useState<Filter>('all');
  const [sort,setSort]=useState('Name');
  const [category,setCategory]=useState('');
  const [advanced,setAdvanced]=useState(false);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');
  const [notice,setNotice]=useState('');
  const [busy,setBusy]=useState('');
  const [revision,setRevision]=useState(0);
  const [profileRevision,setProfileRevision]=useState(0);
  const [dialog,setDialog]=useState<'create'|'rename'|'duplicate'|'delete'|'import'|'export'|'versions'|null>(null);
  const [name,setName]=useState('');
  const [code,setCode]=useState('');
  const [importData,setImportData]=useState<ImportData|null>(null);
  const [exportCode,setExportCode]=useState('');
  const [action,setAction]=useState<PendingAction|null>(null);
  const [selectedMod,setSelectedMod]=useState<ProfileMod|null>(null);
  const mounted=useRef(true);
  const context:Context={slug:game.slug,profileId};
  const profile=profiles.profiles.find(p=>p.id===profileId);
  const refresh=()=>setRevision(v=>v+1);
  const reloadProfiles=()=>setProfileRevision(v=>v+1);

  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;};},[]);
  useEffect(()=>{const timer=setTimeout(()=>setDebounced(search),220);return()=>clearTimeout(timer);},[search]);
  useEffect(()=>{
    let cancelled=false;setLoading(true);setError('');setProfileId(undefined);setQuery(emptyQuery);setSearch('');setCategory('');setFilter('all');
    core.call<Profiles>('profiles',{slug:game.slug}).then(p=>{if(cancelled)return;setProfiles(p);setProfileId(p.activeId);}).catch(e=>{if(!cancelled){setError(message(e));setLoading(false);}});
    return()=>{cancelled=true;};
  },[game.slug,profileRevision]);
  useEffect(()=>{
    if(profileId===undefined)return;
    let cancelled=false;setLoading(true);
    const args:QueryArgs={...defaultQuery,searchTerm:debounced,includeEnabled:filter!=='disabled',includeDisabled:filter!=='enabled',includeCategories:category?[category]:[],sortBy:sort as QueryArgs['sortBy'],sortOrder:sort==='DiskSpace'?'Descending':'Ascending'};
    core.call<ProfileQuery>('mods',{slug:game.slug,profileId},{args}).then(result=>{if(!cancelled){setQuery(result);setError('');}}).catch(e=>{if(!cancelled)setError(message(e));}).finally(()=>{if(!cancelled)setLoading(false);});
    return()=>{cancelled=true;};
  },[game.slug,profileId,debounced,filter,sort,category,revision]);
  useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),4500);return()=>clearTimeout(timer);},[notice]);
  const updates=query.updates.filter(u=>!u.ignore);
  const visible=filter==='updates'?query.mods.filter(m=>updates.some(u=>u.updatedId.packageUuid===m.data.uuid)):query.mods;
  const categories=useMemo(()=>Array.from(new Set(query.mods.flatMap(m=>m.data.categories??[]))).sort(),[query.mods]);
  const enabled=query.mods.filter(m=>m.enabled).length;

  const run=useCallback(async(key:string,fn:()=>Promise<void>)=>{
    if(busy)return;setBusy(key);setError('');
    try{await fn();}catch(e){if(mounted.current)setError(message(e));}finally{if(mounted.current)setBusy('');}
  },[busy]);
  const changeProfiles=async(method:string,args:Record<string,any>={})=>{
    await core.call(method,context,args);
    const p=await core.call<Profiles>('profiles',{slug:game.slug});
    const created=method==='create_profile'||method==='import_profile'?p.profiles.reduce((max,item)=>item.id>max.id?item:max,p.profiles[0]!):undefined;
    if(created)await core.call('activate_profile',{slug:game.slug,profileId:created.id});
    setProfiles(p);setProfileId(created?.id??p.activeId);setDialog(null);setName('');setImportData(null);refresh();setNotice('Профиль сохранён');
  };
  const toggle=(mod:ProfileMod)=>void run(mod.data.uuid,async()=>{
    const result=await core.call<ActionResult>('toggle_mod',context,{uuid:mod.data.uuid});
    if(result.type==='Confirm')setAction({title:`Отключить ${mod.data.name}?`,description:'От этого мода зависят другие включённые моды. Они тоже могут перестать работать.',uuids:[mod.data.uuid,...result.dependants.map(d=>d.uuid)],kind:'toggle',force:true});
    else refresh();
  });
  const confirmAction=()=>{if(!action)return;void run('confirm',async()=>{await core.call(action.kind==='toggle'?'force_toggle_mods':'force_remove_mods',context,{uuids:[...new Set(action.uuids)]});setAction(null);refresh();setNotice(action.kind==='toggle'?'Состояние модов изменено':'Мод удалён');});};
  const openConfig=(_mod?:ProfileMod)=>void run('browser',async()=>{
    const result=await core.browserUrl(context);openSteamBrowser(result.url);
  });
  // Demo uses a separate config screen, not a pretend Steam browser.
  const showConfig=()=>{if(demo){window.dispatchEvent(new CustomEvent('galex:demo-config'));}else void openConfig();};
  const importProfile=()=>void run('import',async()=>{
    if(importData){await changeProfiles('import_profile',{data:importData});return;}
    if(!code.trim())throw new Error('Вставьте код профиля или выберите файл .r2z');
    const data=await core.call<ImportData>('read_profile_code',context,{code:code.trim()});setImportData(data);
  });
  const exportProfile=()=>void run('export',async()=>{
    const result=await core.call<{type:string;code?:string;size?:number}>('export_code',context);
    if(result.type==='Success'&&result.code){setExportCode(result.code);setDialog('export');return;}
    const file=await core.browserUrl({...context,kind:'export'});openSteamBrowser(file.url);setNotice('Большой профиль экспортируется файлом .r2z');
  });
  const updateAll=()=>void run('update',async()=>{await core.call('update_mods',context,{uuids:updates.map(u=>u.updatedId.packageUuid)});setNotice(demo?'Демо: обновления установлены':'Обновление добавлено в очередь Gale');refresh();});
  const closeDialog=()=>{if(busy)return;setDialog(null);setImportData(null);setName('');setCode('');};

  return <section className="galex gx-mods" aria-label="Моды" data-appid={game.steamAppId}>
    <div className="gx-heading"><div><span className="gx-eyebrow">МАСТЕРСКАЯ СООБЩЕСТВА</span><h1>Моды <span>{game.name}</span></h1></div><div className="gx-heading-meta"><span className="gx-status-dot"/> Gale {demo?'· демо':'подключён'}</div></div>
    <div className="gx-toolbar">
      <Button primary icon="external" onClick={()=>openSteamBrowser(`https://thunderstore.io/c/${encodeURIComponent(game.slug)}/`)}>Открыть Thunderstore</Button>
      <Button icon="settings" onClick={()=>setAdvanced(v=>!v)} aria-expanded={advanced}>Расширенные настройки <Icon name={advanced?'chevron-down':'chevron-right'} size={13}/></Button>
      <span className="gx-toolbar-spacer"/>
      <IconButton icon="refresh" label="Обновить список" onClick={()=>{reloadProfiles();refresh();}} disabled={!!busy}/>
    </div>
    {advanced&&<div className="gx-advanced">
      <div className="gx-profile-line"><span className="gx-field-label">Профиль</span><div className="gx-profile-select"><Select label="Профиль" value={profileId??0} disabled={!!busy||!profiles.profiles.length} options={profiles.profiles.map(p=>({value:p.id,label:p.name}))} onChange={id=>void run('profile',async()=>{await core.call('activate_profile',{slug:game.slug,profileId:id});setProfileId(id);refresh();})}/></div><Burger label="Управление профилями" items={[
        {label:'Создать профиль',icon:'plus',action:()=>{setName('');setDialog('create');}},
        {label:'Переименовать',icon:'sliders',disabled:!profile,action:()=>{setName(profile?.name??'');setDialog('rename');}},
        {label:'Дублировать',icon:'copy',disabled:!profile,action:()=>{setName(`${profile?.name} — копия`);setDialog('duplicate');}},
        {label:'Удалить профиль',icon:'trash',danger:true,disabled:profiles.profiles.length<2,action:()=>setDialog('delete')},
      ]}/></div>
      <div className="gx-profile-actions"><Button icon="download" disabled={!profile||!!busy} onClick={()=>{setCode('');setImportData(null);setDialog('import');}}>Импорт</Button><Button icon="external" disabled={!profile||!!busy} onClick={exportProfile}>Экспорт</Button><Button icon="sliders" disabled={!profile||!!busy} onClick={showConfig}>Конфиг</Button></div>
    </div>}
    <div className="gx-search-row"><label className="gx-search"><Icon name="search" size={17}/><input aria-label="Поиск модов" placeholder="Поиск по названию или автору" value={search} onChange={e=>setSearch(e.target.value)}/>{search&&<button aria-label="Очистить поиск" onClick={()=>setSearch('')}><Icon name="x" size={13}/></button>}</label><Select label="Сортировка" value={sort} onChange={setSort} options={[{value:'Name',label:'По названию'},{value:'Author',label:'По автору'},{value:'InstallDate',label:'По дате установки'},{value:'DiskSpace',label:'По размеру'}]}/><Select label="Фильтр модов" value={filter} onChange={setFilter} options={[{value:'all',label:'Все моды'},{value:'enabled',label:'Включённые'},{value:'disabled',label:'Отключённые'},{value:'updates',label:'Есть обновления'}]}/></div>
    {categories.length>0&&<div className="gx-categories"><button className={!category?'is-active':''} onClick={()=>setCategory('')}>Все категории</button>{categories.map(c=><button key={c} className={category===c?'is-active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div>}
    <div className="gx-list-heading"><span>{query.totalModCount} модов <span className="gx-dot">·</span> {enabled} включено</span>{!!updates.length&&<button className="gx-update-link" disabled={!!busy||installing} onClick={updateAll}><Icon name="refresh" size={13}/>{busy==='update'?'Обновление…':`Обновить все (${updates.length})`}</button>}<span className="gx-toolbar-spacer"/><span className="gx-list-hint">Профиль: {profile?.name??'—'}</span></div>
    {error&&<Notice error onRetry={refresh}>{error}</Notice>}
    {notice&&<div className="gx-success" role="status"><Icon name="check" size={15}/>{notice}</div>}
    {(installing||busy==='update')&&<div className="gx-install-progress" role="status"><span/><Icon name="download" size={15}/> Gale устанавливает моды. Не закрывайте Steam.</div>}
    {!!query.unknownMods.length&&<Notice error>Не найдены в кэше: {query.unknownMods.map(m=>m.fullName).join(', ')}. Обновите каталог в расширенных настройках.</Notice>}
    <div className={`gx-mod-list ${loading?'is-loading':''}`} aria-busy={loading}>
      {loading&&!query.mods.length?<div className="gx-empty"><Icon name="refresh" size={26}/><h3>Загружаем моды…</h3></div>:!visible.length?<div className="gx-empty"><Icon name="package" size={32}/><h3>{search||filter!=='all'||category?'Ничего не найдено':'В этом профиле пока нет модов'}</h3><p>{search||filter!=='all'||category?'Попробуйте другой запрос или сбросьте фильтры.':'Найдите первый мод на Thunderstore и установите его в один клик.'}</p><Button onClick={()=>{if(search||filter!=='all'||category){setSearch('');setFilter('all');setCategory('');}else openSteamBrowser(`https://thunderstore.io/c/${game.slug}/`);}}>{search||filter!=='all'||category?'Сбросить фильтры':'Открыть Thunderstore'}</Button></div>:visible.map((mod,index)=>{
        const update=updates.find(u=>u.updatedId.packageUuid===mod.data.uuid);
        return <article className={`gx-mod-row ${!mod.enabled?'is-disabled':''}`} key={mod.data.uuid}>
          <Toggle label={`Включить ${mod.data.name}`} checked={mod.enabled} disabled={!!busy||installing} onChange={()=>toggle(mod)}/>
          <div className={`gx-mod-avatar gx-avatar-${index%6}`} aria-hidden="true">{mod.data.name.split(' ').map(s=>s[0]).slice(0,2).join('')}<span/></div>
          <div className="gx-mod-info"><div className="gx-mod-title"><h3>{mod.data.name}</h3>{update&&<span className="gx-update-badge">Обновление</span>}{mod.data.type==='Local'&&<span className="gx-local-badge">Локальный</span>}</div><p>{mod.data.description}</p><div className="gx-mod-byline">{mod.data.author??'Локальный мод'}<span>·</span>{mod.data.categories?.[0]??'Мод'}</div></div>
          <div className="gx-version"><span>v{mod.data.version??'—'}</span><small>{bytes(mod.data.fileSize)}</small></div>
          <Burger label={`Действия с ${mod.data.name}`} items={[
            ...(update?[{label:`Обновить до ${update.new}`,icon:'refresh' as const,action:()=>void run('update',async()=>{await core.call('update_mods',context,{uuids:[mod.data.uuid]});refresh();setNotice('Обновление добавлено в очередь');})}]:[]),
            {label:'Настроить конфиг',icon:'sliders' as const,disabled:!mod.configFile,action:()=>void openConfig(mod)},
            {label:'Версия мода',icon:'layers' as const,action:()=>{setSelectedMod(mod);setDialog('versions');}},
            {label:'Страница на Thunderstore',icon:'external' as const,disabled:mod.data.type==='Local',action:()=>openSteamBrowser(`https://thunderstore.io/c/${game.slug}/p/${mod.data.author}/${mod.data.name.replace(/ /g,'_')}/`)},
            {label:'Удалить мод',icon:'trash' as const,danger:true,action:()=>void run(mod.data.uuid,async()=>{const result=await core.call<ActionResult>('remove_mod',context,{uuid:mod.data.uuid});if(result.type==='Confirm')setAction({title:`Удалить ${mod.data.name}?`,description:'Мод и его файлы будут удалены из профиля. Зависимые моды могут перестать работать.',kind:'remove',force:true,uuids:[mod.data.uuid,...result.dependants.map(d=>d.uuid)]});else{refresh();setNotice('Мод удалён');}})},
          ]}/>
        </article>;
      })}
    </div>
    <footer className="gx-footer"><span><Icon name="layers" size={13}/> Общие профили и файлы Gale</span><button onClick={()=>void run('fetch',async()=>{await core.call('fetch_mods',context);setNotice('Обновление каталога запрошено');})} disabled={!!busy}>Обновить каталог</button></footer>

    {action&&<Confirm title={action.title} onClose={()=>setAction(null)} onConfirm={confirmAction} busy={!!busy} danger={action.kind==='remove'}>{action.description}{action.uuids.length>1&&<p>Будет затронуто модов: {new Set(action.uuids).size}.</p>}</Confirm>}
    {dialog&&['create','rename','duplicate'].includes(dialog)&&<Modal title={dialog==='create'?'Новый профиль':dialog==='rename'?'Переименовать профиль':'Дублировать профиль'} onClose={closeDialog} footer={<><Button onClick={closeDialog} disabled={!!busy}>Отмена</Button><Button primary disabled={!name.trim()||!!busy} onClick={()=>void run('profile',()=>changeProfiles(dialog==='create'?'create_profile':dialog==='rename'?'rename_profile':'duplicate_profile',{name:name.trim()}))}>{busy?'Сохранение…':'Сохранить'}</Button></>}><label className="gx-form-label">Название профиля<input value={name} maxLength={80} onChange={e=>setName(e.target.value)} placeholder="Например, Игра с друзьями" onKeyDown={e=>{if(e.key==='Enter'&&name.trim()&&!busy)void run('profile',()=>changeProfiles(dialog==='create'?'create_profile':dialog==='rename'?'rename_profile':'duplicate_profile',{name:name.trim()}));}}/></label></Modal>}
    {dialog==='delete'&&<Confirm title="Удалить профиль?" danger onClose={closeDialog} busy={!!busy} onConfirm={()=>void run('profile',()=>changeProfiles('delete_profile',{id:profileId}))}>Профиль «{profile?.name}» и его моды будут удалены. Это действие нельзя отменить.</Confirm>}
    {dialog==='import'&&<Modal title={importData?'Проверьте профиль':'Импорт профиля'} onClose={closeDialog} footer={<><Button onClick={closeDialog} disabled={!!busy}>Отмена</Button><Button primary onClick={importProfile} disabled={!!busy||(!code&&!importData)}>{busy?'Импорт…':importData?'Установить профиль':'Продолжить'}</Button></>}>{importData?<><p>Будет создан отдельный профиль. Текущий профиль не изменится.</p><div className="gx-import-summary"><strong>{importData.manifest.name||'Импортированный профиль'}</strong><span>{importData.manifest.mods.length} модов</span></div>{!!importData.missingMods.length&&<Notice error>Не найдены: {importData.missingMods.join(', ')}. Эти моды будут пропущены.</Notice>}</>:<><label className="gx-form-label">Код профиля<textarea value={code} onChange={e=>setCode(e.target.value)} placeholder="Вставьте код экспорта Gale / r2modman" rows={3}/></label><div className="gx-or">или</div><label className="gx-file-button"><Icon name="folder" size={17}/> Выбрать файл .r2z<input type="file" accept=".r2z,.zip" onChange={e=>{const file=e.target.files?.[0];if(!file)return;if(file.size>15*1024*1024){setError('Максимальный размер файла — 15 МиБ');return;}const reader=new FileReader();reader.onload=()=>void run('import',async()=>{const base64=String(reader.result).split(',')[1]??'';setImportData(await core.call<ImportData>('read_profile_base64',context,{base64}));});reader.onerror=()=>setError('Не удалось прочитать файл');reader.readAsDataURL(file);}}/></label></>}</Modal>}
    {dialog==='export'&&<Modal title="Экспорт профиля" onClose={closeDialog} footer={<Button primary onClick={closeDialog}>Готово</Button>}><p>Поделитесь кодом, чтобы другой пользователь установил этот профиль.</p><div className="gx-export-code"><code>{exportCode}</code><IconButton icon="copy" label="Скопировать код" onClick={()=>{void navigator.clipboard.writeText(exportCode).then(()=>setNotice('Код скопирован')).catch(()=>setError('Выделите код и скопируйте вручную'));}}/></div>{!demo&&<Button icon="download" onClick={()=>void run('export-file',async()=>{const {url}=await core.browserUrl({...context,kind:'export'});openSteamBrowser(url);})}>Скачать файл .r2z</Button>}</Modal>}
    {dialog==='versions'&&selectedMod&&<Modal title={`Версия · ${selectedMod.data.name}`} onClose={closeDialog}><p>Текущая версия: {selectedMod.data.version}. Смена версии использует установщик Gale.</p><div className="gx-version-list">{selectedMod.data.versions.map(v=><Button key={v.uuid} disabled={!!busy||v.uuid===selectedMod.data.versionUuid} icon={v.uuid===selectedMod.data.versionUuid?'check':'layers'} onClick={()=>void run('version',async()=>{await core.call('change_mod_version',context,{id:{packageUuid:selectedMod.data.uuid,versionUuid:v.uuid,backend:selectedMod.data.backend}});setDialog(null);refresh();setNotice('Версия поставлена в очередь');})}>{v.name}{v.uuid===selectedMod.data.versionUuid?' · установлена':''}</Button>)}</div></Modal>}
  </section>;
}