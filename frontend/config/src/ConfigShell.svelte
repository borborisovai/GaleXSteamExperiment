<script lang="ts">
  import { Tooltip } from 'bits-ui';
  import ConfigPage from '$lib/routes/ConfigPage.svelte';
  import config from '$lib/state/config.svelte';

  // GaleX opens this shell from a mod row's "Edit config" action. The backend
  // validates ?file= as a relative config path; apply it once the upstream
  // ConfigPage has finished its first refresh, without touching Gale's editor.
  let deepLinkApplied = false;
  $effect(() => {
    const path = new URLSearchParams(location.search).get('file');
    if (!path || deepLinkApplied || config.loading) return;
    const file = config.findFileByPath(path);
    if (file) {
      config.selectedFile = file;
      config.selectedSection = null;
      deepLinkApplied = true;
    }
  });
</script>

<!-- The same provider Gale's desktop +layout.svelte supplies. The config
     components themselves remain upstream; only the desktop chrome is omitted. -->
<Tooltip.Provider skipDelayDuration={1} disableCloseOnTriggerClick>
  <ConfigPage />
</Tooltip.Provider>
