<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Pagination from '$lib/components/ui/pagination/index.js';

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
	{@const updatedAtZoned = Temporal.Instant.from(order.updatedAt).toZonedDateTimeISO(
		Temporal.Now.timeZoneId()
	)}

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
{/if}
