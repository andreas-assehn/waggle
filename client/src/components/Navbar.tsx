import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import matches from '../assets/navbar-matches.svg';
import routes from '../assets/navbar-routes.svg';
import dashboard from '../assets/navbar-dashboard.svg';
import events from '../assets/navbar-events.svg';
import chat from '../assets/navbar-chat.svg';
import '../Css/Navbar.css';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

function Navbar() {
  const [notProtected, setNotProtected] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.userAuth);
  const url = useLocation().pathname;

  useEffect(() => {
    if (url !== '/' && url !== '/login' && url !== '/register') {
      setNotProtected(true);
    }
  });

  return (
    <>
      {isLoggedIn && notProtected ? (
        <div className="navbar">
          <div className="btn-container">
            <Link
              className={
                url === '/matchingView' ? 'nav-btn current' : 'nav-btn'
              }
              to={'/matchingView'}
            >
              <img src={matches} />
            </Link>
            <Link className="nav-btn" to={'/matchingView'}>
              <img src={routes} />
            </Link>
            <Link
              className={url === '/dashboard' ? 'nav-btn current' : 'nav-btn'}
              to={'/dashboard'}
            >
              <img src={dashboard} />
            </Link>
            <Link
              className={
                url === '/eventsDashboard' ? 'nav-btn current' : 'nav-btn'
              }
              to={'/eventsDashboard'}
            >
              <img src={events} />
            </Link>
            <Link
              className={
                url === '/chatDashboard' ? 'nav-btn current' : 'nav-btn'
              }
              to={'/chatDashboard'}
            >
              <img src={chat} />
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navbar;
