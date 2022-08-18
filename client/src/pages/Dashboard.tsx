import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Modal from '../components/Modal';

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleModalConfirm = () => {
    // whatever your function wants to do on confirm
    console.log('modal Success!');
  };

  const modalTitle = 'Modal Title';
  const modalMessage = 'Modal Message';

  return (
    <div>
      <div style={{ backgroundColor: 'grey' }}>
        <div style={{ fontFamily: 'Satisfy' }}>Dashboard</div>
        <div>
          <BurgerMenu />
        </div>
      </div>
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal
          openModal={openModal}
          handleModalConfirm={handleModalConfirm}
          title={modalTitle}
          message={modalMessage}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
}

export default Dashboard;
