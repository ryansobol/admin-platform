<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Copy from 'lucide-svelte/icons/copy';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip';

	import { cn } from '$lib/utils.js';

	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLButtonElement> & {
		label: string;
		value: string;
	};

	const { class: className = undefined, label, value, ...restProps }: Props = $props();

	let hasCopied = $state(false);

	const onclick = () => {
		navigator.clipboard.writeText(value);
		hasCopied = true;
	};

	$effect(() => {
		if (hasCopied) {
			const timeoutId = setTimeout(() => {
				hasCopied = false;
			}, 2000);

			return () => clearTimeout(timeoutId);
		}
	});
</script>

<Tooltip.Root>
	<Tooltip.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			class={cn('h-8 w-8', className)}
			{onclick}
			size="icon"
			variant="outline"
			{...restProps}
		>
			{#if hasCopied}
				<Check aria-hidden class="h-3.5 w-3.5 text-green-600" />
				<span class="sr-only">{label} copied to clipboard</span>
			{:else}
				<Copy aria-hidden class="h-3.5 w-3.5" />
				<span class="sr-only">copy {label} to clipboard</span>
			{/if}
		</Button>
	</Tooltip.Trigger>

	<Tooltip.Content>
		{#if hasCopied}
			<p>Copied!</p>
		{:else}
			<p>Copy to clipboard</p>
		{/if}
	</Tooltip.Content>
</Tooltip.Root>
