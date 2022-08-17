import React from 'react';
// import SwipeBar from '../features/SwipeBar';
import TinderCard from 'brian-react-tinder-card';
import { RootState } from '../app/store';
import { User } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';

function MatchingView() {
  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);

  const onSwipe = (direction: string) => {
    console.log('You swiped: ' + direction);
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
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['right', 'left']}
          >
            Hello, World!
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
