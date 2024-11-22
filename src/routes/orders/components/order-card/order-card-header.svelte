<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import Truck from 'lucide-svelte/icons/truck';

	import Badge from '$lib/components/ui/badge/badge.svelte';
	import ButtonCopy from '$lib/components/ui/button-copy/button-copy.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	import type { Order } from '../../types';

	type Props = {
		order: Order;
	};

	const { order }: Props = $props();

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
</script>

<Card.Header
	aria-label="Order Metadata and Actions"
	class="flex flex-row place-content-between space-y-0 bg-muted/50 p-6"
	role="region"
>
	<div class="space-y-2">
		<div class="flex items-center gap-2">
			<Card.Title class="text-xl">Order {order.code}</Card.Title>
			<ButtonCopy label="order code" value={order.code} />
		</div>

		<Card.Description>
			Created on <time dateTime={createdAtZoned.toString()}>
				{createdAtZoned.toLocaleString(locale, options)}
			</time>
		</Card.Description>

		<div>
			<Badge class="text-xs" variant={order.type}>{order.type}</Badge>
			<Badge class="text-xs" variant={order.status}>{order.status}</Badge>
		</div>
	</div>

	<div class="flex gap-2">
		<Button size="sm" variant="outline" class="h-8 gap-2">
			<Truck class="h-3.5 w-3.5" />
			<span class="sr-only sm:not-sr-only xl:sr-only 2xl:not-sr-only 2xl:whitespace-nowrap">
				Track Order
			</span>
		</Button>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} size="icon" variant="outline" class="h-8 w-8">
					<EllipsisVertical class="h-3.5 w-3.5" />
					<span class="sr-only">More Actions Dropdown</span>
				</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content align="end">
				<DropdownMenu.Item>Edit</DropdownMenu.Item>
				<DropdownMenu.Item>Export</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<!-- TODO: Add destructive variant after upgrading Bits UI to v1 -->
				<DropdownMenu.Item
					class="text-red-600 data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground dark:text-red-500 dark:data-[highlighted]:text-destructive-foreground"
					>Trash</DropdownMenu.Item
				>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</Card.Header>
