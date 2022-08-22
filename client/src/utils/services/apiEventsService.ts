import { Event } from '../../../../globalUtils/Types';

const BASE_URL = 'http://localhost:4000';

const getAllEvents = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return await fetch(`${BASE_URL}/events`, options)
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
    console.log(event);
    const response = await fetch(`${BASE_URL}/events`, options);
    const eventAdded = (await response.json()) as Event;
    return eventAdded;
  } catch (error) {
    return { error };
  }
};
const updateEvent: (
  event: Event
) => Promise<Event | { error: unknown }> = async (event: Event) => {
  const options: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(event),
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      `${BASE_URL}/events/${event._id}/${event.createdBy}`,
      options
    );
    const eventUpdated = (await response.json()) as Event;
    return eventUpdated;
  } catch (error) {
    return { error };
  }
};

const apiEventService = { getAllEvents, addEvent, updateEvent };
export default apiEventService;
