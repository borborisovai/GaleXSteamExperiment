/** `react-dom` shim for the Millennium bundle — Steam exposes its own copy. */
const ReactDOM: any = (window as any).SP_REACTDOM;

export const createRoot = (container: Element | DocumentFragment) => {
	if (typeof ReactDOM?.createRoot === 'function') return ReactDOM.createRoot(container);
	// Older clients only expose `ReactDOM.render` (React 17 style).
	return {
		render(element: unknown) {
			ReactDOM.render(element, container);
		},
		unmount() {
			ReactDOM.unmountComponentAtNode?.(container);
		},
	};
};

export const createPortal = ReactDOM.createPortal;
export const flushSync = ReactDOM.flushSync;
export default ReactDOM;
