import { findOrder, paginateOrders } from './db.ts';
import { SortColumn } from './types.ts';

export const load = ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? 1);
	const perPage = Number(url.searchParams.get('perPage') ?? 10);

	const status = {
		Declined: (url.searchParams.get('Declined') ?? 'true') === 'true',
		Fulfilled: (url.searchParams.get('Fulfilled') ?? 'true') === 'true',
		Pending: (url.searchParams.get('Pending') ?? 'true') === 'true',
		Refunded: (url.searchParams.get('Refunded') ?? 'true') === 'true'
	};

	const type = {
		'One-time Purchase': (url.searchParams.get('One-time Purchase') ?? 'true') === 'true',
		'Monthly Subscription': (url.searchParams.get('Monthly Subscription') ?? 'true') === 'true'
	};

	const sortColumn = SortColumn[url.searchParams.get('sortColumn') ?? ''] ?? 'createdAt';
	const sortDirection = url.searchParams.get('sortDirection') === 'asc' ? 'asc' : 'desc';

	const code = url.searchParams.get('code') ?? '';

	return {
		...paginateOrders(page, perPage, status, type, sortColumn, sortDirection),
		order: findOrder(code)
	};
};
