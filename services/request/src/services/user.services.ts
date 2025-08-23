/* import { PrismaClient } from '../generated/prisma';
import { User } from '../utils/types';
const prisma = new PrismaClient();
// import requestService from './request.service';
// import UserDto from '../dtos/user.dto';
class UserService {
  async profile(userId: string | undefined) {
    // console.log(userId, '<use rid');
    try {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) throw new Error('User not found');
      // const userDto = new UserDto(user);
      const userDto = user;

      return { user: { ...userDto } };
    } catch (error: any) {
      throw new Error(`Error retrieving profile for user ID ${userId}: ${error.message}`);
    }
  }

  async update(userId: string | undefined, updatedFields: User) {
    try {
      if (updatedFields.account) {
        if (updatedFields.account === 'public') {
          // await requestService.deleteRequest(userId);
          console.log('deleted from request');
        }
      }

      const {
        Session,
        ChatRoom_ChatRoom_userOneIdToUser,
        Request_Request_friendIdToUser,
        Request_Request_senderIdToUser,
        ChatRoom_ChatRoom_userTwoIdToUser,
        Friends_Friends_relatedUserIdToUser,
        Friends_Friends_userIdToUser,
        Message_Message_receiverIdToUser,
        Message_Message_senderIdToUser,
        ...safeFields
      } = updatedFields;

      const user = await prisma.user.update({
        where: { id: userId },
        data: { ...safeFields },
      });

      if (!user) {
        throw new Error(`Error updating user with ID ${userId}`);
      }

      return { user };
    } catch (error: any) {
      throw new Error(`Error updating user with ID ${userId}: ${error.message}`);
    }
  }

  async delete(userId: string | undefined) {
    try {
      const user = await prisma.user.delete({ where: { id: userId } });
      if (!user) throw new Error('Error occurred while deleting the account');
      return { user };
    } catch (error: any) {
      throw new Error(`Error deleting user with ID ${userId}: ${error.message}`);
    }
  }

  async userSearch(value: string) {
    try {
      const users = await prisma.user.findMany({
        where: {
          OR: [
            { username: { contains: value } },
            { email: { contains: value } },
            { fullName: { contains: value } },
          ],
        },
      });

      return { users };
    } catch (error: any) {
      throw new Error(`Error searching for users with value "${value}": ${error.message}`);
    }
  }

  async getOneProfile(myUserId: string | undefined, userId: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          ChatRoom_ChatRoom_userTwoIdToUser: {
            where: { userTwoId: myUserId },
            select: { id: true },
          },
          ChatRoom_ChatRoom_userOneIdToUser: {
            where: { userOneId: myUserId },
            select: { id: true },
          },
          Request_Request_friendIdToUser: {
            where: { senderId: myUserId, status: 'approved' },
            select: { id: true },
          },
        },
      });

      // console.log(user);
      if (!user) throw new Error('User not found');

      const chatRoomId =
        user.ChatRoom_ChatRoom_userOneIdToUser[0]?.id ||
        user.ChatRoom_ChatRoom_userTwoIdToUser?.[0]?.id ||
        null;

      // Adjust account type based on friendship status
      console.log('start');
      const accountType =
        (user.account === 'private' && user.Request_Request_friendIdToUser.length > 0) ||
        Number(chatRoomId !== null && chatRoomId.length) > 0
          ? 'public'
          : user.account;
      console.log(accountType, 'account type');

      const response = {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        status: user.status,
        lastLogin: user.lastLogin,
        account: accountType,
        chatRoomId,
        image: user.image,
        created: user.created,
        updated: user.updated,
      };

      // console.log('my id: ', myUserId, 'user id: ', userId)
      return { user: response };
    } catch (error: any) {
      throw new Error(`Error retrieving profile for user : ${error.message}`);
    }
  }
}

export default new UserService();
 */