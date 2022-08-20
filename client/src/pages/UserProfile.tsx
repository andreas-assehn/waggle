import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ProfileDetails from '../components/ProfileDetails';

export default function UserProfile() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);

  return (
    <>
      <ProfileDetails user={userAuth} details={true} />
    </>
  );
}
