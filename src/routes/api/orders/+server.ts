import { json } from '@sveltejs/kit';
import { findOrders } from '../../orders/db';

export const GET = ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 10);
	const skip = Number(url.searchParams.get('skip') ?? 0);

	const orders = findOrders(limit, skip);

	return json(orders);
};
