import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import SplashGraphics from '../components/SplashGraphics';

function SplashScreen() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  const navigate = useNavigate();
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 2000);

  useEffect(() => {
    if (timePassed && userAuth) {
      navigate('/matchingView');
    } else if (timePassed) {
      navigate('/loginRegister');
    }
  }, [timePassed]);
  return <SplashGraphics />;
}

export default SplashScreen;
