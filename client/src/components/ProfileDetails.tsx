import React, { useState } from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/ProfileDetails.css';

function ProfileDetails({ user }: { user: User }) {
  const [showDetails, setShowDetails] = useState(true);
  const handleToggleDetails = () => {
    console.log('hi');
    setShowDetails(!showDetails);
  };
  return (
    <div className='card'>
      <div>
        <img className='card__profileImage' src={user.dog!.images![0]} />
      </div>
      <div className='card__details-container'>
        <h3>
          {user.dog?.name} - {user.dog?.age} - {user.dog?.gender}
        </h3>
        <p>{user.dog?.briefDescription}</p>
        {showDetails && (
          <div className='card__key-facts'>
            <p>
              Size: {user.dog?.size} <br />
              Gender: {user.dog?.gender} <br />
              Energy: {user.dog?.energyLevel} <br />
              {user.dog?.humanFriendliness &&
                `Human friendliness: ${user.dog?.humanFriendliness}`}
              {user.dog?.humanFriendliness && <br />}
              {user.dog?.dogFriendliness &&
                `Dog friendliness: ${user.dog?.dogFriendliness}
                `}
              Breed: {user.dog?.breed} <br />
              likes: {user.dog?.likes?.join(', ')} <br />
              dislikes: {user.dog?.dislikes?.join(', ')} <br />
            </p>
          </div>
        )}
        {showDetails && <p>{user.dog?.description}</p>}
        <button onClick={handleToggleDetails} className='card__details-button'>
          {showDetails ? 'see less' : 'see more'}
        </button>
      </div>
    </div>
  );
}

export default ProfileDetails;
