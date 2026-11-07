<script lang="ts">
  import icons from '../icons.json';

  type Props = {
    icon?: string;
    class?: string;
    style?: string;
    width?: string | number;
    height?: string | number;
  };

  let { icon = '', class: className = '', style = '', width = '1em', height = '1em' }: Props = $props();

  // Iconify's runtime fetches missing icons from api.iconify.design. The Steam
  // config page is CSP/offline-only, so resolve everything from the pinned
  // @iconify-json collections bundled at build time. Never touch the network.
  const data = $derived.by(() => {
    const [prefix, name] = icon.split(':');
    const collection = (icons as Record<string, { icons: Record<string, { body: string; width?: number; height?: number }>; width?: number; height?: number }>)[prefix];
    return collection?.icons[name] ?? (icons as any).mdi?.icons['question-mark-circle'] ?? { body: '', width: 24, height: 24 };
  });
  const viewBox = $derived(`0 0 ${data.width ?? 24} ${data.height ?? 24}`);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  role="img"
  class={className}
  {style}
  {width}
  {height}
  {viewBox}
>
  {@html data.body}
</svg>
