<script lang="ts">
	import { File } from 'lucide-svelte';

	import { page } from '$app/stores';

	import { Button } from '$lib/components/ui/button/index.ts';
	import * as Card from '$lib/components/ui/card/index.ts';

	import OrdersFilterDropdownMenu from '../orders-filter-dropdown-menu/orders-filter-dropdown-menu.svelte';
</script>

<Card.Header class="space-y-2 border-b bg-muted/50 p-6">
	<div class="flex items-center gap-2">
		<Card.Title>Recent Orders</Card.Title>

		<OrdersFilterDropdownMenu
			class="ml-auto"
			isOrderShownFromOrderStatus={$page.data.status}
			isOrderShownFromOrderType={$page.data.type}
			pathname={$page.url.pathname}
			searchParams={$page.url.searchParams}
		/>

		<Button size="sm" variant="outline" class="h-8 gap-2">
			<File class="h-3.5 w-3.5" />
			<span class="sr-only sm:not-sr-only">Export</span>
		</Button>
	</div>

	<Card.Description>Recent orders from your store.</Card.Description>
</Card.Header>
