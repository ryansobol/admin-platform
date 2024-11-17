<script lang="ts">
	import type { Snippet } from 'svelte';

	import * as Card from '$lib/components/ui/card/index.js';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<Card.Root>
	{@render children?.()}
</Card.Root>
