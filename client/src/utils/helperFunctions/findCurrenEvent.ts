import { Event } from '../../../../globalUtils/Types';

export const findCurrentEvent = (allEvents: Event[], id: string) => {
  const currentEvent = allEvents.find((event: Event) => event._id === id);
  return currentEvent;
};
