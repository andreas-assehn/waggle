import mongoose from 'mongoose';
import { User } from '../../globalUtils/Types';

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
      addressLine2: String,
    },
    required: false,
  },
  verified: { type: Boolean, required: true, default: false },
  notifications: { type: Boolean, required: true, default: false },
  darkMode: { type: Boolean, required: true, default: false },
  swipeYes: { type: [String], required: true, default: [] },
  swipeNo: { type: [String], required: true, default: [] },
  matches: { type: [String], required: true, default: [] },
  ownerImage: {
    type: String,
    required: true,
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
  },
  dog: {
    type: {
      name: { type: String, required: true },
      breed: { type: String, required: false },
      age: { type: Number, required: false },
      size: { type: String, required: true },
      gender: { type: String, required: true },
      energyLevel: { type: Number, required: false },
      dogFriendliness: { type: Number, required: false },
      humanFriendliness: { type: Number, required: false },
      description: { type: String, required: false },
      briefDescription: { type: String, required: false },
      likes: { type: [String], required: false },
      dislikes: { type: [String], required: false },
      images: {
        type: [String],
        required: false,
        default: [
          'https://cdn.pixabay.com/photo/2017/03/25/14/26/animals-2173635_960_720.jpg',
        ],
      },
    },
    required: false,
  },
  preferences: {
    type: {
      size: {
        type: [String],
        required: true,
        default: ['small', 'medium', 'large'],
      },
      maxDistance: { type: Number, required: true, default: 2.5 },
      gender: { type: String, required: true, default: 'any' },
      energyLevel: { type: [Number], required: true, default: [1, 2, 3, 4, 5] },
    },
    required: true,
    default: {
      size: ['small', 'medium', 'large'],
      maxDistance: 2.5,
      gender: 'any',
      energyLevel: [1, 2, 3, 4, 5],
    },
  },
});

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;
