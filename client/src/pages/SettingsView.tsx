import React from 'react';
import { auth, methods } from '../utils/auth/firebase';
import { logout } from '../app/userAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import MatchPreferences from '../components/MatchPreferences';
import '../Css/pages/SettingsView.css';
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
        <div className="settingsViewUser"></div>
        {userAuth && (
          <h2 className="settingsViewUser__text">
            Logged in as {userAuth.name}
          </h2>
        )}
      </div>
      <MatchPreferences />
      <div className="settingsViewBtns">
        <div className="settingsView-profileBtns">
          <button
            className="settingsView__button"
            onClick={() => {
              navigate('/editProfile');
            }}
          >
            Edit profile
          </button>
          <button
            className="settingsView__button"
            onClick={() => {
              navigate('/profile');
            }}
          >
            View profile
          </button>
        </div>
        <button
          className="--pop"
          onClick={() => {
            handleSignOut(), navigate('/');
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SettingsView;
