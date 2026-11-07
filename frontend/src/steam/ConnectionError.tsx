import { useState } from 'react';
import { core, message, openPluginSettings } from '../lib/bridge';
import { t, useLocale } from '../lib/i18n';
import type { SteamGame } from '../lib/types';
import { Icon } from '../components/Icon';
import { Button, Notice } from './ui';
import { refreshCatalog } from './catalog';

/** Full Mods surface for a locked/unavailable Gale session. The tab itself was
 * injected from the persistent game cache, so the user can still recover here
 * instead of losing the entry point when the backend dies. */
export function ConnectionError({ code, error, game, onRetry }: { code?: string; error: string; game: SteamGame; onRetry?: () => void }) {
  useLocale();
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState('');
  const locked = code === 'gale_session_locked';
  const retry = async () => {
    if (busy) return;
    setBusy(true); setLocalError('');
    try {
      await core.restart();
      refreshCatalog();
      onRetry?.();
    } catch (e) { setLocalError(message(e)); }
    finally { setBusy(false); }
  };
  return <section className={`galex gx-mods gx-connection-error`} aria-label={`${t('mods')} — ${game.name}`} data-appid={game.steamAppId} role="alert">
    <div className="gx-heading"><h1>{t('mods')}</h1><div className="gx-heading-meta">{game.name}</div></div>
    <div className="gx-error-screen">
      <Icon name={locked ? 'lock' : 'warning'} size={32}/>
      <h2>{locked ? t('sessionLockedTitle') : t('connectionErrorTitle')}</h2>
      <p>{locked ? t('sessionLockedBody') : (error || t('connectionErrorBody'))}</p>
      {localError && <Notice error>{localError}</Notice>}
      <div className="gx-profile-actions">
        <Button primary icon="refresh" disabled={busy} onClick={() => void retry()}>{busy ? t('working') : t('retryConnection')}</Button>
        <Button icon="sliders" disabled={busy} onClick={openPluginSettings}>{t('openSettings')}</Button>
      </div>
    </div>
  </section>;
}
