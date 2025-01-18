<script lang="ts">
	import type { Snippet } from 'svelte';

	import * as Card from '$lib/components/ui/card/index.ts';

	type Props = {
		class?: string;
		children: Snippet;
	};

	const { children, class: className }: Props = $props();
</script>

<Card.Root class={className}>
	{@render children?.()}
</Card.Root>
