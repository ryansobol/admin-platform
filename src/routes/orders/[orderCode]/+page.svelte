<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import Truck from 'lucide-svelte/icons/truck';

	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ButtonCopy from '$lib/components/ui/button-copy/button-copy.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	import { currencyFormatter } from '../utils';

	const { data } = $props();
	const { order } = data;

	const locale = 'en-US';
	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZoneName: 'short'
	};
	const createdAtZoned = Temporal.Instant.from(order.createdAt).toZonedDateTimeISO(
		Temporal.Now.timeZoneId()
	);
	const updatedAtZoned = Temporal.Instant.from(order.updatedAt).toZonedDateTimeISO(
		Temporal.Now.timeZoneId()
	);
</script>

<Card.Root class="overflow-hidden">
	<Card.Header class="flex flex-row items-start space-y-1.5 bg-muted/50 p-6">
		<div class="grid gap-0.5">
			<Card.Title class="group flex items-center gap-2 text-lg">
				Order Code {order.code}

				<ButtonCopy
					class="opacity-0 transition-opacity group-hover:opacity-100"
					label="order code"
					value={order.code}
				/>
			</Card.Title>

			<Card.Description>
				Created on <time dateTime={createdAtZoned.toString()}>
					{createdAtZoned.toLocaleString(locale, options)}
				</time>
			</Card.Description>

			<div>
				<Badge class="text-xs" variant={order.type}>
					{order.type}
				</Badge>
				<Badge class="text-xs" variant={order.status}>
					{order.status}
				</Badge>
			</div>
		</div>

		<div class="ml-auto flex items-center gap-1">
			<Button size="sm" variant="outline" class="h-8 gap-1">
				<Truck class="h-3.5 w-3.5" />
				<span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap"> Track Order </span>
			</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="outline" class="h-8 w-8">
						<EllipsisVertical class="h-3.5 w-3.5" />
						<span class="sr-only">More</span>
					</Button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content align="end">
					<DropdownMenu.Item>Edit</DropdownMenu.Item>
					<DropdownMenu.Item>Export</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Trash</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</Card.Header>

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

	<Card.Footer class="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
		<div class="text-xs text-muted-foreground">
			Last updated on <time dateTime={updatedAtZoned.toString()}>
				{updatedAtZoned.toLocaleString(locale, options)}
			</time>
		</div>

		<Pagination.Root count={10} class="ml-auto mr-0 w-auto">
			<Pagination.Content>
				<Pagination.Item>
					<Button size="icon" variant="outline" class="h-6 w-6">
						<ChevronLeft class="h-3.5 w-3.5" />
						<span class="sr-only">Previous Order</span>
					</Button>
				</Pagination.Item>

				<Pagination.Item>
					<Button size="icon" variant="outline" class="h-6 w-6">
						<ChevronRight class="h-3.5 w-3.5" />
						<span class="sr-only">Next Order</span>
					</Button>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</Card.Footer>
</Card.Root>
