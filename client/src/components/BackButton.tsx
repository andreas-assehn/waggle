import React from 'react';
import { useNavigate } from 'react-router-dom';
import backButton from '../assets/backButton.svg';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className='--transparent'>
      <img src={backButton} onClick={() => navigate(-1)} />
    </button>
  );
}

export default BackButton;
