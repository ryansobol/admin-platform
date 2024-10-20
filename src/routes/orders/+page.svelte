<script lang="ts">
	import ThisMonthCard from './components/this-month-card.svelte';
	import ThisWeekCard from './components/this-week-card.svelte';
	import OrderCard from './components/order-card.svelte';
	import OrdersTabs from './components/orders-tabs.svelte';
	import YourOrdersCard from './components/your-orders-card.svelte';

	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	const { data }: Props = $props();
	const { orders } = data;

	let selectedOrderCode = $state(Object.keys(orders)[0]);
</script>

<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
		<YourOrdersCard />

		<ThisWeekCard />

		<ThisMonthCard />
	</div>

	<OrdersTabs {orders} bind:selected={selectedOrderCode} />
</div>

<div>
	<OrderCard order={orders[selectedOrderCode]} />
</div>
