<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	import { page } from '$app/stores';

	import * as OrderCard from './components/order-card/index.js';
	import OrdersTabs from './components/orders-tabs.svelte';
	import ThisMonthCard from './components/this-month-card.svelte';
	import ThisWeekCard from './components/this-week-card.svelte';
	import YourOrdersCard from './components/your-orders-card.svelte';
	import type { Order } from './types';

	let order: Order | undefined = $derived($page.data.order);
</script>

<main aria-label="orders" class="flex flex-col p-4 sm:px-6 sm:py-0 xl:flex-row">
	<div class="grid flex-1 gap-4 lg:gap-8">
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<YourOrdersCard />

			<ThisWeekCard />

			<ThisMonthCard />
		</div>

		<OrdersTabs />
	</div>

	{#if order}
		<aside
			aria-label="order details"
			class="ml-8 text-nowrap"
			transition:slide={{ axis: 'x', duration: 150, easing: quadOut }}
		>
			<OrderCard.Root>
				<OrderCard.Header {order} />
				<OrderCard.Content {order} />
				<OrderCard.Footer {order} />
			</OrderCard.Root>
		</aside>
	{/if}
</main>
