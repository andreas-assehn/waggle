import mongoose from 'mongoose';
import { User, Matches, Event } from '../utils/Types';

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

const UserSchema = new mongoose.Schema<User>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: {
    type: {
      city: { type: String, required: true },
      county: String,
      state: String,
      postcode: String,
      country: { type: String, required: true },
      countryCode: { type: String, required: true },
      lon: { type: Number, required: true },
      lat: { type: Number, required: true },
      stateCode: String,
      formatted: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String, required: true },
    },
    required: false,
  },
  verified: { type: Boolean, required: true },
  notifications: { type: Boolean, required: true },
  darkMode: { type: Boolean, required: true },
  swipeYes: { type: [Number], required: true },
  swipeNo: { type: [Number], required: true },
  dog: {
    type: {
      name: { type: String, required: true },
      breed: String,
      size: { type: String, required: true },
      gender: { type: String, required: true },
      energyLevel: { type: Number, required: true },
      dogFriendliness: Number,
      humanFriendliness: Number,
      description: String,
      briefDescription: String,
      likes: [String],
      dislikes: [String],
      images: { type: [String], required: false },
    },
    required: false,
  },
  preferences: {
    type: {
      size: { type: [String], required: true },
      maxDistance: { type: Number, required: true },
      gender: { type: [String], required: true },
      energyLevel: { type: [String], required: true },
    },
    required: true,
  },
});

const MatchesSchema = new mongoose.Schema<Matches>({
  userId: { type: String, required: true },
  matchIds: { type: [String], required: true },
});

const EventsSchema = new mongoose.Schema<Event>({
  eventId: { type: String, required: true },
  dateTime: { type: Date, required: true },
  location: {
    type: {
      city: { type: String, required: true },
      county: String,
      state: String,
      postcode: String,
      country: { type: String, required: true },
      countryCode: { type: String, required: true },
      lon: { type: Number, required: true },
      lat: { type: Number, required: true },
      stateCode: String,
      formatted: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String, required: true },
    },
    required: true,
  },
  briefDescription: String,
  description: { type: String, required: true },
  images: [String],
  attendees: {
    type: [
      {
        userId: { type: Number, required: true },
        creator: { type: Boolean, required: true },
      },
    ],
    required: true,
  },
});

const UserModel = mongoose.model('Users', UserSchema);
const MatchesModel = mongoose.model('Matches', MatchesSchema);
const EventsModel = mongoose.model('Events', EventsSchema);

export default { connectDb, UserModel, MatchesModel, EventsModel };
