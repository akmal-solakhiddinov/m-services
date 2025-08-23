import { Router } from 'express';
import { recoverAccount } from '../controllers/recoveryAccount.controller';

const router = Router();

router.put('/recovery-account', recoverAccount);

export default router;
