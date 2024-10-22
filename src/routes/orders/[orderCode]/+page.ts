import { orders } from '../db';

export const load = ({ params }) => {
	const order = orders[params.orderCode];

	return { order };
};
