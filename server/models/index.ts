import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.0rmucpd.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('Database connection success!');
  } catch (e) {
    console.log('Database connection failed!');
  }
};

export { connectDb };
