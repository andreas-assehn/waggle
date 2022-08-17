import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

function LoginRegister() {
  const navigate = useNavigate();
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  if (userAuth) navigate('/matchingView');

  return (
    <>
      <div>Waggle LOGO</div>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </>
  );
}

export default LoginRegister;
