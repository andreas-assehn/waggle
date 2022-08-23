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
  // eslint-disable-next-line quotes

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
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='modalBody'>
          <p className='modalBody__msg'>Text</p>
        </div>
        <div className='modalFooter'>
          <button
            className='modalFooter__yesBtn --pop'
            onClick={handleModalConfirm}
            id='modalConfirmBtn'
          >
            Unmatch user
          </button>
          <button
            className='modalFooter__noBtn'
            onClick={() => {
              setOpenModal(false);
            }}
            id='modalCancelBtn'
          >
            Delete chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageCardModal;
