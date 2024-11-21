<script lang="ts">
	import type { Order } from '../../types';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<section aria-label="Order Addresses" class="grid grid-cols-2 gap-4">
		<section aria-labelledby="shipping-address" class="grid gap-3">
			<h4 class="font-semibold" id="shipping-address">Shipping Address</h4>

			<address class="grid gap-0.5 not-italic text-muted-foreground">
				<span>{order.shippingAddress.line1}</span>
				<span>{order.shippingAddress.line2}</span>
				<span>{order.shippingAddress.line3}</span>
			</address>
		</section>

		<section aria-labelledby="billing-address" class="grid auto-rows-max gap-3">
			<h4 class="font-semibold" id="billing-address">Billing Address</h4>

			{#if order.billingAddress}
				<address class="grid gap-0.5 not-italic text-muted-foreground">
					<span>{order.billingAddress.line1}</span>
					<span>{order.billingAddress.line2}</span>
					<span>{order.billingAddress.line3}</span>
				</address>
			{:else}
				<div class="text-muted-foreground">Same as shipping address</div>
			{/if}
		</section>
	</section>
{/if}
