<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { prefersReducedMotion } from 'svelte/motion';
	import { innerWidth } from 'svelte/reactivity/window';
	import { slide } from 'svelte/transition';

	import { page } from '$app/state';

	import * as OrderCard from './components/order-card/index.ts';
	import * as OrdersCard from './components/orders-card/index.ts';

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

	let slideAxis = $derived.by((): 'x' | 'y' | undefined =>
		innerWidth.current ? (innerWidth.current >= 1280 ? 'x' : 'y') : undefined
	);
</script>

<main
	aria-label="orders"
	class="flex h-[calc(100dvh-88px)] flex-col p-4 sm:px-6 sm:py-0 xl:flex-row"
>
	<OrdersCard.Root class="flex flex-1 flex-col">
		<OrdersCard.Header {status} {type} {pathname} {searchParams} />
		<OrdersCard.Content
			class="flex-1 overflow-y-auto"
			{orders}
			{pathname}
			{searchParams}
			{selectedOrderCode}
			{sortColumn}
			{sortDirection}
		/>
		<OrdersCard.Footer {count} {pathname} {perPage} {searchParams} />
	</OrdersCard.Root>

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
