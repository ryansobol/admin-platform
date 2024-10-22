import { findOrders } from './db';

export const load = () => {
	const orders = findOrders();

	return { orders };
};
