<script lang="ts">
	import MailIcon from 'lucide-svelte/icons/mail';
	import PhoneIcon from 'lucide-svelte/icons/phone';
	import UserIcon from 'lucide-svelte/icons/user';

	import type { Order } from '../../types.ts';

	type Props = {
		order?: Order;
	};

	const { order }: Props = $props();
</script>

{#if order}
	<section aria-label="Order Customer" class="grid gap-3">
		<h4 class="font-semibold">Customer</h4>

		<dl class="grid gap-3">
			<div class="flex items-center justify-between">
				<dt class="flex items-center gap-1.5 text-muted-foreground">
					<UserIcon class="size-4" role="presentation" />
					Name
				</dt>
				<dd>{order.customer.name}</dd>
			</div>

			<div class="flex items-center justify-between">
				<dt class="flex items-center gap-1.5 text-muted-foreground">
					<MailIcon class="size-4" role="presentation" />
					Email
				</dt>
				<dd>
					<a class="text-accent-foreground underline" href="mailto:{order.customer.email}">
						{order.customer.email}
					</a>
				</dd>
			</div>

			<div class="flex items-center justify-between">
				<dt class="flex items-center gap-1.5 text-muted-foreground">
					<PhoneIcon class="size-4" role="presentation" />
					Phone
				</dt>
				<dd>
					<a class="text-accent-foreground underline" href="tel:{order.customer.phone}">
						{order.customer.phone}
					</a>
				</dd>
			</div>
		</dl>
	</section>
{/if}
