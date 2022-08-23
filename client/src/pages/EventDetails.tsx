import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { findCurrentEvent } from '../utils/helperFunctions/findCurrenEvent';
import { useNavigate, useParams } from 'react-router-dom';
import PictureModal from '../components/PictureModal';
import LogoIcon from '../assets/waggle-logo-icon.svg';

function EventDetails() {
  const [openModal, setOpenModal] = useState(false);
  const { allEvents } = useAppSelector((state: RootState) => state.allEvents);
  const { eventId } = useParams();
  const thisEvent = findCurrentEvent(allEvents, eventId!);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  console.log('this event', thisEvent);

  return (
    <div className='event-details'>
      <img
        src={thisEvent?.images?.length ? thisEvent?.images![0] : LogoIcon}
        alt='Event image'
        onClick={handleOpenModal}
      />
      <PictureModal
        event={thisEvent}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      {/* Working on getting the picture modal to render */}
      <div className='event-details__details-container'>
        <h2>{thisEvent?.briefDescription}</h2>
        <p></p>
      </div>
    </div>
  );
}

export default EventDetails;
