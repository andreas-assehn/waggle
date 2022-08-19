import React from 'react';
import { auth, methods } from '../utils/auth/firebase';
import { logout } from '../app/userAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import MatchPreferences from '../components/MatchPreferences';
import '../Css/components/SettingsView.css';
function SettingsView() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className="settingsView">
      <div className="settingsViewUserBackground">
        <div className="settingsViewUser">
          {userAuth && <p>Logged in as {userAuth.name}</p>}
        </div>
      </div>
      <MatchPreferences />
      <button
        onClick={() => {
          handleSignOut(), navigate('/');
        }}
      >
        Sign Out
      </button>
      <button
        onClick={() => {
          navigate('/editProfile');
        }}
      >
        Edit profile
      </button>
    </div>
  );
}

export default SettingsView;
