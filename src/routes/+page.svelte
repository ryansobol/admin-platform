<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	import { Progress } from '$lib/components/ui/progress/index.js';

	import OrderCard from './components/order-card.svelte';
	import OrdersTabs from './components/orders-tabs.svelte';

	import type { PageServerData } from './$types';

	type Props = {
		data: PageServerData;
	};

	const { data }: Props = $props();
	const { orders } = data;

	let selectedOrderCode = $state(Object.keys(orders)[0]);
</script>

<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
		<Card.Root class="sm:col-span-2">
			<Card.Header class="pb-3">
				<Card.Title>Your Orders</Card.Title>
				<Card.Description class="max-w-lg text-balance leading-relaxed">
					Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
				</Card.Description>
			</Card.Header>

			<Card.Footer>
				<Button>Create New Order</Button>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header class="pb-2">
				<Card.Description>This Week</Card.Description>
				<Card.Title class="text-4xl">$1329</Card.Title>
			</Card.Header>

			<Card.Content>
				<div class="text-xs text-muted-foreground">+25% from last week</div>
			</Card.Content>

			<Card.Footer>
				<Progress value={25} aria-label="25% increase" />
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header class="pb-2">
				<Card.Description>This Month</Card.Description>
				<Card.Title class="text-3xl">$5,329</Card.Title>
			</Card.Header>

			<Card.Content>
				<div class="text-xs text-muted-foreground">+10% from last month</div>
			</Card.Content>

			<Card.Footer>
				<Progress value={12} aria-label="12% increase" />
			</Card.Footer>
		</Card.Root>
	</div>

	<OrdersTabs {orders} bind:selected={selectedOrderCode} />
</div>

<div>
	<OrderCard order={orders[selectedOrderCode]} />
</div>
