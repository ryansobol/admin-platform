import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';

import OrdersFilterDropdownMenu from './orders-filter-dropdown-menu.svelte';

it.skip('renders without user interaction', () => {
	const isOrderShownFromOrderStatus = {
		Declined: true,
		Fulfilled: true,
		Pending: true,
		Refunded: true
	};

	const isOrderShownFromOrderType = {
		'One-time Purchase': true,
		'Monthly Subscription': true
	};

	const pathname = '/orders';
	const searchParams = new URLSearchParams();

	render(OrdersFilterDropdownMenu, {
		isOrderShownFromOrderStatus,
		isOrderShownFromOrderType,
		pathname,
		searchParams
	});

	const element = screen.queryByRole('button', { name: 'Filter' });

	expect(element).toMatchSnapshot();
});

it.skip('renders with user interaction', async () => {
	const user = userEvent.setup();

	const isOrderShownFromOrderStatus = {
		Declined: true,
		Fulfilled: true,
		Pending: true,
		Refunded: true
	};

	const isOrderShownFromOrderType = {
		'One-time Purchase': true,
		'Monthly Subscription': true
	};

	const pathname = '/orders';
	const searchParams = new URLSearchParams();

	render(OrdersFilterDropdownMenu, {
		isOrderShownFromOrderStatus,
		isOrderShownFromOrderType,
		pathname,
		searchParams
	});

	const button = screen.getByRole('button', { name: 'Filter' });

	await user.click(button);

	const menu = screen.queryByRole('menu');

	expect(button).toMatchSnapshot();
	expect(menu).toMatchSnapshot();
});
