<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	import type { Code, Order } from './types';

	type Props = {
		orders: Record<Code, Order>;
		selected: Code;
	};

	const { orders, selected }: Props = $props();

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
</script>

<Card.Root>
	<Card.Header class="px-7">
		<Card.Title>Orders</Card.Title>
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
				{#each Object.entries(orders) as [code, order] (order.id)}
					<Table.Row class={selected === code ? 'bg-accent' : ''}>
						<Table.Cell>
							<div class="font-medium">{order.customer.name}</div>
							<div class="hidden text-sm text-muted-foreground md:inline">
								{order.customer.email}
							</div>
						</Table.Cell>

						<Table.Cell class="hidden sm:table-cell">{order.type}</Table.Cell>

						<Table.Cell class="hidden sm:table-cell">
							<Badge class="text-xs" variant="secondary">{order.status}</Badge>
						</Table.Cell>

						<Table.Cell class="hidden md:table-cell">
							{order.createdAt.toPlainDate().toString()}
						</Table.Cell>

						<Table.Cell class="text-right">{formatter.format(order.total)}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
