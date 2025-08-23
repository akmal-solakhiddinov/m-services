const io = require('socket.io-client');

const socket = io('http://localhost:4000', {
  transports: ["websocket"] // Fixed typo: "websoket" -> "websocket"
});

socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

socket.on('disconnect', () => {
  console.log('Disconnected from Socket.IO server');
});

console.log('Socket state:', socket);
