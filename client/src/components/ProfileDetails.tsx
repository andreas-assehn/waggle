import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../../../globalUtils/Types';
import '../Css/components/ProfileDetails.css';
import PictureModal from './PictureModal';
import Scale from './Scale';

function ProfileDetails({
  user,
  details = false,
}: {
  user: User | null;
  details?: boolean;
}) {
  const [openModal, setOpenModal] = useState(false);
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
        <div className="card">
          <div>
            <img
              className="card__profile-image"
              src={
                user && user.dog && user.dog.images ? user.dog.images[0] : ''
              }
              onClick={handleOpenModal}
            />
          </div>
          <PictureModal
            user={user}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
          <div className="card__details-container">
            <h3>
              {user.dog?.name} {user.dog?.age && <>- {user.dog?.age} </>}-{' '}
              {user.dog?.gender}
            </h3>
            {/* TODO show distance */}
            <div className="card__owner-container">
              <img className="card__owner-image" src={user.ownerImage} />
              <p>{user.name}</p>
            </div>
            <p>{user.dog?.briefDescription}</p>
            {showDetails && (
              <div className="card__key-facts">
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
                className="card__details-button"
              >
                Edit profile
              </button>
            ) : (
              <button
                onClick={handleToggleDetails}
                className="card__details-button"
              >
                {showDetails ? 'see less' : 'see more'}
              </button>
            )}
          </div>
          <div className="navbar-padding"></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProfileDetails;
