<script lang="ts">
	import CreditCard from 'lucide-svelte/icons/credit-card';

	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	import { currencyFormatter } from '../../utils';
	import type { Order } from '../../types';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<Card.Content class="p-6 text-sm">
		<div class="grid gap-3">
			<div class="font-semibold">Order Details</div>

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
		</div>

		<Separator class="my-4" />

		<div class="grid grid-cols-2 gap-4">
			<div class="grid gap-3">
				<div class="font-semibold">Shipping Information</div>

				<address class="grid gap-0.5 not-italic text-muted-foreground">
					<span>{order.shippingAddress.line1}</span>
					<span>{order.shippingAddress.line2}</span>
					<span>{order.shippingAddress.line3}</span>
				</address>
			</div>

			<div class="grid auto-rows-max gap-3">
				<div class="font-semibold">Billing Information</div>

				{#if order.billingAddress}
					<address class="grid gap-0.5 not-italic text-muted-foreground">
						<span>{order.billingAddress.line1}</span>
						<span>{order.billingAddress.line2}</span>
						<span>{order.billingAddress.line3}</span>
					</address>
				{:else}
					<div class="text-muted-foreground">Same as shipping address</div>
				{/if}
			</div>
		</div>

		<Separator class="my-4" />

		<div class="grid gap-3">
			<div class="font-semibold">Customer Information</div>

			<dl class="grid gap-3">
				<div class="flex items-center justify-between">
					<dt class="text-muted-foreground">Customer</dt>
					<dd>{order.customer.name}</dd>
				</div>

				<div class="flex items-center justify-between">
					<dt class="text-muted-foreground">Email</dt>
					<dd>
						<a href="mailto:{order.customer.email}">{order.customer.email}</a>
					</dd>
				</div>

				<div class="flex items-center justify-between">
					<dt class="text-muted-foreground">Phone</dt>
					<dd>
						<a href="tel:{order.customer.phone}">{order.customer.phone}</a>
					</dd>
				</div>
			</dl>
		</div>

		<Separator class="my-4" />
		<div class="grid gap-3">
			<div class="font-semibold">Payment Information</div>

			<dl class="grid gap-3">
				<div class="flex items-center justify-between">
					<dt class="flex items-center gap-1 text-muted-foreground">
						<CreditCard class="h-4 w-4" />
						{order.creditCard.type}
					</dt>

					<dd>{order.creditCard.numberRedacted}</dd>
				</div>
			</dl>
		</div>
	</Card.Content>
{:else}
	<Card.Content class="px-7">
		<Card.Title>No order selected</Card.Title>
		<Card.Description>To view an order, select one from the recent orders table.</Card.Description>
	</Card.Content>
{/if}
