import React from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/Modal.css';

function MatchModal({
  user,
  setOpenModal,
  handleModalConfirm,
  openModal,
}: {
  user: User | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
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
            className="titleCloseBtn__btn --round"
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
          <img
            className="modalBody__img"
            src={user!.dog!.images![0]}
            alt="dog profile"
          ></img>
          <p className="modalBody__msg">
            {user!.dog!.name!}, {user!.dog!.age!}
          </p>
        </div>
        <div className="modalFooter">
          <button
            className="modalFooter__yesBtn --pop"
            onClick={handleModalConfirm}
            id="matchModalBtn"
          >
            Say hi!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
