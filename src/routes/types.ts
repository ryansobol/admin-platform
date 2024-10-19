export type Code = string;

export type Customer = {
	name: string;
	email: string;
	phone: string;
};

export const OrderStatus = {
	declined: 'Declined',
	fulfilled: 'Fulfilled',
	pending: 'Pending',
	refunded: 'Refunded'
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

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
	type: 'One-time Purchase' | 'Monthly Subscription';
	status: OrderStatus;
	createdAt: string;
	updatedAt: string;
	products: Product[];
	subtotal: number;
	shipping: number;
	tax: number;
	total: number;
	shippingAddress: Address;
	billingAddress: Address | null;
	creditCard: CreditCard;
};
