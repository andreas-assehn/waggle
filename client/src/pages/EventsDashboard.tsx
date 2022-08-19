import React from 'react';
import { Event } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

function EventsDashboard() {
  const { allEvents } = useAppSelector((state: RootState) => state.allEvents);
  return allEvents && allEvents.length ? (
    <>
      <div>EventsDashboard</div>
      <div>
        {allEvents.map((eventData: Event) => (
          <div key={eventData._id}>
            <p>{eventData.description}</p>
            <p>{`${eventData.dateTime}`}</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <div>Loading</div>
  );
}

export default EventsDashboard;
