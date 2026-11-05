import { useMemo } from 'react';

export type IconName =
	| 'package'
	| 'store'
	| 'download'
	| 'refresh'
	| 'trash'
	| 'check'
	| 'x'
	| 'chevron-down'
	| 'chevron-right'
	| 'chevron-left'
	| 'search'
	| 'settings'
	| 'layers'
	| 'folder'
	| 'play'
	| 'warning'
	| 'info'
	| 'clock'
	| 'star'
	| 'plus'
	| 'copy'
	| 'external'
	| 'sliders'
	| 'terminal'
	| 'grid'
	| 'list'
	| 'arrow-up'
	| 'globe'
	| 'power'
	| 'sparkles'
	| 'filter'
	| 'cart'
	| 'arrow-right'
	| 'pin';

const PATHS: Record<IconName, string> = {
	package: 'M12 3 3 7.5v9L12 21l9-4.5v-9L12 3Zm0 0 9 4.5M12 3 3 7.5m9-4.5v18m9-13.5-9 4.5-9-4.5',
	store: 'M3 9h18M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M4 9h16l1 6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3l1-6Zm5 3v2m6-2v2',
	download: 'M12 4v10m0 0 4-4m-4 4-4-4M5 19h14',
	refresh: 'M20 12a8 8 0 1 1-2.5-5.8M20 4v5h-5',
	trash: 'M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M10 11v6m4-6v6',
	check: 'M4 12.5 9 17.5 20 6.5',
	x: 'M6 6l12 12M18 6 6 18',
	'chevron-down': 'M6 9.5 12 15.5 18 9.5',
	'chevron-right': 'M9.5 6 15.5 12 9.5 18',
	'chevron-left': 'M14.5 6 8.5 12 14.5 18',
	search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6.5-1.5L22 22',
	settings:
		'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8.4-3.5c0-.5 0-1-.1-1.5l2-1.5-2-3.4-2.3 1a8 8 0 0 0-2.6-1.5L14.9 2H9.1l-.5 2.6A8 8 0 0 0 6 6.1l-2.3-1-2 3.4 2 1.5a9 9 0 0 0 0 3l-2 1.5 2 3.4 2.3-1a8 8 0 0 0 2.6 1.5l.5 2.6h5.8l.5-2.6a8 8 0 0 0 2.6-1.5l2.3 1 2-3.4-2-1.5c.1-.5.1-1 .1-1.5Z',
	layers: 'M12 3 3 8l9 5 9-5-9-5Zm-9 8 9 5 9-5M3 16l9 5 9-5',
	folder: 'M3 7a2 2 0 0 1 2-2h4l2 2.5h6a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z',
	play: 'M8 5.5 18.5 12 8 18.5v-13Z',
	warning: 'M12 4 2.5 20h19L12 4Zm0 5v6m0 3v.5',
	info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v.5m0 3.5v5',
	clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3.5 2',
	star: 'M12 3.5l2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.9l6.1-.8L12 3.5Z',
	plus: 'M12 5v14M5 12h14',
	copy: 'M9 9V5.5a1.5 1.5 0 0 1 1.5-1.5H19a1.5 1.5 0 0 1 1.5 1.5V14a1.5 1.5 0 0 1-1.5 1.5h-3.5M4 10.5A1.5 1.5 0 0 1 5.5 9H14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 14 21H5.5A1.5 1.5 0 0 1 4 19.5v-9Z',
	external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
	sliders: 'M4 8h9m4 0h3M4 16h3m4 0h9M13 5v6M8 13v6',
	terminal: 'M4 5h16v14H4V5Zm3.5 4.5 3 2.5-3 2.5M12.5 15h4',
	grid: 'M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z',
	list: 'M4 6h16M4 12h16M4 18h16',
	'arrow-up': 'M12 19V5m0 0-6 6m6-6 6 6',
	globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9Z',
	power: 'M12 3v9m5.7-6.7a9 9 0 1 1-11.4 0',
	sparkles: 'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm7 10 .9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9L19 13Z',
	filter: 'M4 6h16l-6 7v6l-4-2v-4L4 6Z',
	cart: 'M3 5h2l2.4 10.4A2 2 0 0 0 9.3 17h8.4a2 2 0 0 0 2-1.6L21 8H6M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
	'arrow-right': 'M5 12h14m0 0-6-6m6 6-6 6',
	pin: 'M12 15v6m0-6a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Zm-6-7h12',
};

export interface IconProps {
	name: IconName;
	size?: number;
	className?: string;
	strokeWidth?: number;
}

export function Icon({ name, size = 18, className, strokeWidth = 1.6 }: IconProps) {
	const path = useMemo(() => PATHS[name] ?? PATHS.info, [name]);
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
		>
			<path d={path} />
		</svg>
	);
}
