import { render, screen } from '@testing-library/svelte';
import { expect, it } from 'vitest';

import OrderCardContentPayment from './order-card-content-payment.svelte';
import type { Order } from '../../types';

it('renders nothing without an order prop', () => {
	render(OrderCardContentPayment);

	const element = screen.queryByRole('region', { name: 'Order Payment Information' });

	expect(element).toBeNull();
});

it('renders the component with an order prop', () => {
	const order: Order = {
		id: 1,
		code: 'ABC123',
		customer: {
			name: 'Firstname Lastname',
			email: 'firstname.lastname@example.com',
			phone: '+1-234-567-8900'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-01-09T12:11:27-07:00',
		updatedAt: '2023-01-11T04:11:27-07:00',
		products: [{ id: 7, name: 'Handmade Ceramic Mug', quantity: 4, price: 304 }],
		subtotal: 1216,
		shipping: 26.99,
		tax: 109.44,
		total: 1352.43,
		shippingAddress: {
			line1: 'Firstname Lastname',
			line2: '117 1st Ave.',
			line3: 'Phoenix, NY 60975'
		},
		billingAddress: {
			line1: 'Firstname Lastname',
			line2: '117 1st Ave.',
			line3: 'Phoenix, NY 60975'
		},
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 3088'
		}
	};

	render(OrderCardContentPayment, { order });

	const element = screen.getByRole('region', { name: 'Order Payment Information' });

	expect(element).toMatchSnapshot();
});
