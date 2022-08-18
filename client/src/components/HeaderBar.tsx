import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Css/components/HeaderBar.css';
import BackButton from './BackButton';
import BurgerMenu from './BurgerMenu';

function HeaderBar() {
  const url = useLocation().pathname;

  const pageTitle = (path: string) => {
    if (path === '/dashboard') return 'Waggle';
    if (path === '/matchingView') return 'Waggles';
    if (path === '/matchingViewDetail') return 'Waggles';
    if (path === '/chatDashboard') return 'Matches';
    if (path === '/chat') return 'Fix this!'; // Get user from somewhere!
    if (path === '/eventsDashboard') return 'Events';
    if (path === '/eventDetails') return 'Events';
    if (path === '/addEventForm') return 'Add Event';
    if (path === '/settingsView') return 'Settings';
    if (path === '/editProfile') return 'Edit Profile';
    else return false;
  };

  let showHeaderBar = true;
  if (pageTitle(url) === false) showHeaderBar = false;

  return (
    <>
      {showHeaderBar ? (
        <div className="headerBar">
          <div className="headerBar-container">
            <button className="headerBar-btn">
              <BackButton />
            </button>
            <h1>{pageTitle(url)}</h1>
            <button className="headerBar-btn">
              <BurgerMenu />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default HeaderBar;
