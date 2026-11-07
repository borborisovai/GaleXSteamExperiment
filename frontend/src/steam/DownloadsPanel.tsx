import type { ReactNode } from 'react';
import { core } from '../lib/bridge';
import { t, useLocale } from '../lib/i18n';
import type { ProgressSample, ProgressTask } from '../lib/types';
import { Icon } from '../components/Icon';
import { Button, Notice, bytes } from './ui';
import { refreshProgress, useProgress } from './progress';

function rate(value: number) { return `${bytes(Math.max(0, value))}/s`; }
function taskTitle(task: ProgressTask) {
  const key = `task_${task.kind.replace(/-/g, '_')}` as Parameters<typeof t>[0];
  const label = t(key);
  return label === key ? t('task_install') : label;
}
function phaseLabel(task: ProgressTask) {
  const phase = task.status === 'done' ? 'done' : task.status === 'error' ? 'error' : task.phase ?? 'starting';
  const key = `phase_${phase}` as Parameters<typeof t>[0];
  const label = t(key);
  return label === key ? t('working') : label;
}
function percent(task: ProgressTask): number | undefined {
  if (task.totalBytes && task.totalBytes > 0) return Math.min(100, Math.round(task.completedBytes / task.totalBytes * 100));
  if (task.totalMods && task.totalMods > 0) return Math.min(100, Math.round(task.completedMods / task.totalMods * 100));
  return undefined;
}
function Sparkline({ history, field, label }: { history: ProgressSample[]; field: 'network' | 'disk'; label: string }) {
  const values = history.map(sample => sample[field]);
  const max = Math.max(1, ...values);
  const points = values.map((value, index) => `${values.length > 1 ? index / (values.length - 1) * 100 : 0},${32 - value / max * 30}`).join(' ');
  return <div className="gx-sparkline" aria-label={label}>
    <span>{label}</span>
    <svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
    <strong>{rate(values[values.length - 1] ?? 0)}</strong>
  </div>;
}
function TaskCard({ task }: { task: ProgressTask }) {
  const value = percent(task);
  const NativeProgress = (window as any).MILLENNIUM_API?.ProgressBarWithInfo;
  const status = phaseLabel(task);
  const size = task.totalBytes ? `${bytes(task.completedBytes)} / ${bytes(task.totalBytes)}` : task.totalMods ? `${task.completedMods}/${task.totalMods}` : '';
  return <article className={`gx-download-card ${task.status === 'error' ? 'is-error' : ''}`} data-appid={task.steamAppId} data-galex-download={task.id}>
    {task.steamAppId ? <img className="gx-download-cover" src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${task.steamAppId}/header.jpg`} alt="" loading="lazy"/> : <span className="gx-download-cover gx-download-cover--fallback"><Icon name="package" size={24}/></span>}
    <div className="gx-download-body">
      <header><h3>{task.gameName}</h3><span className="gx-muted">{task.profileName ?? task.slug}</span></header>
      <p className="gx-download-task">{taskTitle(task)} · {status}{task.currentMod ? ` · ${task.currentMod}` : ''}</p>
      {typeof NativeProgress === 'function'
        ? <NativeProgress nProgress={value ?? 0} indeterminate={value === undefined || task.status === 'active' && value === 0} strOperationText={status} sTimeRemaining={size}/>
        : <progress className="gx-progress" max={100} value={value ?? undefined} aria-label={status}/>}
      <div className="gx-download-meta"><span>{size || t('working')}</span>{value !== undefined && <span>{value}%</span>}</div>
    </div>
  </article>;
}

/** Virtual Gale download list for Steam's Downloads route. This is intentionally
 * not a Steam app update: it never touches SteamClient.Downloads.QueueAppUpdate.
 * The card is associated with the real Steam AppID/game name from Gale, while
 * progress/rates are measured by the headless Gale backend. */
export function GaleDownloadsPanel() {
  useLocale();
  const { snapshot, error } = useProgress();
  const tasks = snapshot?.tasks ?? [];
  const active = tasks.some(task => task.status === 'active');
  // Steam's Downloads page stays native when Gale has nothing to report; the
  // virtual card only exists while an operation is running/recently finished.
  if (!snapshot || (tasks.length === 0 && !error)) return null;
  return <section className="galex gx-downloads" aria-label={t('galeDownloads')}>
    <header className="gx-downloads-header"><h2>{t('galeDownloads')}</h2>{active && <Button icon="x" onClick={() => void core.cancelInstalls().then(refreshProgress).catch(() => {})}>{t('cancelDownloads')}</Button>}</header>
    <p className="gx-muted">{t('galeDownloadsHint')}</p>
    {error && <Notice error>{error}</Notice>}
    {snapshot && <div className="gx-download-graphs">
      <Sparkline history={snapshot.history} field="network" label={t('network')}/>
      <Sparkline history={snapshot.history} field="disk" label={t('disk')}/>
    </div>}
    {tasks.length ? tasks.map(task => <TaskCard key={task.id} task={task}/>) : <div className="gx-empty">{snapshot ? t('noGaleDownloads') : t('loading')}</div>}
  </section>;
}

export function GaleDownloadsRoute({ children }: { children?: ReactNode }) {
  return <><GaleDownloadsPanel/>{children}</>;
}
