import { type VariantProps, tv } from 'tailwind-variants';
export { default as Badge } from './badge.svelte';

export const badgeVariants = tv({
	base: 'focus:ring-ring inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/80 border-transparent',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
			destructive:
				'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent',
			outline: 'text-foreground',

			Declined: 'border-red-600/90 text-red-600/90',
			Fulfilled: 'border-green-600/90 text-green-600/90',
			Pending: 'border-yellow-600/90 text-yellow-600/90',
			Refunded: 'border-violet-600/90 text-violet-600/90',

			'One-time Purchase': 'border-sky-600/90 text-sky-600/90',
			'Monthly Subscription': 'border-fuchsia-600/90 text-fuchsia-600/90'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof badgeVariants>['variant'];
