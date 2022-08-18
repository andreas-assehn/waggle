import React from 'react';
import { auth, methods } from '../utils/auth/firebase';
import { logout } from '../app/userAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';

function SettingsView() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await methods
      .signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>SettingsView</div>
      {userAuth ? <div>user logged in</div> : <div>user logged out</div>}

      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}

export default SettingsView;
