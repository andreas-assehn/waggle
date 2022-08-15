import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, methods } from '../utils/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogout } from '../app/isAuthSlice';
import { RootState } from '../app/store';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const handleOnChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('crap');
  };
  return (
    <>
      <div>Register</div>
      <h2 className='white-text slim'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor='name'>Email</label>
          <input
            type='text'
            id='name'
            name='name'
            autoComplete='off'
            value={name}
            onChange={handleOnChange}
            required
          />
        </fieldset>
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
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleOnChange}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleOnChange}
            required
          />
        </fieldset>

        <button type='submit'>Sign Up</button>
      </form>
      <p className='login-option'>
        Already registered?
        <span>
          <Link className='login-link' to='/login'>
            Login
          </Link>
        </span>
      </p>
    </>
  );
}

export default Register;
