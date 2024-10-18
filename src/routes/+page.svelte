<script lang="ts">
	import House from 'lucide-svelte/icons/house';
	import ChartLine from 'lucide-svelte/icons/chart-line';
	import Package from 'lucide-svelte/icons/package';
	import Package2 from 'lucide-svelte/icons/package-2';
	import PanelLeft from 'lucide-svelte/icons/panel-left';
	import Search from 'lucide-svelte/icons/search';
	import Settings from 'lucide-svelte/icons/settings';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import UsersRound from 'lucide-svelte/icons/users-round';

	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Darkmode from '$lib/components/ui/darkmode/darkmode.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	import { Temporal } from 'temporal-polyfill';

	import OrderCard from './order-card.svelte';
	import OrdersTabs from './orders-tabs.svelte';

	import type { Code, Order } from './types';

	const selectedOrderCode: Code = '64HG0';

	const orders: Record<Code, Order> = {
		'64HG0': {
			id: 108,
			code: '64HG0',
			customer: {
				name: 'Liam Johnson',
				email: 'liam@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Sale',
			status: 'Fulfilled',
			createdAt: Temporal.ZonedDateTime.from('2023-06-23T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-23T20:06:13-0700[-0700]'),
			products: [
				{
					id: 1,
					name: 'Glimmer Lamps',
					quantity: 2,
					price: 125
				},
				{
					id: 2,
					name: 'Aqua Filters',
					quantity: 1,
					price: 49
				}
			],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		},
		'6HTGF': {
			id: 107,
			code: '6HTGF',
			customer: {
				name: 'Olivia Smith',
				email: 'olivia@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Refund',
			status: 'Declined',
			createdAt: Temporal.ZonedDateTime.from('2023-06-24T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-24T20:06:13-0700[-0700]'),
			products: [],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		},
		'6V5G4': {
			id: 106,
			code: '6V5G4',
			customer: {
				name: 'Noah Williams',
				email: 'noah@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Subscription',
			status: 'Fulfilled',
			createdAt: Temporal.ZonedDateTime.from('2023-06-25T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-25T20:06:13-0700[-0700]'),
			products: [],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		},
		'78HG5': {
			id: 105,
			code: '78HG5',
			customer: {
				name: 'Emma Brown',
				email: 'emma@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Sale',
			status: 'Fulfilled',
			createdAt: Temporal.ZonedDateTime.from('2023-06-26T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-26T20:06:13-0700[-0700]'),
			products: [],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		},
		'7LTGZ': {
			id: 104,
			code: '7LTGZ',
			customer: {
				name: 'Liam Johnson',
				email: 'liam@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Sale',
			status: 'Fulfilled',
			createdAt: Temporal.ZonedDateTime.from('2023-06-23T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-23T20:06:13-0700[-0700]'),
			products: [],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		},
		'7Z5GI': {
			id: 103,
			code: '7Z5GI',
			customer: {
				name: 'Liam Johnson',
				email: 'liam@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Sale',
			status: 'Fulfilled',
			createdAt: Temporal.ZonedDateTime.from('2023-06-23T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-23T20:06:13-0700[-0700]'),
			products: [],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		},
		'8CHGD': {
			id: 102,
			code: '8CHGD',
			customer: {
				name: 'Olivia Smith',
				email: 'olivia@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Refund',
			status: 'Declined',
			createdAt: Temporal.ZonedDateTime.from('2023-06-24T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-24T20:06:13-0700[-0700]'),
			products: [],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		},
		'8PTGM': {
			id: 101,
			code: '8PTGM',
			customer: {
				name: 'Emma Brown',
				email: 'emma@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'Sale',
			status: 'Fulfilled',
			createdAt: Temporal.ZonedDateTime.from('2023-06-26T20:06:13-0700[-0700]'),
			updatedAt: Temporal.ZonedDateTime.from('2023-06-26T20:06:13-0700[-0700]'),
			products: [],
			subtotal: 299,
			shipping: 5,
			tax: 25,
			total: 329,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '1234 Main St.',
				line3: 'Anytown, CA 12345'
			},
			billingAddress: null,
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 4532'
			}
		}
	};
</script>

<div class="flex min-h-screen w-full flex-col bg-muted/40">
	<aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
		<nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
			<a
				href="##"
				class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
			>
				<Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
				<span class="sr-only">Acme Inc</span>
			</a>

			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="##"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<House class="h-5 w-5" />
						<span class="sr-only">Dashboard</span>
					</a>
				</Tooltip.Trigger>

				<Tooltip.Content side="right">Dashboard</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="##"
						class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<ShoppingCart class="h-5 w-5" />
						<span class="sr-only">Orders</span>
					</a>
				</Tooltip.Trigger>

				<Tooltip.Content side="right">Orders</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="##"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<Package class="h-5 w-5" />
						<span class="sr-only">Products</span>
					</a>
				</Tooltip.Trigger>

				<Tooltip.Content side="right">Products</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="##"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<UsersRound class="h-5 w-5" />
						<span class="sr-only">Customers</span>
					</a>
				</Tooltip.Trigger>

				<Tooltip.Content side="right">Customers</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="##"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<ChartLine class="h-5 w-5" />
						<span class="sr-only">Analytics</span>
					</a>
				</Tooltip.Trigger>

				<Tooltip.Content side="right">Analytics</Tooltip.Content>
			</Tooltip.Root>
		</nav>

		<nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="##"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<Settings class="h-5 w-5" />
						<span class="sr-only">Settings</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">Settings</Tooltip.Content>
			</Tooltip.Root>
		</nav>
	</aside>

	<div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
		<header
			class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
		>
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="outline" class="sm:hidden">
						<PanelLeft class="h-5 w-5" />
						<span class="sr-only">Toggle Menu</span>
					</Button>
				</Sheet.Trigger>

				<Sheet.Content side="left" class="sm:max-w-xs">
					<nav class="grid gap-6 text-lg font-medium">
						<a
							href="##"
							class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
						>
							<Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
							<span class="sr-only">Acme Inc</span>
						</a>
						<a
							href="##"
							class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<House class="h-5 w-5" />
							Dashboard
						</a>
						<a href="##" class="flex items-center gap-4 px-2.5 text-foreground">
							<ShoppingCart class="h-5 w-5" />
							Orders
						</a>
						<a
							href="##"
							class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<Package class="h-5 w-5" />
							Products
						</a>
						<a
							href="##"
							class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<UsersRound class="h-5 w-5" />
							Customers
						</a>
						<a
							href="##"
							class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<ChartLine class="h-5 w-5" />
							Settings
						</a>
					</nav>
				</Sheet.Content>
			</Sheet.Root>

			<Breadcrumb.Root class="hidden md:flex">
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">Dashboard</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">Orders</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page>Recent Orders</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>

			<div class="relative ml-auto flex-1 md:grow-0">
				<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
				/>
			</div>

			<Darkmode />

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button
						variant="outline"
						size="icon"
						class="overflow-hidden rounded-full"
						builders={[builder]}
					>
						<img
							src="/images/placeholder-user.jpg"
							width={36}
							height={36}
							alt="Avatar"
							class="overflow-hidden rounded-full"
						/>
					</Button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content align="end">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Support</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Logout</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>

		<main
			class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"
		>
			<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
				<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
					<Card.Root class="sm:col-span-2">
						<Card.Header class="pb-3">
							<Card.Title>Your Orders</Card.Title>
							<Card.Description class="max-w-lg text-balance leading-relaxed">
								Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful
								Analysis.
							</Card.Description>
						</Card.Header>

						<Card.Footer>
							<Button>Create New Order</Button>
						</Card.Footer>
					</Card.Root>

					<Card.Root>
						<Card.Header class="pb-2">
							<Card.Description>This Week</Card.Description>
							<Card.Title class="text-4xl">$1329</Card.Title>
						</Card.Header>

						<Card.Content>
							<div class="text-xs text-muted-foreground">+25% from last week</div>
						</Card.Content>

						<Card.Footer>
							<Progress value={25} aria-label="25% increase" />
						</Card.Footer>
					</Card.Root>

					<Card.Root>
						<Card.Header class="pb-2">
							<Card.Description>This Month</Card.Description>
							<Card.Title class="text-3xl">$5,329</Card.Title>
						</Card.Header>

						<Card.Content>
							<div class="text-xs text-muted-foreground">+10% from last month</div>
						</Card.Content>

						<Card.Footer>
							<Progress value={12} aria-label="12% increase" />
						</Card.Footer>
					</Card.Root>
				</div>

				<OrdersTabs {orders} selected={selectedOrderCode} />
			</div>

			<div>
				<OrderCard order={orders[selectedOrderCode]} />
			</div>
		</main>
	</div>
</div>
