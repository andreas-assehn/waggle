import React, { useState } from 'react';
import { auth, methods } from '../utils/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../app/userAuthSlice';
import { RootState } from '../app/store';
import { Link } from 'react-router-dom';

function Login() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

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
      .then((cred) => {
        console.log('Success!');
        dispatch(
          login({
            id: cred.user.uid,
            name: cred.user.displayName,
            email: cred.user.email,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGoogle = async () => {
    await methods
      .signInWithPopup(auth, methods.googleProvider)
      .then((cred) => {
        //send a fetch req with cred.user.uid, cred.user.email & cred.user.displayname to create our own version of user
        dispatch(
          login({
            userAuth: cred.user,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = async () => {
    await methods
      .signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Login</h2>

      {userAuth ? <div>user logged in</div> : <div>user logged out</div>}

      <button onClick={handleSignOut}>Sign Out</button>

      <form onSubmit={handleSubmit}>
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

        <button type='submit'>Login</button>
      </form>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
      <p>{error}</p>
      <p>
        Create an account
        <Link to='/register'>Register</Link>
      </p>
    </>
  );
}

export default Login;
