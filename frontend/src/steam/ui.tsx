import { useEffect, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { steamApi } from '../lib/bridge';
import { Icon, type IconName } from '../components/Icon';

export function Button({children, icon, primary, className='', ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {icon?: IconName; primary?: boolean}) {
  const Native = steamApi()?.DialogButton;
  const content = <>{icon && <Icon name={icon} size={16}/>} {children}</>;
  const classes = `gx-button ${primary?'gx-button--primary':''} ${className}`;
  return Native ? <Native {...props} className={classes}>{content}</Native> : <button {...props} className={classes}>{content}</button>;
}
export function IconButton({icon,label,...props}: ButtonHTMLAttributes<HTMLButtonElement> & {icon:IconName;label:string}) {
  return <button type="button" {...props} className={`gx-icon-button ${props.className??''}`} aria-label={label} title={label}><Icon name={icon} size={17}/></button>;
}
export function Select<T extends string|number>({value,onChange,options,label,disabled}: {value:T;onChange:(value:T)=>void;options:{value:T;label:string}[];label:string;disabled?:boolean}) {
  const Native = steamApi()?.Dropdown;
  return Native ? <div className="gx-native-select"><Native disabled={disabled} menuLabel={label} strDefaultLabel={label} rgOptions={options.map(o=>({data:o.value,label:o.label}))} selectedOption={value} onChange={(o:any)=>onChange(o.data)}/></div> : <select aria-label={label} value={value} disabled={disabled} onChange={e=>onChange((typeof value==='number'?Number(e.target.value):e.target.value) as T)}>{options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select>;
}
export function Toggle({checked,onChange,label,disabled}: {checked:boolean;onChange:(value:boolean)=>void;label:string;disabled?:boolean}) {
  const Native = steamApi()?.Toggle;
  return Native ? <div className="gx-toggle" role="group" aria-label={label}><Native value={checked} onChange={onChange} disabled={disabled}/></div> : <label className="gx-toggle"><input type="checkbox" role="switch" aria-label={label} checked={checked} disabled={disabled} onChange={e=>onChange(e.target.checked)}/><span aria-hidden="true"/></label>;
}
export function Modal({title,children,onClose,footer}: {title:string;children:ReactNode;onClose:()=>void;footer?:ReactNode}) {
  const ref=useRef<HTMLDivElement>(null);
  const closeRef=useRef(onClose);closeRef.current=onClose;
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null;
    const root=ref.current;
    const focusables=()=>Array.from(root?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')??[]);
    (root?.querySelector<HTMLElement>('input,select,textarea')??focusables()[0])?.focus();
    const listener=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){event.stopPropagation();closeRef.current();}
      if(event.key==='Tab'){const items=focusables();const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}
    };
    root?.addEventListener('keydown',listener);
    return ()=>{root?.removeEventListener('keydown',listener);previous?.focus();};
  },[]);
  return createPortal(<div className="galex gx-modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><div ref={ref} className="gx-modal DialogPopup_Generic" role="dialog" aria-modal="true" aria-label={title}><header><h2>{title}</h2><IconButton icon="x" label="Закрыть" onClick={onClose}/></header><div className="gx-modal-body">{children}</div>{footer&&<footer>{footer}</footer>}</div></div>,document.body);
}
export function Confirm({title,children,onClose,onConfirm,busy,danger}: {title:string;children:ReactNode;onClose:()=>void;onConfirm:()=>void;busy?:boolean;danger?:boolean}) {
  return <Modal title={title} onClose={onClose} footer={<><Button onClick={onClose} disabled={busy}>Отмена</Button><Button primary className={danger?'gx-danger':''} onClick={onConfirm} disabled={busy}>{busy?'Выполняется…':'Подтвердить'}</Button></>}><div className="gx-confirm-copy">{children}</div></Modal>;
}
export function Burger({label,items}: {label:string;items:{label:string;icon?:IconName;danger?:boolean;disabled?:boolean;action:()=>void}[]}) {
  const [position,setPosition]=useState<{top:number;left:number}|null>(null);
  const button=useRef<HTMLButtonElement>(null);
  const menu=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!position)return;
    menu.current?.querySelector<HTMLButtonElement>('button:not(:disabled)')?.focus();
    const close=(e:MouseEvent)=>{if(!menu.current?.contains(e.target as Node)&&!button.current?.contains(e.target as Node))setPosition(null);};
    const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setPosition(null);button.current?.focus();}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const items=Array.from(menu.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')??[]);const i=items.indexOf(document.activeElement as HTMLButtonElement);items[(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus();}};
    document.addEventListener('mousedown',close);document.addEventListener('keydown',key);
    return ()=>{document.removeEventListener('mousedown',close);document.removeEventListener('keydown',key);};
  },[position]);
  return <><button ref={button} type="button" className="gx-icon-button" aria-label={label} title={label} aria-haspopup="menu" aria-expanded={!!position} onClick={()=>{if(position){setPosition(null);return;}const r=button.current!.getBoundingClientRect();setPosition({top:r.bottom+5,left:Math.max(8,Math.min(r.right-224,window.innerWidth-236))});}}><Icon name="grid" size={16}/></button>{position&&createPortal(<div ref={menu} role="menu" aria-label={label} className="galex gx-context-menu" style={position}>{items.map(item=><button role="menuitem" key={item.label} disabled={item.disabled} className={item.danger?'gx-text-danger':''} onClick={()=>{setPosition(null);item.action();}}>{item.icon&&<Icon name={item.icon} size={15}/>} {item.label}</button>)}</div>,document.body)}</>;
}
export function Notice({children,error,onRetry}: {children:ReactNode;error?:boolean;onRetry?:()=>void}) {return <div className={`gx-notice ${error?'gx-notice--error':''}`} role={error?'alert':'status'}><Icon name={error?'warning':'info'} size={17}/><span>{children}</span>{onRetry&&<button onClick={onRetry}>Повторить</button>}</div>;}
export function bytes(value:number) {return value>=1073741824?`${(value/1073741824).toFixed(1)} ГБ`:value>=1048576?`${(value/1048576).toFixed(1)} МБ`:`${Math.round(value/1024)} КБ`;}