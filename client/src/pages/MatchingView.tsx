import React, { useEffect } from 'react';
import TinderCard from 'brian-react-tinder-card';
import { RootState } from '../app/store';
import { User } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';
import apiUserService from '../utils/services/apiUserService';
import { useDispatch } from 'react-redux';
import { setAllUsersState } from '../app/allUsersSlice';

function MatchingView() {
  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);
  const userAuth = useAppSelector(
    (state: RootState) => state.userAuth
  ).userAuth;
  const dispatch = useDispatch();

  const onSwipe = (direction: string, user: User, myUser: User) => {
    console.log('You swiped: ' + direction);
    const { swipeYes, ...rest } = myUser;
    const updatedUser = {
      ...rest,
      swipeYes: [...(swipeYes as string[]), user.userId],
    };
    if (direction === 'right') {
      (async () => {
        const response = await apiUserService.updateUser(updatedUser);
        dispatch(setAllUsersState([...allUsers, response]));
      })();
    }
  };

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen');
  };

  return allUsers && allUsers.length ? (
    <>
      {allUsers.map((user: User) => {
        return (
          <TinderCard
            key={user._id}
            onSwipe={(direction) => onSwipe(direction, user, userAuth)}
            onCardLeftScreen={() => onCardLeftScreen(user.name)}
            preventSwipe={['up', 'down']}
          >
            <p>{user.name}</p>
          </TinderCard>
        );
      })}
    </>
  ) : (
    <div>Loading</div>
  );
}

export default MatchingView;
