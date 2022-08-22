import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Css/components/HeaderBar.css';
import BackButton from './BackButton';
import BurgerMenu from './BurgerMenu';
import { pageTitle } from '../utils/helperFunctions/headerBar';
import { pagesWithBackButton } from '../utils/helperFunctions/headerBar';

function HeaderBar() {
  const url = useLocation().pathname;

  let showHeaderBar = true;
  if (pageTitle(url) === false) showHeaderBar = false;

  let showBackButton = true;
  if (pagesWithBackButton(url) === false) showBackButton = false;

  return showHeaderBar ? (
    <>
      <div className='header-padding' />
      <div className='headerBar'>
        <div className='headerBar-container'>
          {showBackButton ? <BackButton /> : <></>}
          <h1 className='headerBar__title'>{pageTitle(url)}</h1>
          <BurgerMenu />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default HeaderBar;
