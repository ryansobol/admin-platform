export const load = async ({ params, parent }) => {
	const { orderCode } = params;
	const parentData = await parent();

	const breadcrumbs = [
		...parentData.breadcrumbs,
		{ name: orderCode, href: `/orders/${orderCode}` }
	];

	return { breadcrumbs };
};
