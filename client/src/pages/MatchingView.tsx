import React, { useState, useEffect } from 'react';
import { Swiped, User } from '../../../globalUtils/Types';
import { motion } from 'framer-motion';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import SwipeCard from '../components/SwipeCard';
import '../Css/pages/MatchingView.css';
import apiUserService from '../utils/services/apiUserService';
import { setUnSwipedUsersState } from '../app/unSwipedUsersSlice';
import { useDispatch } from 'react-redux';

function MatchingView() {
  const { unSwipedUsers } = useAppSelector(
    (state: RootState) => state.unSwipedUsers
  );
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userAuth) {
      apiUserService
        .getUnSwipedUsers(userAuth.userId)
        .then((allUsers) => dispatch(setUnSwipedUsersState(allUsers)))
        .catch((err) => console.error(err));
    }
  }, []);

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
