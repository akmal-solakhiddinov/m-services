import express from 'express';
import { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { forwardRequest } from './utils/forwarder';
import http from 'http';
import { Server } from 'socket.io';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import cookieParser from 'cookie-parser';

dotenv.config();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Services:
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || '';
const USER_SERVICE_URL = process.env.USER_SERVICE_URL || '';
const MESSAGE_SERVICE_URL = process.env.MESSAGE_SERVICE_URL || '';
const REQUEST_SERVICE_URL = process.env.REQUEST_SERVICE_URL || '';

const app = express();
const server = http.createServer(app);

// === MORGAN LOGGING CONFIGURATION ===

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Create write streams for access and error logs
const accessLogStream = fs.createWriteStream(path.join(logsDir, 'access.log'), { flags: 'a' });

const errorLogStream = fs.createWriteStream(path.join(logsDir, 'error.log'), { flags: 'a' });

// Custom token for request body
morgan.token('body', (req: Request) => {
  // Don't log sensitive information
  const safeBody = { ...req.body };
  if (safeBody.password) safeBody.password = '[REDACTED]';
  if (safeBody.token) safeBody.token = '[REDACTED]';
  return JSON.stringify(safeBody);
});

// Custom token for response body (requires response interceptor)
morgan.token('response-body', (_req: Request, res: Response) => {
  const rawBody = res.locals.responseBody;
  if (!rawBody) return '';

  // Try to parse and sanitize response body
  try {
    const safeBody = { ...JSON.parse(rawBody) };
    if (safeBody.token) safeBody.token = '[REDACTED]';
    return JSON.stringify(safeBody);
  } catch (e) {
    return '[Unable to parse response body]';
  }
});

// Custom token for client IP
morgan.token('remote-addr', (req) => {
  return (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '-';
});

// Define different formats based on environment
const developmentFormat = ':method :url :status :response-time ms - :res[content-length] - :body';
const productionFormat =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms';
const errorFormat =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms - :body';

// Configure middleware to capture response body
app.use((req, res, next) => {
  const originalSend = res.send;

  res.send = function (body) {
    res.locals.responseBody = body;
    return originalSend.call(this, body);
  };

  next();
});

// Apply the appropriate Morgan format based on environment
if (NODE_ENV === 'development') {
  app.use(morgan(developmentFormat));
} else {
  app.use(morgan(productionFormat, { stream: accessLogStream }));
  app.use(
    morgan(errorFormat, {
      stream: errorLogStream,
      skip: (_req, res) => res.statusCode < 400,
    }),
  );
}

// Socket.IO Configuration
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', `${process.env.CLIENT_URL}`],
    methods: ['GET', 'POST'],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
  transports: ['websocket', 'polling'],
  allowEIO3: true,
  connectTimeout: 45000,
});

// Create a custom logger for Socket.IO events
const socketLogStream = fs.createWriteStream(path.join(logsDir, 'socket.log'), { flags: 'a' });

const logSocketEvent = (eventType: string, socketId: string, data: any) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${eventType}] [${socketId}] ${JSON.stringify(data)}\n`;

  // Log to console in development
  if (NODE_ENV === 'development') {
    console.log(`SOCKET: ${eventType} | ${socketId} | ${JSON.stringify(data)}`);
  }

  // Always write to log file
  socketLogStream.write(logEntry);
};

// Store connected users
const connectedUsers = new Map();

// Socket.IO connection handling
io.on('connection', (socket) => {
  logSocketEvent('connection', socket.id, { headers: socket.handshake.headers });

  // Get user ID from query parameters
  const userId = socket.handshake.query.userId as string;
  const token = socket.handshake.auth;

  if (userId) {
    // If userId exists, add to connectedUsers map
    connectedUsers.set(userId, socket.id);
    logSocketEvent('user-connected', socket.id, { userId });
  }

  // Handle room joining
  socket.on('joinRoom', (roomIds) => {
    try {
      if (Array.isArray(roomIds)) {
        // Leave all rooms first to prevent duplication
        socket.rooms.forEach((room) => {
          if (room !== socket.id) {
            socket.leave(room);
            logSocketEvent('leave-room', socket.id, { roomId: room });
          }
        });

        // Join each room
        roomIds.forEach((roomId) => {
          if (roomId) {
            socket.join(roomId);
            logSocketEvent('join-room', socket.id, { roomId });
          }
        });

        // Emit to the room that this user joined
        roomIds.forEach((roomId) => {
          if (roomId && roomId !== userId) {
            socket.to(roomId).emit('joined', { userId, socketId: socket.id });
          }
        });
      } else {
        logSocketEvent('error', socket.id, {
          event: 'joinRoom',
          error: 'Invalid data format',
          data: roomIds,
        });
      }
    } catch (error: any) {
      logSocketEvent('error', socket.id, {
        event: 'joinRoom',
        error: error.message,
      });
    }
  });
/* 
  socket.on('sendMessage', async (roomId: string, message: any) => {
    // console.log(roomId, message, 'new message form');

    logSocketEvent('message-received', socket.id, {
      chatId: roomId,
      senderId: message.sender.senderId,
      messageType: message.type,
    });

    io.to(roomId).emit('message', message);
  }); */

  // Handle messaging
  socket.on('sendMessage', (roomId, message) => {
    try {
      logSocketEvent('message-received', socket.id, {
        chatId: roomId,
        senderId: message.sender.senderId,
        messageType: message.type,
      });

      // Emit message to the specific room
      if (roomId) {
        io.to(roomId).emit('message', message);
      }

      // If direct message, also emit to recipient
      // if (message.receiverId && connectedUsers.has(message.receiverId)) {
      //   const recipientSocketId = connectedUsers.get(message.receiverId);
      //   socket.to(recipientSocketId).emit('message', message);
      // }
    } catch (error: any) {
      logSocketEvent('error', socket.id, {
        event: 'message',
        error: error.message,
      });
    }
  });

  // Handle typing events
  socket.on('userTyping', (data) => {
    try {
      if (data && data.chatId) {
        socket.to(data.chatId).emit('userTyping', data);
        logSocketEvent('typing', socket.id, {
          chatId: data.chatId,
          userId: data.userId,
        });
      }
    } catch (error: any) {
      logSocketEvent('error', socket.id, {
        event: 'userTyping',
        error: error.message,
      });
    }
  });

  // Handle stopped typing events
  socket.on('userStoppedTyping', (data) => {
    try {
      if (data && data.chatId) {
        socket.to(data.chatId).emit('userStoppedTyping', data);
        logSocketEvent('stopped-typing', socket.id, {
          chatId: data.chatId,
          userId: data.userId,
        });
      }
    } catch (error: any) {
      logSocketEvent('error', socket.id, {
        event: 'userStoppedTyping',
        error: error.message,
      });
    }
  });

  // Handle message seen acknowledgement
  socket.on('messageSeenAck', (data) => {
    try {
      if (data && data.messageId) {
        socket.to(data.chatId).emit('messageSeenAck', data);
        logSocketEvent('message-seen', socket.id, {
          chatId: data.chatId,
          messageId: data.messageId,
          seenBy: data.userId,
        });
      }
    } catch (error: any) {
      logSocketEvent('error', socket.id, {
        event: 'messageSeenAck',
        error: error.message,
      });
    }
  });

  let updates: {
    messageId: string;
    senderId: string;
    receiverId: string;
    roomId: string;
  }[] = [];

  let debounceTimer: NodeJS.Timeout | null = null;

  socket.on('messageSeen', (data: any) => {
    updates.push(data);

    if (debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      if (updates.length === 0) return;

      const ids = updates.map((u) => u.messageId);

      // Collect unique senderIds, receiverIds, roomIds
      const senderIds = [...new Set(updates.map((u) => u.senderId))];
      const receiverIds = [...new Set(updates.map((u) => u.receiverId))];
      const roomIds = [...new Set(updates.map((u) => u.roomId))];

      try {
        const response = await fetch(
          process.env.MESSAGE_SERVICE_URL + '/api/v-1/messages/message-status/update',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token.accessToken}`,
            },
            body: JSON.stringify({ messageIds: ids }),
          },
        );

        const result = await response.json();
        console.log('Update response:', result);

        // Emit back to client
        socket.emit('messageSeenAck', { messageIds: ids, receiverIds, roomIds });

        // Notify each sender separately
        senderIds.forEach((sid) => {
          socket.to(sid).emit('messageSeenAck', { messageIds: ids, senderId: sid });
        });

        console.log('Message seen status updated for:', ids);
      } catch (err: any) {
        logSocketEvent('error', socket.id, {
          event: 'messageSeen',
          error: err.message,
        });
      } finally {
        updates = [];
        debounceTimer = null;
      }
    }, 2000); // wait for 2 seconds of inactivity
  });

  // Handle disconnection
  socket.on('disconnect', (reason) => {
    logSocketEvent('disconnect', socket.id, { reason });

    // Remove user from connectedUsers map
    if (userId) {
      // Only remove if this socket ID matches the stored one
      // (user might have reconnected with a new socket)
      if (connectedUsers.get(userId) === socket.id) {
        connectedUsers.delete(userId);
        logSocketEvent('user-disconnected', socket.id, { userId });
      }
    }
  });

  // Handle explicit logout
  socket.on('logout', () => {
    if (userId && connectedUsers.has(userId)) {
      connectedUsers.delete(userId);
      logSocketEvent('logout', socket.id, { userId });
    }
    socket.disconnect(true);
  });

  // Handle errors
  socket.on('error', (error) => {
    logSocketEvent('error', socket.id, { error: error.message });
  });
});

// Export io instance for potential use in other modules
export { io };

// CORS configuration
app.use(
  cors({
    origin: ['http://localhost:5173', `${process.env.CLIENT_URL}`],
    credentials: true,
  }),
);

// Request parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'API Gateway',
    status: 'online',
    socketConnections: io.engine.clientsCount,
    environment: NODE_ENV,
  });
});

// Service forwarding
app.use('/api/v-1/auth', forwardRequest(AUTH_SERVICE_URL));
app.use('/api/v-1/user', forwardRequest(USER_SERVICE_URL));
app.use('/api/v-1/messages', forwardRequest(MESSAGE_SERVICE_URL));
app.use('/api/v-1/rooms', forwardRequest(MESSAGE_SERVICE_URL));
app.use('/api/v-1/request', forwardRequest(REQUEST_SERVICE_URL));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    connections: io.engine.clientsCount,
    uptime: process.uptime(),
    environment: NODE_ENV,
  });
});

// Global error handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  const status = err instanceof Error && 'status' in err ? (err as any).status : 500;
  const message = err instanceof Error ? err.message : 'Internal Server Error';

  // Log error to error log via Morgan
  logSocketEvent('express-error', 'SERVER', {
    path: req.path,
    method: req.method,
    status,
    message,
  });

  res.status(status).json({ error: message });
});

// Start server
server.listen(PORT, () => {
  console.log(`API gateway running on port: ${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
  console.log(`Socket.IO server initialized`);
});
// import express from 'express';
// import { NextFunction, Request, Response } from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { forwardRequest } from './utils/forwarder';
// import http from 'http';
// import { Server } from 'socket.io';
// import { initIO } from './socket/socket';
// import morgan from 'morgan';

// dotenv.config();
// const PORT = process.env.PORT || 4000;

// // Services:
// const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || '';
// const USER_SERVICE_URL = process.env.USER_SERVICE_URL || '';
// const MESSAGE_SERVICE_URL = process.env.MESSAGE_SERVICE_URL || '';
// const REQUEST_SERVICE_URL = process.env.REQUEST_SERVICE_URL || '';

// const app = express();
// const server = http.createServer(app);

// /* // Configure Socket.IO with CORS
// const io = new Server(server, {
//   cors: {
//     origin: ['http://localhost:5173', 'http://192.168.100.32:5173'],
//     methods: ["GET", "POST"],
//     credentials: true
//   }
// });

// console.log(io.adapter(), " adapter");
// console.log(io.listeners("connection"), " listners");
// console.log(io.listenerCount("connection"), "listener count");

// io.on('connection', (socket) => {
//   console.log('new Socket initialized');
//   console.log(socket.id); // Just log the socket ID instead of the entire socket object
// });
//  */

// const io = initIO(server)

// app.use(
//   cors({
//     origin: ['http://localhost:5173', 'http://192.168.100.32:5173'],
//     credentials: true,
//   }),
// );

// app.use(morgan("tiny"))
// morgan(':method :url :status :res[content-length] - :response-time ms')

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.json({ message: 'APi gateway' });
// });

// app.use('/api/v-1/auth', forwardRequest(AUTH_SERVICE_URL));
// app.use('/api/v-1/user', forwardRequest(USER_SERVICE_URL));

// app.use('/api/v-1/messages', forwardRequest(MESSAGE_SERVICE_URL));
// app.use('/api/v-1/rooms', forwardRequest(MESSAGE_SERVICE_URL));

// app.use('/api/v-1/request', forwardRequest(REQUEST_SERVICE_URL));

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.json({
//     status: 'healthy',
//     timestamp: new Date().toISOString(),
//     connections: io.engine.clientsCount,
//     uptime: process.uptime()
//   });
// });

// // Global error handler
// app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
//   console.error('Global Error Handler:', err);
//   const status = err instanceof Error && 'status' in err ? (err as any).status : 500;
//   const message = err instanceof Error ? err.message : 'Internal Server Error';
//   res.status(status).json({ error: message });
// });

// // Start server
// server.listen(PORT, () => {
//   console.log(`API gateway running on port: ${PORT}`);
//   console.log(`Socket.IO server initialized`);
// });
