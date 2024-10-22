export const load = async ({ parent }) => {
	const parentData = await parent();
	const breadcrumbs = [...parentData.breadcrumbs, { name: 'Orders', href: '/orders' }];

	return { breadcrumbs };
};
