import { Router } from 'express';
import { registerController } from '../controllers/register.controller';

const router = Router();

router.use('/register', registerController);

export default router;
