import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import PictureModal from '../components/PictureModal';
import { useAppSelector } from '../app/hooks';
import { Event } from '../../../globalUtils/Types';

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
      <button onClick={handleOpenModal}>Open PictureModal</button>
      <PictureModal
        user={userAuth}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      <div>EventsDashboard</div>
      <div>
        {allEvents.map((eventData: Event) => (
          <div key={eventData._id}>
            <p>{eventData.briefDescription}</p>
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
