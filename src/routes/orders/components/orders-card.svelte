<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Pagination from '$lib/components/ui/pagination';
	import * as Table from '$lib/components/ui/table/index.js';

	import { cn } from '$lib/utils';

	import { currencyFormatter } from '../utils';

	import type { PartialOrder } from '../types';

	let orders: PartialOrder[] = $derived($page.data.orders);
	let count: number = $derived($page.data.count);
	let perPage: number = $derived($page.data.perPage);
	let sortColumn: 'createdAt' | 'total' = $derived($page.data.sortColumn);
	let sortDirection: 'asc' | 'desc' = $derived($page.data.sortDirection);
	let selected = $derived($page.data.order?.code ?? '');

	function handleSort(column: 'createdAt' | 'total') {
		const newParams = new URLSearchParams($page.url.searchParams);

		if (sortColumn === column) {
			if (sortDirection === 'asc') {
				newParams.set('sortDirection', 'desc');
			} else {
				newParams.set('sortDirection', 'asc');
			}
		} else {
			newParams.set('sortColumn', column);
			newParams.set('sortDirection', 'desc');
		}

		goto(`${$page.url.pathname}?${newParams}`);
	}
</script>

{#snippet buttonSortableColumn(column: 'createdAt' | 'total', label: 'Date' | 'Amount')}
	<Button
		class={cn('gap-1', sortColumn === column ? 'text-primary-foreground' : '')}
		onclick={() => handleSort(column)}
		variant="ghost"
	>
		{label}

		{#if sortColumn === column}
			{@const Icon = sortDirection === 'asc' ? ChevronUp : ChevronDown}

			<Icon class="size-4" />
			<span class="sr-only">
				Sorted by {label} in
				{sortDirection === 'asc' ? 'ascending' : 'descending'} order
			</span>
		{:else}
			<ChevronsUpDown class="size-4" />
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
						<Table.Head>Customer</Table.Head>
						<Table.Head class="hidden lg:table-cell">Type</Table.Head>
						<Table.Head class="hidden sm:table-cell">Status</Table.Head>
						<Table.Head>
							{@render buttonSortableColumn('createdAt', 'Date')}
						</Table.Head>
						<Table.Head class="text-right">
							{@render buttonSortableColumn('total', 'Amount')}
						</Table.Head>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{#each orders as order (order.id)}
						{@const code = order.code}

						<Table.Row
							class={selected === code ? 'bg-accent' : ''}
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
									.toPlainDate()
									.toString()}
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
								<ChevronLeft class="size-4" />
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
								<ChevronRight class="size-4" />
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
