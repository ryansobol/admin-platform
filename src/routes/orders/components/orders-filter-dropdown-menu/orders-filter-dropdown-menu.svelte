<script lang="ts">
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import Origami from 'lucide-svelte/icons/origami';
	import Waypoints from 'lucide-svelte/icons/waypoints';

	import { goto } from '$app/navigation';

	import { Badge } from '$lib/components/ui/badge/index.ts';
	import { Button } from '$lib/components/ui/button/index.ts';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.ts';
	import { cn } from '$lib/utils.ts';

	import type { OrderStatus, OrderType } from '../../types.ts';

	type Props = {
		class?: string;
		isOrderShownFromOrderStatus: Record<OrderStatus, boolean>;
		isOrderShownFromOrderType: Record<OrderType, boolean>;
		pathname: string;
		searchParams: URLSearchParams;
	};

	let {
		class: className,
		isOrderShownFromOrderStatus,
		isOrderShownFromOrderType,
		pathname,
		searchParams
	}: Props = $props();
</script>

<DropdownMenu.Root closeOnItemClick={false}>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="outline" size="sm" class={cn('h-8 gap-2', className)} builders={[builder]}>
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
					const newSearchParams = new URLSearchParams(searchParams);

					newSearchParams.set(`${orderStatus}`, checked.toString());

					goto(`${pathname}?${newSearchParams}`);
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
					const newSearchParams = new URLSearchParams(searchParams);

					newSearchParams.set(`${orderType}`, checked.toString());

					goto(`${pathname}?${newSearchParams}`);
				}}
			>
				<Badge class="text-xs" variant={type}>
					{type}
				</Badge>
			</DropdownMenu.CheckboxItem>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
