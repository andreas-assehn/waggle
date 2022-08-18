import TinderCard from 'brian-react-tinder-card';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../../../globalUtils/Types';
import { setAllUsersState } from '../app/allUsersSlice';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import apiUserService from '../utils/services/apiUserService';

function MatchingView() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);
  const dispatch = useDispatch();

  const onSwipe = (direction: string, user: User, myUser: User) => {
    console.log('You swiped: ' + direction);

    if (direction === 'right') {
      const { swipeYes, ...rest } = myUser;
      const updatedUser = {
        ...rest,
        swipeYes: [...(swipeYes as string[]), user.userId],
      };
      console.log({ updatedUser });
      // (async () => {
      //   const response = await apiUserService.updateUserSwipes(updatedUser);
      //   dispatch(setAllUsersState([...allUsers, response]));
      // })();
    }
  };

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen');
  };

  return userAuth && allUsers && allUsers.length ? (
    <>
      <div className='swipe-container'>
        <div className='card-container'>
          {allUsers.map((user: User) => {
            return (
              <TinderCard
                className='swipe'
                key={user._id}
                onSwipe={(direction) => onSwipe(direction, user, userAuth)}
                onCardLeftScreen={() => onCardLeftScreen(user.name)}
                preventSwipe={['up', 'down']}
              >
                <p>{user.name}</p>
              </TinderCard>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <div>Loading</div>
  );
}

export default MatchingView;
