<script lang="ts">
	import { replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	import { cn } from '$lib/utils';

	import * as OrderCard from './components/order-card/index.js';
	import OrdersTabs from './components/orders-tabs.svelte';
	import ThisMonthCard from './components/this-month-card.svelte';
	import ThisWeekCard from './components/this-week-card.svelte';
	import YourOrdersCard from './components/your-orders-card.svelte';
	import type { Order } from './types';

	let order: Order | undefined = $derived($page.data.order);
</script>

<svelte:window
	onkeydown={(event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			replaceState($page.url.pathname, {});
			return;
		}
	}}
/>

<main
	aria-label="orders"
	class={cn(
		'grid gap-4 p-4 sm:px-6 sm:py-0 md:gap-8',
		order ? 'min-[1358px]:grid-cols-[_minmax(0,_1fr)_max-content]' : 'grid-cols-1'
	)}
>
	<div class="grid auto-rows-max items-start gap-4 md:gap-8">
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<YourOrdersCard />

			<ThisWeekCard />

			<ThisMonthCard />
		</div>

		<OrdersTabs />
	</div>

	{#if order}
		<aside aria-label="order details">
			<OrderCard.Root>
				<OrderCard.Header {order} />
				<OrderCard.Content {order} />
				<OrderCard.Footer {order} />
			</OrderCard.Root>
		</aside>
	{/if}
</main>
