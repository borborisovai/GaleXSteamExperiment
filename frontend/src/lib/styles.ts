const STYLE_ID = 'galex-styles';

/** Injects the stylesheet exactly once per CEF context. */
export function injectStyles(css: string) {
	if (typeof document === 'undefined') return;
	if (document.getElementById(STYLE_ID)) return;
	const style = document.createElement('style');
	style.id = STYLE_ID;
	style.textContent = css;
	document.head.appendChild(style);
}
