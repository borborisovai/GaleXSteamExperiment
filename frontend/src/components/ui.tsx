import {
	useEffect,
	useId,
	useRef,
	useState,
	type ChangeEvent,
	type KeyboardEvent,
	type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { cx, gradientFor, initials } from '../lib/format';
import { Icon, type IconName } from './Icon';

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';

export interface ButtonProps {
	children?: ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	variant?: ButtonVariant;
	size?: 'sm' | 'md' | 'lg';
	icon?: IconName;
	iconRight?: IconName;
	disabled?: boolean;
	loading?: boolean;
	title?: string;
	full?: boolean;
	type?: 'button' | 'submit';
	className?: string;
}

export function Button({
	children,
	onClick,
	variant = 'secondary',
	size = 'md',
	icon,
	iconRight,
	disabled,
	loading,
	title,
	full,
	type = 'button',
	className,
}: ButtonProps) {
	return (
		<button
			type={type}
			className={cx('gx-btn', `gx-btn--${variant}`, `gx-btn--${size}`, full && 'gx-btn--full', className)}
			onClick={onClick}
			disabled={disabled || loading}
			title={title}
		>
			{loading ? <span className="gx-spinner gx-spinner--sm" /> : icon ? <Icon name={icon} size={size === 'sm' ? 14 : 16} /> : null}
			{children ? <span>{children}</span> : null}
			{iconRight ? <Icon name={iconRight} size={size === 'sm' ? 14 : 16} /> : null}
		</button>
	);
}

export interface IconButtonProps {
	icon: IconName;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	title: string;
	size?: number;
	disabled?: boolean;
	active?: boolean;
	danger?: boolean;
	className?: string;
}

export function IconButton({ icon, onClick, title, size = 16, disabled, active, danger, className }: IconButtonProps) {
	return (
		<button
			type="button"
			aria-label={title}
			title={title}
			className={cx('gx-iconbtn', active && 'is-active', danger && 'is-danger', className)}
			onClick={onClick}
			disabled={disabled}
		>
			<Icon name={icon} size={size} />
		</button>
	);
}

/* ------------------------------------------------------------------ */
/* Switch                                                              */
/* ------------------------------------------------------------------ */

export interface ToggleProps {
	checked: boolean;
	onChange: (next: boolean) => void;
	label?: string;
	disabled?: boolean;
	size?: 'sm' | 'md';
}

export function Toggle({ checked, onChange, label, disabled, size = 'md' }: ToggleProps) {
	const handleKey = (event: KeyboardEvent<HTMLButtonElement>) => {
		if (event.key === ' ' || event.key === 'Enter') {
			event.preventDefault();
			if (!disabled) onChange(!checked);
		}
	};
	return (
		<button
			type="button"
			role="switch"
			aria-checked={checked}
			aria-label={label}
			className={cx('gx-toggle', checked && 'is-on', size === 'sm' && 'gx-toggle--sm')}
			disabled={disabled}
			onClick={(event) => {
				event.stopPropagation();
				onChange(!checked);
			}}
			onKeyDown={handleKey}
		>
			<span className="gx-toggle__knob" />
		</button>
	);
}

/* ------------------------------------------------------------------ */
/* Chips, badges                                                       */
/* ------------------------------------------------------------------ */

export interface ChipProps {
	children: ReactNode;
	active?: boolean;
	onClick?: () => void;
	count?: number;
	tone?: 'default' | 'accent';
}

export function Chip({ children, active, onClick, count, tone = 'default' }: ChipProps) {
	return (
		<button
			type="button"
			className={cx('gx-chip', active && 'is-active', tone === 'accent' && 'gx-chip--accent', !onClick && 'is-static')}
			onClick={onClick}
			disabled={!onClick}
		>
			<span>{children}</span>
			{count !== undefined ? <span className="gx-chip__count">{count}</span> : null}
		</button>
	);
}

export function Badge({
	children,
	tone = 'neutral',
	icon,
}: {
	children?: ReactNode;
	tone?: 'neutral' | 'blue' | 'green' | 'amber' | 'red' | 'purple';
	icon?: IconName;
}) {
	return (
		<span className={cx('gx-badge', `gx-badge--${tone}`)}>
			{icon ? <Icon name={icon} size={11} /> : null}
			{children}
		</span>
	);
}

/* ------------------------------------------------------------------ */
/* Feedback                                                            */
/* ------------------------------------------------------------------ */

export function Spinner({ size = 18 }: { size?: number }) {
	return <span className="gx-spinner" style={{ width: size, height: size }} />;
}

export function ProgressBar({ value, tone = 'accent' }: { value: number; tone?: 'accent' | 'success' | 'danger' }) {
	const pct = Math.max(0, Math.min(1, value)) * 100;
	return (
		<div className="gx-progress" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
			<div className={cx('gx-progress__fill', `gx-progress__fill--${tone}`)} style={{ width: `${pct}%` }} />
		</div>
	);
}

export function Skeleton({ height = 16, width = '100%', radius = 6 }: { height?: number; width?: number | string; radius?: number }) {
	return <div className="gx-skeleton" style={{ height, width, borderRadius: radius }} />;
}

export function EmptyState({
	icon = 'package',
	title,
	body,
	action,
}: {
	icon?: IconName;
	title: string;
	body?: string;
	action?: ReactNode;
}) {
	return (
		<div className="gx-empty">
			<div className="gx-empty__icon">
				<Icon name={icon} size={26} />
			</div>
			<h3>{title}</h3>
			{body ? <p>{body}</p> : null}
			{action ? <div className="gx-empty__action">{action}</div> : null}
		</div>
	);
}

/* ------------------------------------------------------------------ */
/* Inputs                                                              */
/* ------------------------------------------------------------------ */

export interface TextInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	icon?: IconName;
	autoFocus?: boolean;
	onSubmit?: () => void;
	className?: string;
	ariaLabel?: string;
}

export function TextInput({ value, onChange, placeholder, icon, autoFocus, onSubmit, className, ariaLabel }: TextInputProps) {
	return (
		<div className={cx('gx-input', className)}>
			{icon ? <Icon name={icon} size={16} /> : null}
			<input
				value={value}
				placeholder={placeholder}
				aria-label={ariaLabel ?? placeholder}
				autoFocus={autoFocus}
				onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
				onKeyDown={(event) => {
					if (event.key === 'Enter' && onSubmit) onSubmit();
				}}
			/>
			{value ? (
				<button type="button" className="gx-input__clear" onClick={() => onChange('')} aria-label="Clear">
					<Icon name="x" size={13} />
				</button>
			) : null}
		</div>
	);
}

export function Select<T extends string>({
	value,
	options,
	onChange,
	ariaLabel,
}: {
	value: T;
	options: { value: T; label: string }[];
	onChange: (value: T) => void;
	ariaLabel?: string;
}) {
	return (
		<div className="gx-select">
			<select value={value} aria-label={ariaLabel} onChange={(event) => onChange(event.target.value as T)}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<Icon name="chevron-down" size={13} />
		</div>
	);
}

export function Segmented<T extends string>({
	value,
	options,
	onChange,
}: {
	value: T;
	options: { value: T; label: string; icon?: IconName }[];
	onChange: (value: T) => void;
}) {
	return (
		<div className="gx-segmented">
			{options.map((option) => (
				<button
					key={option.value}
					type="button"
					className={cx('gx-segmented__item', value === option.value && 'is-active')}
					onClick={() => onChange(option.value)}
					title={option.label}
				>
					{option.icon ? <Icon name={option.icon} size={14} /> : null}
					<span>{option.label}</span>
				</button>
			))}
		</div>
	);
}

/* ------------------------------------------------------------------ */
/* Overlays                                                            */
/* ------------------------------------------------------------------ */

export function useEscapeKey(active: boolean, onEscape: () => void) {
	useEffect(() => {
		if (!active) return;
		const handler = (event: globalThis.KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.stopPropagation();
				onEscape();
			}
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [active, onEscape]);
}

function Overlay({ onClose, children, className }: { onClose: () => void; children: ReactNode; className?: string }) {
	return createPortal(
		<div className={cx('gx-overlay', className)} onMouseDown={onClose}>
			<div onMouseDown={(event) => event.stopPropagation()}>{children}</div>
		</div>,
		document.body,
	);
}

export function Modal({
	title,
	children,
	onClose,
	footer,
	width = 520,
}: {
	title: string;
	children: ReactNode;
	onClose: () => void;
	footer?: ReactNode;
	width?: number;
}) {
	useEscapeKey(true, onClose);
	const titleId = useId();
	return (
		<Overlay onClose={onClose}>
			<div className="gx-modal" role="dialog" aria-modal="true" aria-labelledby={titleId} style={{ width }}>
				<header className="gx-modal__head">
					<h2 id={titleId}>{title}</h2>
					<IconButton icon="x" title="Close" onClick={onClose} />
				</header>
				<div className="gx-modal__body">{children}</div>
				{footer ? <footer className="gx-modal__foot">{footer}</footer> : null}
			</div>
		</Overlay>
	);
}

export function Drawer({
	title,
	subtitle,
	children,
	onClose,
	footer,
	width = 560,
}: {
	title: ReactNode;
	subtitle?: ReactNode;
	children: ReactNode;
	onClose: () => void;
	footer?: ReactNode;
	width?: number;
}) {
	useEscapeKey(true, onClose);
	return createPortal(
		<div className="gx-drawer-scrim" onMouseDown={onClose}>
			<aside
				className="gx-drawer"
				role="dialog"
				aria-modal="true"
				style={{ width }}
				onMouseDown={(event) => event.stopPropagation()}
			>
				<header className="gx-drawer__head">
					<div className="gx-drawer__titles">
						<h2>{title}</h2>
						{subtitle ? <div className="gx-drawer__subtitle">{subtitle}</div> : null}
					</div>
					<IconButton icon="x" title="Close" onClick={onClose} />
				</header>
				<div className="gx-drawer__body">{children}</div>
				{footer ? <footer className="gx-drawer__foot">{footer}</footer> : null}
			</aside>
		</div>,
		document.body,
	);
}

export function ConfirmDialog({
	title,
	body,
	confirmLabel = 'Confirm',
	danger,
	onConfirm,
	onCancel,
	children,
}: {
	title: string;
	body?: string;
	confirmLabel?: string;
	danger?: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	children?: ReactNode;
}) {
	const confirmRef = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		confirmRef.current?.focus();
	}, []);
	return (
		<Modal
			title={title}
			onClose={onCancel}
			width={440}
			footer={
				<>
					<Button onClick={onCancel}>Cancel</Button>
					<Button variant={danger ? 'danger' : 'primary'} onClick={onConfirm}>
						{confirmLabel}
					</Button>
				</>
			}
		>
			{body ? <p className="gx-modal__text">{body}</p> : null}
			{children}
		</Modal>
	);
}

/* ------------------------------------------------------------------ */
/* Avatars                                                             */
/* ------------------------------------------------------------------ */

export function Avatar({
	name,
	src,
	size = 44,
	rounded = 10,
}: {
	name: string;
	src?: string;
	size?: number;
	rounded?: number;
}) {
	const [failed, setFailed] = useState(false);
	if (src && !failed) {
		return (
			<img
				className="gx-avatar gx-avatar--img"
				src={src}
				alt=""
				style={{ width: size, height: size, borderRadius: rounded }}
				onError={() => setFailed(true)}
				loading="lazy"
			/>
		);
	}
	return (
		<div
			className="gx-avatar"
			style={{
				width: size,
				height: size,
				borderRadius: rounded,
				background: gradientFor(name),
				fontSize: Math.max(11, Math.round(size / 2.8)),
			}}
			aria-hidden="true"
		>
			{initials(name)}
		</div>
	);
}
