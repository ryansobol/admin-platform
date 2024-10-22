import { findOrder } from '../db';

export const load = ({ params }) => {
	const order = findOrder(params.orderCode);

	return { order };
};
