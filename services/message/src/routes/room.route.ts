import { Router } from 'express';
import roomController from '../controllers/room.controller';
import authorization from '../middlewares/authorization';
import isAuthor from '../middlewares/isAuthor';
import verifyFriendship from '../middlewares/verifyFriendship';
const router = Router();

router.post('/create/:friendId', authorization, verifyFriendship, roomController.create);
router.get('/get-all', authorization, roomController.getAll);
router.get('/room-messages/:roomId', authorization, roomController.roomMessages);
router.delete('/delete/:roomId', authorization, isAuthor, roomController.delete);

export default router;
