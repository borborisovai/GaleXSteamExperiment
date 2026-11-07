import { createElement, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon, type IconName } from '../components/Icon';
import { steamApi } from '../lib/bridge';
import { useDocument } from '../lib/DocumentContext';

export interface ModContextMenuItem {
  id: string;
  label: string;
  icon?: IconName;
  disabled?: boolean;
  danger?: boolean;
  children?: ModContextMenuItem[];
  onSelect?: () => void;
}
interface MenuPoint { x: number; y: number }
interface NativeMenuInstance { Hide?: () => void }
const nativeMenus = new WeakMap<Document, NativeMenuInstance>();

export function closeSteamModContextMenu(doc: Document) {
  const instance = nativeMenus.get(doc);
  nativeMenus.delete(doc);
  try { instance?.Hide?.(); } catch { /* Steam may already have hidden it. */ }
}

/* Steam exports the desktop Menu/MenuItem pair through Millennium. The submenu
   component is not a named SDK export, so discover it by its public Steam
   component shape instead of a webpack id or hashed CSS class. */
function findSteamSubMenu(api: any) {
  const find = api?.findModuleExport;
  if (typeof find !== 'function') return undefined;
  try {
    // Only the real Steam submenu class is safe. A broad source-text heuristic
    // can match unrelated route components (e.g. Downloads) and render a whole
    // Steam page inside the mod context menu.
    return find((value: any) => typeof value === 'function' && typeof value.prototype?.ShowSubMenu === 'function' && typeof value.prototype?.RenderSubMenu === 'function');
  } catch { return undefined; }
}

function itemLabel(item: ModContextMenuItem): ReactNode {
  return <>{item.icon && <span className="gx-context-menu-icon"><Icon name={item.icon} size={16}/></span>}<span>{item.label}</span></>;
}
function steamItems(items: ModContextMenuItem[], MenuItem: any, SubMenu: any): ReactNode[] {
  return items.map(item => {
    if (item.children?.length) return createElement(SubMenu, { key: item.id, label: itemLabel(item), disabled: item.disabled }, steamItems(item.children, MenuItem, SubMenu));
    return createElement(MenuItem, {
      key: item.id,
      disabled: item.disabled,
      tone: item.danger ? 'destructive' : undefined,
      onSelected: item.disabled ? undefined : () => item.onSelect?.(),
    }, itemLabel(item));
  });
}

/** Returns false when this Steam/Millennium build cannot render the complete
 * native menu; the caller then uses the accessible DOM fallback. */
export function openSteamModContextMenu(items: ModContextMenuItem[], anchor: HTMLElement, label: string, point?: MenuPoint): boolean {
  const api = steamApi() as any;
  const show = api?.showContextMenu, Menu = api?.Menu, MenuItem = api?.MenuItem;
  if (typeof show !== 'function' || typeof Menu !== 'function' || typeof MenuItem !== 'function') return false;
  const SubMenu = items.some(item => item.children?.length) ? findSteamSubMenu(api) : undefined;
  if (items.some(item => item.children?.length) && !SubMenu) return false;
  const doc = anchor.ownerDocument;
  closeSteamModContextMenu(doc);
  try {
    const menu = createElement(Menu, { label }, steamItems(items, MenuItem, SubMenu));
    // Steam's showContextMenu accepts either an element or a mouse-like event.
    // The event form anchors at the pointer; the element form serves Shift+F10.
    const target = point ? {
      preventDefault() {}, stopPropagation() {},
      currentTarget: anchor, clientX: point.x, clientY: point.y,
    } : anchor;
    const instance = show(menu, target, { bFitToWindow: true, bShiftToFitWindow: true, bOverlapHorizontal: true, bOverlapVertical: true });
    if (instance) nativeMenus.set(doc, instance);
    return true;
  } catch { return false; }
}

function FallbackList({ items, label, point, root = false, onClose, onBack }: {
  items: ModContextMenuItem[]; label: string; point?: MenuPoint; root?: boolean;
  onClose: () => void; onBack?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const win = el.ownerDocument.defaultView;
    if (!win) return;
    const rect = el.getBoundingClientRect();
    if (root) {
      el.style.left = `${Math.max(8, Math.min(rect.left, win.innerWidth - rect.width - 8))}px`;
      el.style.top = `${Math.max(8, Math.min(rect.top, win.innerHeight - rect.height - 8))}px`;
    } else {
      const parent = el.parentElement?.getBoundingClientRect();
      if (rect.right > win.innerWidth - 8) { el.style.left = 'auto'; el.style.right = 'calc(100% - 4px)'; }
      if (parent && rect.bottom > win.innerHeight - 8) el.style.top = `${Math.max(8, win.innerHeight - rect.height - 8) - parent.top}px`;
    }
  }, [root, items]);
  const buttons = () => Array.from(ref.current?.querySelectorAll<HTMLButtonElement>(':scope > .gx-context-menu-item-wrap > button:not(:disabled)') ?? []);
  useEffect(() => { if (root) (buttons()[0] ?? ref.current)?.focus(); }, [root]);
  return <div
    ref={ref}
    className={`galex gx-context-menu${root ? ' gx-context-menu--root' : ' gx-context-submenu'}${root && openId ? ' gx-context-menu--submenu-open' : ''}`}
    role="menu"
    aria-label={label}
    tabIndex={-1}
    style={root && point ? { left: point.x, top: point.y } : undefined}
    onKeyDown={event => {
      const target = event.target as HTMLButtonElement;
      const list = buttons();
      const index = list.indexOf(target);
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const next = event.key === 'ArrowDown' ? (index + 1) % list.length : (index - 1 + list.length) % list.length;
        list[next]?.focus();
      } else if (event.key === 'Home') { event.preventDefault(); list[0]?.focus(); }
      else if (event.key === 'End') { event.preventDefault(); list[list.length - 1]?.focus(); }
      else if (event.key === 'ArrowRight' && target.getAttribute('aria-haspopup') === 'menu') {
        event.preventDefault();
        const id = target.dataset.itemId ?? null;
        setOpenId(id);
        setTimeout(() => ref.current?.querySelector<HTMLButtonElement>('.gx-context-submenu button:not(:disabled)')?.focus(), 0);
      } else if (event.key === 'ArrowLeft' && onBack) { event.preventDefault(); onBack(); }
      else if (event.key === 'Escape' && onBack) { event.preventDefault(); event.stopPropagation(); onBack(); }
    }}
  >
    {items.map(item => {
      const hasChildren = !!item.children?.length;
      const open = openId === item.id;
      return <div key={item.id} className="gx-context-menu-item-wrap" onMouseEnter={() => setOpenId(hasChildren ? item.id : null)}>
        <button
          type="button"
          role="menuitem"
          data-item-id={item.id}
          className={`gx-context-menu-item${item.danger ? ' gx-context-menu-item--danger' : ''}`}
          disabled={item.disabled}
          aria-haspopup={hasChildren ? 'menu' : undefined}
          aria-expanded={hasChildren ? open : undefined}
          onFocus={() => { if (hasChildren) setOpenId(item.id); }}
          onClick={() => {
            if (hasChildren) { setOpenId(item.id); return; }
            onClose();
            item.onSelect?.();
          }}
        >
          {itemLabel(item)}
          {hasChildren && <Icon name="chevron-right" size={14} className="gx-context-menu-arrow"/>}
        </button>
        {hasChildren && open && <FallbackList items={item.children!} label={item.label} onClose={onClose} onBack={() => {
          setOpenId(null);
          ref.current?.querySelector<HTMLButtonElement>(`button[data-item-id="${item.id}"]`)?.focus();
        }}/>}
      </div>;
    })}
  </div>;
}

export function ModContextMenu({ items, label, point, anchor, onClose }: {
  items: ModContextMenuItem[]; label: string; point: MenuPoint; anchor: HTMLElement; onClose: () => void;
}) {
  const doc = useDocument();
  const closeRef = useRef(onClose); closeRef.current = onClose;
  useEffect(() => {
    const previous = doc.activeElement as HTMLElement | null;
    const pointer = (event: Event) => {
      const target = event.target as Node | null;
      if (!target || !(target instanceof doc.defaultView!.Node) || !doc.body.contains(target)) return;
      if ((target as Element).closest?.('.gx-context-menu')) return;
      closeRef.current();
    };
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') { event.preventDefault(); closeRef.current(); } };
    const scroll = (event: Event) => {
      const target = event.target as Node | null;
      if (target && (target as Element).closest?.('.gx-context-menu')) return;
      closeRef.current();
    };
    doc.addEventListener('pointerdown', pointer, true);
    doc.addEventListener('keydown', key, true);
    doc.addEventListener('scroll', scroll, true);
    doc.defaultView?.addEventListener('resize', onClose);
    doc.defaultView?.addEventListener('blur', onClose);
    return () => {
      doc.removeEventListener('pointerdown', pointer, true);
      doc.removeEventListener('keydown', key, true);
      doc.removeEventListener('scroll', scroll, true);
      doc.defaultView?.removeEventListener('resize', onClose);
      doc.defaultView?.removeEventListener('blur', onClose);
      (previous?.isConnected ? previous : anchor.isConnected ? anchor : null)?.focus?.();
    };
  }, [doc, anchor]);
  return createPortal(<FallbackList items={items} label={label} point={point} root onClose={onClose}/>, doc.body);
}
