import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`, { dbName: 'waggle' });
    console.log('Database connection success!');
  } catch (e) {
    console.log('Database connection failed!');
  }
};

export { connectDb };
