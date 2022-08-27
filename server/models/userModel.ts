import mongoose from 'mongoose';
import { User, ChatMatch } from '../../globalUtils/Types';
import MatchesModel from './matchesModel';

const UserSchema = new mongoose.Schema<User>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: {
    type: {
      city: String,
      county: String,
      state: String,
      postcode: String,
      country: String,
      countryCode: String,
      lon: { type: Number, required: true },
      lat: { type: Number, required: true },
      stateCode: String,
      formatted: { type: String, required: true },
      addressLine1: String,
      addressLine2: String,
    },
    required: false,
  },
  distance: { type: Number, required: false },
  verified: { type: Boolean, required: true, default: false },
  notifications: { type: Boolean, required: true, default: false },
  darkMode: { type: Boolean, required: true, default: false },
  swipeYes: { type: [String], required: true, default: [] },
  swipeNo: { type: [String], required: true, default: [] },
  matches: [
    {
      matchId: { type: String, required: false },
      roomId: { type: String, required: false },
    },
  ],
  ownerImage: {
    type: String,
    required: true,
    default:
      'https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-user-icon-isolated-on-abstract-background-png-image_1875037.jpg',
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
        default: [],
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
