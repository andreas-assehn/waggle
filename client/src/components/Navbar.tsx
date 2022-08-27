import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import matches from '../assets/navbar-matches.svg';
import events from '../assets/navbar-events.svg';
import chat from '../assets/navbar-chat.svg';
import profile from '../assets/navbar-profile.svg';
import '../Css/components/Navbar.css';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

function Navbar() {
  const userAuth = useSelector((state: RootState) => state.userAuth);
  const url = useLocation().pathname;
  const notProtected =
    url !== '/' &&
    url !== '/login' &&
    url !== '/register' &&
    url !== '/loginRegister';

  return userAuth && notProtected ? (
    <>
      <div className='navbar-padding' />
      <div className='navbar'>
        <div className='btn-container'>
          <Link className='nav-btn' to={'/matchingView'}>
            <div
              className={
                url === '/matchingView'
                  ? 'navbar__icon-background --current'
                  : 'navbar__icon-background'
              }
            >
              <img src={matches} />
            </div>
            <div>
              <p>Matches</p>
            </div>
          </Link>
          <Link className='nav-btn' to={'/profile'}>
            <div
              className={
                url === '/profile'
                  ? 'navbar__icon-background --current'
                  : 'navbar__icon-background'
              }
            >
              <img src={profile} />
            </div>
            <div>
              <p>Profile</p>
            </div>
          </Link>
          <Link className='nav-btn' to={'/eventsDashboard'}>
            <div
              className={
                url === '/eventsDashboard'
                  ? 'navbar__icon-background --current'
                  : 'navbar__icon-background'
              }
            >
              <img src={events} />
            </div>
            <div>
              <p>Events</p>
            </div>
          </Link>
          <Link className='nav-btn' to={'/chatDashboard'}>
            <div
              className={
                url === '/chatDashboard'
                  ? 'navbar__icon-background --current'
                  : 'navbar__icon-background'
              }
            >
              <img src={chat} />
            </div>
            <div>
              <p>Chat</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Navbar;
