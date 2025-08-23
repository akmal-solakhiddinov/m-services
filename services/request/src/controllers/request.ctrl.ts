import { NextFunction, Request, Response } from 'express';

import requestService from '../services/request.services';
import { RequestStatus } from '../utils/types';
import requestServices from '../services/request.services';
// import { getIO } from '../socket/socket';

// const io = getIO();

class RequestController {
  async friend(req: Request, res: Response, next: NextFunction) {
    console.log('request create started');

    try {
      const senderId = req?.user?.id;
      const { friendId } = req.params;

      if (!senderId || !friendId) throw new Error('missing ids');

      const { request, message } = await requestService.friend(senderId, friendId);

      console.log(request, 'request ctrl');

      // io.to(friendId).emit(
      //// 'notification',
      //  // JSON.stringify({
      //    // title: 'You have friend request',
      //    // description: `This person send you friend request`,
      //  // }),
      //);

      res.status(201).json({ request, message });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async friendRequestStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { requestId } = req.params;
      const { status } = req.query;

      const { request } = await requestService.friendRequestStatus(
        requestId,
        status as RequestStatus,
      );
      res.status(200).json({ request });
    } catch (error: any) {
      console.error('Error in friendRequestStatus controller:', error.message);
      res.status(400).json({ message: error.message });
    }
  }

  /*     async friendReject(req:Request, res:Response, next:NextFunction) {
            try {
    
            } catch (error:any) {
                 res.status(400).json({ message: error.message })
            }
        }
     a*/
  async friendRequestAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req?.user?.id;
      if (!userId) return;
      const { requests } = await requestService.friendRequestAll(userId);

      if (requests.length < 0) throw new Error('Request not Found');

      res.status(200).json(requests);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteRequests(req: Request, res: Response, _next: NextFunction) {
    const userId = req.user?.id;

    if (!userId) {
      console.log('No user ID found in request');
      res.status(200).json({ status: 'no_user_id' });
      return;
    }

    try {
      const deleted = await requestService.deleteRequest(userId);

      if (deleted?.status === 'deleted') {
        console.log(`Deleted ${deleted.count} requests for user ${userId}`);
      } else {
        console.log(`No requests to delete for user ${userId}`);
      }

      res.status(200).json({ status: deleted?.status || 'no_action' });
    } catch (error: any) {
      console.error(`Unexpected error in deleteRequests:`, error);
      // Never block the caller — silently handle
      res.status(200).json({ status: 'error_handled' });
    }
  }
}

export default new RequestController();
