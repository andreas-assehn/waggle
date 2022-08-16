import mongoose from 'mongoose';
import { Event } from '../utils/Types';

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
      addressLine2: String,
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
    required: false,
  },
});

const EventsModel = mongoose.model('Events', EventsSchema);

export default EventsModel;
