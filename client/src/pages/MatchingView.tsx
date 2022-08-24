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
import Loading from '../components/Loading';

function MatchingView() {
  const { unSwipedUsers } = useAppSelector(
    (state: RootState) => state.unSwipedUsers
  );
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userAuth) {
      apiUserService
        .getUnSwipedUsers(userAuth.userId)
        .then((allUsers) => dispatch(setUnSwipedUsersState(allUsers)))
        .catch((err) => console.error(err));
      setIsLoading(false);
    } else if (!userAuth) {
      setTimeout(() => setIsLoading(false), 1500);
    }
  }, []);

  return isLoading ? (
    <Loading />
  ) : unSwipedUsers.length ? (
    <div>
      {unSwipedUsers.map((user) => (
        <SwipeCard user={user} key={user.userId} />
      ))}
    </div>
  ) : (
    <div className='no-matches'>
      <h2 className='no-matches__title'>Sorry! No more waggles</h2>
      <p>Please update your preferences to see new users.</p>
    </div>
  );
}

export default MatchingView;
