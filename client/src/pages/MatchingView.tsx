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

  return unSwipedUsers ? (
    <div>
      {unSwipedUsers.map((user) => (
        <SwipeCard user={user} key={user.userId} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default MatchingView;
