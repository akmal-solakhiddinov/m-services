import { Router } from 'express';
import { refresh } from '../controllers/refresh.controller';

const router = Router();

router.get('/refresh', refresh);

export default router;
