<script lang="ts">
	import { page } from '$app/stores';

	import * as Card from '$lib/components/ui/card/index.js';

	import OrderPage from '../[orderCode]/+page.svelte';

	let order = $derived($page.state.selectedOrder);
</script>

{#if order}
	<OrderPage data={{ order }} />
{:else}
	<Card.Root class="overflow-hidden">
		<Card.Content class="px-7">
			<Card.Title>No order selected</Card.Title>
			<Card.Description>Try selecting an order from the recent orders table.</Card.Description>
		</Card.Content>
	</Card.Root>
{/if}
