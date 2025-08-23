import { NextFunction, Request, Response } from 'express';
import roomService from '../services/room.service';
// import { getIO } from '../socket/socket';

// import { ChatRoom } from '../utils/type';
// const io = getIO();

class RoomController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userOneId = req.user?.id;
      const userTwoId = req.params.friendId;

      if (!userOneId) return;
      const { room } = await roomService.create(userOneId, userTwoId);

      // io.to(userOneId).emit('roomCreated', room);
      // io.to(userTwoId).emit('roomCreated', room);

      res.status(201).json(room);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) throw new Error('Authorization failure');

      const { rooms } = await roomService.getAll(userId);
      res.status(201).json(rooms);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async roomMessages(req: Request, res: Response, next: NextFunction) {
    try {
      const roomId = req.params.roomId;
      const userId = req.user?.id;
      const pagination = req.query;

      if (!userId) return;
      const { messages } = await roomService.getMessages(roomId, userId, pagination);

      res.status(201).json(messages);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { roomId } = req.params;
      const { room } = await roomService.delete(roomId);

      res.status(201).json(room);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new RoomController();
