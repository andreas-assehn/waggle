import { Event } from '../types/event';

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

const apiEventService = { getAllEvents };
export default apiEventService;
