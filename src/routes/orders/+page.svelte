<script lang="ts">
	import { replaceState } from '$app/navigation';

	import { page } from '$app/stores';

	import ThisMonthCard from './components/this-month-card.svelte';
	import ThisWeekCard from './components/this-week-card.svelte';
	import OrderCard from './components/order-card.svelte';
	import OrdersTabs from './components/orders-tabs.svelte';
	import YourOrdersCard from './components/your-orders-card.svelte';
</script>

<svelte:window
	onkeydown={(event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			replaceState($page.url.pathname, {});
			return;
		}
	}}
/>

<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
		<YourOrdersCard />

		<ThisWeekCard />

		<ThisMonthCard />
	</div>

	<OrdersTabs />
</div>

<div>
	<OrderCard />
</div>
