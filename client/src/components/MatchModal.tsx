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
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button
            className='titleCloseBtn__btn --round'
            onClick={() => {
              setMatchModal(false);
              setModalActive(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className='modalTitle'>
          <p>{title}</p>
        </div>
        <div className='modalBody'>
          <img
            className='modalBody__img'
            src={user!.dog!.images![0]}
            alt='dog profile'
          ></img>
          <p className='modalBody__msg'>
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
