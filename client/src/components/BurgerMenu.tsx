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

  // Add aria! chrome vox to test blind user experience
  return (
    <>
      <button onClick={handleShowModal}>
        <img src={burgerMenuIcon} />
      </button>
      {showModal ? (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="modalBody">
              <button
                onClick={() => {
                  navigate('/settingsView'), setShowModal(false);
                }}
              >
                Settings
              </button>
              <button onClick={handleSignOut}>Log out</button>
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
