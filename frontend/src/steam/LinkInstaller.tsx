import { useEffect, useState } from 'react';
import { core, focusSteamWindow, message } from '../lib/bridge';
import { useDocument } from '../lib/DocumentContext';
import { t, useLocale } from '../lib/i18n';
import type { ModData, Profiles } from '../lib/types';
import { refreshCatalog, useCatalog } from './catalog';
import { Button, Modal, Notice, Select } from './ui';

export function LinkInstaller(){
  useLocale();
  const doc=useDocument();
  const {snapshot}=useCatalog();const link=snapshot?.pendingLinks[0];
  const [mod,setMod]=useState<ModData>();const [profiles,setProfiles]=useState<Profiles>();const [profileId,setProfileId]=useState<number>();const [error,setError]=useState('');const [busy,setBusy]=useState(false);const [attempt,setAttempt]=useState(0);
  useEffect(()=>{
    if(!link)return;focusSteamWindow(doc);let cancelled=false;setMod(undefined);setError('');setProfiles(undefined);
    void (async()=>{try{const [p,m]=await Promise.all([core.call<Profiles>('profiles',{slug:link.slug}),core.call<ModData>('resolve_link',{slug:link.slug},{url:link.url})]);if(!cancelled){setProfiles(p);setProfileId(p.activeId);setMod(m);}}catch(e){if(!cancelled)setError(message(e));}})();
    return()=>{cancelled=true;};
  },[link?.url,link?.slug,attempt]);
  if(!link)return null;
  const close=()=>{if(busy)return;void core.dismissLink(link.url).then(()=>refreshCatalog()).catch(e=>setError(message(e)));};
  const install=()=>void(async()=>{setBusy(true);setError('');try{await core.call('install_mod',{slug:link.slug,profileId},{id:{packageUuid:mod!.uuid,versionUuid:mod!.versionUuid,backend:mod!.backend}});await core.dismissLink(link.url);refreshCatalog();}catch(e){setError(message(e));}finally{setBusy(false);}})();
  return <Modal title={t('linkTitle')} onClose={close} footer={<><Button disabled={busy} onClick={close}>{t('cancel')}</Button><Button primary disabled={busy||!mod||profileId===undefined} onClick={install}>{busy?t('linkInstalling'):t('linkInstall')}</Button></>}>
    <h3>{mod?.name??link.url.split('/').slice(-2,-1)[0]}</h3><p className="gx-muted">{mod?`${mod.author} · v${mod.version}`:t('linkChecking')}</p>
    {profiles&&<label className="gx-form-label">{t('linkProfile')}<Select label={t('linkProfile')} value={profileId??profiles.activeId} options={profiles.profiles.map(p=>({value:p.id,label:p.name}))} onChange={setProfileId}/></label>}
    <p className="gx-muted">{t('linkDeps',{game:snapshot?.games.find(g=>g.slug===link.slug)?.name??link.slug})}</p>
    {error&&<Notice error onRetry={()=>setAttempt(v=>v+1)}>{error}</Notice>}
  </Modal>;
}
