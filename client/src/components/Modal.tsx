import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import '../Css/components/Modal.css';
import DeleteModal from './DeleteModal';
import MatchModal from './MatchModal';
import PictureModal from './PictureModal';

function Modal({
  imageUrl = '',
  title = '',
  message = '',
  enableCross = true,
  setOpenModal,
  handleModalConfirm,
  openModal,
}: {
  imageUrl: string;
  title: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  handleModalConfirm: React.MouseEventHandler<HTMLButtonElement>;
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
  const { userAuth } = useSelector((state: RootState) => state.userAuth);

  return (
    <div className="modalBackground">
      <div className="pictureModalContainer">
        {enableCross && (
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
        )}

        <PictureModal userAuth={userAuth} />

        {/* <DeleteModal
          setOpenModal={setOpenModal}
          message={message}
          handleModalConfirm={handleModalConfirm}
        /> */}

        {/* <MatchModal
          imageUrl={imageUrl}
          title={title}
          setOpenModal={setOpenModal}
          message={message}
          handleModalConfirm={handleModalConfirm}
        /> */}
      </div>
    </div>
  );
}

export default Modal;
