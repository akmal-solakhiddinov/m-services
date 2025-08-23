import { Router } from 'express';
import { resendLink } from '../controllers/resetLink.controller';

const router = Router();

router.post('/resend-link', resendLink);

export default router;
