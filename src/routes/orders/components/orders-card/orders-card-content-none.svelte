<script lang="ts">
	import FilterX from 'lucide-svelte/icons/filter-x';

	import * as Card from '$lib/components/ui/card/index.ts';
</script>

<Card.Content class="flex h-3/4 flex-row content-center items-center justify-center gap-8">
	<FilterX class="mb-4 size-32 text-muted-foreground" />

	<div class="flex flex-col items-center justify-center gap-2">
		<p class="text-center text-xl">No orders match your current filter settings.</p>

		<p class="text-center text-lg text-muted-foreground">
			Try adjusting your filters to see more orders.
		</p>
	</div>
</Card.Content>
