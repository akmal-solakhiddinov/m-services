import type { Request, Response } from 'express';
import { userAgent } from '../utils/userAgent.utils';
import { registerService } from '../services/register.service';

export async function registerController(req: Request, res: Response) {
  try {
    const { email, password, fullName } = req?.body;
    const ip = req.ip as string;
    const agent = userAgent(req.headers['user-agent'] || '');

    
    
    const data = await registerService(
      email,
      password,
      fullName,
      ip,
      agent.device,
      agent.browser,
      agent.expiresAt,
    );

    res.cookie('refreshToken', data.refreshToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: 'None',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.cookie('accessToken', data.accessToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: 'None',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error?.message, status: 500 });
  }
}
