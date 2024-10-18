import type { Code, Order } from './types';

export const load = async () => {
	const orders: Record<Code, Order> = {
		'64HG0': {
			id: 108,
			code: '64HG0',
			customer: {
				name: 'Liam Johnson',
				email: 'liam@example.com',
				phone: '+1-234-567-8900'
			},
			type: 'One-time Purchase',
			status: 'Fulfilled',
			createdAt: '2023-06-23T20:06:13-0700[-0700]',
			updatedAt: '2023-06-23T20:06:13-0700[-0700]',
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
			type: 'One-time Purchase',
			status: 'Declined',
			createdAt: '2023-06-24T20:06:13-0700[-0700]',
			updatedAt: '2023-06-24T20:06:13-0700[-0700]',
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
			type: 'Monthly Subscription',
			status: 'Fulfilled',
			createdAt: '2023-06-25T20:06:13-0700[-0700]',
			updatedAt: '2023-06-25T20:06:13-0700[-0700]',
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
			type: 'One-time Purchase',
			status: 'Fulfilled',
			createdAt: '2023-06-26T20:06:13-0700[-0700]',
			updatedAt: '2023-06-26T20:06:13-0700[-0700]',
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
			type: 'One-time Purchase',
			status: 'Fulfilled',
			createdAt: '2023-06-23T20:06:13-0700[-0700]',
			updatedAt: '2023-06-23T20:06:13-0700[-0700]',
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
			type: 'One-time Purchase',
			status: 'Fulfilled',
			createdAt: '2023-06-23T20:06:13-0700[-0700]',
			updatedAt: '2023-06-23T20:06:13-0700[-0700]',
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
			type: 'Monthly Subscription',
			status: 'Declined',
			createdAt: '2023-06-24T20:06:13-0700[-0700]',
			updatedAt: '2023-06-24T20:06:13-0700[-0700]',
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
			type: 'One-time Purchase',
			status: 'Refunded',
			createdAt: '2023-06-26T20:06:13-0700[-0700]',
			updatedAt: '2023-06-26T20:06:13-0700[-0700]',
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

	return { orders };
};
