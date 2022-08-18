import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import SplashGraphics from '../components/SplashGraphics';
import '../Css/pages/LoginRegister.css';

function LoginRegister() {
  const navigate = useNavigate();
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  if (userAuth) navigate('/matchingView');

  return (
    <>
      <SplashGraphics />
      <div className='link-container'>
        <Link to='/login'>
          <button className='link-container__button'>Login</button>
        </Link>
        <Link to='/register'>
          <button className='link-container__button'>Register</button>
        </Link>
      </div>
    </>
  );
}

export default LoginRegister;
