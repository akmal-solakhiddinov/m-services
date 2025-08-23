import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import roomService from '../services/room.service';
import { NextFunction, Request, Response } from 'express';

async function verifyFriendship(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.id;
    const { friendId } = req.params;

    if (!userId) return;
    // const friendId = friendId || receiverId;

    if (!friendId) {
      res.status(400).json({ message: 'Friend ID is required' });
    }

    const friend = await prisma.user.findUnique({ where: { id: friendId } });
    if (!friend) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    if (friend.account !== 'private') {
      return next();
    }

    const friendRequest = await prisma.request.findFirst({
      where: {
        OR: [
          { friendId: friendId, senderId: userId },
          { senderId: friendId, friendId: userId },
        ],
        status: 'approved',
      },
    });

    const { room } = await roomService.getSingleRoom(userId, friendId);

    // console.log(room, '<----room service ');
    // console.log(friendRequest, '<---- friend request');

    if (!friendRequest && !room) {
      res.status(403).json({ message: 'You are not a friend of this user' });
    }

    return next();
  } catch (error: any) {
    console.error('Error verifying friendship:', error.message);
    res.status(500).json({ message: 'An error occurred while verifying friendship' });
  }
}

export default verifyFriendship;
