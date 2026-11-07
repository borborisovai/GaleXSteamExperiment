import catalogs from './catalogs';
export const locales = Object.keys(catalogs);
export type Locale = string;
let current = 'en';
export function getLocale(): Locale { return current; }
export function setLocale(locale: Locale) { current = catalogs[locale] ? locale : 'en'; }
