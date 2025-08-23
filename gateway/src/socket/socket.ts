import { Server as IOServer, ServerOptions, Socket } from 'socket.io';
import { Server as HTTPServer } from 'http';
// import { PrismaClient } from '@prisma/client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
// import userService from '../services/user.service';

// const prisma = new PrismaClient();

let io: IOServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

/* const updateMessageStatus = async (ids: string[]) => {
  await prisma.message.updateMany({
    where: { id: { in: ids } },
    data: { status: 'seen' },
  });
};
 */
const rooms = new Set<string>();

declare module 'socket.io' {
  interface Socket {
    myId?: string;
  }
}

export function initIO(server: HTTPServer) {
  io = new IOServer(server, {
    cors: {
      origin: ['http://localhost:5173', 'http://192.168.100.32:5173'],
      methods: ['GET', 'POST'],
      credentials: true,
    },
    pingTimeout: 60000, // 60 seconds (default is 20000)
    pingInterval: 25000, // 25 seconds (default is 25000)
    connectTimeout: 45000,
  });

  io.on('connection', async (socket: Socket) => {
    const token = socket.handshake.auth;
    const userId = socket.handshake.query.userId as string | undefined;
    // Log connection details
    console.log('Transport type:', socket.conn.transport.name);
    console.log('Client IP:', socket.handshake.address);

    if (!userId) {
      console.warn('User connected without userId:', socket.id);
      return;
    }

    (socket as any).myId = userId;

    // const now = new Date();
    // await userService.update(userId, { status: 'online', lastLogin: now });

    socket.on('joinRoom', (roomIds: string[]) => {
      // console.log('Received joinRoom:', roomIds, 'typeof:', typeof roomIds);

      const ids = Array.isArray(roomIds) ? roomIds : typeof roomIds === 'string' ? [roomIds] : [];

      ids.forEach((roomId) => {
        if (!socket.rooms.has(roomId)) {
          socket.join(roomId);
          console.log(`Socket ${socket.id} joined room ${roomId}`);
          socket.to(roomId).emit('joined', { userId: socket.myId });
        }
      });
    });

    socket.on('userTyping', (data: { roomId: string }) => {
      socket.to(data.roomId).emit('userIsTyping', { userId });
      console.log('typing...', data.roomId);
    });

    socket.on('userStoppedTyping', (data: { roomId: string }) => {
      socket.to(data.roomId).emit('userStoppedTyping', { userId });
      console.log('typing... stoped');
    });

    let updates: {
      messageId: string;
      senderId: string;
      receiverId: string;
      roomId: string;
    }[] = [];

    let debounceTimer: NodeJS.Timeout | null = null;

    socket.on('messageSeen', (data: any) => {
      // console.log('Message seen request:', data);
      updates.push(data);

      if (debounceTimer) clearTimeout(debounceTimer);

      debounceTimer = setTimeout(async () => {
        if (updates.length === 0) return;

        const ids = updates.map((u) => u.messageId);
        const [{ senderId, receiverId, roomId }] = updates;

        try {
          await fetch(process.env.MESSAGE_SERVICE_URL + '/api/v-1/messages/message-status/update', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token.accessToken}`,
            },
            body: JSON.stringify({ messageIds: ids }),
          });

          socket.emit('messageSeenAck', { messageId: ids, receiverId, roomId });
          socket.to(senderId).emit('messageSeenAck', { messageId: ids, senderId });

          console.log('Message seen status updated for:', ids);
        } catch (err) {
          console.error('Failed to update message status:', err);
        } finally {
          updates = [];
          debounceTimer = null;
        }
      }, 2000); // wait for 2 seconds of inactivity
    });

    socket.on('sendMessage', async (roomId: string, message: any) => {
      console.log(roomId, message, 'new message form');

      io.to(roomId).emit('message', message);
    });

    socket.on(
      'offer',
      ({ offer, roomId, myId }: { offer: string; roomId: string; myId: string }) => {
        socket.broadcast.to(roomId).emit('offer', { offer, roomId, myId });
      },
    );

    socket.on(
      'answer',
      ({ answer, roomId, myId }: { answer: string; roomId: string; myId: string }) => {
        socket.broadcast.to(myId).emit('answer', { answer, roomId, myId });
      },
    );

    socket.on(
      'candidate',
      ({ candidate, roomId, myId }: { candidate: string; roomId: string; myId: string }) => {
        if (userId !== myId) {
          socket.to(myId).emit('candidate', { candidate, roomId, myId });
        } else {
          socket.to(roomId).emit('candidate', { candidate, roomId, myId });
        }
      },
    );

    socket.on('endCall', ({ roomId }: { roomId: string }) => {
      io.to(roomId).emit('endCall');
    });

    socket.on('disconnect', (reason) => {
      console.log(`Socket ${socket.id} disconnected due to: ${reason}`);
    });

    // Add explicit error handler
    socket.on('error', (error) => {
      console.error(`Socket ${socket.id} error:`, error);
    });
  });

  console.log('Socket.IO initialized');
  return io;
}

export function getIO(): IOServer {
  if (!io) throw new Error('Socket.IO not initialized!');
  return io;
}
