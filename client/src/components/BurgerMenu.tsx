import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, methods } from '../utils/auth/firebase';
import { logout } from '../app/userAuthSlice';
import { useDispatch } from 'react-redux';
import burgerMenuIcon from '../assets/burgerMenu.svg';
import '../Css/components/BurgerMenu.css';

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
      <button onClick={handleShowModal} className='--transparent'>
        <img src={burgerMenuIcon} />
      </button>
      {showModal ? (
        <div className='modalBackground'>
          <div className='modalContainer modalContainer--burger'>
            <div className='titleCloseBtn'>
              <button
                className='--round'
                onClick={() => {
                  setShowModal(false);
                }}
              >
                &times;
              </button>
            </div>
            <div className='modalBody'>
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
