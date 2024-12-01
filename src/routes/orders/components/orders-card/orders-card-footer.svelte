<script lang="ts">
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import * as Card from '$lib/components/ui/card/index.ts';
	import * as Pagination from '$lib/components/ui/pagination/index.ts';

	let count: number = $derived($page.data.count);
	let perPage: number = $derived($page.data.perPage);
</script>

{#if count > perPage}
	<Card.Footer aria-label="orders pagination" class="border-t bg-muted/50 px-6 py-3" role="region">
		<Pagination.Root
			ariaLabel="orders"
			class="items-start"
			let:pages
			let:currentPage
			{count}
			{perPage}
			onPageChange={(pageNumber) => {
				const newParams = new URLSearchParams($page.url.searchParams);

				newParams.set('page', pageNumber.toString());
				newParams.set('perPage', perPage.toString());

				goto(`${$page.url.pathname}?${newParams}`);
			}}
		>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton>
						<ArrowLeft class="size-4" />
						<span class="hidden sm:block">Previous</span>
					</Pagination.PrevButton>
				</Pagination.Item>

				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link {page} isActive={currentPage === page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.NextButton>
						<span class="hidden sm:block">Next</span>
						<ArrowRight class="size-4" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</Card.Footer>
{/if}
