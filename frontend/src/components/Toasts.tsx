import { store, useAppState } from '../lib/store';
import { cx } from '../lib/format';
import { Icon, type IconName } from './Icon';

const ICONS: Record<string, IconName> = {
	info: 'info',
	success: 'check',
	error: 'warning',
};

export function Toasts() {
	const { toasts } = useAppState();
	if (toasts.length === 0) return null;
	return (
		<div className="gx-toasts" role="status" aria-live="polite">
			{toasts.map((toast) => (
				<div key={toast.id} className={cx('gx-toast', `gx-toast--${toast.kind}`)}>
					<span className="gx-toast__icon">
						<Icon name={ICONS[toast.kind] ?? 'info'} size={15} />
					</span>
					<div className="gx-toast__body">
						<strong>{toast.title}</strong>
						{toast.body ? <span>{toast.body}</span> : null}
					</div>
					<button type="button" className="gx-toast__close" onClick={() => store.dismissToast(toast.id)} aria-label="Dismiss">
						<Icon name="x" size={12} />
					</button>
				</div>
			))}
		</div>
	);
}
