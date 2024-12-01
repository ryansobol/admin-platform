<script lang="ts">
	import { page } from '$app/stores';

	import OrdersCardContentNone from './orders-card-content-none.svelte';
	import OrdersCardContentSome from './orders-card-content-some.svelte';
</script>

{#if $page.data.orders.length}
	<OrdersCardContentSome />
{:else}
	<OrdersCardContentNone />
{/if}
