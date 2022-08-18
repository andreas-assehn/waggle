import TinderCard from 'brian-react-tinder-card';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../../../globalUtils/Types';
import { setAllUsersState } from '../app/allUsersSlice';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import ProfileDetails from '../components/ProfileDetails';
import apiUserService from '../utils/services/apiUserService';

import '../Css/components/MatchingView.css';

function MatchingView() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);
  const dispatch = useDispatch();

  // const onSwipe = (direction: string, user: User, myUser: User) => {
  //   console.log('You swiped: ' + direction);

  //   if (direction === 'right') {
  //     const { swipeYes, ...rest } = myUser;
  //     const updatedUser = {
  //       ...rest,
  //       swipeYes: [...(swipeYes as string[]), user.userId],
  //     };
  //     console.log({ updatedUser });
  //     // (async () => {
  //     //   const response = await apiUserService.updateUserSwipes(updatedUser);
  //     //   dispatch(setAllUsersState([...allUsers, response]));
  //     // })();
  //   }
  // };

  // const onCardLeftScreen = (myIdentifier: string) => {
  //   console.log(myIdentifier + ' left the screen');
  // };

  const updateUser = async (updatedUser: User) => {
    const response = await apiUserService.updateUserSwipes(updatedUser);
    console.log({ response });
    // dispatch(setAllUsersState([...allUsers, response]));
  };

  const swiped = (direction: string, swipedUserId: string) => {
    if (direction === 'right') {
      const { swipeYes, ...rest } = userAuth!;
      const updatedUser = {
        ...rest,
        swipeYes: [...(swipeYes as string[]), swipedUserId],
      };
      console.log({ updatedUser });
    } else if (direction === 'left') {
      const { swipeNo, ...rest } = userAuth!;
      const updatedUser = {
        ...rest,
        swipeNo: [...(swipeNo as string[]), swipedUserId],
      };
      console.log({ updatedUser });
      // const res = updateUser(updatedUser);
      // console.log({ res });
    }
    // setLastDirection(direction)
  };

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
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
                onCardLeftScreen={() => outOfFrame(user.name)}
              >
                <ProfileDetails user={user} />
              </TinderCard>
            ))}
            <div className='swipe-info'>
              {/* {lastDirection ? <p>You swiped {lastDirection}</p> : <p />} */}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading</div>
  );
}

export default MatchingView;
