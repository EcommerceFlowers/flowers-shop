import { z } from 'zod';

// VNPAY_TMN_CODE = I3YKMBGT
// VNPAY_HASH_SECRET = WAXZNFCHZZPQVIFQCSOONQPWEABDOCUB
// VNPAY_URL = https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
// VNPAY_API = https://sandbox.vnpayment.vn/merchant_webapi/api/transaction
// VNPAY_RETURN_URL = http://localhost:8888/order/vnpay_return

const ProjectENVSchema = z.object({
  NEXT_PUBLIC_APP_ENDPOINT: z.string().default('localhost:3000'),
  NEXT_PUBLIC_NAME: z.string().default(''),
  /**
   * Feature flags, comma separated
   */
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VNPAY_API: z.string().default('https://sandbox.vnpayment.vn/merchant_webapi/api/transaction'),
  VNPAY_HASH_SECRET: z.string().default('WAXZNFCHZZPQVIFQCSOONQPWEABDOCUB'),
  VNPAY_RETURN_URL: z.string().default('http://localhost:3000/api/payments'),
  VNPAY_TMN_CODE: z.string().default('I3YKMBGT'),
  VNPAY_URL: z.string().default('https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'),
});

/**
 * Return system ENV with parsed values
 */
export const ProjectENV = ProjectENVSchema.parse({
  NEXT_PUBLIC_APP_ENDPOINT: process.env.NEXT_PUBLIC_APP_ENDPOINT,
  NEXT_PUBLIC_NAME: process.env.NEXT_PUBLIC_NAME,
  NODE_ENV: process.env.NODE_ENV,
  VNPAY_API: process.env.VNPAY_API,
  VNPAY_HASH_SECRET: process.env.VNPAY_HASH_SECRET,
  VNPAY_RETURN_URL: process.env.VNPAY_RETURN_URL,
  VNPAY_TMN_CODE: process.env.VNPAY_TMN_CODE,
  VNPAY_URL: process.env.VNPAY_URL,
});
