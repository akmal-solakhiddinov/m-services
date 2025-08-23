import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

const prisma = new PrismaClient();

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      email: string;
      fullName: string;
    };
    file?: Express.Multer.File;
  }
}

const isAuthor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId, messageId } = req.params;
    const userId = req?.user?.id;

    if (roomId) {
      const room = await prisma.chatRoom.findFirst({
        where: {
          id: roomId,
          OR: [{ userOneId: userId }, { userTwoId: userId }],
        },
      });

      if (!room) {
        res
          .status(403)
          .json({ message: 'You are not authorized to perform this action on this room.' });
      }

      // next();
    }

    if (messageId) {
      const message = await prisma.message.findFirst({
        where: {
          id: messageId,
          senderId: userId,
        },
      });

      if (!message) {
        res
          .status(403)
          .json({ message: 'You are not authorized to perform this action on this message.' });
      }

      next();
    }

    res.status(400).json({ message: 'Invalid request parameters.' });
  } catch (error: any) {
    console.error('Error in isAuthor middleware:', error.message);
    res.status(500).json({ message: 'An internal server error occurred.' });
  }
};

export default isAuthor;
