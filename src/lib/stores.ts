import { readable } from 'svelte/store';

function match() {
	return window.matchMedia('(prefers-reduced-motion: reduce)');
}

export const doesPreferReducedMotion = readable(
	typeof window === 'undefined' ? false : match().matches,
	(set) => {
		if (typeof window === 'undefined') return;

		function update(hasMatches: MediaQueryList | MediaQueryListEvent) {
			set(hasMatches.matches);
		}

		const mediaQueryList = match();

		update(mediaQueryList);

		mediaQueryList.addEventListener('change', update);

		return () => {
			mediaQueryList.removeEventListener('change', update);
		};
	}
);
