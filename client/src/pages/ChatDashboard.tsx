import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import MatchModal from '../components/MatchModal';
import Modal from '../components/Modal';
import PictureModal from '../components/PictureModal';

function ChatDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { allUsers } = useSelector((state: RootState) => state.allUsers);

  // const message =
  //   'Are you sure you want to delete all messages with Guapa? This action is irreversible.';
  const message = '';

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalConfirm = () => {
    // whatever your function wants to do on confirm
  };

  return (
    <>
      <div>ChatDashboard</div>
      <button onClick={handleOpenModal}>Open MatchModal</button>
      <MatchModal
        user={userAuth}
        setOpenModal={setOpenModal}
        handleModalConfirm={handleModalConfirm}
        openModal={openModal}
      />
    </>
  );
}

export default ChatDashboard;
