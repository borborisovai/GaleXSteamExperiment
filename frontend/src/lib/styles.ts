const STYLE_ID='galex-styles';
export function injectStyles(css:string,doc:Document=document){
  if(typeof doc==='undefined')return;
  const existing=doc.getElementById(STYLE_ID);
  if(existing){existing.textContent=css;return;}
  const style=doc.createElement('style');style.id=STYLE_ID;style.textContent=css;doc.head.appendChild(style);
}