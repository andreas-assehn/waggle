import React from 'react';
import Logo from '../assets/waggle-logo.svg';
import Lottie from 'lottie-react';
import pawPrints from '../assets/paws.json';
import '../Css/components/SplashGraphics.css';

export default function SplashGraphics() {
  return (
    <div className='splash-graphics'>
      <Lottie
        animationData={pawPrints}
        className='splash-graphics__animation'
      />
      <div>
        <img src={Logo} alt='logo' className='splash-graphics__logo' />
      </div>
    </div>
  );
}
