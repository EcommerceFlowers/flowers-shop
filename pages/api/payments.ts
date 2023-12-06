// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProjectENV } from '@env';
import type { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';
import crypto from 'crypto';
import { sortObject } from '@utils/tools';

import cors from 'cors';

import qs from 'qs';

const successHtml = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Payment Status</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 120px;
    }
    .center-text {
      text-align: center;
      font-size: 24px;
    }
    .btn-default {
      display: inline-block;
      padding: 10px 20px;
      text-decoration: none;
      background-color: #FF8F52;
      color: #fff;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
    .btn-default:hover {
      background-color: #FFA77F;
      color: #000;
    }
    .big-text {
      font-size: 36px;
    }
  </style>
</head>
<body>
  <h1 class="center-text big-text">Florist shop</h1>
  <p class="center-text">Giao dịch thành công</p>
  <p class="center-text">
    <a class="btn-default" href="/">Về trang chủ</a>
  </p>
</body>
</html>`;

const failHtml = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Payment Status</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 120px;
    }
    .center-text {
      text-align: center;
      font-size: 24px;
    }
    .btn-default {
      display: inline-block;
      padding: 10px 20px;
      text-decoration: none;
      background-color: #FF8F52;
      color: #fff;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
    .btn-default:hover {
      background-color: #FFA77F;
      color: #000;
    }
    .big-text {
      font-size: 36px;
    }
  </style>
</head>
<body>
  <h1 class="center-text big-text">Florist shop</h1>
  <p class="center-text">Giao dịch không thành công</p>
  <p class="center-text">
    <a class="btn-default" href="/">Về trang chủ</a>
  </p>
</body>
</html>
  `;

const corsOptions = {
  allowedHeaders: ['Content-Type'],
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200,
  origin: 'https://sandbox.vnpayment.vn',
};

// router.post('/create_payment_url', function (req, res, next) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  cors(corsOptions)(req, res, () => {
    if (req.method === 'GET') {
      let vnp_Params = req.query;

      const secureHash = vnp_Params['vnp_SecureHash'];

      delete vnp_Params['vnp_SecureHash'];
      delete vnp_Params['vnp_SecureHashType'];

      vnp_Params = sortObject(vnp_Params);

      const secretKey = ProjectENV.VNPAY_HASH_SECRET;

      const signData = qs.stringify(vnp_Params, { encode: false });
      const hmac = crypto.createHmac('sha512', secretKey);
      const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

      if (secureHash === signed) {
        // Prepare your HTML content
        res.send(successHtml);
      } else {
        // Send the HTML response
        res.send(failHtml);
      }
    }
    if (req.method === 'POST') {
      process.env.TZ = 'Asia/Ho_Chi_Minh';

      const date = new Date();
      const createDate = moment(date).format('YYYYMMDDHHmmss');

      const ipAddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

      const tmnCode = ProjectENV.VNPAY_TMN_CODE;
      const secretKey = ProjectENV.VNPAY_HASH_SECRET;
      let vnpUrl = ProjectENV.VNPAY_URL;
      const returnUrl = ProjectENV.VNPAY_RETURN_URL;

      const orderId = moment(date).format('DDHHmmss');
      const amount = req.body.amount;
      const bankCode = req.body.bankCode;

      let locale = req.body.language;
      if (!locale) {
        locale = 'vn';
      }
      const currCode = 'VND';
      let vnp_Params = {};
      vnp_Params['vnp_Version'] = '2.1.0';
      vnp_Params['vnp_Command'] = 'pay';
      vnp_Params['vnp_TmnCode'] = tmnCode;
      vnp_Params['vnp_Locale'] = locale;
      vnp_Params['vnp_CurrCode'] = currCode;
      vnp_Params['vnp_TxnRef'] = orderId;
      vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
      vnp_Params['vnp_OrderType'] = 'other';
      vnp_Params['vnp_Amount'] = amount * 100;
      vnp_Params['vnp_ReturnUrl'] = returnUrl;
      vnp_Params['vnp_IpAddr'] = ipAddr;
      vnp_Params['vnp_CreateDate'] = createDate;
      if (bankCode) {
        vnp_Params['vnp_BankCode'] = bankCode;
      }

      vnp_Params = sortObject(vnp_Params);

      const signData = qs.stringify(vnp_Params, { encode: false });
      const hmac = crypto.createHmac('sha512', secretKey);
      const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
      vnp_Params['vnp_SecureHash'] = signed;
      vnpUrl += '?' + qs.stringify(vnp_Params, { encode: false });
      res.status(200).json({ code: '00', data: vnpUrl });
    }
  });
}
