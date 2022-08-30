import React from 'react';
import '../Css/components/Modal.css';

function MessageCardModal({
  setOpenModal,
  handleModalConfirm,
  openModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalConfirm: React.MouseEventHandler<HTMLButtonElement>;
  openModal: boolean;
}) {
  if (!openModal) return null;
  return (
    <div className='modal'>
      <div className='modal__container modal__container--narrow'>
        <div className='title-close-btn'>
          <button
            className='--round'
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className='modal__body'>
          <button
            name='unmatch'
            className='modalFooter__unmatch-button --pop'
            onClick={handleModalConfirm}
          >
            Unmatch
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageCardModal;
