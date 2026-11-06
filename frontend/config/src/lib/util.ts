import type { ConfigEntry } from '$lib/types';
export function capitalize(str: string): string { return str.charAt(0).toLocaleUpperCase() + str.slice(1); }
export interface ListSeparator { type: 'default' | 'custom'; char: string }
const listSeparatorKeyword = 'ListSeparator=';
export function getListSeparator({ description }: ConfigEntry): ListSeparator {
  if (description !== null) {
    const separatorIndex = description.indexOf(listSeparatorKeyword);
    if (separatorIndex !== -1) return { type: 'custom', char: description[separatorIndex + listSeparatorKeyword.length] };
  }
  return { type: 'default', char: ',' };
}
export function isValidHex(str: string) { return /^#?([0-9A-Fa-f]{6})$/.test(str); }
export function selectItems(items: string[], getLabel: (item: string) => string = (value) => value as string) {
  return items.map((item) => ({ value: item, label: getLabel(item) }));
}
export function emptyOrUndefined(str: string) { return str.length === 0 ? undefined : str; }
export function shortenFileSize(size: number): string {
  const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toFixed(1) + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}
