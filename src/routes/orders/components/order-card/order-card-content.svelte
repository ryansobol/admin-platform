<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	import OrderCardContentSummary from './order-card-content-summary.svelte';
	import OrderCardCustomerInfo from './order-card-customer-info.svelte';
	import OrderCardOrderAddresses from './order-card-order-addresses.svelte';
	import OrderCardPaymentInfo from './order-card-payment-info.svelte';
	import type { Order } from '../../types';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<Card.Content class="p-6 text-sm">
		<OrderCardContentSummary {order} />

		<Separator class="my-4" />

		<OrderCardOrderAddresses {order} />

		<Separator class="my-4" />

		<OrderCardCustomerInfo {order} />

		<Separator class="my-4" />

		<OrderCardPaymentInfo {order} />
	</Card.Content>
{:else}
	<Card.Content class="px-7">
		<Card.Title>No order selected</Card.Title>
		<Card.Description>To view an order, select one from the recent orders table.</Card.Description>
	</Card.Content>
{/if}
