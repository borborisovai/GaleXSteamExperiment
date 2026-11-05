import { useEffect, useState } from 'react';
import { Icon } from '../components/Icon';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { setTransport } from '../lib/bridge';
import { ModsView } from '../steam/ModsView';
import { GlobalSettings } from '../steam/GlobalSettings';
import { demoTransport } from './transport';
import { demoGames, demoSnapshot } from './data';
import { ConfigDemo } from './ConfigDemo';
import { Select } from '../steam/ui';
setTransport(async(method,args)=>{try{return await demoTransport(method,args);}catch(error){return {ok:false,error:error instanceof Error?error.message:String(error)};}});
const tabs=['Общие','Обновления','Бета-версии','Локальные файлы','Моды','DLC'];
export function PreviewApp() {
  const [slug,setSlug]=useState('lethal-company');const [tab,setTab]=useState('Моды');const [settings,setSettings]=useState(false);const [config,setConfig]=useState(false);
  const game=demoGames.find(g=>g.slug===slug)??demoGames[0]!;
  useEffect(()=>{const open=()=>setConfig(true);window.addEventListener('galex:demo-config',open);return()=>window.removeEventListener('galex:demo-config',open);},[]);
  return <div className="gx-preview"><header className="gx-steam-top"><div className="gx-steam-wordmark">STEAM<span>®</span></div><nav aria-label="Steam"><button>Магазин</button><button className="active">Библиотека</button><button>Сообщество</button><button>Профиль</button></nav><div className="gx-demo-account"><span className="gx-account-avatar">B</span><span>player<small>в сети</small></span></div></header>
    <div className="gx-preview-subbar"><div className="gx-library-label"><Icon name="grid" size={16}/> БИБЛИОТЕКА <span>/</span> {game.name}</div><span className="gx-demo-badge"><span/> ДЕМО ИНТЕРФЕЙСА</span><button onClick={()=>setSettings(v=>!v)}><Icon name="settings" size={15}/>{settings?'Свойства игры':'Настройки плагина'}</button></div>
    <main className={`gx-preview-stage ${slug==='repo'?'gx-stage-repo':''}`}><div className="gx-game-background"><div className="gx-moon"/><div className="gx-building"/><div className="gx-game-wordmark">{game.name.toUpperCase()}</div></div>
      <div className="gx-properties" role="dialog" aria-label={`${game.name} — свойства`}><header className="gx-properties-title"><div className="gx-property-app-icon"><Icon name="package" size={19}/></div><span>{game.name} — свойства</span><span className="gx-window-controls" aria-hidden="true">− □ ×</span></header><div className="gx-properties-layout"><aside className="gx-properties-nav"><div className="gx-property-game"><div className="gx-property-cover">LC</div><strong>{game.name}</strong><small>Установлено</small></div><nav aria-label="Разделы свойств">{tabs.map(item=><button key={item} className={tab===item&&!settings?'active':''} onClick={()=>{setTab(item);setSettings(false);}}>{item==='Моды'&&<Icon name="package" size={15}/>} {item}{item==='Моды'&&<span className="gx-tab-dot"/>}</button>)}</nav><div className="gx-property-nav-bottom"><Icon name="layers" size={15}/><span>Powered by Gale</span></div></aside><div className="gx-properties-content"><ErrorBoundary>{settings?<GlobalSettings demo/>:tab==='Моды'?<ModsView key={slug} game={game} demo installing={demoSnapshot.installing}/>:<div className="gx-native-placeholder"><Icon name={tab==='Общие'?'settings':'folder'} size={38}/><h2>{tab}</h2><p>Здесь остаётся стандартный раздел Steam.</p><button onClick={()=>setTab('Моды')}>Вернуться к модам <Icon name="arrow-right" size={15}/></button><div className="gx-preview-game-select"><Select label="Демо-игра" value={slug} onChange={setSlug} options={demoGames.map(g=>({value:g.slug,label:g.name}))}/></div></div>}</ErrorBoundary></div></div></div>
      <div className="gx-preview-caption"><span>GaleX <span>·</span> Моды прямо в свойствах игры</span><div className="gx-preview-game-select"><Select label="Выбрать игру для демо" value={slug} onChange={setSlug} options={demoGames.map(g=>({value:g.slug,label:g.name}))}/></div><span>Данные демонстрационные</span></div>
    </main>{config&&<ConfigDemo onClose={()=>setConfig(false)}/>}
  </div>;
}