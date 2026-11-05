/**
 * React shim for the Millennium bundle.
 *
 * The Steam client already ships React inside its own webpack runtime. Instead of
 * bundling a second copy (which breaks hook ordering against Steam's reconciler
 * and doubles the payload), GaleX resolves `react` to this module when built with
 * `--mode plugin`. The symbols come from `window.SP_REACT`, which Millennium
 * publishes once the client finished booting.
 */
const R: any = (window as any).SP_REACT;

if (!R) {
	// Failing loudly here is better than a cryptic "invalid hook call" later.
	console.error('[GaleX] window.SP_REACT is missing — is Millennium loaded?');
}

export const createElement = R.createElement;
export const cloneElement = R.cloneElement;
export const createContext = R.createContext;
export const createRef = R.createRef;
export const forwardRef = R.forwardRef;
export const memo = R.memo;
export const useCallback = R.useCallback;
export const useContext = R.useContext;
export const useDebugValue = R.useDebugValue;
export const useDeferredValue = R.useDeferredValue;
export const useEffect = R.useEffect;
export const useId = R.useId;
export const useImperativeHandle = R.useImperativeHandle;
export const useLayoutEffect = R.useLayoutEffect;
export const useMemo = R.useMemo;
export const useReducer = R.useReducer;
export const useRef = R.useRef;
export const useState = R.useState;
export const useSyncExternalStore = R.useSyncExternalStore;
export const useTransition = R.useTransition;
export const Component = R.Component;
export const PureComponent = R.PureComponent;
export const Fragment = R.Fragment;
export const StrictMode = R.StrictMode;
export const Suspense = R.Suspense;
export const Children = R.Children;
export const isValidElement = R.isValidElement;
export const version = R.version;

export default R;
