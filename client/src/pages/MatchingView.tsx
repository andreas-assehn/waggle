import TinderCard from 'brian-react-tinder-card';
import React from 'react';
import { User } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import ProfileDetails from '../components/ProfileDetails';
import apiUserService from '../utils/services/apiUserService';

import '../Css/components/MatchingView.css';

function MatchingView() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);

  const updateUser = async (updatedUser: User, swipe: string) => {
    apiUserService
      .updateUserSwipes(updatedUser, swipe)
      .catch((error) => console.log(error));
  };

  const swiped = (direction: string, swipedUserId: string) => {
    if (direction === 'right') {
      const updatedUser = {
        ...userAuth!,
        swipeYes: [swipedUserId],
      };
      const res = updateUser(updatedUser, 'Yes');
    } else if (direction === 'left') {
      const updatedUser = {
        ...userAuth!,
        swipeNo: [swipedUserId],
      };
      const res = updateUser(updatedUser, 'No');
    }
  };

  // const outOfFrame = (name: string) => {
  //   console.log(name + ' left the screen!');
  // };
  return userAuth && allUsers && allUsers.length ? (
    <>
      <div className="dashboard">
        <div className="swipe-container">
          <div className="card-container">
            {allUsers.map((user) => {
              return (
                user.userId !== userAuth.userId && (
                  <TinderCard
                    className="swipe"
                    key={user.userId}
                    onSwipe={(dir) => swiped(dir, user.userId)}
                    // onCardLeftScreen={() => outOfFrame(user.name)}
                  >
                    <ProfileDetails user={user} />
                  </TinderCard>
                )
              );
            })}
            <div className="swipe-info"></div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading</div>
  );
}

export default MatchingView;
