import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../globalUtils/Types';
import { clearModalRoomState } from '../app/matchModalRoomSlice';
import '../Css/components/Modal.css';

function MatchModal({
  user,
  setMatchModal,
  matchModal,
  setModalActive,
}: {
  user: User | null;
  setMatchModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  matchModal: boolean;
}) {
  // eslint-disable-next-line quotes
  const title = "It's a match!";

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleModalConfirm = () => {
    navigate('/chatDashboard');
    dispatch(clearModalRoomState());
    setMatchModal(false);
    setModalActive(false);
  };

  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='title-close-btn'>
          <button
            className='--round'
            onClick={() => {
              setMatchModal(false);
              setModalActive(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className='modal__title'>
          <p>{title}</p>
        </div>
        <div className='modal__body'>
          <img
            className='modal__body__img'
            src={user!.dog!.images![0]}
            alt='dog profile'
          ></img>
          <p className='modal__body__msg'>
            {user!.dog!.name!}, {user!.dog!.age!}
          </p>
        </div>
        <div className='modalFooter'>
          <button
            className='modalFooter__yesBtn --pop'
            onClick={handleModalConfirm}
            id='matchModalBtn'
          >
            Say hi!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
