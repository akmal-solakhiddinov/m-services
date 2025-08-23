import type { Request, Response } from 'express';
import { forgotPasswordService } from '../services/forgotPassword.service';

export async function forgatPassword(req: Request, res: Response) {
  try {
    await forgotPasswordService(req.body.email);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
