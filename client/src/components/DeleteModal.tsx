import React from 'react';
import '../Css/components/Modal.css';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

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
  // eslint-disable-next-line quotes
  const title = "It's a match!";

  // To use this modal, copy the following useState into the page you are calling the modal from:
  // const [openModal, setOpenModal] = useState(false)

  // Then create a function/click event to open the modal:
  // const handleOpenModal = ()=>{
  // setOpenModal(true)
  // }

  // the cancel and close button are already set to close the modal

  // create a function for handleModalConfirm:
  // const handleModalConfirm = ()=>{
  // // whatever your function wants to do on confirm
  // }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="titleCloseBtn__btn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalTitle">
          <p>{title}</p>
        </div>
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
      </div>
    </div>
  );
}

export default DeleteModal;
