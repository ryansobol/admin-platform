<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.ts';

	import OrdersCard from './orders-card.svelte';
</script>

<Tabs.Root value="week">
	<div class="flex items-center">
		<Tabs.List>
			<Tabs.Trigger value="week">Week</Tabs.Trigger>
			<Tabs.Trigger value="month">Month</Tabs.Trigger>
			<Tabs.Trigger value="year">Year</Tabs.Trigger>
		</Tabs.List>
	</div>

	<Tabs.Content value="week">
		<OrdersCard />
	</Tabs.Content>
</Tabs.Root>
