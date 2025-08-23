import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// import { getIO } from '../socket/socket';
import { Message } from '../utils/type';

class MessageService {
  async send(newMessage: any) {
    try {
      const message = await prisma.message.create({ data: newMessage });

      if (!message) throw new Error(`Message couldn't send please look at your sended fields`);

      return { message };
    } catch (error) {
      throw error;
    }
  }

  async getAll(chatId: string, pagination: any) {
    const { page = 1, pageSize = 1000 } = pagination;

    try {
      const skip = (page - 1) * pageSize;
      const take = parseInt(pageSize);
      const chatRoom = await prisma.chatRoom.findUnique({
        where: { id: chatId },
        include: {
          userOne: {
            select: {
              id: true,
              username: true,
              fullName: true,
              status: true,
            },
          },
          userTwo: {
            select: {
              id: true,
              username: true,
              fullName: true,
              status: true,
            },
          },
          messages: {
            skip,
            take,
            include: {
              sender: {
                select: {
                  id: true,
                  username: true,
                  fullName: true,
                },
              },
            },
            orderBy: { created: 'asc' },
          },
        },
      });
      if (!chatRoom) {
        return { error: 'Chat room not found' };
      }

      const formattedMessages = chatRoom.messages.map((message) => ({
        id: message.id,
        content: message.content,
        file: message.file,
        fileType: message.fileType,
        created: message.created,
        updated: message.updated,
        // type: message.type,
        sender: {
          id: message.sender.id,
          username: message.sender.username,
          fullName: message.sender.fullName,
        },
      }));

      const messages = {
        id: chatRoom.id,
        userOne: {
          id: chatRoom.userOne.id,
          username: chatRoom.userOne.username,
          fullName: chatRoom.userOne.fullName,
          status: chatRoom.userOne.status,
        },
        userTwo: {
          id: chatRoom.userTwo.id,
          username: chatRoom.userTwo.username,
          fullName: chatRoom.userTwo.fullName,
          status: chatRoom.userTwo.status,
        },
        lastMessageId: chatRoom.lastMessageId,
        messages: formattedMessages,
        pagination: {
          page: parseInt(page),
          pageSize: take,
          totalMessages: chatRoom.messages.length,
        },
      };

      return { messages };
    } catch (error) {
      throw error;
    }
  }

  async update(messageId: string, updatedMessage: any) {
    console.log(updatedMessage, 'message');
    try {
      const message = await prisma.message.update({
        where: { id: messageId },
        data: updatedMessage,
      });
      if (!message) throw new Error(`Something went wrong while updating message`);

      return { message };
    } catch (error) {
      throw error;
    }
  }

  async upadteMessageStatus(ids: string[]) {
    try {
      return await prisma.message.updateMany({
        where: { id: { in: ids } },
        data: { status: 'seen' },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateMessageStatus(ids: string[]) {
    console.log(ids, "Id s from socker servcie++++++++++++++++++++++");
    
    try {
      return await prisma.message.updateMany({
        where: {
          id: {
            in: ids, // <-- directly pass array here
          },
        },
        data: {
          status: 'seen',
        },
      });
    } catch (error) {
      console.error('Error updating message status:', error);
      throw error;
    }
  }

  async delete(messageId: string) {
    try {
      const message = await prisma.message.delete({ where: { id: messageId } });
      if (!message) throw new Error(`Something went wrong while deleting message`);

      return { message };
    } catch (error) {
      throw error;
    }
  }
}
export default new MessageService();
