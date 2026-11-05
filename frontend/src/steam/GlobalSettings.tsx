import { useEffect, useState } from 'react';
import { core, message } from '../lib/bridge';
import type { Prefs, Snapshot } from '../lib/types';
import { Button, Notice, Toggle } from './ui';
import { Icon } from '../components/Icon';

export function GlobalSettings({demo=false}: {demo?:boolean}) {
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
    try{const next={...prefs,...patch};await core.global('set_prefs',{value:next});setPrefs(next);setStatus('Сохранено в Gale');}catch(e){setError(message(e));}finally{setBusy(false);}
  };
  const savePath=async()=>{
    setBusy(true);setError('');
    try{await core.setConfig(path.trim());await core.restart();setStatus('Путь сохранён. Перезапуск запрошен.');setTimeout(()=>void load(),2500);}catch(e){setError(message(e));}finally{setBusy(false);}
  };
  return <section className="galex gx-global-settings"><div className="gx-heading"><div><span className="gx-eyebrow">НАСТРОЙКИ ПЛАГИНА</span><h1>GaleX</h1></div><span className="gx-version-label">Millennium × Gale</span></div>
    <p className="gx-settings-intro">Моды в Steam. Профили, загрузки и конфигурации — в вашем установленном Gale.</p>
    {error&&<Notice error onRetry={()=>void load()}>{error}</Notice>}{status&&<div className="gx-success" role="status"><Icon name="check" size={15}/>{status}</div>}
    <div className="gx-settings-section"><h2>Подключение</h2><div className="gx-setting"><div><strong>Headless Gale</strong><small>Запускается и останавливается вместе с плагином</small></div><span className="gx-connection"><span className="gx-status-dot"/>{snapshot?`Gale ${snapshot.coreVersion}`:'Нет подключения'}</span></div>
    {!demo&&<><label className="gx-form-label">Путь к headless-сборке Gale<input value={path} onChange={e=>setPath(e.target.value)} placeholder="Оставьте пустым для сборки внутри плагина"/></label><div className="gx-settings-actions"><Button onClick={()=>void savePath()} disabled={busy}>Сохранить и перезапустить</Button></div><p className="gx-muted">Обычная сборка Gale не содержит мост. Используйте сборку из этого репозитория; она работает с существующими данными Gale.</p></>}
    <div className="gx-setting"><div><strong>Папка данных Gale</strong><small>Общая база данных и профили. Перенос файлов выполняется в Gale.</small></div></div><code className="gx-path">{snapshot?.dataDir??'—'}</code></div>
    <div className="gx-settings-section"><h2>Поведение Gale</h2>{prefs?<>
      <div className="gx-setting"><div><strong>Загружать каталог автоматически</strong><small>Получать список модов при выборе игры</small></div><Toggle label="Загружать каталог автоматически" checked={prefs.fetchModsAutomatically} disabled={busy} onChange={v=>void save({fetchModsAutomatically:v})}/></div>
      <div className="gx-setting"><div><strong>Обновлять синхронизированный профиль перед запуском</strong><small>Использовать настройку pull before launch из Gale</small></div><Toggle label="Обновлять профиль перед запуском" checked={prefs.pullBeforeLaunch} disabled={busy} onChange={v=>void save({pullBeforeLaunch:v})}/></div>
      <div className="gx-setting"><div><strong>Пропускать подтверждение смены источника</strong><small>Thunderstore / Hexium — общая настройка Gale</small></div><Toggle label="Пропускать подтверждение источника" checked={prefs.backendSkipConfirm} disabled={busy} onChange={v=>void save({backendSkipConfirm:v})}/></div>
    </>:<p className="gx-muted">Настройки появятся после подключения к Gale.</p>}</div>
    <div className="gx-settings-section"><h2>Загрузки</h2><div className="gx-setting"><div><strong>Кэш загрузок</strong><small>Удалить только неиспользуемые файлы. Установленные моды останутся.</small></div><Button disabled={busy||!prefs||snapshot?.installing} onClick={()=>void (async()=>{setBusy(true);try{const size=await core.global<number>('clear_download_cache');setStatus(`Освобождено ${Math.round(size/1048576)} МБ`);}catch(e){setError(message(e));}finally{setBusy(false);}})()}>Очистить кэш</Button></div></div>
    <div className="gx-settings-bottom"><span>Не запускайте настольный Gale одновременно с GaleX.</span><Button icon="refresh" disabled={busy} onClick={()=>void load()}>Проверить подключение</Button></div>
  </section>;
}