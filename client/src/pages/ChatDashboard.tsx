import React, { useState } from 'react';
import Modal from '../components/Modal';

function ChatDashboard() {
  const [openModal, setOpenModal] = useState(false);
  // const message =
  //   'Are you sure you want to delete all messages with Guapa? This action is irreversible.';
  const message = 'Please select a reason for reporting user Guapa:';
  // eslint-disable-next-line quotes
  const title = "It's a match!";
  const imageUrl = 'imageUrl';

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalConfirm = () => {
    // whatever your function wants to do on confirm
  };

  return (
    <>
      <div>ChatDashboard</div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal
        imageUrl={imageUrl}
        title={title}
        setOpenModal={setOpenModal}
        message={message}
        handleModalConfirm={handleModalConfirm}
        openModal={openModal}
        enableCross={true}
      />
    </>
  );
}

export default ChatDashboard;
