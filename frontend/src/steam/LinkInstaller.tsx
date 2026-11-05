import { useEffect, useState } from 'react';
import { core, message } from '../lib/bridge';
import type { ModData, Profiles } from '../lib/types';
import { useCatalog } from './catalog';
import { Button, Modal, Notice, Select } from './ui';
export function LinkInstaller(){
  const {snapshot}=useCatalog();const link=snapshot?.pendingLinks[0];
  const [mod,setMod]=useState<ModData>();const [profiles,setProfiles]=useState<Profiles>();const [profileId,setProfileId]=useState<number>();const [error,setError]=useState('');const [busy,setBusy]=useState(false);
  useEffect(()=>{
    if(!link)return;let cancelled=false;setMod(undefined);setError('');setProfiles(undefined);
    void (async()=>{try{const [p,m]=await Promise.all([core.call<Profiles>('profiles',{slug:link.slug}),core.call<ModData>('resolve_link',{slug:link.slug},{url:link.url})]);if(!cancelled){setProfiles(p);setProfileId(p.activeId);setMod(m);}}catch(e){if(!cancelled)setError(message(e));}})();
    return()=>{cancelled=true;};
  },[link?.url,link?.slug]);
  if(!link)return null;
  const close=()=>{if(busy)return;void core.dismissLink(link.url).catch(e=>setError(message(e)));};
  return <Modal title="Установка из Thunderstore" onClose={close} footer={<><Button disabled={busy} onClick={close}>Отмена</Button><Button primary disabled={busy||!mod||profileId===undefined} onClick={()=>void(async()=>{setBusy(true);try{await core.call('install_mod',{slug:link.slug,profileId},{id:{packageUuid:mod!.uuid,versionUuid:mod!.versionUuid,backend:mod!.backend}});await core.dismissLink(link.url);}catch(e){setError(message(e));}finally{setBusy(false);}})()}>{busy?'Добавление…':'Установить мод'}</Button></>}>
    <span className="gx-eyebrow">ПЕРЕХВАЧЕНА ССЫЛКА ROR2MM</span><h3 className="gx-config-file">{mod?.name??link.url.split('/').slice(-2,-1)[0]}</h3><p className="gx-muted">{mod?`${mod.author} · версия ${mod.version}`:'Проверяем пакет в каталоге Gale…'}</p>
    {profiles&&<div className="gx-import-summary"><span>Профиль установки</span><Select label="Профиль установки" value={profileId??profiles.activeId} options={profiles.profiles.map(p=>({value:p.id,label:p.name}))} onChange={setProfileId}/></div>}
    <p className="gx-muted">Зависимости установит Gale. Игра: {snapshot?.games.find(g=>g.slug===link.slug)?.name??link.slug}.</p>{error&&<Notice error>{error}</Notice>}
  </Modal>;
}