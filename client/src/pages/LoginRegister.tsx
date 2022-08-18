import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import Logo from '../assets/waggle-logo.svg';

function LoginRegister() {
  const navigate = useNavigate();
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  if (userAuth) navigate('/matchingView');

  return (
    <>
      <div>
        <img src={Logo} alt='logo' />
      </div>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <Link to='/register'>
        <button>Register</button>
      </Link>
    </>
  );
}

export default LoginRegister;
