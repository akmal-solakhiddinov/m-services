import { Router } from 'express';
import loginRoutes from './login.routes';
import registerRoutes from './register.routes';
import activationRoutes from './activation.routes';
import forgotPasswordRoutes from './forgotPassword.routes';
import resendLinkRoutes from './resetLink.routes';
import recoveryAccountRoutes from './recoveryAccount.routes';
import refreshRoutes from './refresh.routes';

const router = Router();

router.use('/auth/', loginRoutes);
router.use('/auth/', registerRoutes);
router.use('/auth/', activationRoutes);
router.use('/auth/', resendLinkRoutes);
router.use('/auth/', forgotPasswordRoutes);
router.use('/auth/', recoveryAccountRoutes);
router.use('/auth/', refreshRoutes);

export default router;
