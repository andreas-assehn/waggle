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

  // Add aria in the future! chrome vox to test blind user experience
  return (
    <>
      <button onClick={handleShowModal} className="--transparent">
        <img src={burgerMenuIcon} />
      </button>
      {showModal ? (
        <div className="BMmodalBackground">
          <div className="BMmodalContainer">
            <div className="BMtitleCloseBtn">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="BMmodalBody">
              <button
                onClick={() => {
                  navigate('/settingsView'), setShowModal(false);
                }}
              >
                Settings
              </button>
              <button
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
