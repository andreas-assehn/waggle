import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { corsOptions, port, host } from './utils/config';
import router from './router';
import { connectDb } from './models';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: corsOptions,
});

io.on('connection', (socket) => {
  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

(async () => {
  try {
    await connectDb();
    httpServer.listen(port, () => {
      console.log(`⚡️[server]: Server is running at ${host}:${port}`);
    });
  } catch (e) {
    console.log('⚡️[server]: Server could not connect to database!');
  }
})();

// socket.on('private message', ({ content, to }) => {
//   socket.to(to).emit('private message', {
//     content,
//     from: socket.id,
//   });
// });

// io.use((socket, next) => {
//   const userName = socket.handshake.auth.userName;
//   // socket.userName = userName;
//   next();
// });

// io.on('connection', (socket) => {
//   const users = [];
//   for (let [id, socket] of io.of('/').sockets) {
//     users.push({
//       userID: id,
//       // username: socket.userName,
//     });
//   }
//   socket.emit('users', users);
