import { Router } from 'express';
import requestController from '../controllers/request.ctrl';
import authorization from '../middlewares/authorization';

const router = Router();

router.post('/friend/:friendId', authorization, requestController.friend);
router.put('/friend/:requestId/', authorization, requestController.friendRequestStatus);
// router.post('/friend/:requestId/reject', authorization, requestController.friendReject)
router.get('/friend/get-all', authorization, requestController.friendRequestAll);
router.delete('/friend/delete', authorization, requestController.deleteRequests);

export default router;




