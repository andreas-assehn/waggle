import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import MatchModal from '../components/MatchModal';

function ChatDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const { userAuth } = useSelector((state: RootState) => state.userAuth);

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
