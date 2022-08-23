import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../../../globalUtils/Types';
import '../Css/components/ProfileDetails.css';
import defaultDogPic from '../assets/default-dog-pic.jpg';
import PictureModal from './PictureModal';
import Scale from './Scale';

function ProfileDetails({
  user,
  details = true,
}: {
  user: User | null;
  details?: boolean;
}) {
  const [openModal, setOpenModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [showDetails, setShowDetails] = useState(details);
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
      {user ? (
        <div className='card'>
          <div>
            <img
              className='card__profile-image'
              src={user?.dog?.images![0] ? user.dog.images[0] : defaultDogPic}
              onClick={handleOpenModal}
            />
          </div>
          <PictureModal
            user={user}
            setOpenModal={setOpenModal}
            openModal={openModal}
            setModalActive={setModalActive}
          />
          <div className='card__details-container'>
            <div className='card__headline'>
              <div className='card__headline-text'>
                <h3 className='card__headline-text__dog'>
                  {user.dog?.name} {user.dog?.age && <>- {user.dog?.age} </>}-{' '}
                  {user.dog?.gender}
                </h3>
                <div className='card__owner-details'>
                  <h4 className='card__owner-details__text'>{user.name}</h4>
                  <h4 className='card__owner-details__text'>
                    {!user.distance || user.distance <= 999
                      ? '< 1km'
                      : `${(user.distance! / 1000).toFixed(1)}km`}
                  </h4>
                </div>
              </div>

              <img className='card__owner-image' src={user.ownerImage} />
            </div>
            <p>{user.dog?.briefDescription}</p>
            {showDetails && (
              <div className='card__key-facts'>
                <p>
                  Size: {user.dog?.size} <br />
                  Gender: {user.dog?.gender} <br />
                  {user.dog?.energyLevel && (
                    <>
                      Energy: <Scale scaleValue={user.dog?.energyLevel} />
                      <br />
                    </>
                  )}
                  {user.dog?.humanFriendliness && (
                    <>
                      Human friendliness:{' '}
                      <Scale scaleValue={user.dog?.humanFriendliness} /> <br />
                    </>
                  )}
                  {user.dog?.dogFriendliness && (
                    <>
                      Dog friendliness:{' '}
                      <Scale scaleValue={user.dog?.dogFriendliness} /> <br />
                    </>
                  )}
                  {user.dog?.breed && (
                    <>
                      Breed: {user.dog?.breed} <br />
                    </>
                  )}
                  {user.dog?.likes?.length !== 0 && (
                    <>
                      likes: {user.dog?.likes?.join(', ')} <br />
                    </>
                  )}
                  {user.dog?.dislikes?.length !== 0 && (
                    <>
                      dislikes: {user.dog?.dislikes?.join(', ')} <br />
                    </>
                  )}
                </p>
              </div>
            )}
            {showDetails && <p>{user.dog?.description}</p>}
            {url === '/profile' ? (
              <button
                onClick={handleEditProfile}
                className='card__details-button'
              >
                Edit profile
              </button>
            ) : (
              <button
                onClick={handleToggleDetails}
                className='card__details-button'
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

export default ProfileDetails;
