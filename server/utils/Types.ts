export type LocationType = {
  city: string;
  county?: string;
  state?: string;
  postcode?: string;
  country: string;
  countryCode: string;
  lon: number;
  lat: number;
  stateCode?: string;
  formatted: string;
  addressLine1: string;
  addressLine2?: string;
};

export type Dog = {
  name: string;
  breed?: string;
  age?: number;
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

export type UserPreferences = {
  maxDistance: number;
  size: string[];
  gender: string;
  energyLevel: number[];
};

export type User = {
  userId: string;
  name: string;
  email: string;
  location?: LocationType;
  verified: boolean;
  notifications: boolean;
  darkMode: boolean;
  swipeYes: string[];
  swipeNo: string[];
  ownerImage: string;
  dog?: Dog;
  preferences: UserPreferences;
};

export type Matches = {
  userId: string;
  matchIds: string[];
};

export type Attendee = {
  userId: string;
  creator: boolean;
};

export type Event = {
  createdBy: string;
  dateTime: Date;
  location: LocationType;
  briefDescription?: string;
  description: string;
  images?: string[];
  attendees?: Attendee[];
};
