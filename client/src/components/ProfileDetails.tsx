import React, { useState } from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/ProfileDetails.css';
import PictureModal from './PictureModal';

function ProfileDetails({ user }: { user: User }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    console.log('handleOpenModal');

    setOpenModal(true);
  };

  return (
    <div className="card">
      <div>
        <img
          className="card__profileImage"
          src={user.dog!.images![0]}
          onClick={handleOpenModal}
        />
      </div>
      <h3>
        {user.dog?.name}, {user.dog?.age}, {user.dog?.gender}
      </h3>
      <p>{user.dog?.briefDescription}</p>
      <p>{user.dog?.description}</p>
      <PictureModal
        user={user}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </div>
  );
}

export default ProfileDetails;
