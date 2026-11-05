/**
 * Seed data for the GaleX development backend.
 *
 * The real product reads this from Thunderstore; the fixture mirrors the shape
 * of `/c/{community}/api/v1/package-listing-index/` so the UI can be developed
 * and demoed without network access.
 */

const now = Date.now();
const day = 86_400_000;
const iso = (offsetDays) => new Date(now - offsetDays * day).toISOString();

/* ------------------------------------------------------------------ */
/* Games                                                               */
/* ------------------------------------------------------------------ */

export const GAMES = [
	{
		slug: 'lethal-company',
		name: 'Lethal Company',
		popular: true,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: true,
		path: '~/.local/share/Steam/steamapps/common/Lethal Company',
		detectedPath: '~/.local/share/Steam/steamapps/common/Lethal Company',
	},
	{
		slug: 'repo',
		name: 'R.E.P.O.',
		popular: true,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: true,
		path: '~/.local/share/Steam/steamapps/common/REPO',
		detectedPath: '~/.local/share/Steam/steamapps/common/REPO',
	},
	{
		slug: 'riskofrain2',
		name: 'Risk of Rain 2',
		popular: true,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: true,
		path: '~/.local/share/Steam/steamapps/common/Risk of Rain 2',
		detectedPath: '~/.local/share/Steam/steamapps/common/Risk of Rain 2',
	},
	{
		slug: 'valheim',
		name: 'Valheim',
		popular: true,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: false,
		detectedPath: '~/.local/share/Steam/steamapps/common/Valheim',
	},
	{
		slug: 'content-warning',
		name: 'Content Warning',
		popular: true,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: false,
	},
	{
		slug: 'peak',
		name: 'PEAK',
		popular: true,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: false,
	},
	{
		slug: 'subnautica',
		name: 'Subnautica',
		popular: false,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: false,
	},
	{
		slug: 'vrising',
		name: 'V Rising',
		popular: false,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity IL2CPP',
		managed: false,
	},
	{
		slug: 'nasb',
		name: 'Nickelodeon All-Star Brawl',
		popular: false,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: false,
	},
	{
		slug: 'rounds',
		name: 'ROUNDS',
		popular: false,
		modLoader: 'BepInEx',
		modLoaderKind: 'bepinex',
		runtime: 'Unity Mono',
		managed: false,
	},
];

/* ------------------------------------------------------------------ */
/* Thunderstore packages (Lethal Company + R.E.P.O + RoR2)             */
/* ------------------------------------------------------------------ */

function hash(text) {
	let value = 0;
	for (let i = 0; i < text.length; i += 1) value = (value * 31 + text.charCodeAt(i)) % 100000;
	return value;
}

function readme(pkg) {
	return [
		`# ${pkg.name}`,
		'',
		pkg.description,
		'',
		'## Features',
		'',
		...pkg.features.map((feature) => `- ${feature}`),
		'',
		'## Installation',
		'',
		'Install with any Thunderstore mod manager. GaleX resolves the dependencies below automatically.',
		'',
		pkg.dependencies.length
			? `> Requires ${pkg.dependencies.map((dep) => `\`${dep}\``).join(', ')}.`
			: '> No dependencies — this package can be installed on its own.',
		'',
		'## Configuration',
		'',
		'Settings are exposed in `BepInEx/config/` and editable from the **Config** tab without restarting the game.',
	].join('\n');
}

/**
 * @param {object} spec
 */
function pkg(spec) {
	const seed = hash(spec.fullName);
	const versions = spec.versions.map((version, index) => ({
		version,
		versionId: `${spec.fullName}-${version}`,
		dateCreated: iso(6 + index * 26 + (seed % 9)),
		downloads: Math.max(120, Math.round(spec.downloads / (index + 1.4))),
		fileSize: Math.round(spec.size * (1 - index * 0.08)),
		dependencies: [],
		changelog:
			index === 0
				? `### ${version}\n\n${spec.changelog ?? `- Maintenance release\n- Compatibility with the latest game patch`}`
				: '### Older release\n\n- Initial public build',
	}));

	return {
		fullName: spec.fullName,
		name: spec.fullName.split('-').slice(1).join('-'),
		owner: spec.fullName.split('-')[0],
		description: spec.description,
		markdown: readme(spec),
		iconUrl: undefined,
		ratingScore: spec.rating ?? 60 + (seed % 90),
		totalDownloads: spec.downloads,
		categories: spec.categories,
		deprecated: Boolean(spec.deprecated),
		modpack: Boolean(spec.modpack),
		websiteUrl: `https://thunderstore.io/c/lethal-company/p/${spec.fullName.split('-')[0]}/${spec.fullName.split('-').slice(1).join('-')}/`,
		gameSlug: 'lethal-company',
		donationLink: undefined,
		dateCreated: iso(320 - (seed % 60)),
		dateUpdated: versions[0].dateCreated,
		versions,
		dependencies: spec.dependencies,
	};
}

const specs = [
	{
		fullName: 'BepInEx-BepInExPack',
		description: 'BepInEx pack for Mono Unity games. Preconfigured and ready to use.',
		features: ['Loads every plugin in BepInEx/plugins', 'Console output for troubleshooting', 'Required by almost every mod'],
		dependencies: [],
		categories: ['Tools', 'Libraries'],
		versions: ['5.4.2100', '5.4.23'],
		downloads: 4_920_311,
		size: 3_100_000,
		rating: 168,
		changelog: '- Updated BepInEx to 5.4.2100\n- Fixed console window on Proton',
	},
	{
		fullName: 'Evaisa-LethalLib',
		description: 'A shared library for registering custom content: items, moons, enemies and unlockables.',
		features: ['Runtime content registration', 'Networked asset bundles', 'Used by most content mods'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Libraries'],
		versions: ['0.21.2', '0.20.1'],
		downloads: 2_140_877,
		size: 1_240_000,
		rating: 141,
	},
	{
		fullName: 'notnotnotswipez-MoreCompany',
		description: 'Play with up to 32 players instead of four. Includes a lobby list and moderation tools.',
		features: ['Up to 32 players', 'Public lobby browser', 'Kick / ban controls for the host'],
		dependencies: ['BepInEx-BepInExPack', 'Evaisa-LethalLib', 'RugbugRedfern-Skinwalkers'],
		categories: ['Mods', 'Server-side'],
		versions: ['2.4.1', '2.3.0'],
		downloads: 1_872_004,
		size: 890_000,
		rating: 152,
		changelog: '- Lobby list now filters by version\n- Fixed desync when a player leaves during the drop ship sequence',
	},
	{
		fullName: 'RugbugRedfern-Skinwalkers',
		description: 'Cosmetic skin system with dozens of community skins and per-player sync.',
		features: ['40+ skins', 'Server-side visibility', 'Compatible with MoreCompany'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Skins', 'Client-side'],
		versions: ['4.1.4', '4.1.0'],
		downloads: 1_402_119,
		size: 12_400_000,
		rating: 138,
	},
	{
		fullName: 'AinaVT-LethalConfig',
		description: 'In-game configuration menu for every BepInEx mod. Change values without editing files.',
		features: ['Runtime config editor', 'Import / export config profiles', 'Works with every BepInEx plugin'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Tools', 'Client-side'],
		versions: ['1.4.4', '1.4.2'],
		downloads: 1_190_780,
		size: 420_000,
		rating: 128,
		changelog: '- Added search to the config list\n- Values can be reset to default',
	},
	{
		fullName: 'FlipMods-TooManyEmotes',
		description: 'Adds a wheel of emotes with synced animations for every player in the lobby.',
		features: ['36 emotes', 'Emote wheel', 'Prop support'],
		dependencies: ['BepInEx-BepInExPack', 'FlipMods-ReservedItemSlotCore'],
		categories: ['Mods', 'Client-side'],
		versions: ['2.6.2', '2.6.0'],
		downloads: 986_233,
		size: 24_800_000,
		rating: 119,
	},
	{
		fullName: 'FlipMods-ReservedItemSlotCore',
		description: 'Shared framework for reserved hotbar slots used by the FlipMods pack.',
		features: ['Reserved slot API', 'Hotbar rendering hooks', 'Lightweight'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Libraries', 'Client-side'],
		versions: ['2.0.12', '2.0.9'],
		downloads: 812_004,
		size: 96_000,
		rating: 104,
	},
	{
		fullName: 'FlipMods-ReservedWalkieSlot',
		description: 'Dedicated hotbar slot for the walkie-talkie so it never fills your inventory.',
		features: ['One reserved slot', 'Configurable keybind', 'No gameplay changes'],
		dependencies: ['BepInEx-BepInExPack', 'FlipMods-ReservedItemSlotCore'],
		categories: ['Mods', 'Client-side'],
		versions: ['2.0.6', '2.0.4'],
		downloads: 640_218,
		size: 84_000,
		rating: 96,
	},
	{
		fullName: 'Zaggy1024-PathfindingLagFix',
		description: 'Patches enemy pathfinding to remove the stutter caused by large lobbies.',
		features: ['Throttled pathfinding', 'No gameplay changes', 'Multiplayer safe'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Mods', 'Performance'],
		versions: ['1.4.2', '1.4.1'],
		downloads: 2_310_512,
		size: 62_000,
		rating: 132,
	},
	{
		fullName: 'no00ob-LCSoundTool',
		description: 'Common sound utilities so several audio mods can share one loader.',
		features: ['Custom audio loader', 'Memory-friendly streaming', 'Used by audio packs'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Libraries'],
		versions: ['1.4.5', '1.4.3'],
		downloads: 702_881,
		size: 210_000,
		rating: 88,
	},
	{
		fullName: 'Bobbie-FixRPCLag',
		description: 'Reduces RPC allocation churn in busy lobbies without touching gameplay logic.',
		features: ['Lower GC pressure', 'Server & client safe', 'Zero configuration'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Mods', 'Performance'],
		versions: ['0.0.5', '0.0.4'],
		downloads: 488_332,
		size: 48_000,
		rating: 74,
	},
	{
		fullName: 'EliteMasterEric-Coroner',
		description: 'Adds an autopsy report that explains what killed you and when.',
		features: ['Death cause breakdown', 'Shareable report card', 'Works in single and multiplayer'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Mods', 'Client-side'],
		versions: ['1.6.1', '1.5.4'],
		downloads: 512_664,
		size: 180_000,
		rating: 91,
	},
	{
		fullName: 'Dusk-WeatherTweaks',
		description: 'Configurable weather odds and new storm variants for every moon.',
		features: ['Per-moon weather weights', 'New storm visuals', 'Host-authoritative'],
		dependencies: ['BepInEx-BepInExPack', 'Evaisa-LethalLib'],
		categories: ['Mods', 'Server-side'],
		versions: ['3.2.0', '3.1.4'],
		downloads: 288_140,
		size: 1_640_000,
		rating: 83,
	},
	{
		fullName: 'HGG-ImmersiveCompany',
		description: 'Ambient lighting, fog and soundscape overhaul for a creepier facility.',
		features: ['Realtime lighting pass', 'Custom fog', 'Audio ambience'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Mods', 'Client-side'],
		versions: ['1.2.3', '1.2.0'],
		downloads: 341_009,
		size: 8_200_000,
		rating: 97,
	},
	{
		fullName: 'Modpack-CommunityPack',
		description: 'A curated 40-mod Lethal Company pack: performance, QoL and content, no client-side cheats.',
		features: ['Curated and tested', 'Config preset included', 'Updated with each game patch'],
		dependencies: [
			'BepInEx-BepInExPack',
			'Evaisa-LethalLib',
			'AinaVT-LethalConfig',
			'Zaggy1024-PathfindingLagFix',
			'notnotnotswipez-MoreCompany',
		],
		categories: ['Modpacks'],
		versions: ['1.8.0', '1.7.2'],
		downloads: 94_220,
		size: 128_000_000,
		rating: 66,
		modpack: true,
	},
	{
		fullName: 'Legacy-OldTeleporter',
		description: 'Early prototype of the teleporter mod, kept for archival reasons.',
		features: ['Teleporter item', 'Not updated since 2023'],
		dependencies: ['BepInEx-BepInExPack'],
		categories: ['Mods'],
		versions: ['0.1.0', '0.0.9'],
		downloads: 12_004,
		size: 44_000,
		rating: 12,
		deprecated: true,
	},
	/* R.E.P.O. */
	{
		fullName: 'BepInEx-BepInExPack_REPO',
		description: 'BepInEx pack preconfigured for R.E.P.O.',
		features: ['Plug and play loader', 'Console enabled'],
		dependencies: [],
		categories: ['Tools', 'Libraries'],
		gameSlug: 'repo',
		versions: ['5.4.2100', '5.4.23'],
		downloads: 1_204_551,
		size: 3_100_000,
		rating: 102,
	},
	{
		fullName: 'Zehs-REPOLib',
		description: 'Shared content library for R.E.P.O. mods.',
		features: ['Item registration', 'Network sync helpers'],
		dependencies: ['BepInEx-BepInExPack_REPO'],
		categories: ['Libraries'],
		gameSlug: 'repo',
		versions: ['2.1.1', '2.0.6'],
		downloads: 702_455,
		size: 640_000,
		rating: 88,
	},
	{
		fullName: 'nickklmao-REPO_MorePlayers',
		description: 'Raise the lobby cap from 4 to 12 players with host-side moderation.',
		features: ['12 player lobbies', 'Host controls', 'Version checks'],
		dependencies: ['BepInEx-BepInExPack_REPO', 'Zehs-REPOLib'],
		categories: ['Mods', 'Server-side'],
		gameSlug: 'repo',
		versions: ['1.3.0', '1.2.4'],
		downloads: 411_209,
		size: 210_000,
		rating: 79,
	},
	/* Risk of Rain 2 */
	{
		fullName: 'bbepis-BepInExPack_RoR2',
		description: 'BepInEx pack for Risk of Rain 2.',
		features: ['Ready to use', 'Console enabled'],
		dependencies: [],
		categories: ['Tools', 'Libraries'],
		gameSlug: 'riskofrain2',
		versions: ['5.4.2100', '5.4.1901'],
		downloads: 3_304_881,
		size: 3_400_000,
		rating: 155,
	},
	{
		fullName: 'tristanmcpherson-R2API',
		description: 'Core API for content mods on Risk of Rain 2.',
		features: ['Content registration', 'Prefab helpers'],
		dependencies: ['bbepis-BepInExPack_RoR2'],
		categories: ['Libraries'],
		gameSlug: 'riskofrain2',
		versions: ['4.6.19', '4.5.14'],
		downloads: 2_114_332,
		size: 820_000,
		rating: 129,
	},
];

const COMMUNITY_BY_PACKAGE = {
	'BepInEx-BepInExPack_REPO': 'repo',
	'Zehs-REPOLib': 'repo',
	'nickklmao-REPO_MorePlayers': 'repo',
	'bbepis-BepInExPack_RoR2': 'riskofrain2',
	'tristanmcpherson-R2API': 'riskofrain2',
};

export const PACKAGES = specs.map((spec) => {
	const entry = pkg(spec);
	entry.gameSlug = spec.gameSlug ?? COMMUNITY_BY_PACKAGE[spec.fullName] ?? 'lethal-company';
	return entry;
});

/** Resolve dependency version ids now that every listing exists. */
for (const entry of PACKAGES) {
	for (const version of entry.versions) {
		version.dependencies = entry.dependencies.map((dep) => {
			const depEntry = PACKAGES.find((candidate) => candidate.fullName === dep);
			return `${dep}-${depEntry ? depEntry.versions[0].version : '1.0.0'}`;
		});
	}
}

export function packagesFor(gameSlug) {
	return PACKAGES.filter((entry) => entry.gameSlug === gameSlug);
}

export const CATEGORIES = {
	'lethal-company': ['Mods', 'Tools', 'Libraries', 'Skins', 'Performance', 'Client-side', 'Server-side', 'Modpacks', 'Audio'],
	repo: ['Mods', 'Tools', 'Libraries', 'Client-side', 'Server-side'],
	riskofrain2: ['Mods', 'Tools', 'Libraries', 'Characters', 'Items'],
	valheim: ['Mods', 'Tools', 'Libraries', 'Building'],
	'content-warning': ['Mods', 'Tools', 'Libraries'],
	peak: ['Mods', 'Tools', 'Libraries'],
	subnautica: ['Mods', 'Tools', 'Libraries'],
	vrising: ['Mods', 'Tools', 'Libraries'],
	nasb: ['Mods', 'Tools', 'Libraries'],
	rounds: ['Mods', 'Tools', 'Libraries'],
};

/* ------------------------------------------------------------------ */
/* Profiles                                                            */
/* ------------------------------------------------------------------ */

export const PROFILES = [
	{
		id: 1,
		gameSlug: 'lethal-company',
		name: 'Modded co-op',
		active: true,
		createdAt: iso(64),
		customArgs: '',
		path: '~/.local/share/GaleX/profiles/lethal-company/Modded co-op',
	},
	{
		id: 2,
		gameSlug: 'lethal-company',
		name: 'Vanilla+',
		active: false,
		createdAt: iso(31),
		customArgs: '-screen-quality 2',
		path: '~/.local/share/GaleX/profiles/lethal-company/Vanilla+',
	},
	{
		id: 3,
		gameSlug: 'lethal-company',
		name: 'Testing (unstable)',
		active: false,
		createdAt: iso(6),
		customArgs: '--developer-mode',
		path: '~/.local/share/GaleX/profiles/lethal-company/Testing (unstable)',
	},
	{
		id: 4,
		gameSlug: 'repo',
		name: 'Default',
		active: true,
		createdAt: iso(18),
		customArgs: '',
		path: '~/.local/share/GaleX/profiles/repo/Default',
	},
	{
		id: 5,
		gameSlug: 'riskofrain2',
		name: 'Default',
		active: true,
		createdAt: iso(120),
		customArgs: '',
		path: '~/.local/share/GaleX/profiles/riskofrain2/Default',
	},
];

/**
 * Installed mods per profile. `version` is the installed version; a newer one
 * usually exists in the store which is how the Updates view gets populated.
 */
export const INSTALLED = {
	1: [
		{ fullName: 'BepInEx-BepInExPack', version: '5.4.2100', enabled: true, installedDaysAgo: 64 },
		{ fullName: 'Evaisa-LethalLib', version: '0.21.2', enabled: true, installedDaysAgo: 63 },
		{ fullName: 'notnotnotswipez-MoreCompany', version: '2.3.0', enabled: true, installedDaysAgo: 41 },
		{ fullName: 'RugbugRedfern-Skinwalkers', version: '4.1.0', enabled: true, installedDaysAgo: 41 },
		{ fullName: 'AinaVT-LethalConfig', version: '1.4.4', enabled: true, installedDaysAgo: 33 },
		{ fullName: 'FlipMods-TooManyEmotes', version: '2.6.0', enabled: true, installedDaysAgo: 22 },
		{ fullName: 'FlipMods-ReservedItemSlotCore', version: '2.0.12', enabled: true, installedDaysAgo: 22 },
		{ fullName: 'Zaggy1024-PathfindingLagFix', version: '1.4.2', enabled: true, installedDaysAgo: 18 },
		{ fullName: 'no00ob-LCSoundTool', version: '1.4.5', enabled: false, installedDaysAgo: 17 },
		{ fullName: 'Bobbie-FixRPCLag', version: '0.0.5', enabled: true, installedDaysAgo: 12 },
		{ fullName: 'EliteMasterEric-Coroner', version: '1.5.4', enabled: true, installedDaysAgo: 9 },
		{ fullName: 'HGG-ImmersiveCompany', version: '1.2.0', enabled: false, installedDaysAgo: 4 },
	],
	2: [
		{ fullName: 'BepInEx-BepInExPack', version: '5.4.2100', enabled: true, installedDaysAgo: 31 },
		{ fullName: 'Zaggy1024-PathfindingLagFix', version: '1.4.2', enabled: true, installedDaysAgo: 30 },
		{ fullName: 'Bobbie-FixRPCLag', version: '0.0.5', enabled: true, installedDaysAgo: 30 },
	],
	3: [
		{ fullName: 'BepInEx-BepInExPack', version: '5.4.2100', enabled: true, installedDaysAgo: 6 },
		{ fullName: 'Dusk-WeatherTweaks', version: '3.1.4', enabled: true, installedDaysAgo: 5 },
	],
	4: [
		{ fullName: 'BepInEx-BepInExPack_REPO', version: '5.4.2100', enabled: true, installedDaysAgo: 18 },
		{ fullName: 'Zehs-REPOLib', version: '2.1.1', enabled: true, installedDaysAgo: 17 },
		{ fullName: 'nickklmao-REPO_MorePlayers', version: '1.2.4', enabled: true, installedDaysAgo: 11 },
	],
	5: [
		{ fullName: 'bbepis-BepInExPack_RoR2', version: '5.4.2100', enabled: true, installedDaysAgo: 120 },
		{ fullName: 'tristanmcpherson-R2API', version: '4.6.19', enabled: true, installedDaysAgo: 119 },
	],
};

/** Local (non-Thunderstore) mods, mirroring Gale's `LocalMod` variant. */
export const LOCAL_MODS = {
	1: [
		{
			uuid: 'local-8f2c1a44',
			name: 'PersonalTweaks',
			version: '0.3.0',
			enabled: true,
			localPath: '~/.local/share/GaleX/imports/PersonalTweaks.dll',
			installedDaysAgo: 2,
			description: 'Private.dll drop for tweaking spawn weights and a couple of UI labels.',
		},
	],
};

/** Mods pinned to an older version by the user. */
export const IGNORED_UPDATES = {
	1: ['AinaVT-LethalConfig'],
};

/* ------------------------------------------------------------------ */
/* BepInEx config files                                                */
/* ------------------------------------------------------------------ */

export const CONFIG_FILES = {
	1: [
		{
			path: 'BepInEx/config/AinaVT.LethalConfig.cfg',
			name: 'AinaVT.LethalConfig.cfg',
			plugin: 'LethalConfig',
			entries: [
				{ section: 'General', key: 'EnableHotkey', type: 'bool', value: true, defaultValue: true, description: 'Toggle the config menu with a hotkey in game.' },
				{ section: 'General', key: 'Hotkey', type: 'key', value: 'F5', defaultValue: 'F5', description: 'Key combination that opens the config menu.' },
				{ section: 'General', key: 'ShowAdvancedSettings', type: 'bool', value: false, defaultValue: false, description: 'Reveal experimental options in the menu.' },
				{ section: 'Appearance', key: 'MenuScale', type: 'float', value: 1.0, defaultValue: 1.0, min: 0.6, max: 1.6, description: 'UI scale of the configuration menu.' },
				{ section: 'Appearance', key: 'Theme', type: 'enum', value: 'Dark', defaultValue: 'Dark', choices: ['Dark', 'Light', 'High contrast'], description: 'Colour theme.' },
			],
		},
		{
			path: 'BepInEx/config/com.hgg.immersivecompany.cfg',
			name: 'com.hgg.immersivecompany.cfg',
			plugin: 'Immersive Company',
			entries: [
				{ section: 'Lighting', key: 'EnableFog', type: 'bool', value: true, defaultValue: true, description: 'Volumetric fog inside the facility.' },
				{ section: 'Lighting', key: 'FogDensity', type: 'float', value: 0.42, defaultValue: 0.35, min: 0, max: 1, description: 'How thick the fog should be.' },
				{ section: 'Lighting', key: 'FlashlightBrightness', type: 'float', value: 1.2, defaultValue: 1.0, min: 0.2, max: 3, description: 'Multiplier applied to every flashlight.' },
				{ section: 'Audio', key: 'AmbienceVolume', type: 'int', value: 75, defaultValue: 60, min: 0, max: 100, description: 'Background ambience volume (%).' },
				{ section: 'Audio', key: 'EnableDrips', type: 'bool', value: true, defaultValue: true, description: 'Occasional water dripping sounds.' },
			],
		},
		{
			path: 'BepInEx/config/notnotnotswipez.morecompany.cfg',
			name: 'notnotnotswipez.morecompany.cfg',
			plugin: 'MoreCompany',
			entries: [
				{ section: 'General', key: 'MaxPlayers', type: 'int', value: 16, defaultValue: 8, min: 4, max: 32, description: 'Hard cap on lobby size. Everyone must use the same value.' },
				{ section: 'General', key: 'EnableLobbyList', type: 'bool', value: true, defaultValue: true, description: 'Show the public lobby browser.' },
				{ section: 'Cosmetics', key: 'SyncCosmetics', type: 'bool', value: true, defaultValue: true, description: 'Broadcast cosmetic choices to other players.' },
				{ section: 'Cosmetics', key: 'CosmeticPreset', type: 'enum', value: 'Default', defaultValue: 'Default', choices: ['Default', 'Spooky', 'Festive'], description: 'Starting cosmetic set.' },
			],
		},
	],
	4: [
		{
			path: 'BepInEx/config/nickklmao.moreplayers.cfg',
			name: 'nickklmao.moreplayers.cfg',
			plugin: 'MorePlayers',
			entries: [
				{ section: 'General', key: 'MaxPlayers', type: 'int', value: 8, defaultValue: 4, min: 4, max: 12, description: 'Lobby size limit.' },
				{ section: 'General', key: 'KickOnVersionMismatch', type: 'bool', value: true, defaultValue: true, description: 'Refuse players with a different mod version.' },
			],
		},
	],
};

export const LOG_SEED = [
	{ level: 'info', scope: 'thunderstore', message: 'Package index refreshed (lethal-company): 4 812 listings, 1 244 903 KB cached' },
	{ level: 'info', scope: 'profile', message: 'Loaded profile "Modded co-op" — 12 mods, 9 enabled' },
	{ level: 'warn', scope: 'profile', message: 'no00ob-LCSoundTool is disabled but required by 1 installed mod' },
	{ level: 'info', scope: 'install', message: 'Queue idle — last install 4 days ago' },
	{ level: 'info', scope: 'daemon', message: 'Gale bridge listening on 127.0.0.1:7788' },
];
