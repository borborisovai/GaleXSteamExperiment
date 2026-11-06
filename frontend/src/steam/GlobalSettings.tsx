import { useEffect, useState } from 'react';
import { core, message } from '../lib/bridge';
import { t, useLocale } from '../lib/i18n';
import type { Prefs, Snapshot } from '../lib/types';
import { Button, bytes, Checkbox, Notice } from './ui';
import { Icon } from '../components/Icon';

export function GlobalSettings({demo=false}: {demo?:boolean}) {
  useLocale();
  const [prefs,setPrefs]=useState<Prefs>();
  const [snapshot,setSnapshot]=useState<Snapshot>();
  const [path,setPath]=useState('');
  const [error,setError]=useState('');
  const [status,setStatus]=useState('');
  const [busy,setBusy]=useState(false);
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
  return <section className="galex gx-global-settings"><div className="gx-heading"><h1>GaleX</h1><span className="gx-heading-meta">Millennium × Gale</span></div>
    <p className="gx-settings-intro">{t('settingsIntro')}</p>
    {error&&<Notice error onRetry={()=>void load()}>{error}</Notice>}{status&&<div className="gx-success" role="status"><Icon name="check" size={15}/>{status}</div>}
    <div className="gx-settings-section"><h2>{t('connection')}</h2><div className="gx-setting"><div><strong>{t('headlessGale')}</strong><small>{t('headlessHint')}</small></div><span className="gx-connection"><span className="gx-status-dot"/>{snapshot?`Gale ${snapshot.coreVersion}`:t('noConnection')}</span></div>
    {!demo&&<><label className="gx-form-label">{t('galePath')}<input value={path} onChange={e=>setPath(e.target.value)} placeholder={t('galePathPlaceholder')}/></label><div className="gx-settings-actions"><Button onClick={()=>void savePath()} disabled={busy}>{t('saveRestart')}</Button></div><p className="gx-muted">{t('galePathHint')}</p></>}
    <div className="gx-setting"><div><strong>{t('dataDir')}</strong><small>{t('dataDirHint')}</small></div></div><code className="gx-path">{snapshot?.dataDir??'—'}</code>
    <div className="gx-setting"><div><strong>{t('galeGames')}</strong><small>{t('galeGamesHint')}</small></div><span className="gx-connection">{snapshot?.games.length??0}</span></div>
    {!!snapshot?.games.length&&<code className="gx-path">{snapshot.games.slice(0,30).map(game=>`${game.name} (${game.steamAppId??'?'})`).join('; ')}</code>}</div>
    <div className="gx-settings-section"><h2>{t('behavior')}</h2>{prefs?<>
      <div className="gx-setting"><div><strong>{t('fetchAuto')}</strong><small>{t('fetchAutoHint')}</small></div><Checkbox label={t('fetchAuto')} checked={prefs.fetchModsAutomatically} disabled={busy} onChange={v=>void save({fetchModsAutomatically:v})}/></div>
      <div className="gx-setting"><div><strong>{t('pullBeforeLaunch')}</strong><small>{t('pullBeforeLaunchHint')}</small></div><Checkbox label={t('pullBeforeLaunch')} checked={prefs.pullBeforeLaunch} disabled={busy} onChange={v=>void save({pullBeforeLaunch:v})}/></div>
      <div className="gx-setting"><div><strong>{t('skipBackendConfirm')}</strong><small>{t('skipBackendConfirmHint')}</small></div><Checkbox label={t('skipBackendConfirm')} checked={prefs.backendSkipConfirm} disabled={busy} onChange={v=>void save({backendSkipConfirm:v})}/></div>
    </>:<p className="gx-muted">{t('prefsLoading')}</p>}</div>
    <div className="gx-settings-section"><h2>{t('downloads')}</h2><div className="gx-setting"><div><strong>{t('downloadCache')}</strong><small>{t('downloadCacheHint')}</small></div><Button disabled={busy||!prefs||snapshot?.installing} onClick={()=>void (async()=>{setBusy(true);try{const size=await core.global<number>('clear_download_cache');setStatus(t('cacheCleared',{size:bytes(size)}));}catch(e){setError(message(e));}finally{setBusy(false);}})()}>{t('clearCache')}</Button></div></div>
    <div className="gx-settings-bottom"><span>{t('settingsBottom')}</span><Button icon="refresh" disabled={busy} onClick={()=>void load()}>{t('checkConnection')}</Button></div>
  </section>;
}
