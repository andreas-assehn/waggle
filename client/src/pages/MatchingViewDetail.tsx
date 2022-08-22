import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import ProfileDetails from '../components/ProfileDetails';

export default function MatchingViewDetail() {
  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);
  const { userId } = useParams();
  const user = allUsers.find((user) => user.userId === userId);

  return (
    <>
      <ProfileDetails user={user ? user : null} details={false} />
    </>
  );
}
