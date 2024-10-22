import { findOrders } from './db';

export const load = ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 10);
	const skip = Number(url.searchParams.get('skip') ?? 0);

	const orders = findOrders(limit, skip);

	return orders;
};
