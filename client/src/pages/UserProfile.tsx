import React, { useState } from 'react';
import PictureModal from '../components/PictureModal';
import Scale from '../components/Scale';
import '../Css/pages/UserProfile.css';
import defaultDogPic from '../assets/default-dog-pic.jpg';
import DetailsModal from '../components/DetailsModal';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import Loading from '../components/Loading';

export default function UserProfile() {
  const [openModal, setOpenModal] = useState(false);
  const [openDescriptionModal, setOpenDescriptionModal] = useState(false);
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleOpenDescriptionModal = () => {
    setOpenDescriptionModal(true);
  };

  return userAuth ? (
    <div className='user-profile'>
      <div className='user-profile__container'>
        <div>
          <img
            className='user-profile__profile-image'
            src={
              userAuth?.dog?.images?.length
                ? userAuth.dog.images[0]
                : defaultDogPic
            }
            onClick={handleOpenModal}
          />
          <PictureModal
            user={userAuth}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        </div>
        <div>
          <div className='user-profile__details-container'>
            <div className='user-profile__headline'>
              <div className='user-profile__headline-text'>
                <h2 className='user-profile__headline-text__dog'>
                  {userAuth.dog?.name}
                  {userAuth.dog?.age && <>, {userAuth.dog?.age}</>}
                </h2>
              </div>
              <div className='user-profile__owner-details'>
                <div className='user-profile__owner-details__text'>
                  <p>{userAuth.name}</p>
                  <p>
                    {!userAuth.distance || userAuth.distance <= 250
                      ? 'under 250m'
                      : `${(userAuth.distance / 1000).toFixed(1)}km`}
                  </p>
                </div>
                <img
                  className='user-profile__owner-image'
                  src={userAuth.ownerImage}
                />
              </div>
            </div>

            <div className='user-profile__key-facts'>
              {userAuth.dog?.energyLevel && (
                <div className='user-profile__key-facts__key-detail'>
                  <p className='user-profile__key-facts__key-detail__p'>
                    Energy
                  </p>
                  <Scale scaleValue={userAuth.dog?.energyLevel} />
                </div>
              )}
              {userAuth.dog?.humanFriendliness && (
                <div className='user-profile__key-facts__key-detail'>
                  <p>Human &hearts;</p>
                  <Scale scaleValue={userAuth.dog?.humanFriendliness} />
                </div>
              )}
              {userAuth.dog?.dogFriendliness && (
                <div className='user-profile__key-facts__key-detail'>
                  <p>Dog &hearts;</p>
                  <Scale scaleValue={userAuth.dog?.dogFriendliness} />
                </div>
              )}

              <div className='user-profile__key-facts__key-detail'>
                <p>Size</p> <p className='pop-color'>{userAuth.dog?.size}</p>
              </div>
              <div className='user-profile__key-facts__key-detail'>
                <p>Gender</p>{' '}
                <p className='pop-color'>{userAuth.dog?.gender}</p>
              </div>
              <button
                className='user-profile__key-facts__key-detail pop-color-button'
                onClick={handleOpenDescriptionModal}
              >
                <p className='pop-color'>More Details...</p>
              </button>
              <DetailsModal
                user={userAuth}
                openDescriptionModal={openDescriptionModal}
                setOpenDescriptionModal={setOpenDescriptionModal}
              />
            </div>
            <p className='user-profile__brief-description'>
              {userAuth.dog?.briefDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
