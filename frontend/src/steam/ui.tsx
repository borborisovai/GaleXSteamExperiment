import { useEffect, useRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon, type IconName } from '../components/Icon';
import { steamApi } from '../lib/bridge';
import { useDocument } from '../lib/DocumentContext';
import { t } from '../lib/i18n';

/* Prefer the components Millennium exposes from Steam's own UI module. They
   bring Steam's focus rings, gamepad navigation, checkboxes, toggles and
   dropdown menus, so GaleX does not need a second control theme. The HTML
   fallbacks keep the browser demo and older Millennium builds usable. */
function native<T = any>(name: string): T | undefined {
  const value = (steamApi() as any)?.[name];
  return typeof value === 'function' || (value && typeof value === 'object') ? value as T : undefined;
}

export function Button({children, icon, primary, className='', ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {icon?: IconName; primary?: boolean}) {
  const Native = native(primary ? 'DialogButtonPrimary' : 'DialogButton') ?? native('DialogButton');
  const content = <>{icon && <Icon name={icon} size={16}/>} {children}</>;
  if (Native) return <Native {...props} className={`gx-native-button ${primary?'gx-native-button--primary':''} ${className}`}>{content}</Native>;
  return <button type="button" {...props} className={`gx-button ${primary?'gx-button--primary':''} ${className}`}>{content}</button>;
}
export function IconButton({icon,label,...props}: ButtonHTMLAttributes<HTMLButtonElement> & {icon:IconName;label:string}) {
  const Native = native('DialogButton');
  if (Native) return <Native {...props} className={`gx-icon-button ${props.className??''}`} aria-label={label} title={label}><Icon name={icon} size={18}/></Native>;
  return <button type="button" {...props} className={`gx-icon-button ${props.className??''}`} aria-label={label} title={label}><Icon name={icon} size={18}/></button>;
}
export function Select<T extends string|number>({value,onChange,options,label,disabled}: {value:T;onChange:(value:T)=>void;options:{value:T;label:string}[];label:string;disabled?:boolean}) {
  const Native = native('Dropdown');
  if (Native) return <div className="gx-native-select"><Native disabled={disabled} menuLabel={label} strDefaultLabel={label} rgOptions={options.map(o=>({data:o.value,label:o.label}))} selectedOption={value} contextMenuPositionOptions={{bMatchWidth:true}} onChange={(option:any)=>onChange(option.data as T)}/></div>;
  return <select aria-label={label} value={value} disabled={disabled} onChange={e=>onChange((typeof value==='number'?Number(e.target.value):e.target.value) as T)}>{options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select>;
}
export function Checkbox({checked,onChange,label,disabled}: {checked:boolean;onChange:(value:boolean)=>void;label:string;disabled?:boolean}) {
  const Native = native('DialogCheckbox');
  if (Native) return <Native controlled checked={checked} disabled={disabled} aria-label={label} onChange={onChange}/>;
  return <input className="gx-checkbox" type="checkbox" aria-label={label} checked={checked} disabled={disabled} onChange={e=>onChange(e.target.checked)}/>;
}
export function Toggle({checked,onChange,label,disabled}: {checked:boolean;onChange:(value:boolean)=>void;label:string;disabled?:boolean}) {
  const Native = native('Toggle');
  if (Native) return <div className="gx-toggle" role="group" aria-label={label}><Native value={checked} disabled={disabled} onChange={onChange}/></div>;
  return <label className="gx-toggle"><input type="checkbox" role="switch" aria-label={label} checked={checked} disabled={disabled} onChange={e=>onChange(e.target.checked)}/><span aria-hidden="true"/></label>;
}
export function TextInput({label,description,className='',...props}: InputHTMLAttributes<HTMLInputElement> & {label?:ReactNode;description?:ReactNode}) {
  const Native = native('TextField');
  if (Native) return <Native {...props} label={label} description={description} className={`gx-native-input ${className}`}/>;
  return <input {...props} className={`gx-input ${className}`}/>;
}
export function Modal({title,children,onClose,footer}: {title:string;children:ReactNode;onClose:()=>void;footer?:ReactNode}) {
  const doc=useDocument();
  const ref=useRef<HTMLDivElement>(null);
  const closeRef=useRef(onClose);closeRef.current=onClose;
  useEffect(()=>{
    const previous=doc.activeElement as HTMLElement|null;
    const root=ref.current;
    const focusables=()=>Array.from(root?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')??[]);
    (root?.querySelector<HTMLElement>('input,select,textarea')??focusables()[0])?.focus();
    const listener=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){event.stopPropagation();closeRef.current();}
      if(event.key==='Tab'){const items=focusables();const first=items[0],last=items[items.length-1];if(event.shiftKey&&doc.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&doc.activeElement===last){event.preventDefault();first?.focus();}}
    };
    root?.addEventListener('keydown',listener);
    return ()=>{root?.removeEventListener('keydown',listener);previous?.focus();};
  },[doc]);
  return createPortal(<div className="galex gx-modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><div ref={ref} className="gx-modal DialogPopup_Generic" role="dialog" aria-modal="true" aria-label={title}><header><h2>{title}</h2><IconButton icon="x" label={t('close')} onClick={onClose}/></header><div className="gx-modal-body">{children}</div>{footer&&<footer>{footer}</footer>}</div></div>,doc.body);
}
export function Confirm({title,children,onClose,onConfirm,busy,danger}: {title:string;children:ReactNode;onClose:()=>void;onConfirm:()=>void;busy?:boolean;danger?:boolean}) {
  return <Modal title={title} onClose={onClose} footer={<><Button onClick={onClose} disabled={busy}>{t('cancel')}</Button><Button primary className={danger?'gx-danger':''} onClick={onConfirm} disabled={busy}>{busy?t('working'):t('confirm')}</Button></>}><div>{children}</div></Modal>;
}
export function Notice({children,error,onRetry}: {children:ReactNode;error?:boolean;onRetry?:()=>void}) {return <div className={`gx-notice ${error?'gx-notice--error':''}`} role={error?'alert':'status'}><Icon name={error?'warning':'info'} size={17}/><span>{children}</span>{onRetry&&<button onClick={onRetry}>{t('retry')}</button>}</div>;}
export function bytes(value:number) {return value>=1073741824?t('bytesGb',{value:(value/1073741824).toFixed(1)}):value>=1048576?t('bytesMb',{value:(value/1048576).toFixed(1)}):t('bytesKb',{value:Math.round(value/1024)});}
