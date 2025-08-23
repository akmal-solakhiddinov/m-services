import authorization from '../middlewares/authorization';
import isActivated from '../middlewares/isActivated';
import roomRoute from './room.route';
import messageRoute from './messages.route';
import { Router } from 'express';

const router = Router();

router.use('/rooms', authorization, isActivated, roomRoute);
router.use(
  '/messages',
  (req, res, next) => {
    console.log('hit send message route');
    console.log(req.originalUrl, 'oringinal url');
    console.log(req.url, 'request , url');

    next();
  },
  authorization,
  isActivated,

  messageRoute,
);

export default router;

//api/v-1/message/rooms
//api/v-1/message/messages
