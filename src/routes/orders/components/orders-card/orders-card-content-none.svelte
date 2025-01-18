<script lang="ts">
	import FilterX from 'lucide-svelte/icons/filter-x';

	import * as Card from '$lib/components/ui/card/index.ts';
</script>

<Card.Content class="flex h-full flex-row content-center items-center justify-center gap-8">
	<FilterX class="mb-4 hidden text-muted-foreground sm:block sm:size-20 md:size-28" />

	<div class="flex flex-col items-center justify-center gap-2">
		<p class="text-center text-base sm:text-lg md:text-xl">
			No orders match your current filter settings.
		</p>

		<p class="text-center text-sm text-muted-foreground sm:text-base md:text-lg">
			Try adjusting your filters to see more orders.
		</p>
	</div>
</Card.Content>
