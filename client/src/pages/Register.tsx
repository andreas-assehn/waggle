import React, { useState } from 'react';
import { auth, methods } from '../utils/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../app/userAuthSlice';
import { RootState } from '../app/store';
import { Link } from 'react-router-dom';

function Register() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const { name, email, password, confirmPassword } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) {
      return setError('Password must be 6 characters long');
    }

    await methods
      .createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        methods.updateProfile(cred.user, {
          displayName: name,
        });

        console.log('updated user', cred.user);
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
    console.log('End of signUp');
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
      <h2>Register</h2>

      {userAuth ? <div>user logged in</div> : <div>user logged out</div>}

      <button onClick={handleSignOut}>Sign Out</button>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor='name'>Name</label>
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

        <button type='submit'>Register</button>
      </form>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
      <p>{error}</p>
      <p>
        Already registered?
        <Link to='/login'>Login</Link>
      </p>
    </>
  );
}

export default Register;
