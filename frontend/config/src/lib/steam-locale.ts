const map: Record<string, string> = {
  english: 'en', en: 'en', russian: 'ru-RU', ru: 'ru-RU', german: 'de-DE', de: 'de-DE',
  french: 'fr-FR', fr: 'fr-FR', spanish: 'es-ES', es: 'es-ES', latam: 'es-ES',
  polish: 'pl', pl: 'pl', brazilian: 'pt-BR', 'pt-br': 'pt-BR', swedish: 'sv-SE', sv: 'sv-SE',
  turkish: 'tr-TR', tr: 'tr-TR', ukrainian: 'uk-UA', uk: 'uk-UA', schinese: 'zh-CN',
  'zh-cn': 'zh-CN', tchinese: 'zh-TW', 'zh-tw': 'zh-TW', azerbaijani: 'az-AZ', az: 'az-AZ',
};
export function steamToGaleLocale(value: string | null): string {
  const raw = (value ?? '').toLowerCase().replace(/_/g, '-');
  return map[raw] ?? map[raw.split('-')[0]!] ?? 'en';
}
