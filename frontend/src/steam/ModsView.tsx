import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../components/Icon';
import { core, downloadInSteam, message, openSteamBrowser } from '../lib/bridge';
import { getSteamLanguage, t, useLocale } from '../lib/i18n';
import { defaultQuery, type ActionResult, type Context, type ExportFile, type ImportData, type ProfileMod, type ProfileQuery, type Profiles, type QueryArgs, type R2ImportData, type SteamGame } from '../lib/types';
import { Button, bytes, Checkbox, Confirm, IconButton, Modal, Notice, Select } from './ui';

type Filter = 'all'|'enabled'|'disabled'|'updates';
type PendingAction = {title:string;description:string;uuids:string[];kind:'toggle'|'remove'};
type ImportTab = 'code'|'r2'|'local';
const emptyQuery: ProfileQuery = {mods:[],totalModCount:0,updates:[],unknownMods:[]};

export function ModsView({game,demo=false,installing=false}: {game:SteamGame;demo?:boolean;installing?:boolean}) {
  useLocale();
  const [profiles,setProfiles]=useState<Profiles>({activeId:0,profiles:[]});
  const [profileId,setProfileId]=useState<number>();
  const [query,setQuery]=useState<ProfileQuery>(emptyQuery);
  const [search,setSearch]=useState('');
  const [debounced,setDebounced]=useState('');
  const [filter,setFilter]=useState<Filter>('all');
  const [sort,setSort]=useState<QueryArgs['sortBy']>('name');
  const [ascending,setAscending]=useState(true);
  const [category,setCategory]=useState('');
  const [categories,setCategories]=useState<string[]>([]);
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
  const [importTab,setImportTab]=useState<ImportTab>('code');
  const [importMode,setImportMode]=useState<'new'|'overwrite'>('new');
  const [importAll,setImportAll]=useState(false);
  const [merge,setMerge]=useState(false);
  const [r2Path,setR2Path]=useState('');
  const [r2Data,setR2Data]=useState<R2ImportData|null>(null);
  const [r2Include,setR2Include]=useState<boolean[]>([]);
  const [exportCode,setExportCode]=useState('');
  const [exportTooLarge,setExportTooLarge]=useState(false);
  const [exportFiles,setExportFiles]=useState<ExportFile[]>([]);
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
    let cancelled=false;setLoading(true);setError('');setProfileId(undefined);setQuery(emptyQuery);setSearch('');setCategory('');setCategories([]);setFilter('all');
    core.call<Profiles>('profiles',{slug:game.slug}).then(p=>{if(cancelled)return;setProfiles(p);setProfileId(p.activeId);}).catch(e=>{if(!cancelled){setError(message(e));setLoading(false);}});
    return()=>{cancelled=true;};
  },[game.slug,profileRevision]);
  useEffect(()=>{
    if(profileId===undefined)return;
    let cancelled=false;setLoading(true);
    const args:QueryArgs={...defaultQuery,searchTerm:debounced,includeEnabled:filter!=='disabled',includeDisabled:filter!=='enabled',includeCategories:category?[category]:[],sortBy:sort,sortOrder:ascending?'ascending':'descending'};
    core.call<ProfileQuery>('mods',{slug:game.slug,profileId},{args}).then(result=>{if(!cancelled){setQuery(result);setError('');setCategories(previous=>Array.from(new Set([...previous,...result.mods.flatMap(m=>m.data.categories??[])])).sort());}}).catch(e=>{if(!cancelled)setError(message(e));}).finally(()=>{if(!cancelled)setLoading(false);});
    return()=>{cancelled=true;};
  },[game.slug,profileId,debounced,filter,sort,ascending,category,revision]);
  useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),4500);return()=>clearTimeout(timer);},[notice]);
  useEffect(()=>{
    if(dialog!=='export'||demo)return;
    core.call<ExportFile[]>('list_export_files',context).then(setExportFiles).catch(e=>setError(message(e)));
  },[dialog,profileId]);
  const updates=query.updates.filter(u=>!u.ignore);
  const visible=filter==='updates'?query.mods.filter(m=>updates.some(u=>u.updatedId.packageUuid===m.data.uuid)):query.mods;
  const enabled=query.mods.filter(m=>m.enabled).length;
  const exportSize=useMemo(()=>exportFiles.filter(f=>f.included).reduce((sum,f)=>sum+f.size,0),[exportFiles]);

  const run=useCallback(async(key:string,fn:()=>Promise<void>)=>{
    if(busy)return;setBusy(key);setError('');
    try{await fn();}catch(e){if(mounted.current)setError(message(e));}finally{if(mounted.current)setBusy('');}
  },[busy]);
  const changeProfiles=async(method:string,args:Record<string,any>={})=>{
    await core.call(method,context,args);
    const p=await core.call<Profiles>('profiles',{slug:game.slug});
    const desired=method==='import_profile'?name.trim():name;
    let target=p.activeId;
    if(method==='create_profile'||method==='duplicate_profile'||method==='import_profile')target=p.profiles.find(item=>item.name===desired)?.id??p.activeId;
    if(method==='delete_profile')target=p.activeId;
    await core.call('activate_profile',{slug:game.slug,profileId:target});
    setProfiles(p);setProfileId(target);setDialog(null);setName('');setImportData(null);refresh();setNotice(t('profileSaved'));
  };
  const toggle=(mod:ProfileMod)=>void run(mod.data.uuid,async()=>{
    const result=await core.call<ActionResult>('toggle_mod',context,{uuid:mod.data.uuid});
    if(result.type==='confirm')setAction({title:t('disableMod',{name:mod.data.name}),description:t('disableDependants'),uuids:[mod.data.uuid,...result.dependants.map(d=>d.uuid)],kind:'toggle'});
    else refresh();
  });
  const removeMod=(mod:ProfileMod)=>void run(mod.data.uuid,async()=>{
    const result=await core.call<ActionResult>('remove_mod',context,{uuid:mod.data.uuid});
    if(result.type==='confirm')setAction({title:t('removeMod',{name:mod.data.name}),description:t('removeDependants'),uuids:[mod.data.uuid,...result.dependants.map(d=>d.uuid)],kind:'remove'});
    else {refresh();setNotice(t('modRemoved'));}
  });
  const confirmAction=()=>{if(!action)return;void run('confirm',async()=>{await core.call(action.kind==='toggle'?'force_toggle_mods':'force_remove_mods',context,{uuids:[...new Set(action.uuids)]});setAction(null);refresh();setNotice(action.kind==='toggle'?t('stateChanged'):t('modRemoved'));});};
  const openConfig=()=>void run('browser',async()=>{
    if(demo){setNotice(t('demoConfig'));return;}
    const result=await core.browserUrl({...context,lang:getSteamLanguage()});openSteamBrowser(result.url);setNotice(t('configOpened'));
  });
  const readProfileCode=()=>void run('import',async()=>{
    if(!code.trim())throw new Error(t('importCodePlaceholder'));
    const data=await core.call<ImportData>('read_profile_code',context,{code:code.trim()});setImportData(data);setName(data.manifest.profileName);setImportMode(profiles.profiles.some(p=>p.name===data.manifest.profileName)?'overwrite':'new');
  });
  const readProfileFile=(file:File)=>{
    if(file.size>15*1024*1024){setError(t('fileTooLarge'));return;}
    const reader=new FileReader();
    reader.onload=()=>void run('import',async()=>{const base64=String(reader.result).split(',')[1]??'';const data=await core.call<ImportData>('read_profile_base64',context,{base64});setImportData(data);setName(data.manifest.profileName);setImportMode(profiles.profiles.some(p=>p.name===data.manifest.profileName)?'overwrite':'new');});
    reader.onerror=()=>setError(t('fileReadError'));reader.readAsDataURL(file);
  };
  const importProfile=()=>void run('import',async()=>{
    if(!importData)return;
    const data={...importData,manifest:{...importData.manifest,profileName:name.trim()||importData.manifest.profileName}};
    await changeProfiles('import_profile',{data,options:{importAll,merge:importMode==='overwrite'&&merge,ignoreMissingMods:importData.missingMods.length>0}});
  });
  const loadR2=()=>void run('r2',async()=>{const data=await core.call<R2ImportData|null>('get_r2modman_info',context,{path:r2Path.trim()||null});setR2Data(data);setR2Include(data?.profiles.map(()=>true)??[]);});
  const importR2=()=>void run('r2',async()=>{if(!r2Data)return;await core.call('import_r2modman',context,{path:r2Data.path,include:r2Include});setDialog(null);reloadProfiles();refresh();setNotice(t('profileSaved'));});
  const importLocal=(file:File)=>{
    if(file.size>15*1024*1024){setError(t('fileTooLarge'));return;}
    const reader=new FileReader();
    reader.onload=()=>void run('local',async()=>{await core.call('import_local_mod_base64',context,{base64:String(reader.result).split(',')[1]??''});setDialog(null);refresh();setNotice(t('profileSaved'));});
    reader.onerror=()=>setError(t('fileReadError'));reader.readAsDataURL(file);
  };
  const exportProfile=()=>void run('export',async()=>{
    const result=await core.call<{type:string;code?:string;size?:number}>('export_code',context);
    setExportTooLarge(result.type!=='success');setExportCode(result.code??'');setDialog('export');
  });
  const saveExportFiles=(files:ExportFile[])=>{if(demo){setExportFiles(files);return;}void run('export-files',async()=>{await core.call('set_excluded_export_files',context,{excludedFiles:files.filter(f=>!f.included).map(f=>f.path)});setExportFiles(files);setExportCode('');});};
  const downloadExport=()=>void run('export-file',async()=>{const {url}=await core.browserUrl({...context,kind:'export'});downloadInSteam(url);});
  const updateAll=()=>void run('update',async()=>{await core.call('update_mods',context,{uuids:updates.map(u=>u.updatedId.packageUuid)});setNotice(demo?t('demoUpdate'):t('updateQueued'));refresh();});
  const closeDialog=()=>{if(busy)return;setDialog(null);setImportData(null);setName('');setCode('');setR2Data(null);setExportTooLarge(false);};
  const copy=async(text:string,ok:string)=>{try{await navigator.clipboard.writeText(text);setNotice(ok);}catch{setError(t('clipboardError'));}};

  return <section className="galex gx-mods" aria-label={t('mods')} data-appid={game.steamAppId}>
    <div className="gx-heading"><h1>{t('mods')} <span>{game.name}</span></h1><div className="gx-heading-meta">{installing?t('working'):`Gale ${demo?'· '+t('demo'):t('connected')}`}</div></div>
    <div className="gx-toolbar">
      <Button icon="external" onClick={()=>openSteamBrowser(`https://thunderstore.io/c/${encodeURIComponent(game.slug)}/`)}>{t('openThunderstore')}</Button>
      <Button icon="settings" onClick={()=>setAdvanced(v=>!v)} aria-expanded={advanced}>{t('advanced')} <Icon name={advanced?'chevron-down':'chevron-right'} size={13}/></Button>
      <span className="gx-toolbar-spacer"/>
      <IconButton icon="refresh" label={t('refresh')} onClick={()=>{reloadProfiles();refresh();}} disabled={!!busy}/>
    </div>
    {advanced&&<div className="gx-advanced">
      <div className="gx-profile-line"><span className="gx-field-label">{t('profile')}</span><Select label={t('profile')} value={profileId??0} disabled={!!busy||!profiles.profiles.length} options={profiles.profiles.map(p=>({value:p.id,label:p.name}))} onChange={id=>void run('profile',async()=>{await core.call('activate_profile',{slug:game.slug,profileId:id});setProfileId(id);refresh();})}/></div>
      <div className="gx-profile-actions">
        <Button icon="plus" disabled={!!busy} onClick={()=>{setName('');setDialog('create');}}>{t('createProfile')}</Button>
        <Button disabled={!profile||!!busy} onClick={()=>{setName(profile?.name??'');setDialog('rename');}}>{t('renameProfile')}</Button>
        <Button disabled={!profile||!!busy} onClick={()=>{setName(`${profile?.name} copy`);setDialog('duplicate');}}>{t('duplicateProfile')}</Button>
        <Button className="gx-danger" disabled={profiles.profiles.length<2||!!busy} onClick={()=>setDialog('delete')}>{t('deleteProfile')}</Button>
        <Button icon="download" disabled={!profile||!!busy} onClick={()=>{setCode('');setImportData(null);setImportTab('code');setDialog('import');}}>{t('import')}</Button>
        <Button icon="external" disabled={!profile||!!busy} onClick={exportProfile}>{t('export')}</Button>
        <Button icon="sliders" disabled={!profile||!!busy} onClick={openConfig}>{t('config')}</Button>
      </div>
    </div>}
    <div className="gx-search-row">
      <label className="gx-search"><Icon name="search" size={16}/><input aria-label={t('searchMods')} placeholder={t('searchMods')} value={search} onChange={e=>setSearch(e.target.value)}/>{search&&<button aria-label={t('clearSearch')} onClick={()=>setSearch('')}><Icon name="x" size={13}/></button>}</label>
      <Select label={t('filter')} value={filter} onChange={setFilter} options={[{value:'all',label:t('all')},{value:'enabled',label:t('enabled')},{value:'disabled',label:t('disabled')},{value:'updates',label:t('updates')}]}/>
      <Select label={t('sortBy')} value={sort} onChange={setSort} options={[{value:'name',label:t('byName')},{value:'author',label:t('byAuthor')},{value:'installDate',label:t('byInstallDate')},{value:'diskSpace',label:t('bySize')},{value:'downloads',label:t('byDownloads')}]}/>
      <IconButton className="gx-sort-direction" icon={ascending?'arrow-up':'arrow-down'} label={ascending?t('ascending'):t('descending')} onClick={()=>setAscending(v=>!v)} disabled={!!busy}/>
      <Select label={t('categories')} value={category} onChange={setCategory} options={[{value:'',label:t('allCategories')},...categories.map(c=>({value:c,label:c}))]}/>
    </div>
    {error&&<Notice error onRetry={()=>{setError('');refresh();}}>{error}</Notice>}
    {notice&&<Notice>{notice}</Notice>}
    <div className="gx-list-heading"><span>{t('modCount',{count:query.totalModCount})}</span><span>{t('enabledCount',{count:enabled})}</span>{!!updates.length&&<button className="gx-update-link" disabled={!!busy} onClick={updateAll}><Icon name="download" size={13}/>{t('updateAll',{count:updates.length})}</button>}</div>
    <div className="gx-mod-list" tabIndex={0}>
      {loading&&!query.mods.length?<div className="gx-empty">{t('loading')}</div>:!visible.length?<div className="gx-empty">{t('noMods')}</div>:visible.map((mod,index)=>{
        const update=updates.find(u=>u.updatedId.packageUuid===mod.data.uuid);
        return <div key={mod.data.uuid} className={`gx-mod-row ${mod.enabled?'':'is-disabled'}`}>
          <Checkbox checked={mod.enabled} disabled={!!busy} label={mod.data.name} onChange={()=>toggle(mod)}/>
          <span className="gx-mod-index">{index+1}</span>
          {mod.data.icon?<img className="gx-mod-avatar" src={mod.data.icon} alt="" loading="lazy"/>:<span className="gx-mod-avatar">{mod.data.name.slice(0,2).toUpperCase()}</span>}
          <div className="gx-mod-info"><div className="gx-mod-title"><h3>{mod.data.name}</h3>{update&&<span className="gx-badge gx-badge--update">{update.old} → {update.new}</span>}{mod.data.type==='local'&&<span className="gx-badge">{t('local')}</span>}</div>
            {!!mod.data.dependencies?.length&&<p>{t('dependsOn')}: {mod.data.dependencies.join(', ')}</p>}
            <div className="gx-mod-byline"><span>{mod.data.author}</span><span>v{mod.data.version}</span>{!!mod.data.categories?.length&&<span>{t('tags')}: {mod.data.categories.join(', ')}</span>}</div>
          </div>
          <span className="gx-mod-size">{bytes(mod.data.fileSize)}</span>
          <div className="gx-mod-actions">
            {mod.configFile&&<IconButton icon="sliders" label={t('openConfig')} disabled={!!busy} onClick={openConfig}/>}
            {mod.data.type==='remote'&&<IconButton icon="layers" label={t('versions')} disabled={!!busy} onClick={()=>{setSelectedMod(mod);setDialog('versions');}}/>}
            {update&&<IconButton icon="download" label={t('update')} disabled={!!busy} onClick={()=>void run('update-one',async()=>{await core.call('update_mods',context,{uuids:[mod.data.uuid]});refresh();setNotice(t('updateQueued'));})}/>}
            <IconButton icon="trash" label={t('remove')} disabled={!!busy} onClick={()=>removeMod(mod)}/>
          </div>
        </div>;
      })}
    </div>
    <div className="gx-footer"><span>{game.name} · Gale</span><span>{loading?t('loading'):t('modCount',{count:visible.length})}</span></div>

    {action&&<Confirm title={action.title} onClose={()=>setAction(null)} onConfirm={confirmAction} busy={!!busy} danger={action.kind==='remove'}><p>{action.description}</p></Confirm>}
    {(dialog==='create'||dialog==='rename'||dialog==='duplicate')&&<Modal title={t(dialog==='create'?'createProfileTitle':dialog==='rename'?'renameProfileTitle':'duplicateProfileTitle')} onClose={closeDialog} footer={<><Button onClick={closeDialog} disabled={!!busy}>{t('cancel')}</Button><Button primary disabled={!!busy||!name.trim()} onClick={()=>void run('profile',()=>changeProfiles(dialog==='create'?'create_profile':dialog==='rename'?'rename_profile':'duplicate_profile',{name:name.trim()}))}>{busy?t('working'):t('save')}</Button></>}><label className="gx-form-label">{t('profileName')}<input value={name} onChange={e=>setName(e.target.value)} autoFocus/></label></Modal>}
    {dialog==='delete'&&<Confirm title={t('deleteProfileTitle')} onClose={closeDialog} onConfirm={()=>void run('profile',()=>changeProfiles('delete_profile',{id:profileId}))} busy={!!busy} danger><p>{t('deleteProfileBody',{name:profile?.name??''})}</p></Confirm>}

    {dialog==='import'&&<Modal title={importData?t('importPreview'):t('importTitle')} onClose={closeDialog} footer={<><Button onClick={closeDialog} disabled={!!busy}>{t('cancel')}</Button>{importData?<Button primary onClick={importProfile} disabled={!!busy||!name.trim()}>{busy?t('importing'):t('installProfile')}</Button>:importTab==='code'?<Button primary onClick={readProfileCode} disabled={!!busy||!code.trim()}>{busy?t('working'):t('continue')}</Button>:importTab==='r2'?<Button primary onClick={r2Data?importR2:loadR2} disabled={!!busy||(!r2Data&&!r2Path.trim())}>{busy?t('working'):r2Data?t('import'):t('r2Load')}</Button>:null}</>}>
      {importData?<>
        <div className="gx-tabs"><Button className={importMode==='new'?'gx-button--primary':''} onClick={()=>setImportMode('new')}>{t('newProfile')}</Button><Button className={importMode==='overwrite'?'gx-button--primary':''} onClick={()=>setImportMode('overwrite')}>{t('overwriteProfile')}</Button></div>
        <label className="gx-form-label">{t('profileName')}<input value={name} onChange={e=>setName(e.target.value)}/></label>
        {importMode==='overwrite'&&<Select label={t('overwriteProfile')} value={name} onChange={setName} options={profiles.profiles.map(p=>({value:p.name,label:p.name}))}/>}
        <div className="gx-import-summary"><strong>{importData.manifest.profileName}</strong><span>{t('modsToInstall',{count:importData.manifest.mods.length})}</span></div>
        {!!importData.missingMods.length&&<Notice error>{t('missingMods',{mods:importData.missingMods.join(', ')})}</Notice>}
        <label className="gx-check-label"><Checkbox checked={importAll} onChange={setImportAll} label={t('importAllFiles')}/>{t('importAllFiles')}</label>
        {importMode==='overwrite'&&<label className="gx-check-label"><Checkbox checked={merge} onChange={setMerge} label={t('mergeProfiles')}/>{t('mergeProfiles')}</label>}
      </>:<>
        <div className="gx-tabs">{(['code','r2','local'] as ImportTab[]).map(tab=><Button key={tab} className={importTab===tab?'gx-button--primary':''} onClick={()=>setImportTab(tab)}>{t(tab==='code'?'importCode':tab==='r2'?'importR2':'importLocal')}</Button>)}</div>
        {importTab==='code'&&<><label className="gx-form-label">{t('importCode')}<textarea value={code} onChange={e=>setCode(e.target.value)} placeholder={t('importCodePlaceholder')} rows={3}/></label><label className="gx-form-label">{t('importFile')}<input type="file" accept=".r2z,.zip" onChange={e=>{const file=e.target.files?.[0];if(file)readProfileFile(file);}}/></label></>}
        {importTab==='r2'&&<><label className="gx-form-label">{t('r2Path')}<input value={r2Path} onChange={e=>setR2Path(e.target.value)} placeholder="~/.config/r2modman"/></label>{r2Data&&<div className="gx-file-list"><strong>{t('r2Profiles')}</strong>{r2Data.profiles.map((p,i)=><label key={p}><Checkbox checked={!!r2Include[i]} label={p} onChange={v=>setR2Include(list=>list.map((x,j)=>j===i?v:x))}/><span>{p}</span></label>)}</div>}</>}
        {importTab==='local'&&<label className="gx-form-label">{t('importLocalFile')}<input type="file" accept=".zip" onChange={e=>{const file=e.target.files?.[0];if(file)importLocal(file);}}/></label>}
      </>}
    </Modal>}

    {dialog==='export'&&<Modal title={t('exportTitle')} onClose={closeDialog} footer={<Button primary onClick={closeDialog}>{t('done')}</Button>}>
      <p>{t('exportIntro')}</p>
      {exportTooLarge?<Notice error>{t('exportTooLarge')}</Notice>:<div className="gx-export-code"><code>{exportCode}</code><IconButton icon="copy" label={t('copyCode')} onClick={()=>void copy(exportCode,t('codeCopied'))}/></div>}
      {!demo&&<div className="gx-profile-actions"><Button icon="download" disabled={!!busy} onClick={downloadExport}>{t('exportFile')}</Button><Button icon="copy" disabled={!!busy} onClick={()=>void run('deps',async()=>{await core.call('copy_dependency_strings',context);setNotice(t('dependenciesCopied'));})}>{t('copyDependencies')}</Button><Button icon="copy" disabled={!!busy} onClick={()=>void run('debug',async()=>{await core.call('copy_debug_info',context);setNotice(t('debugCopied'));})}>{t('copyDebug')}</Button></div>}
      {!!exportFiles.length&&<details><summary>{t('exportFiles')}</summary><p className="gx-muted">{t('exportFilesHint')}</p><div className="gx-file-list">{exportFiles.map(file=><label key={file.path}><Checkbox checked={file.included} disabled={!!busy} label={file.path} onChange={v=>saveExportFiles(exportFiles.map(f=>f.path===file.path?{...f,included:v}:f))}/><span>{file.path}</span><small>{bytes(file.size)}</small></label>)}</div><p className="gx-muted">{t('totalSize',{size:bytes(exportSize)})}</p></details>}
    </Modal>}

    {dialog==='versions'&&selectedMod&&<Modal title={t('versionTitle',{name:selectedMod.data.name})} onClose={closeDialog}><p>{t('currentVersion',{version:selectedMod.data.version??''})}</p><div className="gx-version-list">{selectedMod.data.versions.map(v=><Button key={v.uuid} disabled={!!busy||v.uuid===selectedMod.data.versionUuid} icon={v.uuid===selectedMod.data.versionUuid?'check':'layers'} onClick={()=>void run('version',async()=>{await core.call('change_mod_version',context,{id:{packageUuid:selectedMod.data.uuid,versionUuid:v.uuid,backend:selectedMod.data.backend}});setDialog(null);refresh();setNotice(t('versionQueued'));})}>{v.name}{v.uuid===selectedMod.data.versionUuid?' · '+t('installed'):''}</Button>)}</div></Modal>}
  </section>;
}
