import { Router } from 'express';
import { loginController } from '../controllers/login.controller';

const router = Router();

router.post('/logout', loginController);

export default router;
