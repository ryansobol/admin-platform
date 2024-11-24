<script lang="ts">
	import { fly } from 'svelte/transition';

	import { replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	import * as OrderCard from './components/order-card/index.js';
	import OrdersTabs from './components/orders-tabs.svelte';
	import ThisMonthCard from './components/this-month-card.svelte';
	import ThisWeekCard from './components/this-week-card.svelte';
	import YourOrdersCard from './components/your-orders-card.svelte';
	import type { Order } from './types';

	let order: Order | undefined = $derived($page.data.order);

	function slide(node: Element, { delay = 0, duration = 400 }) {
		const computedStyle = getComputedStyle(node);
		const o = Number(computedStyle.opacity);
		const r = Number(computedStyle.right.replace('%', ''));
		const w = Number(computedStyle.width.replace('px', ''));

		return {
			delay,
			duration,
			css: (t: number) => `
				opacity: ${t * o};
				right: ${r + t * (100 - r)}%;
				width: ${t * w}px;
			`
		};
	}
</script>

<svelte:window
	onkeydown={(event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			replaceState($page.url.pathname, {});
			return;
		}
	}}
/>

<main aria-label="orders" class="flex flex-col gap-8 p-4 sm:px-6 sm:py-0 xl:flex-row">
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
			class="-right-full overflow-hidden text-nowrap"
			transition:slide={{ duration: 150 }}
		>
			<OrderCard.Root>
				<OrderCard.Header {order} />
				<OrderCard.Content {order} />
				<OrderCard.Footer {order} />
			</OrderCard.Root>
		</aside>
	{/if}
</main>
