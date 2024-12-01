<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import X from 'lucide-svelte/icons/x';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { Badge } from '$lib/components/ui/badge/index.ts';
	import { ButtonCopy } from '$lib/components/ui/button-copy/index.ts';
	import { Button } from '$lib/components/ui/button/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.ts';
	import * as Tooltip from '$lib/components/ui/tooltip/index.ts';

	import type { Order } from '../../types.ts';

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
	class="space-y-2 border-b bg-muted/50 p-6"
	role="region"
>
	<div class="flex items-center gap-2">
		<Card.Title class="text-xl">Order {order.code}</Card.Title>

		<ButtonCopy label="order code" value={order.code} />

		<!-- TODO: Implement more actions dropdown -->
		<!-- <DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} size="icon" variant="outline" class="h-8 w-8">
					<EllipsisVertical class="h-3.5 w-3.5" />
					<span class="sr-only">More Actions Dropdown</span>
				</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content align="end">
				<DropdownMenu.Item>Edit</DropdownMenu.Item>
				<DropdownMenu.Item>Export</DropdownMenu.Item>
				<DropdownMenu.Separator /> -->
		<!-- TODO: Add destructive variant after upgrading Bits UI to v1 -->
		<!-- <DropdownMenu.Item
					class="text-red-600 data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground dark:text-red-500 dark:data-[highlighted]:text-destructive-foreground"
					>Trash</DropdownMenu.Item
				>
			</DropdownMenu.Content>
		</DropdownMenu.Root> -->

		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					size="icon"
					variant="outline"
					class="ml-auto h-8 w-8"
					onclick={() => {
						{
							const newParams = new URLSearchParams($page.url.searchParams);

							if (!newParams.has('code')) return;

							newParams.delete('code');

							goto(`${$page.url.pathname}?${newParams}`);
						}
					}}
				>
					<X class="h-3.5 w-3.5" />
					<span class="sr-only">hide order</span>
				</Button>
			</Tooltip.Trigger>

			<Tooltip.Content>Hide Order</Tooltip.Content>
		</Tooltip.Root>
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
</Card.Header>
