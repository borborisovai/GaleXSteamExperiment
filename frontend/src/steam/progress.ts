import { useSyncExternalStore } from 'react';
import { core, message } from '../lib/bridge';
import type { ProgressSnapshot } from '../lib/types';

export interface ProgressState { snapshot?: ProgressSnapshot; error: string }
let state: ProgressState = { error: '' };
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setTimeout> | undefined;
let stopped = true;
let pending = false;
let generation = 0;

function publish(next: ProgressState) { state = next; listeners.forEach(fn => fn()); }
async function poll() {
  if (stopped || pending) return;
  pending = true;
  const current = generation;
  try {
    const snapshot = await core.progress();
    if (!stopped && current === generation) publish({ snapshot, error: '' });
  } catch (error) {
    if (!stopped && current === generation) publish({ ...state, error: message(error) });
  } finally {
    pending = false;
    // Keep sampling while idle so the Steam downloads page has a real zero
    // baseline and so a task started elsewhere appears without a reload.
    if (!stopped) timer = setTimeout(() => void poll(), state.snapshot?.active ? 750 : 2000);
  }
}
export function startProgressMonitor() {
  if (!stopped) return () => stopProgressMonitor();
  stopped = false; generation++; void poll();
  return () => stopProgressMonitor();
}
function stopProgressMonitor() { stopped = true; generation++; clearTimeout(timer); }
export function refreshProgress() { clearTimeout(timer); void poll(); }
export function getProgress() { return state; }
export function useProgress() {
  return useSyncExternalStore(fn => { listeners.add(fn); return () => listeners.delete(fn); }, getProgress, getProgress);
}
