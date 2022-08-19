import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import BurgerMenu from '../components/BurgerMenu';
import DeleteModal from '../components/DeleteModal';
import Modal from '../components/Modal';

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  const message = 'Are you sure you want to delete these messages?';

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalConfirm = () => {
    // whatever your function wants to do on confirm
  };

  return (
    <div>
      <div>Dashboard</div>
      <div>
        <button onClick={handleOpenModal}>Open DeleteModal</button>
        <DeleteModal
          message={message}
          setOpenModal={setOpenModal}
          handleModalConfirm={handleModalConfirm}
          openModal={openModal}
        />
      </div>
    </div>
  );
}

export default Dashboard;
