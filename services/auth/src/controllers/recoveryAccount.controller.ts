import type { NextFunction, Request, Response } from 'express';
import { recoverAccountService } from '../services/recoverAccount.service';

export async function recoverAccount(req: Request, res: Response, next: NextFunction) {
  try {
    const { token, password } = req.body;
    const { message } = await recoverAccountService(token, password);
    res.json({ success: true, message });
  } catch (error: any) {
    // return res.status(500).json({ message: error.message });
    next(error);
  }
}
