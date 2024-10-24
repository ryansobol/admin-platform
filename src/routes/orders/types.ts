export type Code = string;

export type Customer = {
	name: string;
	email: string;
	phone: string;
};

export const OrderType = {
	oneTimePurchase: 'One-time Purchase',
	monthlySubscription: 'Monthly Subscription'
} as const;

export type OrderType = (typeof OrderType)[keyof typeof OrderType];

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
	type: OrderType;
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

export type PartialOrder = {
	id: number;
	code: string;
	customerName: string;
	customerEmail: string;
	type: OrderType;
	status: OrderStatus;
	createdAt: string;
	total: number;
};
