import React from 'react';
import '../Css/components/Modal.css';

function MatchModal({
  imageUrl,
  title,
  setOpenModal,
  message,
  handleModalConfirm,
}: {
  imageUrl: string;
  title: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  handleModalConfirm: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <div className="modalTitle">
        <p>{title}</p>
      </div>
      <div className="modalBody">
        <img src={imageUrl} alt="dog profile"></img>
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
          Say hi!
        </button>
      </div>
    </>
  );
}

export default MatchModal;
