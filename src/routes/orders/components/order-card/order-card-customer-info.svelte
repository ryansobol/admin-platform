<script lang="ts">
	import type { Order } from '../../types';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<section aria-label="Order Customer Information" class="grid gap-3">
		<h4 class="font-semibold">Customer Information</h4>

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
	</section>
{/if}
