import catalogs from './catalogs';
import { getLocale } from './runtime';
function interpolate(template: string, args: Record<string, unknown> = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(args[key] ?? `{${key}}`));
}
type Message = (args?: Record<string, unknown>, options?: { locale?: string }) => string;
export const m = new Proxy({} as Record<string, Message>, {
  get(_target, key: string) {
    return (args = {}, options = {}) => {
      const locale = options.locale ?? getLocale();
      const catalog = catalogs[locale] ?? catalogs.en!;
      return interpolate(catalog[key] ?? catalogs.en![key] ?? key, args);
    };
  },
});
export const expandedConfigEntryDialog_title: Message = (args, options) => m.expandedConfigEntryDialog_title!(args, options);
