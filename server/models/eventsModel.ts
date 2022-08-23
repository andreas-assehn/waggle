import mongoose from 'mongoose';
import { Event } from '../../globalUtils/Types';

const EventsSchema = new mongoose.Schema<Event>({
  createdBy: { type: String, required: true },
  dateTime: { type: Date, required: true },
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
    required: true,
  },
  briefDescription: String,
  description: { type: String, required: true },
  images: [String],
  attendees: {
    type: [
      {
        userId: { type: String, required: true },
        creator: { type: Boolean, required: true },
      },
    ],
    required: false,
  },
  distance: { type: Number, required: false },
});

const EventsModel = mongoose.model('Events', EventsSchema);

export default EventsModel;
