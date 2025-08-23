import authorization from '../middlewares/authorization';
import { Router } from 'express';
import userRoutes from './user.routes';
const router = Router();

router.use('/user', authorization, userRoutes);

export default router;
