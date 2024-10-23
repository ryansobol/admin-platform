import { paginateOrders } from './db';

export const load = ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? 1);
	const perPage = Number(url.searchParams.get('perPage') ?? 10);

	return paginateOrders(page, perPage);
};
