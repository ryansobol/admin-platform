<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.ts';

	import { currencyFormatter } from '../../utils.ts';
	import type { Order } from '../../types.ts';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<section aria-labelledby="order-summary" class="grid gap-3">
		<h4 class="font-semibold" id="order-summary">Order Summary</h4>

		<ul class="grid gap-3">
			{#each order.products as product (product.id)}
				<li class="flex items-center justify-between">
					<span class="text-muted-foreground">
						{product.name} x <span>{product.quantity}</span>
					</span>
					<span>{currencyFormatter.format(product.quantity * product.price)}</span>
				</li>
			{/each}
		</ul>

		<Separator class="my-2" />

		<ul class="grid gap-3">
			<li class="flex items-center justify-between">
				<span class="text-muted-foreground">Subtotal</span>
				<span>{currencyFormatter.format(order.subtotal)}</span>
			</li>

			<li class="flex items-center justify-between">
				<span class="text-muted-foreground">Shipping</span>
				<span>{currencyFormatter.format(order.shipping)}</span>
			</li>

			<li class="flex items-center justify-between">
				<span class="text-muted-foreground">Tax</span>
				<span>{currencyFormatter.format(order.tax)}</span>
			</li>

			<li class="flex items-center justify-between font-semibold">
				<span class="text-muted-foreground">Total</span>
				<span>{currencyFormatter.format(order.total)}</span>
			</li>
		</ul>
	</section>
{/if}
