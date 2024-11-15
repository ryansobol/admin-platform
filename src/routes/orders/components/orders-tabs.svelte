<script lang="ts">
	import File from 'lucide-svelte/icons/file';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import Origami from 'lucide-svelte/icons/origami';
	import Waypoints from 'lucide-svelte/icons/waypoints';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	import type { OrderStatus, OrderType } from '../types';

	import OrdersCard from './orders-card.svelte';

	let isOrderShownFromOrderStatus: Record<OrderStatus, boolean> = $derived($page.data.status);
	let isOrderShownFromOrderType: Record<OrderType, boolean> = $derived($page.data.type);
</script>

{#snippet orderFilterDropdownMenu()}
	<DropdownMenu.Root closeOnItemClick={false}>
		<DropdownMenu.Trigger asChild let:builder>
			<Button variant="outline" size="sm" class="h-7 gap-1 text-sm" builders={[builder]}>
				<ListFilter class="h-3.5 w-3.5" />
				<span class="sr-only sm:not-sr-only">Filter</span>
			</Button>
		</DropdownMenu.Trigger>

		<DropdownMenu.Content align="end">
			<DropdownMenu.Label class="inline-flex items-center gap-2">
				<Waypoints class="h-3.5 w-3.5" />
				Order Status
			</DropdownMenu.Label>
			<DropdownMenu.Separator />
			{#each Object.entries(isOrderShownFromOrderStatus) as [orderStatus, isOrderShown]}
				{@const status = orderStatus as OrderStatus}

				<DropdownMenu.CheckboxItem
					checked={isOrderShown}
					onCheckedChange={(checked) => {
						const newParams = new URLSearchParams($page.url.searchParams);

						newParams.set(`${orderStatus}`, checked.toString());

						goto(`${$page.url.pathname}?${newParams}`);
					}}
				>
					<Badge class="text-xs" variant={status}>
						{orderStatus}
					</Badge>
				</DropdownMenu.CheckboxItem>
			{/each}

			<DropdownMenu.Separator />

			<DropdownMenu.Label class="inline-flex items-center gap-2">
				<Origami class="h-3.5 w-3.5" />
				Order Type
			</DropdownMenu.Label>
			<DropdownMenu.Separator />
			{#each Object.entries(isOrderShownFromOrderType) as [orderType, isOrderShown]}
				{@const type = orderType as OrderType}

				<DropdownMenu.CheckboxItem
					checked={isOrderShown}
					onCheckedChange={(checked) => {
						const newParams = new URLSearchParams($page.url.searchParams);

						newParams.set(`${orderType}`, checked.toString());

						goto(`${$page.url.pathname}?${newParams}`);
					}}
				>
					<Badge class="text-xs" variant={type}>
						{type}
					</Badge>
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
		<OrdersCard />
	</Tabs.Content>
</Tabs.Root>
