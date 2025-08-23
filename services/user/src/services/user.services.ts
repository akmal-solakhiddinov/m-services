import { PrismaClient } from '@prisma/client';
import { User } from '../utils/type';
import tokenService from './token.service';
const prisma = new PrismaClient();
// import requestService from './request.service';
// import UserDto from '../dtos/user.dto';

interface ReqUserType {
  id: string;
  email: string;
  fullName: string;
}

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

  async update(user: ReqUserType, updatedFields: User) {
    try {
      if (updatedFields.account === 'public') {
        // return { user: undefined };

        const tokenResult = tokenService.generate(user);
        const request = await fetch('http://localhost:4004/api/request/friend/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenResult}`,
          },
        });

        // console.log(request, 'request');

        if (request.statusText !== 'OK') {
          console.log(`Failed to delete friend request, status: ${request.status}`);
        }

        const response = await request.json();
        console.log(response, 'deleted from request');
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

      console.log(safeFields, 'safe fields');

      const userUpdated = await prisma.user.update({
        where: { id: user.id },
        data: { ...safeFields },
      });

      console.log(userUpdated, 'user updates async');

      if (!userUpdated) {
        throw new Error(`User update failed unexpectedly for ID ${user.id}`);
      }

      return { user: userUpdated };
    } catch (error: any) {
      console.error(error);
      throw new Error(`Error updating user with ID ${user.id}: ${error.message}`);
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
          userTwoChats: {
            where: { userTwoId: myUserId },
            select: { id: true },
          },
          userOneChats: {
            where: { userOneId: myUserId },
            select: { id: true },
          },
          sentRequests: {
            where: { senderId: myUserId, status: 'approved' },
            select: { id: true },
          },
        },
      });

      // console.log(user);
      if (!user) throw new Error('User not found');

      const chatRoomId =
        user.userOneChats[0]?.id ||
        user.userTwoChats?.[0]?.id ||
        null;

      // Adjust account type based on friendship status
      console.log('start');
      const accountType =
        (user.account === 'private' && user.sentRequests.length > 0) ||
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
