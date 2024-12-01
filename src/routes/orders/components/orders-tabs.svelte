<script lang="ts">
	import File from 'lucide-svelte/icons/file';

	import { page } from '$app/stores';

	import { Button } from '$lib/components/ui/button/index.ts';
	import * as Tabs from '$lib/components/ui/tabs/index.ts';

	import OrdersCard from './orders-card.svelte';
	import { OrdersFilterDropdownMenu } from './orders-filter-dropdown-menu/index.ts';
</script>

<Tabs.Root value="week">
	<div class="flex items-center">
		<Tabs.List>
			<Tabs.Trigger value="week">Week</Tabs.Trigger>
			<Tabs.Trigger value="month">Month</Tabs.Trigger>
			<Tabs.Trigger value="year">Year</Tabs.Trigger>
		</Tabs.List>

		<div class="ml-auto flex items-center gap-2">
			<OrdersFilterDropdownMenu
				isOrderShownFromOrderStatus={$page.data.status}
				isOrderShownFromOrderType={$page.data.type}
				pathname={$page.url.pathname}
				searchParams={$page.url.searchParams}
			/>

			<Button size="sm" variant="outline" class="h-7 gap-1 text-sm">
				<File class="h-3.5 w-3.5" />
				<span class="sr-only sm:not-sr-only">Export</span>
			</Button>
		</div>
	</div>

	<Tabs.Content value="week">
		<OrdersCard />
	</Tabs.Content>
</Tabs.Root>
