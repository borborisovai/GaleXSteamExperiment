/* Runs in Millennium's isolated browser world, only on Thunderstore URLs. */
import { decodeRpcResult } from '../lib/ipc';
const w=window as any;
if(!w.__GALEX_BROWSER_HOOK__){
  w.__GALEX_BROWSER_HOOK__=true;
  const notify=(text:string,error=false)=>{
    let toast=document.getElementById('galex-browser-toast');
    if(!toast){toast=document.createElement('div');toast.id='galex-browser-toast';toast.setAttribute('role','status');toast.style.cssText='position:fixed;bottom:24px;right:24px;z-index:2147483647;max-width:360px;padding:14px 20px;background:#1b2838;color:#dfe3e8;border:1px solid #66c0f4;border-radius:4px;box-shadow:0 5px 30px #0008;font:13px Arial,sans-serif;';document.body.appendChild(toast);}
    toast.textContent=text;toast.style.borderColor=error?'#d94b4b':'#66c0f4';setTimeout(()=>toast?.remove(),5000);
  };
  const intercept=async(raw:string)=>{
    if(!raw.startsWith('ror2mm://'))return false;
    const slug=location.pathname.match(/^\/c\/([a-z0-9-]+)\//)?.[1];
    if(!slug){notify('GaleX: open a package page on Thunderstore.',true);return true;}
    try{
      const rawResult=await w.Millennium.callServerMethod('GaleX','queue_link',{payload:JSON.stringify({url:raw,slug})});
      const result=decodeRpcResult(rawResult);
      if(!result.ok)throw new Error(result.error||'Backend unavailable');
      notify('GaleX: link sent to Steam. Choose a profile in the Steam window to install.');
    }catch(error){notify('GaleX: '+(error instanceof Error?error.message:String(error)),true);}
    return true;
  };
  document.addEventListener('click',(event)=>{
    const anchor=(event.target as Element|null)?.closest?.('a[href]') as HTMLAnchorElement|null;
    if(anchor?.href.startsWith('ror2mm://')){event.preventDefault();event.stopImmediatePropagation();void intercept(anchor.href);}
  },true);
  const originalOpen=window.open.bind(window);
  window.open=((url?:string|URL,target?:string,features?:string)=>{
    const value=String(url??'');if(value.startsWith('ror2mm://')){void intercept(value);return null;}return originalOpen(url,target,features);
  }) as typeof window.open;
}
export {};