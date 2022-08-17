import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  return (
    <>
      <div>Waggle LOGO</div>
    </>
  );
}

export default SplashScreen;
