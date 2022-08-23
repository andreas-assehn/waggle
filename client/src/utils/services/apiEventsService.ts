import { Event, EventUpdates } from '../../../../globalUtils/Types';

const BASE_URL = 'http://localhost:4000';

const getAllEvents = async (id: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return await fetch(`${BASE_URL}/events/${id}`, options)
    .then((response) => response.json())
    .then((eventsData) => eventsData)
    .catch((err) => console.error(err));
};

const addEvent: (event: Event) => Promise<Event | { error: unknown }> = async (
  event: Event
) => {
  const options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/events`, options);
    const eventAdded = (await response.json()) as Event;
    return eventAdded;
  } catch (error) {
    return { error };
  }
};
const updateEvent: (
  event: Event | EventUpdates
) => Promise<Event | { error: unknown }> = async (
  event: Event | EventUpdates
) => {
  const options: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(event),
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/events/${event._id}`, options);
    const eventUpdated = (await response.json()) as Event;
    return eventUpdated;
  } catch (error) {
    return { error };
  }
};

const deleteEvent = async (event: Event) => {
  const eventId = { _id: event._id };
  const options: RequestInit = {
    method: 'DELETE',
    body: JSON.stringify(eventId),
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/events`, options);
    const eventDeleted = await response.json();
    return eventDeleted;
  } catch (error) {
    return { error };
  }
};

const apiEventService = { getAllEvents, addEvent, updateEvent, deleteEvent };
export default apiEventService;
