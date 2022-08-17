import { LocationType } from './location';

export type User = {
  _id?: string;
  userId: string;
  name: string;
  email: string;
  location?: LocationType;
  verified?: boolean;
  notifications?: boolean;
  darkMode?: boolean;
  swipeYes?: string[];
  swipeNo?: string[];
  dog?: Dog;
  preferences?: UserPreferences;
  ownerImage?: string;
};
export type UserPreferences = {
  maxDistance: number;
  size: string[];
  gender: string[];
  energyLevel: string[];
};
export type Dog = {
  name: string;
  breed?: string;
  size: string;
  gender: string;
  energyLevel: number;
  dogFriendliness?: number;
  humanFriendliness?: number;
  description?: string;
  briefDescription?: string;
  likes?: string[];
  dislikes?: string[];
  images?: string[];
};
