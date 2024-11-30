<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.ts';
	import { Separator } from '$lib/components/ui/separator/index.ts';

	import OrderCardContentAddresses from './order-card-content-addresses.svelte';
	import OrderCardContentCustomer from './order-card-content-customer.svelte';
	import OrderCardContentPayment from './order-card-content-payment.svelte';
	import OrderCardContentSummary from './order-card-content-summary.svelte';
	import type { Order } from '../../types.ts';

	type Props = {
		order: Order;
	};

	const { order }: Props = $props();
</script>

<Card.Content class="text-sm">
	<OrderCardContentSummary {order} />

	<Separator class="my-4" />

	<OrderCardContentAddresses {order} />

	<Separator class="my-4" />

	<OrderCardContentCustomer {order} />

	<Separator class="my-4" />

	<OrderCardContentPayment {order} />
</Card.Content>
