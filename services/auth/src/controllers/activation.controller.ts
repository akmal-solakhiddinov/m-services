import type { Request, Response } from 'express';
import { activationSerivice } from '../services/activation.service';

export async function activation(req: Request, res: Response) {
  try {
    const token = req.params.token;
    await activationSerivice(token);
    res.redirect(process.env.CLIENT_URL || '');
    // res.json({ success: true })
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
