import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashGraphics from '../components/SplashGraphics';

function SplashScreen() {
  const navigate = useNavigate();
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 2000);

  useEffect(() => {
    if (timePassed) {
      navigate('/loginRegister');
    }
  }, [timePassed]);
  return <SplashGraphics />;
}

export default SplashScreen;
