import type { Request, Response } from 'express';
import { resendLinkService } from '../services/resendLink.service';

export async function resendLink(req: Request, res: Response) {
  try {
    const { email } = req.body;

    await resendLinkService(email);
    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
