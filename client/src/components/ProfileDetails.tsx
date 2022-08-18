import React from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/ProfileDetails.css';

function ProfileDetails({ user }: { user: User }) {
  return (
    <div className='card'>
      <div>
        <img className='card__profileImage' src={user.dog!.images![0]} />
      </div>
      <h3>
        {user.dog?.name}, {user.dog?.age}, {user.dog?.gender}
      </h3>
      <p>{user.dog?.briefDescription}</p>
      <p>{user.dog?.description}</p>
    </div>
  );
}

export default ProfileDetails;
