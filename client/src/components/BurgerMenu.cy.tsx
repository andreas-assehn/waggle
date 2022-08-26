import React from 'react';
import BurgerMenu from './BurgerMenu';

describe('<BurgerMenu>', () => {
  it('mounts', () => {
    cy.mount(<BurgerMenu />);
  });
});
