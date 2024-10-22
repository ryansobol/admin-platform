type Breadcrumb = {
	name: string;
	href: string;
};

export const load = async () => {
	const breadcrumbs: Breadcrumb[] = [];

	return { breadcrumbs };
};
