import React from 'react';
import '../Css/components/Modal.css';

function DeleteModal({
  setOpenModal,
  message,
  handleModalConfirm,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  handleModalConfirm: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <div className="modalBody">
        <p className="modalBody__msg">{message}</p>
      </div>
      <div className="modalFooter">
        <button
          className="modalFooter__yesBtn"
          onClick={handleModalConfirm}
          id="modalConfirmBtn"
        >
          Yes
        </button>
        <button
          className="modalFooter__noBtn"
          onClick={() => {
            setOpenModal(false);
          }}
          id="modalCancelBtn"
        >
          No
        </button>
      </div>
    </>
  );
}

export default DeleteModal;
