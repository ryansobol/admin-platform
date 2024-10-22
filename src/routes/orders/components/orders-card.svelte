<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import { goto, preloadData, pushState, replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Pagination from '$lib/components/ui/pagination';
	import * as Table from '$lib/components/ui/table/index.js';

	import { currencyFormatter } from '../utils';

	import type { PartialOrder } from '../types';

	type Props = {
		orders: PartialOrder[];
		count: number;
		perPage: number;
	};

	let { orders, count, perPage }: Props = $props();

	let selected = $derived($page.state?.selectedOrder?.code ?? '');
</script>

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
						<Table.Head class="hidden sm:table-cell">Type</Table.Head>
						<Table.Head class="hidden sm:table-cell">Status</Table.Head>
						<Table.Head class="hidden md:table-cell">Date</Table.Head>
						<Table.Head class="text-right">Amount</Table.Head>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{#each orders as order (order.id)}
						{@const code = order.code}

						<Table.Row
							class={selected === code ? 'bg-accent' : ''}
							onclick={async () => {
								if (selected === code) {
									replaceState($page.url.pathname, {});
									return;
								}

								const href = `${$page.url.pathname}/${code}`;
								const result = await preloadData(href);

								if (result.type === 'loaded' && result.status === 200) {
									pushState(href, { selectedOrder: result.data.order });
								} else {
									goto(href);
								}
							}}
							onmouseover={async () => await preloadData(`${$page.url.pathname}/${code}`)}
						>
							<Table.Cell>
								<div class="font-medium">{order.customerName}</div>
								<div class="hidden text-sm text-muted-foreground md:inline">
									{order.customerEmail}
								</div>
							</Table.Cell>

							<Table.Cell class="hidden sm:table-cell">
								<Badge class="text-xs" variant={order.type}>
									{order.type}
								</Badge>
							</Table.Cell>

							<Table.Cell class="hidden sm:table-cell">
								<Badge class="text-xs" variant={order.status}>
									{order.status}
								</Badge>
							</Table.Cell>

							<Table.Cell class="hidden md:table-cell">
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
					onPageChange={async (page) => {
						const result = await fetch(`/api/orders?limit=${perPage}&skip=${(page - 1) * perPage}`);
						const data = await result.json();

						orders = data.orders;
					}}
				>
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.PrevButton>
								<ChevronLeft class="h-4 w-4" />
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
								<ChevronRight class="h-4 w-4" />
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
