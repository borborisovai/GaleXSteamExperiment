<script lang="ts">
  import { Tooltip } from 'bits-ui';
  import ConfigPage from '$lib/routes/ConfigPage.svelte';
</script>

<!-- The same provider Gale's desktop +layout.svelte supplies. The config
     components themselves remain upstream; only the desktop chrome is omitted. -->
<Tooltip.Provider skipDelayDuration={1} disableCloseOnTriggerClick>
  <ConfigPage />
</Tooltip.Provider>
