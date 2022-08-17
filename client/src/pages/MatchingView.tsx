import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { userSelector } from '../app/allUsersSlice';

function MatchingView() {
  // const { allUsers } = useSelector((state: RootState) => state.allUsers);

  const allUsers = useSelector(userSelector);
  console.log(allUsers);
  return (
    <>
      <div>MatchingView</div>
    </>
  );
}

export default MatchingView;
