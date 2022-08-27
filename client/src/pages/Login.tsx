import React, { useState } from 'react';
import { auth, methods } from '../utils/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/userAuthSlice';
import { RootState } from '../app/store';
import { Link, useNavigate } from 'react-router-dom';
import apiUserService from '../utils/services/apiUserService';
import '../Css/pages/Login.css';

function Login() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (userAuth) navigate('/matchingView');
  const { email, password } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await methods
      .signInWithEmailAndPassword(auth, email, password)
      .then(async (cred) => {
        const res = await apiUserService.getUser(cred.user.uid);
        dispatch(login(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGoogle = async () => {
    await methods
      .signInWithPopup(auth, methods.googleProvider)
      .then(async (cred) => {
        const res = await apiUserService.getUser(cred.user.uid);
        dispatch(login(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='login'>
      <h2 className='login__title'>Login</h2>

      <form onSubmit={handleSubmit} className='login__form'>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            autoComplete='off'
            value={email}
            onChange={handleOnChange}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor='password' id='password-label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleOnChange}
            required
          />
        </fieldset>

        <button type='submit' className='--fixed-width'>
          Login
        </button>
      </form>
      <button onClick={handleSignInWithGoogle} className='--fixed-width'>
        Sign In with Google
      </button>
      <p>{error}</p>
      <p className='register__redirect'>
        Create an account
        <Link to='/register' className='login__link'>
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
