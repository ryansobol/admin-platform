<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import ArrowDown10 from 'lucide-svelte/icons/arrow-down-1-0';
	import ArrowDownAZ from 'lucide-svelte/icons/arrow-down-a-z';
	import ArrowDownUp from 'lucide-svelte/icons/arrow-down-up';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowUp10 from 'lucide-svelte/icons/arrow-up-1-0';
	import ArrowUpAZ from 'lucide-svelte/icons/arrow-up-a-z';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Pagination from '$lib/components/ui/pagination';
	import * as Table from '$lib/components/ui/table/index.js';
	import { cn } from '$lib/utils';

	import { currencyFormatter } from '../utils';
	import type { PartialOrder, SortColumn, SortDirection } from '../types';

	let orders: PartialOrder[] = $derived($page.data.orders);
	let count: number = $derived($page.data.count);
	let perPage: number = $derived($page.data.perPage);
	let sortColumn: SortColumn = $derived($page.data.sortColumn);
	let sortDirection: SortDirection = $derived($page.data.sortDirection);
	let selected = $derived($page.data.order?.code ?? '');

	function handleSort(column: SortColumn, initialDirection: SortDirection) {
		const newParams = new URLSearchParams($page.url.searchParams);

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

		goto(`${$page.url.pathname}?${newParams}`);
	}
</script>

{#snippet buttonSortableColumn(column: SortColumn, initialDirection: SortDirection, label: string)}
	<Button
		class={cn('gap-1', sortColumn === column ? 'text-foreground' : '')}
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

			<Icon class="size-4" />
			<span class="sr-only">
				Sorted by {label} in
				{sortDirection === 'asc' ? 'ascending' : 'descending'} order
			</span>
		{:else}
			<ArrowDownUp class="size-4" />
			<span class="sr-only">
				Sort by {label} in either descending or ascending order
			</span>
		{/if}
	</Button>
{/snippet}

{#if orders.length}
	<Card.Root>
		<Card.Header class="px-7">
			<Card.Title>Recent Orders</Card.Title>
			<Card.Description>Recent orders from your store.</Card.Description>
		</Card.Header>

		<Card.Content>
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
							class={cn('cursor-pointer', index % 2 === 0 ? 'bg-muted/30 dark:bg-muted/15' : '')}
							data-state={selected === code ? 'selected' : ''}
							onclick={() => {
								const newParams = new URLSearchParams($page.url.searchParams);

								if (selected === code) {
									newParams.delete('code');
								} else {
									newParams.set('code', code);
								}

								goto(`${$page.url.pathname}?${newParams}`);
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

		{#if count > perPage}
			<Card.Footer class="px-7">
				<Pagination.Root
					class="items-start"
					let:pages
					let:currentPage
					{count}
					{perPage}
					onPageChange={(pageNumber) => {
						const newParams = new URLSearchParams($page.url.searchParams);

						newParams.set('page', pageNumber.toString());
						newParams.set('perPage', perPage.toString());

						goto(`${$page.url.pathname}?${newParams}`);
					}}
				>
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.PrevButton>
								<ArrowLeft class="size-4" />
								<span class="hidden sm:block">Previous</span>
							</Pagination.PrevButton>
						</Pagination.Item>

						{#each pages as page (page.key)}
							{#if page.type === 'ellipsis'}
								<Pagination.Item>
									<Pagination.Ellipsis />
								</Pagination.Item>
							{:else}
								<Pagination.Item>
									<Pagination.Link {page} isActive={currentPage === page.value}>
										{page.value}
									</Pagination.Link>
								</Pagination.Item>
							{/if}
						{/each}

						<Pagination.Item>
							<Pagination.NextButton>
								<span class="hidden sm:block">Next</span>
								<ArrowRight class="size-4" />
							</Pagination.NextButton>
						</Pagination.Item>
					</Pagination.Content>
				</Pagination.Root>
			</Card.Footer>
		{/if}
	</Card.Root>
{:else}
	<Card.Root>
		<Card.Content class="px-7">
			<Card.Title>No orders found</Card.Title>
			<Card.Description>Try selecting a different time period or set of filters.</Card.Description>
		</Card.Content>
	</Card.Root>
{/if}
