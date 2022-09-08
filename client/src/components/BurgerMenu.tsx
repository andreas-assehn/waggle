import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, methods } from '../utils/auth/firebase';
import { logout } from '../app/userAuthSlice';
import { useDispatch } from 'react-redux';
import burgerMenuIcon from '../assets/burgerMenu.svg';

function BurgerMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSignOut = () => {
    methods
      .signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        onClick={handleShowModal}
        className='--transparent'
        id='burger-menu-btn'
      >
        <img src={burgerMenuIcon} />
      </button>
      {showModal ? (
        <div className='modal'>
          <div className='modal__container modal__container--burger'>
            <div className='modal__title-close-btn'>
              <button
                className='--round'
                onClick={() => {
                  setShowModal(false);
                }}
              >
                &times;
              </button>
            </div>
            <div className='modal__body'>
              <button
                onClick={() => {
                  navigate('/settingsView');
                  setShowModal(false);
                }}
              >
                Settings
              </button>
              <button
                className='--pop'
                id='logout-btn'
                onClick={() => {
                  handleSignOut(), navigate('/');
                }}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default BurgerMenu;
