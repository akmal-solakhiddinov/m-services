import type { NextFunction, Request, Response } from 'express';
import { refreshService } from '../services/refresh.service';

export async function refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = req.cookies;
    
    const { refreshToken } = token;
    console.log(refreshToken, '=========REFRESH TOKEN=================');

    if (!refreshToken || typeof refreshToken !== 'string') {
      res.status(401).json({ error: 'Invalid or missing refresh token' });
    }

    const data = await refreshService(refreshToken);

    res.cookie('refreshToken', data.refreshToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "None",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json(data);
  } catch (error: any) {
    console.error('Error refreshing token:', error);
    next(error); // Forward to global error handler
  }
}
