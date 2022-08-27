import React from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/Modal.css';
import '../Css/components/DogCard.css';
import Scale from './Scale';

function DetailsModal({
  user,
  openDescriptionModal,
  setOpenDescriptionModal,
  setModalActive,
}: {
  user: User | null;
  setOpenDescriptionModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
  openDescriptionModal: boolean;
}) {
  if (!openDescriptionModal) return null;
  return user ? (
    <div className='modalBackground modalBackground--inverted'>
      <div className='detailsModalContainer'>
        <div className='detailsModalContainer__topline'>
          <h2 className='dogcard__headline-text__dog'>
            {user.dog?.name}
            {user.dog?.age && <>, {user.dog?.age}</>}{' '}
          </h2>
          <div className='titleCloseBtn titleCloseBtn--details'>
            <button
              className='titleCloseBtn__btn --round'
              onClick={() => {
                setOpenDescriptionModal(false);
                setModalActive && setModalActive(false);
              }}
            >
              &times;
            </button>
          </div>
        </div>
        <div className='dogcard__headline'>
          <div className='dogcard__headline-text'>
            <p>{user.dog?.gender}</p>
          </div>
          <div className='dogcard__owner-details'>
            <div className='dogcard__owner-details__text'>
              <p>{user.name}</p>
              <p>
                {!user.distance || user.distance <= 250
                  ? 'under 250m'
                  : `${(user.distance / 1000).toFixed(1)}km`}
              </p>
            </div>
            <img className='dogcard__owner-image' src={user.ownerImage} />
          </div>
        </div>

        <div className='dogcard__key-facts'>
          {user.dog?.energyLevel && (
            <div className='dogcard__key-facts__key-detail'>
              <p className='dogcard__key-facts__key-detail__p'>Energy</p>
              <Scale scaleValue={user.dog?.energyLevel} />
            </div>
          )}
          {user.dog?.humanFriendliness && (
            <div className='dogcard__key-facts__key-detail'>
              <p>Human &hearts;</p>
              <Scale scaleValue={user.dog?.humanFriendliness} />
            </div>
          )}
          {user.dog?.dogFriendliness && (
            <div className='dogcard__key-facts__key-detail'>
              <p>Dog &hearts;</p>
              <Scale scaleValue={user.dog?.dogFriendliness} />
            </div>
          )}

          <div className='dogcard__key-facts__key-detail'>
            <p>Size</p> <p className='pop-color'>{user.dog?.size}</p>
          </div>
          <div className='dogcard__key-facts__key-detail'>
            <p>Gender</p> <p className='pop-color'>{user.dog?.gender}</p>
          </div>
        </div>
        <p className='dogcard__brief-description'>
          {user.dog?.briefDescription}
        </p>
        {user.dog?.breed && (
          <p>
            Breed: {user.dog?.breed} <br />
          </p>
        )}
        {user.dog?.likes?.length !== 0 && (
          <p>
            Likes : {user.dog?.likes?.join(', ')} <br />
          </p>
        )}
        {user.dog?.dislikes?.length !== 0 && (
          <p>
            Dislikes : {user.dog?.dislikes?.join(', ')} <br />
          </p>
        )}
        {user.dog?.description && (
          <p>
            {user.dog?.description} <br />
          </p>
        )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default DetailsModal;
