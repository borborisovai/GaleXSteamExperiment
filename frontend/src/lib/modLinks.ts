import type { ModData } from './types';

/** The same package-page URLs desktop Gale copies from a mod's context menu. */
export function modCommunityUrl(slug: string, data: Pick<ModData, 'backend' | 'author' | 'name'>): string {
  const author = encodeURIComponent(data.author ?? '');
  const name = encodeURIComponent(data.name);
  const game = encodeURIComponent(slug);
  return data.backend === 'Hexium'
    ? `https://${game}.hexium.gg/mods/${author}/${name}`
    : `https://thunderstore.io/c/${game}/p/${author}/${name}/`;
}

export function httpUrl(value?: string | null): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.href : undefined;
  } catch { return undefined; }
}
