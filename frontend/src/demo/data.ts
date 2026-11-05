import type { Prefs, ProfileMod, Profiles, Snapshot } from '../lib/types';
export const demoGames = [
  {slug:'lethal-company',name:'Lethal Company',steamAppId:1966720,modLoader:'BepInEx',backends:['Thunderstore']},
  {slug:'repo',name:'R.E.P.O.',steamAppId:3241660,modLoader:'BepInEx',backends:['Thunderstore']},
  {slug:'riskofrain2',name:'Risk of Rain 2',steamAppId:632360,modLoader:'BepInEx',backends:['Thunderstore']},
  {slug:'valheim',name:'Valheim',steamAppId:892970,modLoader:'BepInEx',backends:['Thunderstore']},
];
const entries = [
  ['BepInEx Pack','BepInEx Team','5.4.2302','Необходимый загрузчик модов для Unity-игр.',true,25165824,1824500,['Framework']],
  ['LethalLib','Evaisa','0.16.2','Инструменты для создания и загрузки контента.',true,2411724,682100,['Library']],
  ['More Company','notnotnotswipez','1.11.0','Больше друзей. Больше хаоса. До 32 игроков.',true,1048576,1245600,['Server-side']],
  ['Lethal Config','AinaVT','1.4.6','Настройки модов прямо внутри игры.',true,524288,943200,['Utility']],
  ['Skinwalkers','RugbugRedfern','5.0.0','Монстры подражают голосам вашей команды.',true,8388608,1567200,['Audio']],
  ['Ship Loot','Tinyhoot','1.1.2','Отслеживайте стоимость добычи на корабле.',true,327680,742300,['UI']],
  ['HD Lethal Company','Geekness','1.0.4','Улучшенное освещение и текстуры.',false,134217728,453200,['Graphics']],
  ['Weather Multipliers','Bread','1.3.1','Дополнительные погодные эффекты.',false,716800,234100,['Gameplay']],
];
export const demoMods: ProfileMod[] = entries.map((e,i)=>({enabled:Boolean(e[4]),configFile:i===3?'BepInEx/config/AinaVT-LethalConfig.cfg':undefined,data:{name:String(e[0]),author:String(e[1]),version:String(e[2]),description:String(e[3]),fileSize:Number(e[5]),downloads:Number(e[6]),categories:e[7] as string[],uuid:`demo-package-${i}`,versionUuid:`demo-version-${i}`,type:'Remote',backend:'Thunderstore',isDeprecated:false,dependencies:i>1?['BepInExTeam-BepInExPack-5.4.2302']:[],versions:[{name:String(e[2]),uuid:`demo-version-${i}`}],websiteUrl:`https://thunderstore.io/c/lethal-company/p/${e[1]}/${String(e[0]).replaceAll('','')}/`}}));
export const demoProfiles: Record<string, Profiles> = Object.fromEntries(demoGames.map(g=>[g.slug,{activeId:1,profiles:[{id:1,name:'С друзьями',modCount:8,customArgs:'',missing:false},{id:2,name:'Ванильный профиль',modCount:0,customArgs:'',missing:false}]}]));
export const demoPrefs: Prefs = {dataDir:'~/.local/share/com.kesomannen.gale',fetchModsAutomatically:true,zoomFactor:1,pullBeforeLaunch:true,language:'ru',backendSkipConfirm:false,gamePrefs:{}};
export const demoSnapshot: Snapshot = {ok:true,bridgeVersion:2,core:'Gale',coreVersion:'1.23.3',games:demoGames,activeSlug:'lethal-company',dataDir:demoPrefs.dataDir,installing:false,pendingLinks:[]};