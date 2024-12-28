<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { prefersReducedMotion } from 'svelte/motion';
	import { slide } from 'svelte/transition';

	import { page } from '$app/state';

	import * as OrderCard from './components/order-card/index.ts';
	import * as OrdersCard from './components/orders-card/index.ts';
	import ThisMonthCard from './components/this-month-card.svelte';
	import ThisWeekCard from './components/this-week-card.svelte';
	import YourOrdersCard from './components/your-orders-card.svelte';

	let { data } = $props();

	let count = $derived(data.count);
	let order = $derived(data.order);
	let orders = $derived(data.orders);
	let perPage = $derived(data.perPage);
	let sortColumn = $derived(data.sortColumn);
	let sortDirection = $derived(data.sortDirection);
	let status = $derived(data.status);
	let type = $derived(data.type);

	let selectedOrderCode = $derived(order?.code ?? '');

	let pathname = $derived(page.url.pathname);
	let searchParams = $derived(page.url.searchParams);

	let innerWidth = $state(0);
	let slideAxis: 'x' | 'y' = $derived(innerWidth >= 1280 ? 'x' : 'y');
</script>

<svelte:window bind:innerWidth />

<main aria-label="orders" class="flex flex-col p-4 sm:px-6 sm:py-0 xl:flex-row">
	<div class="grid flex-1 gap-4 lg:gap-8">
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<YourOrdersCard />

			<ThisWeekCard />

			<ThisMonthCard />
		</div>

		<OrdersCard.Root>
			<OrdersCard.Header {status} {type} {pathname} {searchParams} />
			<OrdersCard.Content
				{orders}
				{pathname}
				{searchParams}
				{selectedOrderCode}
				{sortColumn}
				{sortDirection}
			/>
			<OrdersCard.Footer {count} {pathname} {perPage} {searchParams} />
		</OrdersCard.Root>
	</div>

	{#if order}
		<aside
			aria-label="order details"
			class="text-nowrap max-xl:mt-8 xl:ml-8"
			transition:slide={{
				axis: slideAxis,
				duration: prefersReducedMotion.current ? 0 : 150,
				easing: quadOut
			}}
		>
			<OrderCard.Root>
				<OrderCard.Header {order} />
				<OrderCard.Content {order} />
				<OrderCard.Footer {order} />
			</OrderCard.Root>
		</aside>
	{/if}
</main>
