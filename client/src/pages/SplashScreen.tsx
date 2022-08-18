import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/waggle-logo.svg';
import Lottie from 'lottie-react';
import pawPrints from '../assets/paws.json';

function SplashScreen() {
  const navigate = useNavigate();
  const [timePassed, setTimePassed] = useState(false);

  // setTimeout(function () {
  //   setTimePassed(true);
  // }, 2000);

  useEffect(() => {
    if (timePassed) {
      navigate('/loginRegister');
    }
  }, [timePassed]);
  return (
    <div className='splash'>
      <Lottie animationData={pawPrints} />

      <div>
        <img src={Logo} alt='logo' />
      </div>
    </div>
  );
}

export default SplashScreen;
