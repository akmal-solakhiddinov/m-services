import { PrismaClient } from '@prisma/client';
import { ChatRoom } from '../utils/type';

const prisma = new PrismaClient();
class RoomService {
  async create(user1: string, user2: string) {
    try {
      const { room } = await this.getSingleRoom(user1, user2);
      if (room) return { room };

      const newRoom = await prisma.chatRoom.create({
        data: {
          userOneId: user1,
          userTwoId: user2,
        },
      });

      if (!newRoom) throw new Error('Room is not defined');

      return { room: newRoom };
    } catch (error: any) {
      throw error;
    }
  }

  async lastMessage(roomId: string, lastMessageId: string) {
    try {
      const chat = await prisma.chatRoom.update({
        where: { id: roomId },
        data: {
          lastMessage: { connect: { id: lastMessageId } },
        },
      });
    } catch (error: any) {
      throw error;
    }
  }

  async getUnseenMessageCount(roomId: string, userId: string) {
    try {
      const count = await prisma.message.count({
        where: {
          chatId: roomId,
          receiverId: userId, // Only count messages where the user is the receiver
          status: 'unseen', // Assuming 'status' is the field tracking seen/unseen state
        },
      });

      console.log(count, '<----- count-------');

      return count;
    } catch (error: any) {
      throw error;
    }
  }

  async getAll(userId: string) {
    try {
      const rooms = await prisma.chatRoom.findMany({
        where: {
          OR: [{ userOneId: userId }, { userTwoId: userId }],
        },
        select: {
          id: true,
          lastMessage: {
            select: {
              content: true,
              fileType: true,
              file: true,
              senderId: true,
              receiverId: true,
            },
          },
          unSeenMessageCount: true,
          userOne: {
            select: {
              username: true,
              email: true,
              id: true,
              image: true,
              lastLogin: true,
              fullName: true,
              status: true,
            },
          },
          userTwo: {
            select: {
              username: true,
              email: true,
              id: true,
              image: true,
              fullName: true,
              status: true,
              lastLogin: true,
            },
          },
          userOneId: true,
          userTwoId: true,
        },
      });

      if (!rooms) throw new Error('No room found');

      const data = await Promise.all(
        rooms.map(async (room) => {
          const unseenCount = await this.getUnseenMessageCount(room.id, userId);

          if (room.userOneId === userId) {
            return {
              id: room.id,
              lastMessage: { ...room.lastMessage },
              unSeenMessageCount: unseenCount,
              user: room.userTwo,
            };
          } else if (room.userTwoId === userId) {
            return {
              id: room.id,
              lastMessage: { ...room.lastMessage },
              unSeenMessageCount: unseenCount,
              user: room.userOne, // Fix: remove duplicate key
            };
          }
        }),
      );

      return { rooms: data };
    } catch (error: any) {
      throw error;
    }
  }

  async delete(roomId: string) {
    try {
      const room = await prisma.chatRoom.delete({ where: { id: roomId } });

      if (!room) throw new Error('Something went wrong while deleting room');

      return { room };
    } catch (error: any) {
      throw error;
    }
  }

  async getMessages(roomId: string, userId: string, pagination: any) {
    const { page = 1, pageSize = 10000 } = pagination;

    try {
      const skip = (page - 1) * pageSize;
      const take = parseInt(pageSize);
      const messages = await prisma.chatRoom.findUnique({
        where: { id: roomId },
        include: {
          userOne: {
            select: {
              id: true,
              username: true,
              fullName: true,
              status: true,
              image: true,
              lastLogin: true,
            },
          },
          userTwo: {
            select: {
              id: true,
              username: true,
              fullName: true,
              status: true,
              image: true,
              lastLogin: true,
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

      if (!messages) {
        throw new Error('Chat room not found');
      }

      let data;

      if (messages.userOneId === userId) {
        data = {
          id: messages.id,
          user: messages.userTwo,
          messages: messages.messages,
        };
      } else if (messages.userTwoId === userId) {
        data = {
          id: messages.id,
          user: messages.userOne,
          messages: messages.messages,
        };
      }

      return { messages: data };
    } catch (error: any) {
      console.error('Error retrieving messages:', error.message);
      throw new Error('Something went wrong while retrieving messages from the database');
    }
  }

  async getSingleRoom(user1: string, user2: string) {
    try {
      const room = await prisma.chatRoom.findFirst({
        where: {
          OR: [
            {
              AND: [{ userOneId: user1 }, { userTwoId: user2 }],
            },
            {
              AND: [{ userOneId: user2 }, { userTwoId: user1 }],
            },
          ],
        },
        include: {
          userOne: {
            select: {
              username: true,
              email: true,
              id: true,
              image: true,
              fullName: true,
              status: true,
              lastLogin: true,
            },
          },
          
          userTwo: {
            select: {
              username: true,
              email: true,
              id: true,
              image: true,
              fullName: true,
              status: true,
              lastLogin: true,
            },
          },
        },
      });

      return { room };
    } catch (error: any) {
      throw error;
    }
  }
}

export default new RoomService();
