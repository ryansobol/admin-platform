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
		order?: Order;
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
</script>

{#if order}
	{@const createdAtZoned = Temporal.Instant.from(order.createdAt).toZonedDateTimeISO(
		Temporal.Now.timeZoneId()
	)}
	<Card.Header
		aria-label="Order Metadata and Actions"
		class="flex flex-row items-start space-y-1.5 bg-muted/50 p-6"
		role="region"
	>
		<div class="grid gap-0.5">
			<div class="flex items-center gap-2">
				<Card.Title class="text-lg">Order {order.code}</Card.Title>
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

		<div class="ml-auto flex items-center gap-1">
			<Button size="sm" variant="outline" class="h-8 gap-1">
				<Truck aria-hidden class="h-3.5 w-3.5" />
				<span class="sr-only sm:not-sr-only xl:sr-only 2xl:not-sr-only 2xl:whitespace-nowrap">
					Track Order
				</span>
			</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="outline" class="h-8 w-8">
						<EllipsisVertical aria-hidden class="h-3.5 w-3.5" />
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
{/if}
