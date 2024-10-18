import type { Temporal } from 'temporal-polyfill';

export type Code = string;

export type Customer = {
	name: string;
	email: string;
	phone: string;
};

export type Product = {
	id: number;
	name: string;
	quantity: number;
	price: number;
};

export type Address = {
	line1: string;
	line2: string;
	line3: string;
};

export type CreditCard = {
	type: string;
	numberRedacted: string;
};

export type Order = {
	id: number;
	code: Code;
	customer: Customer;
	type: 'Sale' | 'Refund' | 'Subscription';
	status: 'Fulfilled' | 'Declined';
	createdAt: Temporal.ZonedDateTime;
	updatedAt: Temporal.ZonedDateTime;
	products: Product[];
	subtotal: 299;
	shipping: number;
	tax: number;
	total: number;
	shippingAddress: Address;
	billingAddress: Address | null;
	creditCard: CreditCard;
};
