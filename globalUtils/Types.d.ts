export type LocationType = {
  city?: string;
  county?: string;
  state?: string;
  postcode?: string;
  country?: string;
  countryCode?: string;
  lon: number;
  lat: number;
  stateCode?: string;
  formatted: string;
  addressLine1?: string;
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
  matches?: string[];
  dog?: Dog;
  preferences?: UserPreferences;
  ownerImage?: string;
  distance?: number;
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
  _id?: string;
  createdBy: string;
  dateTime: Date;
  location: LocationType;
  briefDescription?: string;
  description: string;
  images?: string[];
  attendees?: Attendee[];
};

export type Swiped = {
  _id: string;
  swipedUserId: string;
};

export type OtherUsers = {
  _id: string;
  userId: string;
  name: string;
  verified: boolean;
  dog: Dog;
  ownerImage: string;
  distance: number;
};
