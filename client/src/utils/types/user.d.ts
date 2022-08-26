import { Dog, LocationType } from '../../../../globalUtils/Types';

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

export type EditUserProfile = {
  _id?: string;
  location: LocationType;
  dog?: Dog;
  ownerImage?: string;
};
