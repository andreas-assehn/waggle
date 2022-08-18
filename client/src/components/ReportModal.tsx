import React from 'react';
import '../Css/components/Modal.css';

function ReportModal({
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
        <p>{message}</p>
      </div>
      <div className="modalCheckbox">
        <form className="modalCheckbox__form">
          <span>
            <input
              className="modalCheckbox__checkbox"
              name="content"
              type="checkbox"
            ></input>
            <label>Inappropriate content</label>
          </span>
          <span>
            <input
              className="modalCheckbox__checkbox"
              name="Fake"
              type="checkbox"
            ></input>
            <label>Fake user</label>
          </span>
          <span>
            <input
              className="modalCheckbox__checkbox"
              name="harassment"
              type="checkbox"
            ></input>
            <label>Harassment</label>
          </span>
        </form>
      </div>
      <div className="modalFooter">
        <button onClick={handleModalConfirm} id="modalConfirmBtn">
          Yes
        </button>
      </div>
    </>
  );
}

export default ReportModal;
