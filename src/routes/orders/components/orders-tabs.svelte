<script lang="ts">
	import File from 'lucide-svelte/icons/file';
	import ListFilter from 'lucide-svelte/icons/list-filter';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	import OrdersCard from './orders-card.svelte';

	import { OrderStatus, OrderType, type Code, type PartialOrder } from '../types';

	type Props = {
		orders: Record<Code, PartialOrder>;
	};

	const { orders }: Props = $props();

	let isOrderShownFromOrderStatus = $state(
		Object.fromEntries(Object.values(OrderStatus).map((os) => [os, true]))
	);

	let isOrderShownFromOrderType = $state(
		Object.fromEntries(Object.values(OrderType).map((ot) => [ot, true]))
	);

	let ordersFiltered = $derived(
		Object.values(orders).filter(
			(order) =>
				Object.values(OrderStatus).reduce(
					(prev, os) => prev || (isOrderShownFromOrderStatus[os] && order.status === os),
					false
				) &&
				Object.values(OrderType).reduce(
					(prev, ot) => prev || (isOrderShownFromOrderType[ot] && order.type === ot),
					false
				)
		)
	);
</script>

{#snippet orderFilterDropdownMenu()}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button variant="outline" size="sm" class="h-7 gap-1 text-sm" builders={[builder]}>
				<ListFilter class="h-3.5 w-3.5" />
				<span class="sr-only sm:not-sr-only">Filter</span>
			</Button>
		</DropdownMenu.Trigger>

		<DropdownMenu.Content align="end">
			<DropdownMenu.Label>Order Status</DropdownMenu.Label>
			<DropdownMenu.Separator />
			{#each Object.keys(isOrderShownFromOrderStatus) as orderStatus}
				<DropdownMenu.CheckboxItem bind:checked={isOrderShownFromOrderStatus[orderStatus]}>
					{orderStatus}
				</DropdownMenu.CheckboxItem>
			{/each}

			<DropdownMenu.Separator />

			<DropdownMenu.Label>Order Type</DropdownMenu.Label>
			<DropdownMenu.Separator />
			{#each Object.keys(isOrderShownFromOrderType) as orderType}
				<DropdownMenu.CheckboxItem bind:checked={isOrderShownFromOrderType[orderType]}>
					{orderType}
				</DropdownMenu.CheckboxItem>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/snippet}

<Tabs.Root value="week">
	<div class="flex items-center">
		<Tabs.List>
			<Tabs.Trigger value="week">Week</Tabs.Trigger>
			<Tabs.Trigger value="month">Month</Tabs.Trigger>
			<Tabs.Trigger value="year">Year</Tabs.Trigger>
		</Tabs.List>

		<div class="ml-auto flex items-center gap-2">
			{@render orderFilterDropdownMenu()}

			<Button size="sm" variant="outline" class="h-7 gap-1 text-sm">
				<File class="h-3.5 w-3.5" />
				<span class="sr-only sm:not-sr-only">Export</span>
			</Button>
		</div>
	</div>

	<Tabs.Content value="week">
		<OrdersCard orders={ordersFiltered} />
	</Tabs.Content>
</Tabs.Root>
