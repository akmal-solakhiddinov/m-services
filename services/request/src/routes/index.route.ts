import authorization from '../middlewares/authorization';
import { Router } from 'express';
import   requestRoutes  from  './request.route'
const router = Router();

router.use('/request', authorization, requestRoutes);


export default router;
