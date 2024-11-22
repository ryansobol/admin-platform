<script lang="ts">
	import CreditCard from 'lucide-svelte/icons/credit-card';

	import type { Order } from '../../types';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<section aria-label="Order Payment" class="grid gap-3">
		<h4 class="font-semibold">Payment</h4>

		<dl class="grid gap-3">
			<div class="flex items-center justify-between">
				<dt class="flex items-center gap-1.5 text-muted-foreground">
					<CreditCard class="size-4" role="presentation" />
					{order.creditCard.type}
				</dt>

				<dd>{order.creditCard.numberRedacted}</dd>
			</div>
		</dl>
	</section>
{/if}
