import React, { useState } from 'react';
import { User } from '../../../globalUtils/Types';
import PictureModal from './PictureModal';
import Scale from './Scale';
import '../Css/components/DogCard.css';
import thumbsUp from '../assets/thumbs-up.svg';
import thumbsDown from '../assets/thumbs-down.svg';
import defaultDogPic from '../assets/default-dog-pic.jpg';
import DetailsModal from './DetailsModal';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { useDispatch } from 'react-redux';

function DogCard({
  user,
  modalActive,
  setModalActive,
}: {
  user: User;
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [openModal, setOpenModal] = useState(false);
  const [openDescriptionModal, setOpenDescriptionModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    setModalActive(true);
  };

  const handleOpenDescriptionModal = () => {
    setOpenDescriptionModal(true);
    setModalActive(true);
  };

  return user ? (
    <div className='dogcard'>
      <div>
        <img
          className='dogcard__profile-image'
          src={
            user && user.dog && user.dog.images
              ? user.dog.images[0]
              : defaultDogPic
          }
          onClick={handleOpenModal}
        />
        <PictureModal
          user={user}
          setOpenModal={setOpenModal}
          openModal={openModal}
          setModalActive={setModalActive}
        />
      </div>
      <div>
        <div className='dogcard__details-container'>
          <div className='dogcard__headline'>
            <div className='dogcard__headline-text'>
              <h2 className='dogcard__headline-text__dog'>
                {user.dog?.name}
                {user.dog?.age && <>, {user.dog?.age}</>}
              </h2>
              {/* <p>{user.dog?.gender}</p> */}
            </div>
            <div className='dogcard__owner-details'>
              <div className='dogcard__owner-details__text'>
                <p>{user.name}</p>
                <p>
                  {user.distance! <= 250
                    ? 'under 250m'
                    : `${(user.distance! / 1000).toFixed(1)}km`}
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
            <button
              className='dogcard__key-facts__key-detail pop-color-button'
              onClick={handleOpenDescriptionModal}
            >
              <p className='pop-color'>More Details...</p>
            </button>
            <DetailsModal
              user={user}
              openDescriptionModal={openDescriptionModal}
              setOpenDescriptionModal={setOpenDescriptionModal}
              setModalActive={setModalActive}
            />
          </div>
          <p className='dogcard__brief-description'>
            {user.dog?.briefDescription}
          </p>
          <div className='dogcard__swipe-bar'>
            <img src={thumbsDown} />
            <p> {'<<<<< Swipe >>>>>'} </p>
            <img src={thumbsUp} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default DogCard;
