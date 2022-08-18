import React from 'react';
import burgerMenuIcon from '../assets/burgerMenu.svg';

function BurgerMenu() {
  return (
    <>
      <button className='--transparent'>
        <img src={burgerMenuIcon} />
      </button>
    </>
  );
}

export default BurgerMenu;
