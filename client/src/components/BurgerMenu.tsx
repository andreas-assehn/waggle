import React from 'react';
import burgerMenuIcon from '../assets/burgerMenu.svg';

function BurgerMenu() {
  return (
    <>
      <button>
        <img src={burgerMenuIcon} />
      </button>
    </>
  );
}

export default BurgerMenu;
