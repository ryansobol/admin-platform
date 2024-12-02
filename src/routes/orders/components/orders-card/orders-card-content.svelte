<script lang="ts">
	import OrdersCardContentNone from './orders-card-content-none.svelte';
	import OrdersCardContentSome from './orders-card-content-some.svelte';
	import type { PartialOrder, SortColumn, SortDirection } from '../../types.ts';

	type Props = {
		orders: PartialOrder[];
		pathname: string;
		searchParams: URLSearchParams;
		selectedOrderCode: string;
		sortColumn: SortColumn;
		sortDirection: SortDirection;
	};

	let { orders, pathname, searchParams, selectedOrderCode, sortColumn, sortDirection }: Props =
		$props();
</script>

{#if orders.length}
	<OrdersCardContentSome
		{orders}
		{pathname}
		{searchParams}
		{selectedOrderCode}
		{sortColumn}
		{sortDirection}
	/>
{:else}
	<OrdersCardContentNone />
{/if}
