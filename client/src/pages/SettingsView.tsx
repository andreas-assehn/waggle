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
    <div className='settings-view'>
      <div className='settings-view__user-background'>
        <div className='settings-view__user'></div>
        {userAuth && (
          <h2 className='settings-view__user__text'>Hello {userAuth.name}!</h2>
        )}
      </div>
      <MatchPreferences />
      <div className='settings-view__btns'>
        <div className='settings-view__profile-btns'>
          <button
            className='settings-view__button'
            onClick={() => {
              navigate('/editProfile');
            }}
          >
            Edit profile
          </button>
          <button
            className='settings-view__button'
            onClick={() => {
              navigate('/profile');
            }}
          >
            View profile
          </button>
        </div>
        <button
          className='--pop settings-view__btns__sign-out settings-view__button'
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
