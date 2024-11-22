<script lang="ts">
	import { Temporal } from 'temporal-polyfill';

	import * as Card from '$lib/components/ui/card/index.js';

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

	const updatedAtZoned = Temporal.Instant.from(order.updatedAt).toZonedDateTimeISO(
		Temporal.Now.timeZoneId()
	);
</script>

<Card.Footer
	aria-label="Order Last Updated Date"
	class="flex flex-row items-center border-t bg-muted/50 px-6 py-3"
	role="region"
>
	<div class="text-sm text-muted-foreground">
		Last updated on <time dateTime={updatedAtZoned.toString()}>
			{updatedAtZoned.toLocaleString(locale, options)}
		</time>
	</div>
</Card.Footer>
