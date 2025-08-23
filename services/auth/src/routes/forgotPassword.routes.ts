import { Router } from 'express';
import { forgatPassword } from '../controllers/forgotPassword.controller';

const router = Router();

router.post('/forget-password', forgatPassword);

export default router;
