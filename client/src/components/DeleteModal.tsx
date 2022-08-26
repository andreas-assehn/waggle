import React from 'react';
import '../Css/components/Modal.css';

function DeleteModal({
  setOpenModal,
  message,
  handleModalConfirm,
  openModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  handleModalConfirm: React.MouseEventHandler<HTMLButtonElement>;
  openModal: boolean;
}) {
  if (!openModal) return null;
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='modalBody'>
          <p className='modalBody__msg'>{message}</p>
        </div>
        <div className='modalFooter'>
          <button
            name='yes'
            className='modalFooter__yesBtn --pop'
            onClick={handleModalConfirm}
            id='modalConfirmBtn'
          >
            Yes
          </button>
          <button
            name='no'
            className='modalFooter__noBtn'
            onClick={() => {
              setOpenModal(false);
            }}
            id='modalCancelBtn'
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
