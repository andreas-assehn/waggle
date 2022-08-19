import TinderCard from 'brian-react-tinder-card';
import React from 'react';
import { Swiped } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import ProfileDetails from '../components/ProfileDetails';
import apiUserService from '../utils/services/apiUserService';

import '../Css/components/MatchingView.css';

function MatchingView() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);

  if (!userAuth && !allUsers) return <div>Loading...</div>;
  const updateUser = async (swipedData: Swiped, swipe: string) => {
    apiUserService
      .updateUserSwipes(swipedData, swipe)
      .catch((error) => console.log(error));
  };

  const swiped = (direction: string, swipedUserId: string) => {
    if (direction === 'right') {
      const swipedData: Swiped = {
        _id: userAuth!._id!,
        swipedUserId: swipedUserId,
      };
      updateUser(swipedData, 'Yes');
    } else if (direction === 'left') {
      const swipedData: Swiped = {
        _id: userAuth!._id!,
        swipedUserId: swipedUserId,
      };
      updateUser(swipedData, 'No');
    }
  };

  return userAuth && allUsers && allUsers.length ? (
    <>
      <div className='dashboard'>
        <div className='swipe-container'>
          <div className='card-container'>
            {allUsers.map((user) => (
              <TinderCard
                className='swipe'
                key={user.userId}
                onSwipe={(dir) => swiped(dir, user.userId)}
              >
                <ProfileDetails user={user} />
              </TinderCard>
            ))}
            <div className='swipe-info'></div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading</div>
  );
}

export default MatchingView;
