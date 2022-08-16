import { LocationType } from './location';

export type Event = {
  eventId: string;
  dateTime: Date;
  location: LocationType;
  briefDescription?: string;
  description: string;
  images?: string[];
  attendees: Attendee[];
};
export type Attendee = {
  userId: string;
  creator: boolean;
};
