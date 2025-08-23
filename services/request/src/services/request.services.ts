import { PrismaClient } from '../generated/prisma';

import { RequestStatus } from '../utils/types';
const prisma = new PrismaClient();

class RequestService {
  async friend(senderId: string, friendId: string) {
    try {
      console.log('Request services started');

      // Check if a request already exists between sender and friend
      const existingRequest = await prisma.request.findUnique({
        where: {
          senderId_friendId: {
            senderId,
            friendId,
          },
        },
      });

      if (existingRequest) {
        return { message: 'Friend request already exists.' }; // Or handle as needed
      }

      // If no existing request, create a new one
      const request = await prisma.request.create({
        data: { senderId, friendId },
      });

      console.log(request, 'Request to create friend');

      if (!request) {
        throw new Error('Something went wrong while sending request to friend');
      }

      return { request };
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async friendRequestStatus(requestId: string, status: RequestStatus) {
    try {
      console.log(requestId, status, '< --- request');
      const request = await prisma.request.update({
        where: { id: requestId },
        data: { status },
      });

      if (!request) {
        throw new Error(`Something went wrong while ${status} friend request`);
      }

      return { request };
    } catch (error: any) {
      console.error('Error updating friend request status:', error.message);
      throw new Error('Failed to update friend request status');
    }
  }

  /*     async friendReject(requestId) {
            try {
                const request = await prisma.request.update({ where: { id: requestId }, data: { status: 'approved' } })
    
                if (!request) throw new Error('Something went wrong wile approving  friend request ')
    
                return { request }
            } catch (error) {
    
            }
        }
     */

  async friendRequestAll(userId: string) {
    try {
      // { senderId: userId },
      const requests = await prisma.request.findMany({
        where: {
          OR: [{ friendId: userId }],
        },
        include: {
          sender: {
            select: {
              email: true,
              fullName: true,
              image: true,
              account: true,
              status: true,
              username: true,
              lastLogin: true,
            },
          },
        },
      });

      if (!requests) throw new Error(`Something went wrong while retriving requests from database`);

      return { requests };
    } catch (error) {
      throw error;
    }
  }
  async deleteRequest(userId: string) {
    try {
      const { requests } = await this.friendRequestAll(userId);

      if (!requests || requests.length === 0) {
        console.log(`No friend requests found for user: ${userId}`);
        return { status: 'nothing_to_delete' };
      }

      const requestsID = requests.map((req: { id: string }) => req.id);

      const deletedRequests = await prisma.request.deleteMany({
        where: { id: { in: requestsID } },
      });

      if (deletedRequests.count === 0) {
        console.log(`No requests were deleted for user: ${userId}`);
        return { status: 'nothing_deleted' };
      }

      return { status: 'deleted', count: deletedRequests.count };
    } catch (error) {
      console.error(`Error deleting requests for user ${userId}:`, error);
      return { status: 'error_handled' };
    }
  }
}

export default new RequestService();
