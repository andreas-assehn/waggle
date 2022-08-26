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
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
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
