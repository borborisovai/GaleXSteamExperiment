import { useState } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { setTransport } from '../lib/bridge';
import { t } from '../lib/i18n';
import { ModsView } from '../steam/ModsView';
import { GlobalSettings } from '../steam/GlobalSettings';
import { demoTransport } from './transport';
import { demoGames, demoSnapshot } from './data';
import { Select } from '../steam/ui';
setTransport(async(method,args)=>{try{return await demoTransport(method,args);}catch(error){return {ok:false,error:error instanceof Error?error.message:String(error)};}});
const tabs=['general','updates','betas','files','mods','dlc'] as const;
export function PreviewApp() {
  const [slug,setSlug]=useState('lethal-company');const [tab,setTab]=useState<typeof tabs[number]>('mods');const [settings,setSettings]=useState(false);
  const game=demoGames.find(g=>g.slug===slug)??demoGames[0]!;
  return <div className="gx-preview galex">
    <div className="gx-preview-subbar"><strong>{game.name}</strong><span className="gx-demo-badge">{t('demo')}</span><button className="gx-button" onClick={()=>setSettings(v=>!v)}>{settings?t('mods'):t('settingsTitle')}</button></div>
    <main className="gx-preview-stage"><div className="gx-properties" role="dialog" aria-label={`${game.name} properties`}><header className="gx-properties-title"><span>{game.name}</span></header><div className="gx-properties-layout"><aside className="gx-properties-nav">{tabs.map(item=><button key={item} className={tab===item&&!settings?'active':''} onClick={()=>{setTab(item);setSettings(false);}}>{item===t('mods')?t('mods'):item}</button>)}</aside><div className="gx-properties-content"><ErrorBoundary>{settings?<GlobalSettings demo/>:tab==='mods'?<ModsView key={slug} game={game} demo installing={demoSnapshot.installing}/>:<div className="gx-native-placeholder"><h2>{tab}</h2><p>Steam native section placeholder.</p></div>}</ErrorBoundary></div></div></div></main>
    <div className="gx-preview-caption"><span>GaleX · {t('mods')}</span><Select label="Demo game" value={slug} onChange={setSlug} options={demoGames.map(g=>({value:g.slug,label:g.name}))}/></div>
  </div>;
}
