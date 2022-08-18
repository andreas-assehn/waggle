import React, { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Modal from '../components/Modal';

function Dashboard() {
  // const [openModal, setOpenModal] = useState(false);

  // const handleOpenModal = () => {
  //   setOpenModal(true);
  // };
  // const handleModalConfirm = () => {
  //   // whatever your function wants to do on confirm
  //   console.log('modal Success!');
  // };

  // const modalMessage = 'Modal Message';

  return (
    <div>
      <div>Dashboard</div>
      <div>
        {/* <button onClick={handleOpenModal}>Open Modal</button>
        <Modal
          openModal={openModal}
          handleModalConfirm={handleModalConfirm}
          message={modalMessage}
          setOpenModal={setOpenModal}
        /> */}
      </div>
    </div>
  );
}

export default Dashboard;
