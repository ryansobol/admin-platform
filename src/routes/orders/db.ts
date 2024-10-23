import * as R from 'remeda';

import { OrderStatus, OrderType } from './types';
import type { Code, Order, PartialOrder } from './types';

const orderRecords: Record<Code, Order> = {
	'1V2VK': {
		id: 28,
		code: '1V2VK',
		customer: {
			name: 'Khadija Martinez',
			email: 'khadija.martinez@example.com',
			phone: '+1-234-567-4080'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-01-09T12:11:27-07:00',
		updatedAt: '2023-01-11T04:11:27-07:00',
		products: [{ id: 7, name: 'Handmade Ceramic Mug', quantity: 4, price: 304 }],
		subtotal: 1216,
		shipping: 26.99,
		tax: 109.44,
		total: 1352.43,
		shippingAddress: {
			line1: 'Khadija Martinez',
			line2: '117 1st Ave.',
			line3: 'Phoenix, NY 60975'
		},
		billingAddress: {
			line1: 'Khadija Martinez',
			line2: '117 1st Ave.',
			line3: 'Phoenix, NY 60975'
		},
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 3088'
		}
	},

	'5BLV3': {
		id: 48,
		code: '5BLV3',
		customer: {
			name: 'Carlos Brown',
			email: 'carlos.brown@mail.com',
			phone: '+1-234-567-8353'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-01-11T08:15:23-07:00',
		updatedAt: '2023-01-11T21:15:23-07:00',
		products: [
			{ id: 34, name: 'Electric Pottery Wheel', quantity: 2, price: 403 },
			{ id: 21, name: 'Ceramic Glaze Set', quantity: 3, price: 157 },
			{ id: 61, name: 'Clay Mixing Bowls', quantity: 3, price: 373 }
		],
		subtotal: 2396,
		shipping: 23.0,
		tax: 215.64,
		total: 2634.64,
		shippingAddress: {
			line1: 'Carlos Brown',
			line2: '398 Oak Ave.',
			line3: 'Chicago, AZ 66535'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 2857'
		}
	},

	'13IRX': {
		id: 33,
		code: '13IRX',
		customer: {
			name: 'Noah Brown',
			email: 'noah.brown@email.com',
			phone: '+1-234-567-5471'
		},
		type: 'One-time Purchase',
		status: 'Declined',
		createdAt: '2023-01-20T13:30:01-07:00',
		updatedAt: '2023-01-21T21:30:01-07:00',
		products: [
			{ id: 67, name: "Potter's Tool Kit", quantity: 3, price: 221 },
			{ id: 45, name: 'Handmade Ceramic Mug', quantity: 5, price: 157 }
		],
		subtotal: 1448,
		shipping: 6.87,
		tax: 130.32,
		total: 1585.19,
		shippingAddress: {
			line1: 'Noah Brown',
			line2: '711 Pine St.',
			line3: 'New York, CA 46836'
		},
		billingAddress: { line1: 'Noah Brown', line2: '711 Pine St.', line3: 'New York, CA 46836' },
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 4732'
		}
	},

	S95WY: {
		id: 19,
		code: 'S95WY',
		customer: {
			name: 'John Nguyen',
			email: 'john.nguyen@mail.com',
			phone: '+1-234-567-8590'
		},
		type: 'One-time Purchase',
		status: 'Pending',
		createdAt: '2023-01-29T15:03:55-07:00',
		updatedAt: '2023-01-30T11:03:55-07:00',
		products: [
			{ id: 72, name: 'Electric Pottery Wheel', quantity: 4, price: 389 },
			{ id: 54, name: "Potter's Tool Kit", quantity: 5, price: 398 },
			{ id: 8, name: 'Handheld Sculpting Tools', quantity: 1, price: 452 }
		],
		subtotal: 3998,
		shipping: 15.44,
		tax: 359.82,
		total: 4373.26,
		shippingAddress: {
			line1: 'John Nguyen',
			line2: '283 Oak Ave.',
			line3: 'Phoenix, PA 55210'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 8725'
		}
	},

	'3SQR2': {
		id: 3,
		code: '3SQR2',
		customer: {
			name: 'Noah Smith',
			email: 'noah.smith@mail.com',
			phone: '+1-234-567-9585'
		},
		type: 'Monthly Subscription',
		status: 'Pending',
		createdAt: '2023-02-05T21:36:50-07:00',
		updatedAt: '2023-02-06T01:36:50-07:00',
		products: [
			{ id: 98, name: 'Handmade Ceramic Mug', quantity: 5, price: 214 },
			{ id: 81, name: 'Clay Mixing Bowls', quantity: 4, price: 160 }
		],
		subtotal: 1710,
		shipping: 7.31,
		tax: 153.9,
		total: 1871.21,
		shippingAddress: {
			line1: 'Noah Smith',
			line2: '722 Cedar Blvd.',
			line3: 'Los Angeles, TX 66963'
		},
		billingAddress: {
			line1: 'Noah Smith',
			line2: '722 Cedar Blvd.',
			line3: 'Los Angeles, TX 66963'
		},
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 8169'
		}
	},

	'6WCDR': {
		id: 10,
		code: '6WCDR',
		customer: {
			name: 'Wei Lee',
			email: 'wei.lee@example.com',
			phone: '+1-234-567-8739'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-02-08T11:48:59-07:00',
		updatedAt: '2023-02-09T12:48:59-07:00',
		products: [
			{ id: 58, name: 'Porcelain Clay', quantity: 3, price: 284 },
			{ id: 62, name: 'Porcelain Clay', quantity: 5, price: 154 },
			{ id: 5, name: 'Porcelain Clay', quantity: 5, price: 379 }
		],
		subtotal: 3517,
		shipping: 11.01,
		tax: 316.53,
		total: 3844.54,
		shippingAddress: {
			line1: 'Wei Lee',
			line2: '453 Willow St.',
			line3: 'New York, PA 99419'
		},
		billingAddress: null,
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 2364'
		}
	},

	MHZR4: {
		id: 21,
		code: 'MHZR4',
		customer: {
			name: 'John Smith',
			email: 'john.smith@example.com',
			phone: '+1-234-567-7942'
		},
		type: 'Monthly Subscription',
		status: 'Pending',
		createdAt: '2023-02-10T20:50:32-07:00',
		updatedAt: '2023-02-11T03:50:32-07:00',
		products: [{ id: 68, name: 'Stoneware Clay', quantity: 1, price: 74 }],
		subtotal: 74,
		shipping: 10.81,
		tax: 6.66,
		total: 91.47,
		shippingAddress: {
			line1: 'John Smith',
			line2: '141 Pine St.',
			line3: 'Dallas, TX 54818'
		},
		billingAddress: { line1: 'John Smith', line2: '141 Pine St.', line3: 'Dallas, TX 54818' },
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 3576'
		}
	},

	'4AGD5': {
		id: 12,
		code: '4AGD5',
		customer: {
			name: 'Wei Martinez',
			email: 'wei.martinez@email.com',
			phone: '+1-234-567-2213'
		},
		type: 'One-time Purchase',
		status: 'Refunded',
		createdAt: '2023-02-19T01:55:34-07:00',
		updatedAt: '2023-02-19T12:55:34-07:00',
		products: [{ id: 30, name: "Potter's Tool Kit", quantity: 1, price: 30 }],
		subtotal: 30,
		shipping: 11.23,
		tax: 2.7,
		total: 43.93,
		shippingAddress: {
			line1: 'Wei Martinez',
			line2: '565 Oak Ave.',
			line3: 'Chicago, TX 39575'
		},
		billingAddress: { line1: 'Wei Martinez', line2: '565 Oak Ave.', line3: 'Chicago, TX 39575' },
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 6399'
		}
	},

	GYFP8: {
		id: 27,
		code: 'GYFP8',
		customer: {
			name: 'James Davis',
			email: 'james.davis@email.com',
			phone: '+1-234-567-6406'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-02-23T18:19:49-07:00',
		updatedAt: '2023-02-25T09:19:49-07:00',
		products: [
			{ id: 54, name: 'Clay Mixing Bowls', quantity: 4, price: 423 },
			{ id: 24, name: 'Ceramic Glaze Set', quantity: 3, price: 61 }
		],
		subtotal: 1875,
		shipping: 18.61,
		tax: 168.75,
		total: 2062.36,
		shippingAddress: {
			line1: 'James Davis',
			line2: '138 Harris St.',
			line3: 'San Antonio, CA 55140'
		},
		billingAddress: {
			line1: 'James Davis',
			line2: '138 Harris St.',
			line3: 'San Antonio, CA 55140'
		},
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 7411'
		}
	},

	OR7ZQ: {
		id: 37,
		code: 'OR7ZQ',
		customer: {
			name: 'Marcus Smith',
			email: 'marcus.smith@example.com',
			phone: '+1-234-567-6557'
		},
		type: 'One-time Purchase',
		status: 'Pending',
		createdAt: '2023-02-28T00:09:13-07:00',
		updatedAt: '2023-02-28T16:09:13-07:00',
		products: [{ id: 41, name: 'Deluxe Pottery Apron', quantity: 1, price: 145 }],
		subtotal: 145,
		shipping: 16.6,
		tax: 13.05,
		total: 174.65,
		shippingAddress: {
			line1: 'Marcus Smith',
			line2: '858 Cedar Blvd.',
			line3: 'New York, CA 18682'
		},
		billingAddress: null,
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 2243'
		}
	},

	'1LH3H': {
		id: 34,
		code: '1LH3H',
		customer: {
			name: 'Priya Brown',
			email: 'priya.brown@mail.com',
			phone: '+1-234-567-3608'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-03-10T20:25:24-07:00',
		updatedAt: '2023-03-12T14:25:24-07:00',
		products: [{ id: 88, name: 'Ceramic Kiln', quantity: 1, price: 26 }],
		subtotal: 26,
		shipping: 14.43,
		tax: 2.34,
		total: 42.77,
		shippingAddress: {
			line1: 'Priya Brown',
			line2: '695 1st Ave.',
			line3: 'Houston, TX 74187'
		},
		billingAddress: { line1: 'Priya Brown', line2: '695 1st Ave.', line3: 'Houston, TX 74187' },
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 1822'
		}
	},

	S1FWN: {
		id: 17,
		code: 'S1FWN',
		customer: {
			name: 'Priya Smith',
			email: 'priya.smith@email.com',
			phone: '+1-234-567-3942'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-03-16T03:13:03-07:00',
		updatedAt: '2023-03-16T18:13:03-07:00',
		products: [
			{ id: 89, name: 'Clay Mixing Bowls', quantity: 2, price: 471 },
			{ id: 85, name: 'Ceramic Kiln', quantity: 5, price: 210 },
			{ id: 56, name: 'Stoneware Clay', quantity: 1, price: 150 }
		],
		subtotal: 2142,
		shipping: 25.6,
		tax: 192.78,
		total: 2360.38,
		shippingAddress: {
			line1: 'Priya Smith',
			line2: '620 Oak Ave.',
			line3: 'Phoenix, AZ 82663'
		},
		billingAddress: { line1: 'Priya Smith', line2: '620 Oak Ave.', line3: 'Phoenix, AZ 82663' },
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 4133'
		}
	},

	DOM6C: {
		id: 36,
		code: 'DOM6C',
		customer: {
			name: 'Maria Jones',
			email: 'maria.jones@mail.com',
			phone: '+1-234-567-6268'
		},
		type: 'Monthly Subscription',
		status: 'Declined',
		createdAt: '2023-03-18T13:41:23-07:00',
		updatedAt: '2023-03-20T09:41:23-07:00',
		products: [
			{ id: 58, name: 'Handheld Sculpting Tools', quantity: 4, price: 393 },
			{ id: 9, name: 'Stoneware Clay', quantity: 4, price: 492 }
		],
		subtotal: 3540,
		shipping: 15.96,
		tax: 318.6,
		total: 3874.56,
		shippingAddress: {
			line1: 'Maria Jones',
			line2: '550 Main St.',
			line3: 'New York, CA 21641'
		},
		billingAddress: null,
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 7581'
		}
	},

	O0ELK: {
		id: 9,
		code: 'O0ELK',
		customer: {
			name: 'Marcus Martinez',
			email: 'marcus.martinez@example.com',
			phone: '+1-234-567-9226'
		},
		type: 'Monthly Subscription',
		status: 'Declined',
		createdAt: '2023-03-24T12:03:08-07:00',
		updatedAt: '2023-03-25T18:03:08-07:00',
		products: [
			{ id: 99, name: 'Ceramic Glaze Set', quantity: 2, price: 76 },
			{ id: 31, name: 'Ceramic Glaze Set', quantity: 4, price: 109 }
		],
		subtotal: 588,
		shipping: 19.92,
		tax: 52.92,
		total: 660.84,
		shippingAddress: {
			line1: 'Marcus Martinez',
			line2: '377 Oak Ave.',
			line3: 'Los Angeles, PA 29303'
		},
		billingAddress: {
			line1: 'Marcus Martinez',
			line2: '377 Oak Ave.',
			line3: 'Los Angeles, PA 29303'
		},
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 6118'
		}
	},

	ECJNA: {
		id: 16,
		code: 'ECJNA',
		customer: {
			name: 'James Lee',
			email: 'james.lee@email.com',
			phone: '+1-234-567-4785'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-04-24T01:50:57-07:00',
		updatedAt: '2023-04-25T17:50:57-07:00',
		products: [
			{ id: 70, name: 'Deluxe Pottery Apron', quantity: 3, price: 365 },
			{ id: 24, name: 'Handheld Sculpting Tools', quantity: 2, price: 486 }
		],
		subtotal: 2067,
		shipping: 6.28,
		tax: 186.03,
		total: 2259.31,
		shippingAddress: {
			line1: 'James Lee',
			line2: '936 Elm St.',
			line3: 'San Diego, CA 89278'
		},
		billingAddress: { line1: 'James Lee', line2: '936 Elm St.', line3: 'San Diego, CA 89278' },
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 1261'
		}
	},

	'1YOJ2': {
		id: 38,
		code: '1YOJ2',
		customer: {
			name: 'Olivia Davis',
			email: 'olivia.davis@mail.com',
			phone: '+1-234-567-5782'
		},
		type: 'Monthly Subscription',
		status: 'Pending',
		createdAt: '2023-04-28T09:13:05-07:00',
		updatedAt: '2023-04-28T12:13:05-07:00',
		products: [
			{ id: 2, name: 'Handheld Sculpting Tools', quantity: 1, price: 463 },
			{ id: 72, name: 'Clay Mixing Bowls', quantity: 4, price: 206 },
			{ id: 18, name: 'Ceramic Glaze Set', quantity: 5, price: 283 }
		],
		subtotal: 2702,
		shipping: 18.45,
		tax: 243.18,
		total: 2963.63,
		shippingAddress: {
			line1: 'Olivia Davis',
			line2: '711 Willow St.',
			line3: 'San Diego, TX 93615'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 5213'
		}
	},

	EAP3L: {
		id: 39,
		code: 'EAP3L',
		customer: {
			name: 'Noah Martinez',
			email: 'noah.martinez@email.com',
			phone: '+1-234-567-3185'
		},
		type: 'Monthly Subscription',
		status: 'Pending',
		createdAt: '2023-05-01T21:20:15-07:00',
		updatedAt: '2023-05-02T20:20:15-07:00',
		products: [
			{ id: 72, name: 'Electric Pottery Wheel', quantity: 3, price: 161 },
			{ id: 21, name: 'Ceramic Glaze Set', quantity: 4, price: 111 }
		],
		subtotal: 927,
		shipping: 23.12,
		tax: 83.43,
		total: 1033.55,
		shippingAddress: {
			line1: 'Noah Martinez',
			line2: '646 Oak Ave.',
			line3: 'Dallas, TX 15349'
		},
		billingAddress: null,
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 2250'
		}
	},

	'2U8E4': {
		id: 40,
		code: '2U8E4',
		customer: {
			name: 'Khadija Johnson',
			email: 'khadija.johnson@example.com',
			phone: '+1-234-567-1614'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-05-02T19:45:31-07:00',
		updatedAt: '2023-05-03T00:45:31-07:00',
		products: [{ id: 4, name: "Potter's Tool Kit", quantity: 3, price: 183 }],
		subtotal: 549,
		shipping: 15.17,
		tax: 49.41,
		total: 613.58,
		shippingAddress: {
			line1: 'Khadija Johnson',
			line2: '411 Oak Ave.',
			line3: 'Chicago, PA 34202'
		},
		billingAddress: { line1: 'Khadija Johnson', line2: '411 Oak Ave.', line3: 'Chicago, PA 34202' },
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 6010'
		}
	},

	WAVR8: {
		id: 45,
		code: 'WAVR8',
		customer: {
			name: 'Noah Jones',
			email: 'noah.jones@email.com',
			phone: '+1-234-567-5812'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-06-05T01:33:14-07:00',
		updatedAt: '2023-06-06T05:33:14-07:00',
		products: [
			{ id: 96, name: 'Porcelain Clay', quantity: 5, price: 391 },
			{ id: 23, name: 'Stoneware Clay', quantity: 1, price: 270 },
			{ id: 21, name: 'Porcelain Clay', quantity: 2, price: 312 }
		],
		subtotal: 2849,
		shipping: 8.82,
		tax: 256.41,
		total: 3114.23,
		shippingAddress: {
			line1: 'Noah Jones',
			line2: '914 Birch Ln.',
			line3: 'Dallas, TX 33092'
		},
		billingAddress: { line1: 'Noah Jones', line2: '914 Birch Ln.', line3: 'Dallas, TX 33092' },
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 7407'
		}
	},

	MT0F0: {
		id: 7,
		code: 'MT0F0',
		customer: {
			name: 'Marcus Johnson',
			email: 'marcus.johnson@email.com',
			phone: '+1-234-567-7071'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-06-10T18:15:34-07:00',
		updatedAt: '2023-06-12T12:15:34-07:00',
		products: [
			{ id: 84, name: 'Handmade Ceramic Mug', quantity: 4, price: 186 },
			{ id: 61, name: 'Stoneware Clay', quantity: 2, price: 307 }
		],
		subtotal: 1358,
		shipping: 21.91,
		tax: 122.22,
		total: 1502.13,
		shippingAddress: {
			line1: 'Marcus Johnson',
			line2: '455 Birch Ln.',
			line3: 'Houston, AZ 36584'
		},
		billingAddress: { line1: 'Marcus Johnson', line2: '455 Birch Ln.', line3: 'Houston, AZ 36584' },
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 1938'
		}
	},

	XHWSY: {
		id: 46,
		code: 'XHWSY',
		customer: {
			name: 'Carlos Jones',
			email: 'carlos.jones@email.com',
			phone: '+1-234-567-5869'
		},
		type: 'One-time Purchase',
		status: 'Pending',
		createdAt: '2023-06-21T04:36:07-07:00',
		updatedAt: '2023-06-22T18:36:07-07:00',
		products: [
			{ id: 100, name: 'Stoneware Clay', quantity: 1, price: 299 },
			{ id: 76, name: 'Porcelain Clay', quantity: 3, price: 62 },
			{ id: 93, name: 'Deluxe Pottery Apron', quantity: 2, price: 23 }
		],
		subtotal: 531,
		shipping: 25.97,
		tax: 47.79,
		total: 604.76,
		shippingAddress: {
			line1: 'Carlos Jones',
			line2: '535 Harris St.',
			line3: 'San Antonio, PA 88945'
		},
		billingAddress: {
			line1: 'Carlos Jones',
			line2: '535 Harris St.',
			line3: 'San Antonio, PA 88945'
		},
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 4898'
		}
	},

	TIAFH: {
		id: 20,
		code: 'TIAFH',
		customer: {
			name: 'Carlos Garcia',
			email: 'carlos.garcia@example.com',
			phone: '+1-234-567-8811'
		},
		type: 'One-time Purchase',
		status: 'Refunded',
		createdAt: '2023-06-29T22:54:25-07:00',
		updatedAt: '2023-07-01T02:54:25-07:00',
		products: [
			{ id: 95, name: 'Deluxe Pottery Apron', quantity: 5, price: 280 },
			{ id: 59, name: 'Ceramic Kiln', quantity: 4, price: 73 },
			{ id: 24, name: 'Stoneware Clay', quantity: 1, price: 102 }
		],
		subtotal: 1794,
		shipping: 19.8,
		tax: 161.46,
		total: 1975.26,
		shippingAddress: {
			line1: 'Carlos Garcia',
			line2: '133 Harris St.',
			line3: 'San Diego, TX 25629'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 8681'
		}
	},

	OLVWO: {
		id: 6,
		code: 'OLVWO',
		customer: {
			name: 'Carlos Smith',
			email: 'carlos.smith@mail.com',
			phone: '+1-234-567-3725'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-07-06T15:22:11-07:00',
		updatedAt: '2023-07-08T01:22:11-07:00',
		products: [
			{ id: 72, name: 'Clay Mixing Bowls', quantity: 1, price: 112 },
			{ id: 7, name: 'Ceramic Glaze Set', quantity: 3, price: 133 }
		],
		subtotal: 511,
		shipping: 7.68,
		tax: 45.99,
		total: 564.67,
		shippingAddress: {
			line1: 'Carlos Smith',
			line2: '383 Oak Ave.',
			line3: 'Philadelphia, CA 26944'
		},
		billingAddress: {
			line1: 'Carlos Smith',
			line2: '383 Oak Ave.',
			line3: 'Philadelphia, CA 26944'
		},
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 5903'
		}
	},

	XVVHG: {
		id: 23,
		code: 'XVVHG',
		customer: {
			name: 'Olivia Kumar',
			email: 'olivia.kumar@email.com',
			phone: '+1-234-567-8637'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-07-08T11:20:36-07:00',
		updatedAt: '2023-07-10T06:20:36-07:00',
		products: [
			{ id: 65, name: 'Stoneware Clay', quantity: 2, price: 400 },
			{ id: 32, name: 'Handmade Ceramic Mug', quantity: 2, price: 258 },
			{ id: 76, name: 'Handheld Sculpting Tools', quantity: 5, price: 34 }
		],
		subtotal: 1486,
		shipping: 22.46,
		tax: 133.74,
		total: 1642.2,
		shippingAddress: {
			line1: 'Olivia Kumar',
			line2: '459 Harris St.',
			line3: 'Dallas, PA 37725'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 4585'
		}
	},

	EIIZN: {
		id: 35,
		code: 'EIIZN',
		customer: {
			name: 'Carlos Jones',
			email: 'carlos.jones@mail.com',
			phone: '+1-234-567-6498'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-07-13T18:48:45-07:00',
		updatedAt: '2023-07-13T22:48:45-07:00',
		products: [
			{ id: 41, name: 'Handmade Ceramic Mug', quantity: 3, price: 255 },
			{ id: 42, name: 'Ceramic Kiln', quantity: 4, price: 95 }
		],
		subtotal: 1145,
		shipping: 10.36,
		tax: 103.05,
		total: 1258.41,
		shippingAddress: {
			line1: 'Carlos Jones',
			line2: '927 Oak Ave.',
			line3: 'Phoenix, CA 46070'
		},
		billingAddress: { line1: 'Carlos Jones', line2: '927 Oak Ave.', line3: 'Phoenix, CA 46070' },
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 5370'
		}
	},

	EEMAH: {
		id: 49,
		code: 'EEMAH',
		customer: {
			name: 'Carlos Brown',
			email: 'carlos.brown@example.com',
			phone: '+1-234-567-5766'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-07-15T15:18:59-07:00',
		updatedAt: '2023-07-17T01:18:59-07:00',
		products: [
			{ id: 79, name: "Potter's Tool Kit", quantity: 4, price: 63 },
			{ id: 20, name: "Potter's Tool Kit", quantity: 5, price: 436 },
			{ id: 39, name: 'Handmade Ceramic Mug', quantity: 5, price: 141 }
		],
		subtotal: 3137,
		shipping: 15.89,
		tax: 282.33,
		total: 3435.22,
		shippingAddress: {
			line1: 'Carlos Brown',
			line2: '366 Cedar Blvd.',
			line3: 'Chicago, CA 21146'
		},
		billingAddress: { line1: 'Carlos Brown', line2: '366 Cedar Blvd.', line3: 'Chicago, CA 21146' },
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 5249'
		}
	},

	'0SX7L': {
		id: 2,
		code: '0SX7L',
		customer: {
			name: 'Wei Kumar',
			email: 'wei.kumar@email.com',
			phone: '+1-234-567-5338'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-08-01T20:10:24-07:00',
		updatedAt: '2023-08-02T23:10:24-07:00',
		products: [
			{ id: 27, name: 'Clay Mixing Bowls', quantity: 3, price: 446 },
			{ id: 40, name: 'Electric Pottery Wheel', quantity: 4, price: 95 },
			{ id: 13, name: 'Handmade Ceramic Mug', quantity: 2, price: 415 }
		],
		subtotal: 2548,
		shipping: 12.78,
		tax: 229.32,
		total: 2790.1,
		shippingAddress: {
			line1: 'Wei Kumar',
			line2: '442 1st Ave.',
			line3: 'San Antonio, CA 93076'
		},
		billingAddress: { line1: 'Wei Kumar', line2: '442 1st Ave.', line3: 'San Antonio, CA 93076' },
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 9294'
		}
	},

	'8896N': {
		id: 50,
		code: '8896N',
		customer: {
			name: 'Priya Garcia',
			email: 'priya.garcia@mail.com',
			phone: '+1-234-567-2785'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-08-05T07:46:23-07:00',
		updatedAt: '2023-08-06T01:46:23-07:00',
		products: [{ id: 27, name: 'Handheld Sculpting Tools', quantity: 3, price: 304 }],
		subtotal: 912,
		shipping: 9.93,
		tax: 82.08,
		total: 1004.01,
		shippingAddress: {
			line1: 'Priya Garcia',
			line2: '987 Elm St.',
			line3: 'Houston, CA 39477'
		},
		billingAddress: null,
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 8755'
		}
	},

	FG26J: {
		id: 43,
		code: 'FG26J',
		customer: {
			name: 'Wei Williams',
			email: 'wei.williams@example.com',
			phone: '+1-234-567-7056'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-08-10T18:36:27-07:00',
		updatedAt: '2023-08-11T15:36:27-07:00',
		products: [{ id: 83, name: "Potter's Tool Kit", quantity: 2, price: 151 }],
		subtotal: 302,
		shipping: 18.24,
		tax: 27.18,
		total: 347.42,
		shippingAddress: {
			line1: 'Wei Williams',
			line2: '520 Main St.',
			line3: 'San Diego, TX 27385'
		},
		billingAddress: { line1: 'Wei Williams', line2: '520 Main St.', line3: 'San Diego, TX 27385' },
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 4592'
		}
	},

	L8PCV: {
		id: 22,
		code: 'L8PCV',
		customer: {
			name: 'Olivia Martinez',
			email: 'olivia.martinez@example.com',
			phone: '+1-234-567-8997'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-08-11T02:37:43-07:00',
		updatedAt: '2023-08-12T04:37:43-07:00',
		products: [
			{ id: 86, name: 'Ceramic Kiln', quantity: 2, price: 206 },
			{ id: 78, name: 'Porcelain Clay', quantity: 1, price: 91 },
			{ id: 82, name: 'Electric Pottery Wheel', quantity: 5, price: 252 }
		],
		subtotal: 1763,
		shipping: 7.48,
		tax: 158.67,
		total: 1929.15,
		shippingAddress: {
			line1: 'Olivia Martinez',
			line2: '713 1st Ave.',
			line3: 'Los Angeles, PA 48593'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 3353'
		}
	},

	'3V59M': {
		id: 4,
		code: '3V59M',
		customer: {
			name: 'Priya Lee',
			email: 'priya.lee@email.com',
			phone: '+1-234-567-4253'
		},
		type: 'One-time Purchase',
		status: 'Pending',
		createdAt: '2023-08-13T09:46:35-07:00',
		updatedAt: '2023-08-13T15:46:35-07:00',
		products: [{ id: 1, name: "Potter's Tool Kit", quantity: 4, price: 30 }],
		subtotal: 120,
		shipping: 29.91,
		tax: 10.8,
		total: 160.71,
		shippingAddress: {
			line1: 'Priya Lee',
			line2: '117 Pine St.',
			line3: 'San Jose, CA 21063'
		},
		billingAddress: { line1: 'Priya Lee', line2: '117 Pine St.', line3: 'San Jose, CA 21063' },
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 2785'
		}
	},

	JOKX7: {
		id: 15,
		code: 'JOKX7',
		customer: {
			name: 'John Kumar',
			email: 'john.kumar@email.com',
			phone: '+1-234-567-3338'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-09-05T01:03:42-07:00',
		updatedAt: '2023-09-06T14:03:42-07:00',
		products: [{ id: 37, name: 'Stoneware Clay', quantity: 5, price: 307 }],
		subtotal: 1535,
		shipping: 8.51,
		tax: 138.15,
		total: 1681.66,
		shippingAddress: {
			line1: 'John Kumar',
			line2: '243 Birch Ln.',
			line3: 'Philadelphia, TX 13784'
		},
		billingAddress: null,
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 1157'
		}
	},

	XTM6F: {
		id: 13,
		code: 'XTM6F',
		customer: {
			name: 'Noah Lee',
			email: 'noah.lee@example.com',
			phone: '+1-234-567-3404'
		},
		type: 'Monthly Subscription',
		status: 'Refunded',
		createdAt: '2023-09-05T22:46:59-07:00',
		updatedAt: '2023-09-06T09:46:59-07:00',
		products: [
			{ id: 50, name: 'Stoneware Clay', quantity: 5, price: 335 },
			{ id: 23, name: 'Electric Pottery Wheel', quantity: 3, price: 111 },
			{ id: 31, name: 'Deluxe Pottery Apron', quantity: 3, price: 234 }
		],
		subtotal: 2710,
		shipping: 26.18,
		tax: 243.9,
		total: 2980.08,
		shippingAddress: {
			line1: 'Noah Lee',
			line2: '675 Pine St.',
			line3: 'Houston, AZ 63292'
		},
		billingAddress: { line1: 'Noah Lee', line2: '675 Pine St.', line3: 'Houston, AZ 63292' },
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 2356'
		}
	},

	Z7IME: {
		id: 31,
		code: 'Z7IME',
		customer: {
			name: 'Maria Garcia',
			email: 'maria.garcia@example.com',
			phone: '+1-234-567-9316'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-09-13T06:37:17-07:00',
		updatedAt: '2023-09-14T11:37:17-07:00',
		products: [{ id: 58, name: 'Porcelain Clay', quantity: 2, price: 243 }],
		subtotal: 486,
		shipping: 24.91,
		tax: 43.74,
		total: 554.65,
		shippingAddress: {
			line1: 'Maria Garcia',
			line2: '939 Pine St.',
			line3: 'San Antonio, CA 44288'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 7227'
		}
	},

	LGNW0: {
		id: 24,
		code: 'LGNW0',
		customer: {
			name: 'Khadija Williams',
			email: 'khadija.williams@email.com',
			phone: '+1-234-567-3576'
		},
		type: 'Monthly Subscription',
		status: 'Refunded',
		createdAt: '2023-09-13T20:58:11-07:00',
		updatedAt: '2023-09-15T03:58:11-07:00',
		products: [
			{ id: 27, name: 'Ceramic Kiln', quantity: 4, price: 325 },
			{ id: 100, name: 'Handheld Sculpting Tools', quantity: 4, price: 402 },
			{ id: 53, name: "Potter's Tool Kit", quantity: 5, price: 78 }
		],
		subtotal: 3298,
		shipping: 18.17,
		tax: 296.82,
		total: 3612.99,
		shippingAddress: {
			line1: 'Khadija Williams',
			line2: '765 1st Ave.',
			line3: 'Dallas, CA 73005'
		},
		billingAddress: { line1: 'Khadija Williams', line2: '765 1st Ave.', line3: 'Dallas, CA 73005' },
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 2512'
		}
	},

	H11NX: {
		id: 11,
		code: 'H11NX',
		customer: {
			name: 'Noah Jones',
			email: 'noah.jones@example.com',
			phone: '+1-234-567-6099'
		},
		type: 'One-time Purchase',
		status: 'Pending',
		createdAt: '2023-09-14T09:54:19-07:00',
		updatedAt: '2023-09-15T17:54:19-07:00',
		products: [
			{ id: 29, name: 'Deluxe Pottery Apron', quantity: 3, price: 206 },
			{ id: 49, name: 'Ceramic Glaze Set', quantity: 5, price: 211 },
			{ id: 64, name: 'Ceramic Kiln', quantity: 5, price: 208 }
		],
		subtotal: 2713,
		shipping: 27.65,
		tax: 244.17,
		total: 2984.82,
		shippingAddress: {
			line1: 'Noah Jones',
			line2: '279 Willow St.',
			line3: 'San Diego, CA 91688'
		},
		billingAddress: { line1: 'Noah Jones', line2: '279 Willow St.', line3: 'San Diego, CA 91688' },
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 7657'
		}
	},

	YP27Q: {
		id: 26,
		code: 'YP27Q',
		customer: {
			name: 'Khadija Smith',
			email: 'khadija.smith@example.com',
			phone: '+1-234-567-5158'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-09-16T17:51:08-07:00',
		updatedAt: '2023-09-17T06:51:08-07:00',
		products: [
			{ id: 55, name: 'Handheld Sculpting Tools', quantity: 3, price: 45 },
			{ id: 60, name: 'Clay Mixing Bowls', quantity: 5, price: 52 },
			{ id: 47, name: 'Clay Mixing Bowls', quantity: 3, price: 143 }
		],
		subtotal: 824,
		shipping: 13.25,
		tax: 74.16,
		total: 911.41,
		shippingAddress: {
			line1: 'Khadija Smith',
			line2: '827 Willow St.',
			line3: 'Philadelphia, CA 50432'
		},
		billingAddress: {
			line1: 'Khadija Smith',
			line2: '827 Willow St.',
			line3: 'Philadelphia, CA 50432'
		},
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 8090'
		}
	},

	V8J8R: {
		id: 47,
		code: 'V8J8R',
		customer: {
			name: 'Maria Johnson',
			email: 'maria.johnson@email.com',
			phone: '+1-234-567-5864'
		},
		type: 'Monthly Subscription',
		status: 'Declined',
		createdAt: '2023-09-19T13:41:20-07:00',
		updatedAt: '2023-09-20T17:41:20-07:00',
		products: [
			{ id: 82, name: 'Clay Mixing Bowls', quantity: 3, price: 16 },
			{ id: 72, name: 'Ceramic Kiln', quantity: 2, price: 169 }
		],
		subtotal: 386,
		shipping: 28.88,
		tax: 34.74,
		total: 449.62,
		shippingAddress: {
			line1: 'Maria Johnson',
			line2: '611 Cedar Blvd.',
			line3: 'Houston, CA 94205'
		},
		billingAddress: {
			line1: 'Maria Johnson',
			line2: '611 Cedar Blvd.',
			line3: 'Houston, CA 94205'
		},
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 9457'
		}
	},

	'7WD3R': {
		id: 32,
		code: '7WD3R',
		customer: {
			name: 'Carlos Smith',
			email: 'carlos.smith@example.com',
			phone: '+1-234-567-4434'
		},
		type: 'One-time Purchase',
		status: 'Declined',
		createdAt: '2023-10-06T22:11:59-07:00',
		updatedAt: '2023-10-07T05:11:59-07:00',
		products: [
			{ id: 8, name: 'Stoneware Clay', quantity: 5, price: 287 },
			{ id: 2, name: 'Handmade Ceramic Mug', quantity: 3, price: 328 }
		],
		subtotal: 2419,
		shipping: 27.09,
		tax: 217.71,
		total: 2663.8,
		shippingAddress: {
			line1: 'Carlos Smith',
			line2: '952 Willow St.',
			line3: 'Philadelphia, AZ 56116'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 1340'
		}
	},

	YXL75: {
		id: 29,
		code: 'YXL75',
		customer: {
			name: 'Marcus Lee',
			email: 'marcus.lee@example.com',
			phone: '+1-234-567-1981'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-10-10T16:29:10-07:00',
		updatedAt: '2023-10-12T08:29:10-07:00',
		products: [
			{ id: 39, name: 'Ceramic Glaze Set', quantity: 2, price: 327 },
			{ id: 43, name: "Potter's Tool Kit", quantity: 5, price: 454 }
		],
		subtotal: 2924,
		shipping: 6.34,
		tax: 263.16,
		total: 3193.5,
		shippingAddress: {
			line1: 'Marcus Lee',
			line2: '342 Main St.',
			line3: 'Houston, TX 26322'
		},
		billingAddress: { line1: 'Marcus Lee', line2: '342 Main St.', line3: 'Houston, TX 26322' },
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 3459'
		}
	},

	WJP73: {
		id: 1,
		code: 'WJP73',
		customer: {
			name: 'Marcus Garcia',
			email: 'marcus.garcia@email.com',
			phone: '+1-234-567-4659'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-10-16T02:09:03-07:00',
		updatedAt: '2023-10-16T10:09:03-07:00',
		products: [
			{ id: 93, name: 'Porcelain Clay', quantity: 5, price: 236 },
			{ id: 45, name: 'Ceramic Kiln', quantity: 1, price: 17 },
			{ id: 96, name: 'Handheld Sculpting Tools', quantity: 3, price: 375 }
		],
		subtotal: 2322,
		shipping: 8.58,
		tax: 208.98,
		total: 2539.56,
		shippingAddress: {
			line1: 'Marcus Garcia',
			line2: '503 Pine St.',
			line3: 'Los Angeles, TX 44871'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 6732'
		}
	},

	CPQIP: {
		id: 8,
		code: 'CPQIP',
		customer: {
			name: 'Priya Kumar',
			email: 'priya.kumar@example.com',
			phone: '+1-234-567-5791'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-10-18T11:10:02-07:00',
		updatedAt: '2023-10-18T15:10:02-07:00',
		products: [
			{ id: 16, name: 'Stoneware Clay', quantity: 5, price: 26 },
			{ id: 31, name: 'Clay Mixing Bowls', quantity: 1, price: 343 }
		],
		subtotal: 473,
		shipping: 25.39,
		tax: 42.57,
		total: 540.96,
		shippingAddress: {
			line1: 'Priya Kumar',
			line2: '500 Willow St.',
			line3: 'Dallas, TX 13743'
		},
		billingAddress: null,
		creditCard: {
			type: 'American Express',
			numberRedacted: '**** **** **** 1877'
		}
	},

	YR4J1: {
		id: 18,
		code: 'YR4J1',
		customer: {
			name: 'Wei Kumar',
			email: 'wei.kumar@example.com',
			phone: '+1-234-567-6976'
		},
		type: 'One-time Purchase',
		status: 'Declined',
		createdAt: '2023-11-07T08:26:48-07:00',
		updatedAt: '2023-11-07T14:26:48-07:00',
		products: [{ id: 97, name: 'Clay Mixing Bowls', quantity: 3, price: 359 }],
		subtotal: 1077,
		shipping: 25.37,
		tax: 96.93,
		total: 1199.3,
		shippingAddress: {
			line1: 'Wei Kumar',
			line2: '241 Harris St.',
			line3: 'San Diego, TX 70859'
		},
		billingAddress: null,
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 1003'
		}
	},

	UJ0KD: {
		id: 25,
		code: 'UJ0KD',
		customer: {
			name: 'James Nguyen',
			email: 'james.nguyen@mail.com',
			phone: '+1-234-567-7258'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-11-09T05:20:31-07:00',
		updatedAt: '2023-11-09T18:20:31-07:00',
		products: [
			{ id: 85, name: 'Porcelain Clay', quantity: 1, price: 318 },
			{ id: 11, name: 'Ceramic Kiln', quantity: 4, price: 284 }
		],
		subtotal: 1454,
		shipping: 11.88,
		tax: 130.86,
		total: 1596.74,
		shippingAddress: {
			line1: 'James Nguyen',
			line2: '969 Main St.',
			line3: 'Philadelphia, TX 62796'
		},
		billingAddress: {
			line1: 'James Nguyen',
			line2: '969 Main St.',
			line3: 'Philadelphia, TX 62796'
		},
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 4248'
		}
	},

	V6447: {
		id: 41,
		code: 'V6447',
		customer: {
			name: 'Khadija Johnson',
			email: 'khadija.johnson@example.com',
			phone: '+1-234-567-3581'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-11-17T12:24:53-07:00',
		updatedAt: '2023-11-19T01:24:53-07:00',
		products: [{ id: 81, name: 'Porcelain Clay', quantity: 2, price: 406 }],
		subtotal: 812,
		shipping: 25.44,
		tax: 73.08,
		total: 910.52,
		shippingAddress: {
			line1: 'Khadija Johnson',
			line2: '952 Harris St.',
			line3: 'San Jose, TX 30059'
		},
		billingAddress: null,
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 8805'
		}
	},

	YT1O1: {
		id: 30,
		code: 'YT1O1',
		customer: {
			name: 'Marcus Smith',
			email: 'marcus.smith@mail.com',
			phone: '+1-234-567-1021'
		},
		type: 'Monthly Subscription',
		status: 'Fulfilled',
		createdAt: '2023-11-17T17:16:33-07:00',
		updatedAt: '2023-11-19T00:16:33-07:00',
		products: [
			{ id: 79, name: 'Clay Mixing Bowls', quantity: 1, price: 411 },
			{ id: 82, name: 'Porcelain Clay', quantity: 2, price: 363 }
		],
		subtotal: 1137,
		shipping: 9.25,
		tax: 102.33,
		total: 1248.58,
		shippingAddress: {
			line1: 'Marcus Smith',
			line2: '796 Maple St.',
			line3: 'Chicago, CA 87690'
		},
		billingAddress: { line1: 'Marcus Smith', line2: '796 Maple St.', line3: 'Chicago, CA 87690' },
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 7664'
		}
	},

	ZS2C7: {
		id: 44,
		code: 'ZS2C7',
		customer: {
			name: 'Olivia Jones',
			email: 'olivia.jones@example.com',
			phone: '+1-234-567-5627'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-11-25T12:16:43-07:00',
		updatedAt: '2023-11-26T14:16:43-07:00',
		products: [
			{ id: 99, name: 'Handheld Sculpting Tools', quantity: 2, price: 191 },
			{ id: 57, name: 'Deluxe Pottery Apron', quantity: 1, price: 434 },
			{ id: 71, name: 'Electric Pottery Wheel', quantity: 5, price: 359 }
		],
		subtotal: 2611,
		shipping: 27.11,
		tax: 234.99,
		total: 2873.1,
		shippingAddress: {
			line1: 'Olivia Jones',
			line2: '999 Willow St.',
			line3: 'Philadelphia, TX 51245'
		},
		billingAddress: {
			line1: 'Olivia Jones',
			line2: '999 Willow St.',
			line3: 'Philadelphia, TX 51245'
		},
		creditCard: {
			type: 'Discover',
			numberRedacted: '**** **** **** 5056'
		}
	},

	TCCVU: {
		id: 42,
		code: 'TCCVU',
		customer: {
			name: 'Priya Nguyen',
			email: 'priya.nguyen@email.com',
			phone: '+1-234-567-3448'
		},
		type: 'One-time Purchase',
		status: 'Declined',
		createdAt: '2023-11-29T02:58:22-07:00',
		updatedAt: '2023-11-30T07:58:22-07:00',
		products: [{ id: 47, name: 'Handheld Sculpting Tools', quantity: 1, price: 298 }],
		subtotal: 298,
		shipping: 26.08,
		tax: 26.82,
		total: 350.9,
		shippingAddress: {
			line1: 'Priya Nguyen',
			line2: '209 Birch Ln.',
			line3: 'Houston, AZ 25824'
		},
		billingAddress: { line1: 'Priya Nguyen', line2: '209 Birch Ln.', line3: 'Houston, AZ 25824' },
		creditCard: {
			type: 'Visa',
			numberRedacted: '**** **** **** 8785'
		}
	},

	EIA2A: {
		id: 14,
		code: 'EIA2A',
		customer: {
			name: 'Priya Johnson',
			email: 'priya.johnson@mail.com',
			phone: '+1-234-567-7181'
		},
		type: 'Monthly Subscription',
		status: 'Pending',
		createdAt: '2023-12-04T02:05:35-07:00',
		updatedAt: '2023-12-04T13:05:35-07:00',
		products: [{ id: 33, name: 'Electric Pottery Wheel', quantity: 3, price: 271 }],
		subtotal: 813,
		shipping: 10.63,
		tax: 73.17,
		total: 896.8,
		shippingAddress: {
			line1: 'Priya Johnson',
			line2: '347 Elm St.',
			line3: 'San Diego, PA 19231'
		},
		billingAddress: { line1: 'Priya Johnson', line2: '347 Elm St.', line3: 'San Diego, PA 19231' },
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 5808'
		}
	},

	Y8FNC: {
		id: 5,
		code: 'Y8FNC',
		customer: {
			name: 'James Davis',
			email: 'james.davis@example.com',
			phone: '+1-234-567-9491'
		},
		type: 'One-time Purchase',
		status: 'Fulfilled',
		createdAt: '2023-12-17T16:14:18-07:00',
		updatedAt: '2023-12-18T18:14:18-07:00',
		products: [
			{ id: 62, name: 'Stoneware Clay', quantity: 2, price: 223 },
			{ id: 90, name: 'Electric Pottery Wheel', quantity: 1, price: 483 }
		],
		subtotal: 929,
		shipping: 28.99,
		tax: 83.61,
		total: 1041.6,
		shippingAddress: {
			line1: 'James Davis',
			line2: '167 Willow St.',
			line3: 'New York, AZ 86542'
		},
		billingAddress: null,
		creditCard: {
			type: 'Mastercard',
			numberRedacted: '**** **** **** 2383'
		}
	}
};

export const paginateOrders = (
	page: number,
	perPage: number,
	status: { [k: string]: boolean },
	type: { [k: string]: boolean }
): {
	orders: PartialOrder[];
	count: number;
	page: number;
	perPage: number;
	status: { [k: string]: boolean };
	type: { [k: string]: boolean };
} => {
	const ordersFiltered = R.pipe(
		orderRecords,
		R.values(),
		R.filter(
			(order) =>
				Object.values(OrderStatus).reduce(
					(prev, os) => prev || (status[os] && order.status === os),
					false
				) &&
				Object.values(OrderType).reduce(
					(prev, ot) => prev || (type[ot] && order.type === ot),
					false
				)
		)
	);

	const count = ordersFiltered.length;

	const orders = R.pipe(
		ordersFiltered,
		R.drop((page - 1) * perPage),
		R.take(perPage),
		R.map((order) => {
			const { id, code, customer, type, status, createdAt, total } = order;
			const { name: customerName, email: customerEmail } = customer;

			return {
				id,
				code,
				customerName,
				customerEmail,
				type,
				status,
				createdAt,
				total
			};
		})
	);

	return { orders, count, page, perPage, status, type };
};

export const findOrder = (orderCode: Code) => {
	return orderRecords[orderCode];
};
