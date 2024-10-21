// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import { Order } from './orders/types';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			selectedOrder?: Order;
		}
		// interface Platform {}
	}
}

export {};
