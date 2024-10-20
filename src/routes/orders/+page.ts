import type { Code, Order } from './types';

export const load = () => {
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
			createdAt: '2023-06-23T20:06:13-07:00',
			updatedAt: '2023-06-24T20:06:13-07:00',
			products: [
				{
					id: 1,
					name: 'Clay Sculpting Tool Set',
					quantity: 1,
					price: 45
				},
				{
					id: 2,
					name: 'Premium White Clay',
					quantity: 3,
					price: 15
				}
			],
			subtotal: 90,
			shipping: 10,
			tax: 8.1,
			total: 108.1,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '432 Pine St.',
				line3: 'Springfield, IL 62701'
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
				phone: '+1-234-567-8901'
			},
			type: 'One-time Purchase',
			status: 'Declined',
			createdAt: '2023-06-24T20:06:13-07:00',
			updatedAt: '2023-06-24T21:06:13-07:00',
			products: [
				{
					id: 3,
					name: 'Ceramic Glaze Set (6 colors)',
					quantity: 2,
					price: 60
				}
			],
			subtotal: 120,
			shipping: 12,
			tax: 10.5,
			total: 142.5,
			shippingAddress: {
				line1: 'Olivia Smith',
				line2: '45 Maple Rd.',
				line3: 'Boston, MA 02134'
			},
			billingAddress: {
				line1: 'Diane Smith',
				line2: '45 Maple Rd.',
				line3: 'Boston, MA 02134'
			},
			creditCard: {
				type: 'Mastercard',
				numberRedacted: '**** **** **** 1234'
			}
		},
		'6V5G4': {
			id: 106,
			code: '6V5G4',
			customer: {
				name: 'Noah Williams',
				email: 'noah@example.com',
				phone: '+1-234-567-8902'
			},
			type: 'Monthly Subscription',
			status: 'Fulfilled',
			createdAt: '2023-06-25T20:06:13-07:00',
			updatedAt: '2023-07-25T20:06:13-07:00',
			products: [
				{
					id: 4,
					name: 'Monthly Clay Refill (10 lbs)',
					quantity: 1,
					price: 30
				}
			],
			subtotal: 30,
			shipping: 5,
			tax: 3.15,
			total: 38.15,
			shippingAddress: {
				line1: 'Noah Williams',
				line2: '789 Oak Ave.',
				line3: 'Seattle, WA 98122'
			},
			billingAddress: null,
			creditCard: {
				type: 'American Express',
				numberRedacted: '**** ****** 12345'
			}
		},
		'78HG5': {
			id: 105,
			code: '78HG5',
			customer: {
				name: 'Emma Brown',
				email: 'emma@example.com',
				phone: '+1-234-567-8903'
			},
			type: 'One-time Purchase',
			status: 'Pending',
			createdAt: '2023-06-26T20:06:13-07:00',
			updatedAt: '2023-06-26T21:06:13-07:00',
			products: [
				{
					id: 5,
					name: 'Pottery Wheel (Electric)',
					quantity: 1,
					price: 400
				},
				{
					id: 6,
					name: 'Stoneware Clay (25 lbs)',
					quantity: 1,
					price: 25
				}
			],
			subtotal: 425,
			shipping: 25,
			tax: 38,
			total: 488,
			shippingAddress: {
				line1: 'Emma Brown',
				line2: '101 Cedar Blvd.',
				line3: 'Austin, TX 73301'
			},
			billingAddress: null,
			creditCard: {
				type: 'Mastercard',
				numberRedacted: '**** **** **** 5678'
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
			createdAt: '2023-06-23T20:06:13-07:00',
			updatedAt: '2023-06-23T21:06:13-07:00',
			products: [
				{
					id: 7,
					name: 'Kiln Shelves',
					quantity: 2,
					price: 150
				}
			],
			subtotal: 300,
			shipping: 20,
			tax: 27,
			total: 347,
			shippingAddress: {
				line1: 'Liam Johnson',
				line2: '432 Pine St.',
				line3: 'Springfield, IL 62701'
			},
			billingAddress: null,
			creditCard: {
				type: 'Discover',
				numberRedacted: '**** **** **** 6789'
			}
		},
		'7Z5GI': {
			id: 103,
			code: '7Z5GI',
			customer: {
				name: 'Sophia Davis',
				email: 'sophia@example.com',
				phone: '+1-234-567-8904'
			},
			type: 'One-time Purchase',
			status: 'Refunded',
			createdAt: '2023-06-23T20:06:13-07:00',
			updatedAt: '2023-06-27T20:06:13-07:00',
			products: [
				{
					id: 8,
					name: 'Handheld Clay Cutter',
					quantity: 1,
					price: 25
				}
			],
			subtotal: 25,
			shipping: 5,
			tax: 2.25,
			total: 32.25,
			shippingAddress: {
				line1: 'Sophia Davis',
				line2: '321 Birch Ln.',
				line3: 'Chicago, IL 60607'
			},
			billingAddress: {
				line1: 'Sophia Davis',
				line2: '456 SW Harris St.',
				line3: 'Chicago, IL 60603'
			},
			creditCard: {
				type: 'Visa',
				numberRedacted: '**** **** **** 9876'
			}
		},
		'8CHGD': {
			id: 102,
			code: '8CHGD',
			customer: {
				name: 'Olivia Smith',
				email: 'olivia@example.com',
				phone: '+1-234-567-8901'
			},
			type: 'Monthly Subscription',
			status: 'Pending',
			createdAt: '2023-06-24T20:06:13-07:00',
			updatedAt: '2023-06-24T20:06:13-07:00',
			products: [
				{
					id: 9,
					name: 'Monthly Glaze Refill (3 colors)',
					quantity: 1,
					price: 20
				}
			],
			subtotal: 20,
			shipping: 3,
			tax: 1.8,
			total: 24.8,
			shippingAddress: {
				line1: 'Olivia Smith',
				line2: '45 Maple Rd.',
				line3: 'Boston, MA 02134'
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
				phone: '+1-234-567-8903'
			},
			type: 'One-time Purchase',
			status: 'Refunded',
			createdAt: '2023-06-26T20:06:13-07:00',
			updatedAt: '2023-06-28T20:06:13-07:00',
			products: [
				{
					id: 10,
					name: 'Pottery Wheel Repair Kit',
					quantity: 1,
					price: 100
				}
			],
			subtotal: 100,
			shipping: 10,
			tax: 9,
			total: 119,
			shippingAddress: {
				line1: 'Emma Brown',
				line2: '101 Cedar Blvd.',
				line3: 'Austin, TX 73301'
			},
			billingAddress: null,
			creditCard: {
				type: 'American Express',
				numberRedacted: '**** ****** 54321'
			}
		}
	};

	return { orders };
};
