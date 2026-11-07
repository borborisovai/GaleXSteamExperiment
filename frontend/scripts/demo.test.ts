import assert from 'node:assert/strict';
import { demoTransport } from '../src/demo/transport';
import { localeFromSteam, localizeBackendError, setLocale } from '../src/lib/i18n';
import { defaultQuery, type ProfileQuery, type Profiles, type ActionResult, type ImportData, type Prefs } from '../src/lib/types';
import { composeLaunchOptions } from '../src/steam/launchOptions';
import { normalizeAppId, resolveSteamGame } from '../src/steam/apps';

assert.equal(localeFromSteam('english'), 'en');
assert.equal(localeFromSteam('russian'), 'ru');
assert.equal(localeFromSteam('german'), 'en', 'unsupported Steam languages fall back to English, not Russian');
setLocale('english');
assert.equal(localizeBackendError('Не выбрана игра'), 'No game selected');
setLocale('russian');
assert.equal(localizeBackendError('Не выбрана игра'), 'Не выбрана игра');
setLocale('english');

assert.equal(composeLaunchOptions('-console', '--doorstop-enable true', 'windows'), '-console --doorstop-enable true');
assert.equal(composeLaunchOptions('PROTON_LOG=1 %command% -console', '--doorstop-enable true', 'linux'), 'PROTON_LOG=1 %command% -console --doorstop-enable true');
assert.equal(composeLaunchOptions('PROTON_LOG=1 %command% -console --doorstop-enable true', '--doorstop-enable false', 'linux', '--doorstop-enable true'), 'PROTON_LOG=1 %command% -console --doorstop-enable false');
assert.equal(composeLaunchOptions('%command% --doorstop-enable true', '', 'linux', '--doorstop-enable true'), '');
assert.equal(composeLaunchOptions('-console --doorstop-enable true', '', 'windows', '--doorstop-enable true'), '-console');
assert.equal(normalizeAppId(-872487061), 3422480235, 'signed shortcut IDs normalize to unsigned 32-bit');
assert.equal(normalizeAppId(0), undefined);
const cachedGames = [{ slug: 'lethal-company', name: 'Lethal Company', modLoader: 'BepInEx', steamAppId: 1966720, backends: ['Thunderstore'] }];
assert.equal(resolveSteamGame(3422480235, cachedGames, { '3422480235': 'lethal-company' })?.nonSteam, true);
assert.equal(resolveSteamGame(1966720, cachedGames, { '1966720': 'lethal-company' })?.nonSteam, undefined, 'official Steam AppIDs are not shortcut overrides');
assert.equal(resolveSteamGame(3422480235, cachedGames, { '3422480235': 'unknown-game' }), undefined);

const call = (method: string, args: Record<string, unknown> = {}) => demoTransport('command', { method, args });
const unwrap = async <T>(method: string, args: Record<string, unknown> = {}) => {
  const result = await call(method, args);
  assert.equal(result.ok, true, result.error);
  return result.data as T;
};

const snapshot = await demoTransport('snapshot', {});
assert.equal(snapshot.ok, true);
assert.ok(snapshot.data.games.length >= 4);
assert.equal(snapshot.data.bridgeVersion, 2);

const launchPlan = await unwrap<{ args: string; platform: string }>('launch_plan', { slug: 'lethal-company' });
assert.ok(launchPlan.args.includes('doorstop'), 'demo exposes Gale launch args for Steam launch-options sync');
assert.equal(launchPlan.platform, 'linux');

const slug = 'lethal-company';
const profiles = await unwrap<Profiles>('profiles', { slug });
assert.equal(profiles.activeId, 1);
assert.ok(profiles.profiles.length >= 2);

const all = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: defaultQuery });
assert.equal(all.totalModCount, 8);
const search = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: { ...defaultQuery, searchTerm: 'more company' } });
assert.equal(search.mods.length, 1);
assert.equal(search.mods[0]!.data.name, 'More Company');
const disabled = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: { ...defaultQuery, includeEnabled: false } });
assert.equal(disabled.mods.length, 2);
const sized = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: { ...defaultQuery, sortBy: 'diskSpace', sortOrder: 'descending' } });
assert.equal(sized.mods[0]!.data.name, 'HD Lethal Company');

const dependants = await unwrap<{ fullName: string; preferredVersion?: string }[]>('get_dependants', { slug, profileId: 1, uuid: 'demo-package-0' });
assert.ok(dependants.length > 0, 'demo exposes Gale dependants for the loader');
await unwrap('open_mod_dir', { slug, profileId: 1, uuid: 'demo-package-0' });
await unwrap('change_mod_version', { slug, profileId: 1, id: { packageUuid: 'demo-package-1', versionUuid: 'demo-version-1-old', backend: 'Thunderstore' } });
let versioned = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: defaultQuery });
assert.equal(versioned.mods.find(m => m.data.uuid === 'demo-package-1')!.data.version, '0.1.0');
await unwrap('change_mod_version', { slug, profileId: 1, id: { packageUuid: 'demo-package-1', versionUuid: 'demo-hexium-1', backend: 'Hexium' } });
versioned = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: defaultQuery });
const switched = versioned.mods.find(m => m.data.uuid === 'demo-package-1')!;
assert.equal(switched.data.backend, 'Hexium');
assert.equal(switched.alternateBackend?.backend, 'Thunderstore');

const confirm = await unwrap<ActionResult>('toggle_mod', { slug, profileId: 1, uuid: 'demo-package-0' });
assert.equal(confirm.type, 'confirm');
await unwrap('force_toggle_mods', { slug, profileId: 1, uuids: ['demo-package-0', 'demo-package-1'] });
const afterToggle = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: defaultQuery });
assert.equal(afterToggle.mods.find(m => m.data.uuid === 'demo-package-0')!.enabled, false);

const created = await unwrap<Profiles>('profiles', { slug });
const before = created.profiles.length;
await unwrap('create_profile', { slug, name: 'Тестовый профиль' });
const afterCreate = await unwrap<Profiles>('profiles', { slug });
assert.equal(afterCreate.profiles.length, before + 1);
const newId = afterCreate.profiles[afterCreate.profiles.length - 1]!.id;
await unwrap('activate_profile', { slug, profileId: newId });
assert.equal((await unwrap<Profiles>('profiles', { slug })).activeId, newId);
const empty = await unwrap<ProfileQuery>('mods', { slug, profileId: newId, args: defaultQuery });
assert.equal(empty.mods.length, 0);

const duplicateName = await call('create_profile', { slug, name: 'Тестовый профиль' });
assert.equal(duplicateName.ok, false);
assert.match(duplicateName.error!, /уже существует/);

const imported = await unwrap<ImportData>('read_profile_code', { slug, code: '00000000-0000-4000-8000-000000000001' });
assert.ok(imported.manifest.mods.length > 0);
await unwrap('import_profile', { slug, data: imported });
const afterImport = await unwrap<Profiles>('profiles', { slug });
assert.equal(afterImport.profiles.length, before + 2);

const exported = await unwrap<{ type: string; code: string }>('export_code', { slug, profileId: 1 });
assert.equal(exported.type, 'success');
assert.ok(exported.code.length > 10);

const prefs = await unwrap<Prefs>('prefs', {});
await unwrap('set_prefs', { value: { ...prefs, fetchModsAutomatically: false } });
assert.equal((await unwrap<Prefs>('prefs', {})).fetchModsAutomatically, false);
assert.equal(await unwrap<number>('clear_download_cache', {}), 0);

const removed = await unwrap<ActionResult>('remove_mod', { slug, profileId: 1, uuid: 'demo-package-5' });
assert.equal(removed.type, 'done');
const afterRemove = await unwrap<ProfileQuery>('mods', { slug, profileId: 1, args: defaultQuery });
assert.equal(afterRemove.mods.some(m => m.data.uuid === 'demo-package-5'), false);

const launch = await call('launch', { slug, profileId: 1 });
assert.equal(launch.ok, false);
const unknown = await call('not_a_command', { slug });
assert.equal(unknown.ok, false);
const browser = await demoTransport('browser_url', { slug, profileId: 1 });
assert.equal(browser.ok, true);

console.log('✓ demo transport: catalog, filters, profiles, import/export, prefs, context-menu commands, error envelopes');
