import React, { useState } from 'react';
import { Swiped, User } from '../../../globalUtils/Types';
import { motion } from 'framer-motion';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import SwipeCard from '../components/SwipeCard';
import '../Css/pages/MatchingView.css';

function MatchingView() {
  const { unSwipedUsers } = useAppSelector(
    (state: RootState) => state.unSwipedUsers
  );

  console.log(unSwipedUsers);

  return unSwipedUsers ? (
    <>
      <ul
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '100vw',
          overflow: 'hidden',
          height: '100vh',
          margin: 0,
          marginBlock: 0,
          padding: 0,
        }}
      >
        {unSwipedUsers.map((user) => (
          <SwipeCard user={user} key={user.userId} />
        ))}
      </ul>
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default MatchingView;
