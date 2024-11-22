type Breadcrumb = {
	name: string;
	href: string;
};

export const load = async () => {
	const breadcrumbs: Breadcrumb[] = [{ name: 'Home', href: '#' }];

	return { breadcrumbs };
};
