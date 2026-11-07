import { useEffect, useState, type ReactNode } from 'react';
import { core, message } from '../lib/bridge';
import { t, useLocale } from '../lib/i18n';
import type { Prefs, Snapshot } from '../lib/types';
import { Button, bytes, IconButton, Notice, Select, TextInput, Toggle } from './ui';
import { useCatalog, forgetGameCache } from './catalog';
import { removeNonSteamOverride, setAutoLaunchOptions, setNonSteamOverride, useClientSettings } from '../lib/clientSettings';
import { isSteamShortcut, listSteamShortcuts, normalizeAppId, steamAppName } from './apps';
import { getLocale } from '../lib/i18n';
import { Icon } from '../components/Icon';

function Row({title,hint,children}:{title:string;hint?:string;children?:ReactNode}) {
  return <div className="gx-setting"><div><strong>{title}</strong>{hint&&<small>{hint}</small>}</div>{children}</div>;
}

export function GlobalSettings({demo=false}: {demo?:boolean}) {
  useLocale();
  const [prefs,setPrefs]=useState<Prefs>();
  const [snapshot,setSnapshot]=useState<Snapshot>();
  const [path,setPath]=useState('');
  const [error,setError]=useState('');
  const [status,setStatus]=useState('');
  const [busy,setBusy]=useState(false);
  const catalog=useCatalog();
  const clientSettings=useClientSettings();
  const games=catalog.snapshot?.ok?catalog.snapshot.games:catalog.games;
  const shortcuts=listSteamShortcuts();
  const [shortcutId,setShortcutId]=useState('');
  const [manualId,setManualId]=useState('');
  const [overrideSlug,setOverrideSlug]=useState('');
  const load=async()=>{
    setError('');
    try{
      const [s,p]=await Promise.all([core.snapshot(),core.global<Prefs>('prefs')]);
      setSnapshot(s);setPrefs(p);
      if(!demo){setPath(await core.getConfig());}
    }catch(e){setError(message(e));}
  };
  useEffect(()=>{void load();},[]);
  const save=async(patch:Partial<Prefs>)=>{
    if(!prefs||busy)return;setBusy(true);setError('');setStatus('');
    try{const next={...prefs,...patch};await core.global('set_prefs',{value:next});setPrefs(next);setStatus(t('savedInGale'));}catch(e){setError(message(e));}finally{setBusy(false);}
  };
  const savePath=async()=>{
    setBusy(true);setError('');
    try{await core.setConfig(path.trim());await core.restart();setStatus(t('pathSaved'));setTimeout(()=>void load(),2500);}catch(e){setError(message(e));}finally{setBusy(false);}
  };
  const clearCache=async()=>{
    setBusy(true);setError('');
    try{const size=await core.global<number>('clear_download_cache');setStatus(t('cacheCleared',{size:bytes(size)}));}catch(e){setError(message(e));}finally{setBusy(false);}
  };
  const saveOverride=()=>{
    const appid=normalizeAppId(manualId.trim()||shortcutId);
    if(!appid||!isSteamShortcut(appid)||!overrideSlug||!games.some(game=>game.slug===overrideSlug)){setError(t('invalidAppId'));return;}
    try{setNonSteamOverride(appid,overrideSlug);setError('');setStatus(t('overrideSaved'));setManualId('');setShortcutId('');setOverrideSlug('');}catch(e){setError(message(e));}
  };
  const clearGames=()=>{forgetGameCache();setStatus(t('gameCacheCleared'));};
  const cachedWhen=catalog.cachedAt?new Date(catalog.cachedAt).toLocaleString(getLocale()==='ru'?'ru-RU':'en-US'):t('never');
  return <section className="galex gx-global-settings">
    <div className="gx-settings-header"><h1>GaleX</h1><span className="gx-connection"><span className="gx-status-dot"/>{snapshot?`Gale ${snapshot.coreVersion}`:t('noConnection')}</span><IconButton icon="refresh" label={t('checkConnection')} disabled={busy} onClick={()=>void load()}/></div>
    <p className="gx-settings-intro">{t('settingsIntro')}</p>
    {error&&<Notice error onRetry={()=>void load()}>{error}</Notice>}
    {status&&<div className="gx-success" role="status"><Icon name="check" size={15}/>{status}</div>}

    <div className="gx-settings-section"><h2>{t('connection')}</h2>
      <Row title={t('headlessGale')} hint={t('headlessHint')}/>
      {!demo&&<>
        <TextInput label={t('galePath')} value={path} disabled={busy} onChange={e=>setPath(e.target.value)} placeholder={t('galePathPlaceholder')}/>
        <div className="gx-settings-actions"><Button onClick={()=>void savePath()} disabled={busy}>{t('saveRestart')}</Button></div>
        <p className="gx-muted">{t('galePathHint')}</p>
      </>}
      <Row title={t('dataDir')} hint={t('dataDirHint')}/>
      <code className="gx-path">{snapshot?.dataDir??'—'}</code>
      <Row title={t('cachedGames')} hint={games.length?t('cachedGamesHint',{count:games.length,when:cachedWhen}):t('cachedGamesEmpty')}><Button disabled={busy} onClick={clearGames}>{t('clearGameCache')}</Button></Row>
      {!!games.length&&<details className="gx-games"><summary>{t('galeGames')} <span>{games.length}</span></summary><p className="gx-muted">{t('galeGamesHint')}</p><ul className="gx-game-list">{games.map(game=><li key={game.slug}>{game.name} <span>{game.steamAppId??'?'}</span></li>)}</ul></details>}
    </div>

    <div className="gx-settings-section"><h2>{t('nonSteamOverrides')}</h2><p className="gx-muted">{t('nonSteamHint')}</p>
      <div className="gx-override-form">
        <label>{t('shortcutAppId')}<Select label={t('shortcutAppId')} value={shortcutId} onChange={setShortcutId} options={[{value:'',label:t('manualAppId')},...shortcuts.map(item=>({value:String(item.appid),label:`${item.name} (${item.appid})`}))]}/></label>
        <label>{t('manualAppId')}<TextInput aria-label={t('manualAppId')} inputMode="numeric" value={manualId} onChange={e=>setManualId(e.target.value)} placeholder="3422480235"/></label>
        <label>{t('galeGame')}<Select label={t('galeGame')} value={overrideSlug} onChange={setOverrideSlug} options={[{value:'',label:'—'},...games.map(game=>({value:game.slug,label:game.name}))]}/></label>
        <Button onClick={saveOverride} disabled={!games.length}>{t('saveOverride')}</Button>
      </div>
      {!shortcuts.length&&<p className="gx-muted">{t('noShortcuts')}</p>}
      {!!Object.keys(clientSettings.nonSteamOverrides).length&&<ul className="gx-override-list">{Object.entries(clientSettings.nonSteamOverrides).map(([appid,slug])=>{
        const id=Number(appid);const game=games.find(item=>item.slug===slug);
        return <li key={appid}><strong>{steamAppName(id)??`AppID ${appid}`}</strong><span>{appid} → {game?.name??slug}</span><IconButton icon="trash" label={t('removeOverride')} onClick={()=>{removeNonSteamOverride(id);setStatus(t('overrideRemoved'));}}/></li>;
      })}</ul>}
      <Row title={t('autoLaunchOptions')} hint={t('autoLaunchOptionsHint')}><Toggle label={t('autoLaunchOptions')} checked={clientSettings.autoLaunchOptions} onChange={setAutoLaunchOptions}/></Row>
    </div>

    <div className="gx-settings-section"><h2>{t('galePreferences')}</h2><p className="gx-muted">{t('galePreferencesHint')}</p>
      {prefs?<>
        <Row title={t('fetchAuto')} hint={t('fetchAutoHint')}><Toggle label={t('fetchAuto')} checked={prefs.fetchModsAutomatically} disabled={busy} onChange={v=>void save({fetchModsAutomatically:v})}/></Row>
        <Row title={t('pullBeforeLaunch')} hint={t('pullBeforeLaunchHint')}><Toggle label={t('pullBeforeLaunch')} checked={prefs.pullBeforeLaunch} disabled={busy} onChange={v=>void save({pullBeforeLaunch:v})}/></Row>
        <Row title={t('skipBackendConfirm')} hint={t('skipBackendConfirmHint')}><Toggle label={t('skipBackendConfirm')} checked={prefs.backendSkipConfirm} disabled={busy} onChange={v=>void save({backendSkipConfirm:v})}/></Row>
      </>:<p className="gx-muted">{t('prefsLoading')}</p>}
    </div>

    <div className="gx-settings-section"><h2>{t('downloads')}</h2>
      <Row title={t('downloadCache')} hint={t('downloadCacheHint')}><Button disabled={busy||!prefs||snapshot?.installing} onClick={()=>void clearCache()}>{t('clearCache')}</Button></Row>
    </div>
    <p className="gx-settings-bottom">{t('settingsBottom')}</p>
  </section>;
}
