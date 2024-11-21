<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	import OrderCardContentAddresses from './order-card-content-addresses.svelte';
	import OrderCardContentCustomer from './order-card-content-customer.svelte';
	import OrderCardContentPayment from './order-card-content-payment.svelte';
	import OrderCardContentSummary from './order-card-content-summary.svelte';
	import type { Order } from '../../types';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<Card.Content class="text-sm">
		<OrderCardContentSummary {order} />

		<Separator class="my-4" />

		<OrderCardContentAddresses {order} />

		<Separator class="my-4" />

		<OrderCardContentCustomer {order} />

		<Separator class="my-4" />

		<OrderCardContentPayment {order} />
	</Card.Content>
{:else}
	<Card.Content class="space-y-2">
		<Card.Title>No order selected</Card.Title>
		<Card.Description>To view an order, select one from the recent orders table.</Card.Description>
	</Card.Content>
{/if}
