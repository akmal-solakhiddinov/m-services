import { Router } from 'express';
import messagesController from '../controllers/messages.controller';
import authorization from '../middlewares/authorization';
import isAuthor from '../middlewares/isAuthor';
import verifyFriendship from '../middlewares/verifyFriendship';
import upload from '../services/upload.service';
const router = Router();
router.post(
  '/send/:roomId/:friendId',
  verifyFriendship,
  upload.single('file'),
  // (req, res, next) => {
  //   console.log('hit send  route');
  //   console.log(req.originalUrl);
  //   console.log(req.url);

  //   // next();
  // },

  

  messagesController.send,
);
// /api/v-1/messages/message-status/update oringinal url
// message-1  | /message-status/update request , url

router.put('/update/:messageId', isAuthor, upload.single('file'), messagesController.update);
router.put(
  '/message-status/update',
  (req, res, next) => {
    console.log(
      req.body,
      '------------------ hit message status update route-------------------- ',
    );


    next();
  },
  messagesController.updateMessageStatus,
);
router.delete('/delete/:messageId', isAuthor, messagesController.delete);
router.get('/get-all/:roomId', messagesController.getAll);

export default router;
