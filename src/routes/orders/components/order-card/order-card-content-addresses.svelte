<script lang="ts">
	import type { Order } from '../../types';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<section aria-label="Order Addresses" class="flex place-content-between">
		<section aria-labelledby="shipping-address" class="grid gap-3">
			<h4 class="font-semibold" id="shipping-address">Shipping Address</h4>

			<address class="space-y-0.5 not-italic text-muted-foreground">
				<div>{order.shippingAddress.line1}</div>
				<div>{order.shippingAddress.line2}</div>
				<div>{order.shippingAddress.line3}</div>
			</address>
		</section>

		<section aria-labelledby="billing-address" class="grid auto-rows-max gap-3">
			<h4 class="font-semibold" id="billing-address">Billing Address</h4>

			{#if order.billingAddress}
				<address class="space-y-0.5 not-italic text-muted-foreground">
					<div>{order.billingAddress.line1}</div>
					<div>{order.billingAddress.line2}</div>
					<div>{order.billingAddress.line3}</div>
				</address>
			{:else}
				<div class="text-muted-foreground">Same as shipping address</div>
			{/if}
		</section>
	</section>
{/if}
