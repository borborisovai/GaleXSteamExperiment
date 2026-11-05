/**
 * Minimal `react/jsx-runtime` implementation for the Millennium bundle.
 *
 * The plugin is compiled with the automatic JSX transform, so every element in
 * the tree flows through these three exports. Two rules matter:
 *
 * 1. If Millennium published `window.SP_JSX_FACTORY` (it does, right before it
 *    imports plugin modules), use Steam's own factory — identical semantics to
 *    the rest of the client, zero overhead.
 * 2. Otherwise fall back to `React.createElement` with *spread* children. Passing
 *    the children array positionally is what the stock runtime does, and it keeps
 *    React from mistaking static sibling JSX for an unkeyed list.
 */
const R: any = (window as any).SP_REACT;
const F: any = (window as any).SP_JSX_FACTORY;

function makeElement(type: unknown, props: any, key?: string) {
	const { children, ...rest } = props ?? {};
	if (key !== undefined) rest.key = key;
	if (children === undefined) return R.createElement(type, rest);
	if (Array.isArray(children)) return R.createElement(type, rest, ...children);
	return R.createElement(type, rest, children);
}

const factory = typeof F?.jsx === 'function' ? F : undefined;

export const Fragment = factory?.Fragment ?? R.Fragment;
export const jsx = factory ? factory.jsx : makeElement;
export const jsxs = factory?.jsxs ?? makeElement;
export const jsxDEV = factory ? factory.jsx : makeElement;
