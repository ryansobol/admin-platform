<script lang="ts">
	import { replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	import OrderCard from './components/order-card.svelte';
	import OrdersTabs from './components/orders-tabs.svelte';
	import ThisMonthCard from './components/this-month-card.svelte';
	import ThisWeekCard from './components/this-week-card.svelte';
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

<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 xl:grid-cols-3">
	<div class="grid auto-rows-max items-start gap-4 md:gap-8 xl:col-span-2">
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<YourOrdersCard />

			<ThisWeekCard />

			<ThisMonthCard />
		</div>

		<OrdersTabs />
	</div>

	<div>
		<OrderCard />
	</div>
</main>
