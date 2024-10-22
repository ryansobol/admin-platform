<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import { goto, preloadData, pushState, replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	import { currencyFormatter } from '../utils';

	import type { Order } from '../types';

	type Props = {
		orders: Order[];
	};

	const { orders }: Props = $props();

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
						>
							<Table.Cell>
								<div class="font-medium">{order.customer.name}</div>
								<div class="hidden text-sm text-muted-foreground md:inline">
									{order.customer.email}
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
	</Card.Root>
{:else}
	<Card.Root>
		<Card.Content class="px-7">
			<Card.Title>No orders found</Card.Title>
			<Card.Description>Try selecting a different time period or set of filters.</Card.Description>
		</Card.Content>
	</Card.Root>
{/if}
