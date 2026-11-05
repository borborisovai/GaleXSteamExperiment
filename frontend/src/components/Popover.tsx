import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cx } from '../lib/format';
import { Icon, type IconName } from './Icon';

export interface PopoverProps {
	trigger: (props: { open: boolean; toggle: () => void }) => ReactNode;
	children: (close: () => void) => ReactNode;
	align?: 'start' | 'end';
	width?: number;
	panelClassName?: string;
}

export function Popover({ trigger, children, align = 'start', width, panelClassName }: PopoverProps) {
	const [open, setOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		const onPointerDown = (event: MouseEvent) => {
			if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
		};
		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setOpen(false);
		};
		document.addEventListener('mousedown', onPointerDown, true);
		document.addEventListener('keydown', onKey, true);
		return () => {
			document.removeEventListener('mousedown', onPointerDown, true);
			document.removeEventListener('keydown', onKey, true);
		};
	}, [open]);

	return (
		<div className="gx-pop" ref={rootRef}>
			{trigger({ open, toggle: () => setOpen((value) => !value) })}
			{open ? (
				<div
					className={cx('gx-pop__panel', align === 'end' && 'gx-pop__panel--end', panelClassName)}
					style={width ? { width } : undefined}
					role="menu"
				>
					{children(() => setOpen(false))}
				</div>
			) : null}
		</div>
	);
}

export function MenuItem({
	icon,
	children,
	onClick,
	disabled,
	trailing,
	active,
}: {
	icon?: IconName;
	children: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	trailing?: ReactNode;
	active?: boolean;
}) {
	return (
		<button
			type="button"
			role="menuitem"
			className={cx('gx-menuitem', active && 'is-active')}
			disabled={disabled}
			onClick={onClick}
		>
			{icon ? <Icon name={icon} size={15} /> : <span className="gx-menuitem__spacer" />}
			<span className="gx-menuitem__label">{children}</span>
			{trailing ? <span className="gx-menuitem__trailing">{trailing}</span> : null}
		</button>
	);
}

export function MenuSeparator() {
	return <div className="gx-menu-sep" role="separator" />;
}

export function MenuLabel({ children }: { children: ReactNode }) {
	return <div className="gx-menu-label">{children}</div>;
}
