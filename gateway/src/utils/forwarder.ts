import { Request, Response } from 'express';

// src/utils/forwarder.js
import axios from 'axios';

export const forwardRequest = (serviceUrl: string) => async (req: Request, res: Response) => {
  try {
    const url = `${serviceUrl}${req.originalUrl}`;
    const method = req.method.toLowerCase();
    const clientIp = req.ip?.split(':')[3];
    const clientAgent = req.headers['user-agent'];

    console.log(req.body, 'forworder request body');

    const rawCookies = req.headers.cookie; // This gives you the full cookie string

    const response = await axios({
      method,
      url,
      data: req.body,
      headers: {
        Authorization: req.headers.authorization,
        'Content-Type': req.headers['content-type'] || 'application/json',
        'User-Agent': clientAgent,
        'x-client-ip': clientIp,
        Cookie: rawCookies, // ✅ forward cookie to the next service
      },
    });
    const setCookieHeader = response.headers['set-cookie'];

    if (setCookieHeader) {
      res.setHeader('Set-Cookie', setCookieHeader);
    }
    // res.json(response.data);
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error(`[Proxy Error] ${req.method} ${req.originalUrl}`, error.message);

    const status = error.response?.status || 500;
    const data = error.response?.data || { error: 'Service error' };
    res.status(status).json(data);
  }
};
