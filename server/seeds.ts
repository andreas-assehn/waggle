/* eslint-disable @typescript-eslint/ban-ts-comment */
/* //@ts-nocheck */
import 'dotenv/config';
import mongoose from 'mongoose';

import { users, events, chats } from './utils/mock-data/videoData';

import userModel from './models/userModel';
import eventsModel from './models/eventsModel';
import chatModel from './models/chatModel';

// Deletes the contents of the database
// Seeds it with mock data
// Disconnects from the database
const seedDb = async () => {
  try {
    await userModel.deleteMany({});
    await eventsModel.deleteMany({});
    await chatModel.deleteMany({});
    await userModel.insertMany(users);
    await eventsModel.insertMany(events);
    await chatModel.insertMany(chats);
    console.log('Database successfully seeded!');
    mongoose.connection.close();
  } catch (e) {
    if (e instanceof Error) {
      console.log('Could not seed database', e.message);
    }
    console.log('Could not seed database');
  }
};

// Connects to the database and calls seedDb()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`, { dbName: 'waggle' });
    console.log('Connected to mongodb atlas');
    seedDb();
  } catch (e) {
    if (e instanceof Error) {
      console.log('Connection to mongodb atlas failed', e.message);
    }
    console.log('Connection to mongodb atlas failed');
  }
})();
