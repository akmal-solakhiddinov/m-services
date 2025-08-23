import type { Request, Response } from 'express';
import { loginService } from '../services/login.service';
import useragent from 'useragent';
import { userAgent } from '../utils/userAgent.utils';

export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const ip = (req.headers['x-client-ip'] as string) || '0.0.0.0';

    const agent = userAgent(req.headers['user-agent'] || '');

    // console.log(ip, 'client ip');
    // console.log(agent, 'user agent');

    const data = await loginService({
      email,
      password,
      browser: agent.browser,
      device: agent.device,
      expiresAt: agent.expiresAt,
      ip,
    });

    console.log(data, "<<<<<<<<<<<<<<<<<<< User data " );
    

    res.cookie('refreshToken', data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure in production
        sameSite: 'lax', // or 'Strict'
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Example: 7 days
    });
    res.cookie('accessToken', data.accessToken, {
      httpOnly: true,
      secure: true, // ✅ Must be true for SameSite=None
      sameSite: 'none', // ✅ Allow cross-site
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/',
    });
    // console.log(data, '<==============result================I');

    res.status(201).json(data);
  } catch (error:any) {
    console.log(error, "================== ERROR ===============");

    res.status(500).json({ message: error?.message  });
  }
}
