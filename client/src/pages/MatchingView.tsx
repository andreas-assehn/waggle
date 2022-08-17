import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { userSelector } from '../app/allUsersSlice';
import { User } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';

function MatchingView() {
  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);

  // if (!allUsers) return <div>Loading</div>;
  // const allUsers = useSelector(userSelector);

  // useEffect(() => {
  //   if (allUsers && allUsers.length) {
  //     console.log('allUsers', allUsers);
  //     console.log((allUsers[0] as User).name);
  //   }
  // }, [allUsers]);

  return allUsers && allUsers.length ? (
    <>
      <div>MatchingView</div>
      {allUsers.map((user: User, i) => {
        return (
          <div key={i}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </>
  ) : (
    <div>Loading</div>
  );
}

export default MatchingView;
