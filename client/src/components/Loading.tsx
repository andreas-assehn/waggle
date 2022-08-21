import React from 'react';
import Lottie from 'lottie-react';
import pawPrints from '../assets/paws.json';
import '../Css/components/Loading.css';

export default function Loading() {
  return (
    <div className='loading'>
      <p className='loading__text'>Loading...</p>
      <Lottie animationData={pawPrints} className='loading__animation' />
    </div>
  );
}
