<script lang="ts">
	// import { File } from 'lucide-svelte';

	// import { Button } from '$lib/components/ui/button/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';

	import OrdersFilterDropdownMenu from '../orders-filter-dropdown-menu/orders-filter-dropdown-menu.svelte';
	import type { OrderStatus, OrderType } from '../../types.ts';

	type Props = {
		isOrderShownFromOrderStatus: Record<OrderStatus, boolean>;
		isOrderShownFromOrderType: Record<OrderType, boolean>;
		pathname: string;
		searchParams: URLSearchParams;
	};

	const { isOrderShownFromOrderStatus, isOrderShownFromOrderType, pathname, searchParams }: Props =
		$props();
</script>

<Card.Header class="space-y-2 border-b bg-muted/50 p-6">
	<div class="flex items-center gap-2">
		<Card.Title>Recent Orders</Card.Title>

		<OrdersFilterDropdownMenu
			class="ml-auto"
			{isOrderShownFromOrderStatus}
			{isOrderShownFromOrderType}
			{pathname}
			{searchParams}
		/>

		<!-- TODO: Implement export button -->
		<!-- <Button size="sm" variant="outline" class="h-8 gap-2">
			<File class="h-3.5 w-3.5" />
			<span class="sr-only sm:not-sr-only">Export</span>
		</Button> -->
	</div>

	<Card.Description>Recent orders from your store.</Card.Description>
</Card.Header>
