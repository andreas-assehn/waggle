import React, { useState } from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/ProfileDetails.css';
import PictureModal from './PictureModal';

function ProfileDetails({ user }: { user: User }) {
  const [openModal, setOpenModal] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const handleOpenModal = () => {
    console.log('handleOpenModal');

    setOpenModal(true);
  };

  const handleToggleDetails = () => {
    console.log('handleToggleDetails');
    setShowDetails(!showDetails);
  };

  console.log(user.name, user.dog?.likes);
  return (
    <div className='card'>
      <div>
        <img
          className='card__profile-image'
          src={user.dog!.images![0]}
          onClick={handleOpenModal}
        />
      </div>
      <PictureModal
        user={user}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      <div className='card__details-container'>
        <h3>
          {user.dog?.name} {user.dog?.age && <>- {user.dog?.age} </>}-{' '}
          {user.dog?.gender}
        </h3>
        <div className='card__owner-container'>
          <img className='card__owner-image' src={user.ownerImage} />
          <p>{user.name}</p>
        </div>
        <p>{user.dog?.briefDescription}</p>
        {showDetails && (
          <div className='card__key-facts'>
            <p>
              Size: {user.dog?.size} <br />
              Gender: {user.dog?.gender} <br />
              Energy: {user.dog?.energyLevel} <br />
              {user.dog?.humanFriendliness && (
                <>
                  Human friendliness: {user.dog?.humanFriendliness} <br />
                </>
              )}
              {user.dog?.dogFriendliness && (
                <>
                  Dog friendliness: {user.dog?.dogFriendliness} <br />
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
        <button onClick={handleToggleDetails} className='card__details-button'>
          {showDetails ? 'see less' : 'see more'}
        </button>
      </div>
      <div className='navbar-padding'></div>
    </div>
  );
}

export default ProfileDetails;
