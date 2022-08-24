import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Css/pages/UserProfile.css';
import defaultDogPic from '../assets/default-dog-pic.jpg';
import PictureModal from '../components/PictureModal';
import Scale from '../components/Scale';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

export default function UserProfile() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const [openModal, setOpenModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const navigate = useNavigate();
  const url = useLocation().pathname;

  const handleOpenModal = () => {
    console.log('handleOpenModal');
    setOpenModal(true);
  };

  const handleToggleDetails = () => {
    console.log('handleToggleDetails');
    setShowDetails(!showDetails);
  };

  const handleEditProfile = () => {
    navigate('/editProfile');
  };
  return (
    <>
      {userAuth ? (
        <div className='user-profile'>
          <div>
            <img
              className='user-profile__profile-image'
              src={
                userAuth?.dog?.images![0]
                  ? userAuth.dog.images[0]
                  : defaultDogPic
              }
              onClick={handleOpenModal}
            />
          </div>
          <PictureModal
            user={userAuth}
            setOpenModal={setOpenModal}
            openModal={openModal}
            setModalActive={setModalActive}
          />
          <div className='user-profile__details-container'>
            <div className='user-profile__headline'>
              <div className='user-profile__headline-text'>
                <h3 className='user-profile__headline-text__dog'>
                  {userAuth.dog?.name}{' '}
                  {userAuth.dog?.age && <>- {userAuth.dog?.age} </>}-{' '}
                  {userAuth.dog?.gender}
                </h3>
                <div className='user-profile__owner-details'>
                  <h4 className='user-profile__owner-details__text'>
                    {userAuth.name}
                  </h4>
                  <h4 className='user-profile__owner-details__text'>
                    {!userAuth.distance || userAuth.distance <= 999
                      ? '< 1km'
                      : `${(userAuth.distance! / 1000).toFixed(1)}km`}
                  </h4>
                </div>
              </div>

              <img
                className='user-profile__owner-image'
                src={userAuth.ownerImage}
              />
            </div>
            <p>{userAuth.dog?.briefDescription}</p>
            {showDetails && (
              <div className='user-profile__key-facts'>
                <p>
                  Size: {userAuth.dog?.size} <br />
                  Gender: {userAuth.dog?.gender} <br />
                  {userAuth.dog?.energyLevel && (
                    <>
                      Energy: <Scale scaleValue={userAuth.dog?.energyLevel} />
                      <br />
                    </>
                  )}
                  {userAuth.dog?.humanFriendliness && (
                    <>
                      Human friendliness:{' '}
                      <Scale scaleValue={userAuth.dog?.humanFriendliness} />{' '}
                      <br />
                    </>
                  )}
                  {userAuth.dog?.dogFriendliness && (
                    <>
                      Dog friendliness:{' '}
                      <Scale scaleValue={userAuth.dog?.dogFriendliness} />{' '}
                      <br />
                    </>
                  )}
                  {userAuth.dog?.breed && (
                    <>
                      Breed: {userAuth.dog?.breed} <br />
                    </>
                  )}
                  {userAuth.dog?.likes?.length !== 0 && (
                    <>
                      likes: {userAuth.dog?.likes?.join(', ')} <br />
                    </>
                  )}
                  {userAuth.dog?.dislikes?.length !== 0 && (
                    <>
                      dislikes: {userAuth.dog?.dislikes?.join(', ')} <br />
                    </>
                  )}
                </p>
              </div>
            )}
            {showDetails && <p>{userAuth.dog?.description}</p>}
            {url === '/profile' ? (
              <button
                onClick={handleEditProfile}
                className='user-profile__details-button'
              >
                Edit profile
              </button>
            ) : (
              <button
                onClick={handleToggleDetails}
                className='user-profile__details-button'
              >
                {showDetails ? 'see less' : 'see more'}
              </button>
            )}
          </div>
          <div className='navbar-padding'></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
