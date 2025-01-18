<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import ArrowDown10 from 'lucide-svelte/icons/arrow-down-1-0';
	import ArrowDownAZ from 'lucide-svelte/icons/arrow-down-a-z';
	import ArrowDownUp from 'lucide-svelte/icons/arrow-down-up';
	import ArrowUp10 from 'lucide-svelte/icons/arrow-up-1-0';
	import ArrowUpAZ from 'lucide-svelte/icons/arrow-up-a-z';

	import { goto } from '$app/navigation';

	import { Badge } from '$lib/components/ui/badge/index.ts';
	import { Button } from '$lib/components/ui/button/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';
	import * as Table from '$lib/components/ui/table/index.ts';
	import { cn } from '$lib/utils.ts';

	import { currencyFormatter } from '../../utils.ts';
	import type { PartialOrder, SortColumn, SortDirection } from '../../types.ts';

	type Props = {
		class?: string;
		orders: PartialOrder[];
		pathname: string;
		searchParams: URLSearchParams;
		selectedOrderCode: string;
		sortColumn: SortColumn;
		sortDirection: SortDirection;
	};

	let {
		class: className,
		orders,
		pathname,
		searchParams,
		selectedOrderCode,
		sortColumn,
		sortDirection
	}: Props = $props();

	function handleSort(column: SortColumn, initialDirection: SortDirection) {
		const newParams = new URLSearchParams(searchParams);

		if (sortColumn === column) {
			if (sortDirection === 'asc') {
				newParams.set('sortDirection', 'desc');
			} else {
				newParams.set('sortDirection', 'asc');
			}
		} else {
			newParams.set('sortColumn', column);
			newParams.set('sortDirection', initialDirection);
		}

		goto(`${pathname}?${newParams}`);
	}
</script>

<svelte:window
	onkeydown={(event: KeyboardEvent) => {
		if (event.key !== 'Escape') return;

		const newParams = new URLSearchParams(searchParams);

		if (!newParams.has('code')) return;

		newParams.delete('code');

		goto(`${pathname}?${newParams}`);
	}}
/>

{#snippet buttonSortableColumn(column: SortColumn, initialDirection: SortDirection, label: string)}
	<Button
		class={cn('h-8 gap-2', sortColumn === column ? 'text-foreground' : '')}
		onclick={() => handleSort(column, initialDirection)}
		variant="ghost"
	>
		{label}

		{#if sortColumn === column}
			{@const Icon =
				sortDirection === 'asc'
					? ['customerName', 'type', 'status'].includes(sortColumn)
						? ArrowDownAZ
						: ArrowUp10
					: ['customerName', 'type', 'status'].includes(sortColumn)
						? ArrowUpAZ
						: ArrowDown10}

			<Icon class="size-3.5" />
			<span class="sr-only">
				Sorted by {label} in
				{sortDirection === 'asc' ? 'ascending' : 'descending'} order
			</span>
		{:else}
			<ArrowDownUp class="size-3.5" />
			<span class="sr-only">
				Sort by {label} in either descending or ascending order
			</span>
		{/if}
	</Button>
{/snippet}

<Card.Content class={className}>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>
					{@render buttonSortableColumn('customerName', 'asc', 'Customer')}
				</Table.Head>
				<Table.Head class="hidden lg:table-cell">
					{@render buttonSortableColumn('type', 'asc', 'Type')}
				</Table.Head>
				<Table.Head class="hidden sm:table-cell">
					{@render buttonSortableColumn('status', 'asc', 'Status')}
				</Table.Head>
				<Table.Head>
					{@render buttonSortableColumn('createdAt', 'desc', 'Date')}
				</Table.Head>
				<Table.Head class="text-right">
					{@render buttonSortableColumn('total', 'desc', 'Amount')}
				</Table.Head>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			{#each orders as order, index (order.id)}
				{@const code = order.code}

				<Table.Row
					class={cn('cursor-pointer', index % 2 === 0 ? 'bg-muted/30' : '')}
					data-state={selectedOrderCode === code ? 'selected' : ''}
					onclick={() => {
						const newParams = new URLSearchParams(searchParams);

						if (selectedOrderCode === code) {
							newParams.delete('code');
						} else {
							newParams.set('code', code);
						}

						goto(`${pathname}?${newParams}`);
					}}
				>
					<Table.Cell>
						<div class="font-medium">{order.customerName}</div>
						<div class="hidden text-sm text-muted-foreground md:inline">
							{order.customerEmail}
						</div>
					</Table.Cell>

					<Table.Cell class="hidden lg:table-cell">
						<Badge class="text-xs" variant={order.type}>
							{order.type}
						</Badge>
					</Table.Cell>

					<Table.Cell class="hidden sm:table-cell">
						<Badge class="text-xs" variant={order.status}>
							{order.status}
						</Badge>
					</Table.Cell>

					<Table.Cell>
						{Temporal.Instant.from(order.createdAt)
							.toZonedDateTimeISO(Temporal.Now.timeZoneId())
							.toLocaleString('en-US', {
								month: 'short',
								day: 'numeric',
								year: 'numeric'
							})}
					</Table.Cell>

					<Table.Cell class="text-right">{currencyFormatter.format(order.total)}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</Card.Content>
