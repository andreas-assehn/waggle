import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import burgerMenuIcon from '../assets/burgerMenu.svg';

function BurgerMenu() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
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
