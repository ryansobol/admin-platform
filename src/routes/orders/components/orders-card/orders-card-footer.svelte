<script lang="ts">
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	import { goto } from '$app/navigation';

	import * as Card from '$lib/components/ui/card/index.ts';
	import * as Pagination from '$lib/components/ui/pagination/index.ts';

	type Props = {
		count: number;
		pathname: string;
		perPage: number;
		searchParams: URLSearchParams;
	};

	let { count, pathname, perPage, searchParams }: Props = $props();
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
				const newParams = new URLSearchParams(searchParams);

				newParams.set('page', pageNumber.toString());
				newParams.set('perPage', perPage.toString());

				goto(`${pathname}?${newParams}`);
			}}
		>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton class="h-8 gap-2">
						<ArrowLeft class="size-3.5" />
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
							<Pagination.Link class="h-8" {page} isActive={currentPage === page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.NextButton class="h-8 gap-2">
						<span class="hidden sm:block">Next</span>
						<ArrowRight class="size-3.5" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</Card.Footer>
{/if}
