import { useEffect, useMemo, useState } from 'react';
import { Icon } from '../components/Icon';
import { Avatar, Badge, Button, Chip, EmptyState, Select, Skeleton, Toggle } from '../components/ui';
import { api } from '../lib/api';
import { actions } from '../lib/actions';
import { cx, formatCount, relativeTime } from '../lib/format';
import { useDebounced } from '../lib/hooks';
import { activeGame, activeProfile, useAppState } from '../lib/store';
import type { BrowseResult, Category, PackageCard as PackageCardType, SortKey } from '../lib/types';

const SORTS: { value: SortKey; label: string }[] = [
	{ value: 'rating', label: 'Top rated' },
	{ value: 'downloads', label: 'Most downloaded' },
	{ value: 'updated', label: 'Recently updated' },
	{ value: 'newest', label: 'Newest' },
	{ value: 'name', label: 'Name A–Z' },
];

export function PackageCard({ pkg }: { pkg: PackageCardType }) {
	return (
		<button type="button" className={cx('gx-pkgcard', pkg.installed && 'is-installed')} onClick={() => actions.openPackage(pkg.fullName)}>
			<div className="gx-pkgcard__head">
				<Avatar name={pkg.name} src={pkg.iconUrl} size={46} rounded={11} />
				<div className="gx-pkgcard__titles">
					<strong>{pkg.name}</strong>
					<span>{pkg.owner}</span>
				</div>
				{pkg.installed ? (
					<Badge tone="green" icon="check">
						{pkg.installedVersion ?? 'installed'}
					</Badge>
				) : null}
			</div>
			<p className="gx-pkgcard__desc">{pkg.description || 'No description provided.'}</p>
			<div className="gx-pkgcard__meta">
				<span title="Rating">
					<Icon name="star" size={12} /> {pkg.ratingScore}
				</span>
				<span title="Downloads">
					<Icon name="download" size={12} /> {formatCount(pkg.totalDownloads)}
				</span>
				<span title="Last update">
					<Icon name="clock" size={12} /> {relativeTime(pkg.dateUpdated)}
				</span>
				<span className="gx-pkgcard__version">v{pkg.version}</span>
			</div>
			{pkg.categories.length > 0 ? (
				<div className="gx-pkgcard__tags">
					{pkg.deprecated ? <Badge tone="red">deprecated</Badge> : null}
					{pkg.modpack ? <Badge tone="purple">modpack</Badge> : null}
					{pkg.categories.slice(0, 3).map((category) => (
						<span key={category} className="gx-tag">
							{category}
						</span>
					))}
				</div>
			) : null}
		</button>
	);
}

export function BrowseView() {
	const state = useAppState();
	const game = activeGame(state);
	const profile = activeProfile(state);
	const search = useDebounced(state.search, 260);
	const [category, setCategory] = useState<string | undefined>(undefined);
	const [sort, setSort] = useState<SortKey>('rating');
	const [includeDeprecated, setIncludeDeprecated] = useState(false);
	const [page, setPage] = useState(1);
	const [result, setResult] = useState<BrowseResult | undefined>(undefined);
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const slug = game?.slug;

	useEffect(() => {
		setPage(1);
	}, [search, category, sort, includeDeprecated, slug]);

	useEffect(() => {
		if (!slug) return;
		let cancelled = false;
		const timer = setTimeout(() => {
			setLoading(true);
			api
				.browse(slug, { search, category, sort, includeDeprecated, page, pageSize: 30 })
				.then((data) => {
					if (!cancelled) {
						setResult(data);
						setError(undefined);
					}
				})
				.catch((err: unknown) => {
					if (!cancelled) setError(err instanceof Error ? err.message : String(err));
				})
				.finally(() => {
					if (!cancelled) setLoading(false);
				});
		}, 60);
		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, [slug, search, category, sort, includeDeprecated, page]);

	useEffect(() => {
		if (!slug) return;
		let cancelled = false;
		api
			.categories(slug)
			.then((list) => {
				if (!cancelled) setCategories(list);
			})
			.catch(() => {
				/* categories are decorative — ignore */
			});
		return () => {
			cancelled = true;
		};
	}, [slug]);

	const topCategories = useMemo(() => [...categories].sort((a, b) => b.count - a.count).slice(0, 12), [categories]);
	const totalPages = result ? Math.max(1, Math.ceil(result.total / result.pageSize)) : 1;

	if (!game?.managed) {
		return (
			<EmptyState
				icon="store"
				title="Add the game first"
				body="GaleX needs a profile to know where to install packages."
				action={
					game ? (
						<Button variant="primary" icon="plus" onClick={() => void actions.manageGame(game.slug)}>
							Add {game.name}
						</Button>
					) : undefined
				}
			/>
		);
	}

	return (
		<div className="gx-view">
			<header className="gx-view__head">
				<div>
					<h1>
						Browse {game.name}
						{result ? <span className="gx-count">{result.total}</span> : null}
					</h1>
					<p>
						Thunderstore packages for <strong>{profile?.name ?? 'this profile'}</strong>. Dependencies install
						automatically.
					</p>
				</div>
				<div className="gx-view__tools">
					<Select value={sort} options={SORTS} onChange={setSort} ariaLabel="Sort packages" />
				</div>
			</header>

			<div className="gx-filterbar gx-filterbar--wrap">
				<div className="gx-filterbar__chips">
					<Chip active={!category} onClick={() => setCategory(undefined)}>
						All categories
					</Chip>
					{topCategories.map((item) => (
						<Chip
							key={item.slug}
							active={category === item.name}
							onClick={() => setCategory(category === item.name ? undefined : item.name)}
							count={item.count}
						>
							{item.name}
						</Chip>
					))}
				</div>
				<label className="gx-inlinefield">
					<Toggle size="sm" checked={includeDeprecated} onChange={setIncludeDeprecated} label="Show deprecated" />
					<span>Show deprecated</span>
				</label>
			</div>

			{error ? (
				<div className="gx-callout gx-callout--warn">
					<Icon name="warning" size={15} />
					<div>
						<strong>Thunderstore request failed</strong>
						<p>{error}</p>
					</div>
				</div>
			) : null}

			{loading && !result ? (
				<div className="gx-pkggrid">
					{Array.from({ length: 9 }).map((_, index) => (
						<div key={index} className="gx-pkgcard gx-pkgcard--skeleton">
							<Skeleton height={46} width={46} radius={11} />
							<Skeleton height={13} width="70%" />
							<Skeleton height={11} width="90%" />
							<Skeleton height={11} width="60%" />
						</div>
					))}
				</div>
			) : result && result.packages.length === 0 ? (
				<EmptyState
					icon="search"
					title="No packages found"
					body={search ? `Nothing matches “${search}”.` : 'Try a different category or sorting.'}
					action={
						<Button
							onClick={() => {
								actions.setSearch('');
							}}
						>
							Clear search
						</Button>
					}
				/>
			) : (
				<>
					<div className={cx('gx-pkggrid', loading && 'is-refreshing')}>
						{result?.packages.map((pkg) => (
							<PackageCard key={pkg.fullName} pkg={pkg} />
						))}
					</div>
					{totalPages > 1 ? (
						<div className="gx-pager">
							<Button size="sm" icon="chevron-left" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
								Previous
							</Button>
							<span>
								Page {page} of {totalPages}
							</span>
							<Button
								size="sm"
								iconRight="chevron-right"
								disabled={page >= totalPages}
								onClick={() => setPage((p) => p + 1)}
							>
								Next
							</Button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
