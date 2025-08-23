import { Router } from 'express';
import { activation } from '../controllers/activation.controller';

const router = Router();

router.get('/activation/:token', activation);

export default router;
