import { NextFunction, Request, Response } from 'express';
import { uploadFile } from '../services/file.service';
import messagesService from '../services/messages.service';
import roomService from '../services/room.service';
// import { getIO } from '../socket/socket';
// const upload = require("../services/upload.service");

// const io = getIO();
class MessageController {
  async send(req: Request, res: Response, next: NextFunction) {
    try {
      const { roomId, friendId: receiverId } = req.params;
      const { content, fileType } = req.body;
      const senderId = req.user?.id;
      const file = req.file;

      let fileUrl;

      if (!senderId || !receiverId || (!content && !file && !fileType)) {
        console.warn('[Missing Fields]', {
          roomId,
          receiverId,
          senderId,
          content,
          hasFile: !!file,
          fileType,
        });

        res.status(400).json({ message: 'Missing required fields' });
        return;
      }
      /**
       * Handles the case where the message is purely textual (i.e., no file or file type is included).
       * This condition ensures a new message is created only with text content.
       */
      if (!fileType && !file) {
        const newMessage = {
          content,
          receiverId,
          chatId: roomId,
          senderId,
        };

        const { message } = await messagesService.send(newMessage);

        /* io.to(newMessage.chatId).emit('message', {
          ...message,
          sender: { id: newMessage.senderId },
        }); */
        await roomService.lastMessage(message.chatId, message.id);
        res.status(201).json(message);
        return;
      }

      if (file) {
        fileUrl = await uploadFile(fileType, file);
      }

      const newMessage = {
        content: content?.length > 0 ? content : null,
        file: fileUrl as string,
        fileType,
        receiverId,
        chatId: roomId,
        senderId,
      };

      const { message } = await messagesService.send(newMessage);

      res.status(201).json(message);
      return;
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { messageId } = req.params;
      const updatedMessage = req.body;
      const file = req.file;
      let newMessage = { ...updatedMessage };

      if (file) {
        const fileUrl = await uploadFile(updatedMessage.fileType, file);
        newMessage.file = fileUrl;
      }

      const { message } = await messagesService.update(messageId, newMessage);

      res.status(201).json(message);
      return;
    } catch (error: any) {
      // Error handling
      res.status(400).json({ message: error.message });
    }
  }

  async updateMessageStatus(req: Request, res: Response, next: NextFunction) {
    // console.log('------------- hit the controlller -----------------');

    try {
      const messageIds = req.body;

      // console.log(messageIds, '1111111111111111111111111');

      const message = await messagesService.updateMessageStatus(messageIds.messageIds);
      // console.log(message, 'message stsatus try.....');

      if (!message) {
        res.status(400).json({ message: 'Someting went wrong' });
        return;
      }

      res.status(201).json(message);
    } catch (error: any) {
      // Error handling
      console.log(error);

      res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { messageId } = req.params;
      const { message } = await messagesService.delete(messageId);

      res.status(201).json({ message });
      return;
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    console.log(req.query, '<-----pagination------>');
    try {
      const { roomId } = req.params;
      const pagination = req.query;

      const data = await messagesService.getAll(roomId, pagination);
      console.log(data, 'messages'); //'i cannot see logs here ');

      const { messages } = data;
      console.log(messages, 'Messages');
      res.status(201).json(messages);
      return;
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new MessageController();
