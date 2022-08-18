import React from 'react';
import '../Css/components/Modal.css';

function Modal({
  setOpenModal,
  message,
  handleModalConfirm,
  openModal,
  enableCross = true,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  handleModalConfirm: any;
  openModal: boolean;
  enableCross: boolean;
}) {
  if (!openModal) return null;
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
        {enableCross && (
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
        )}
        <div className="modalBody">
          <p>{message}</p>
        </div>
        <div className="modalFooter">
          <button onClick={handleModalConfirm} id="modalConfirmBtn">
            Continue
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="modalCancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
