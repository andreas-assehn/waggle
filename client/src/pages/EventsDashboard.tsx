import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import { Event } from '../../../globalUtils/Types';
import EventCard from '../components/EventCard';
import Loading from '../components/Loading';

function EventsDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { allEvents } = useAppSelector((state: RootState) => state.allEvents);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalConfirm = () => {
    // whatever your function wants to do on confirm
  };

  return allEvents && allEvents.length ? (
    <>
      <div>
        {allEvents.map((eventData: Event) => (
          <EventCard key={eventData._id} event={eventData} />
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default EventsDashboard;
