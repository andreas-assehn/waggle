import React, { useState } from 'react';
import { auth, methods } from '../utils/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../app/userAuthSlice';
import { RootState } from '../app/store';
import { Link, useNavigate } from 'react-router-dom';
import apiUserService from '../utils/services/apiUserService';
import { User } from '../../../globalUtils/Types';
import '../Css/pages/register.css';

function Register() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);

  const initialFormState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  // Checkbox logic
  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    setChecked(!checked);
  };

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (userAuth) navigate('/matchingView');

  const { name, email, password, confirmPassword } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) {
      return setError('Password must be 6 characters long');
    }

    if (checked === false) {
      return setError('Accept cookies to register');
    }

    await methods
      .createUserWithEmailAndPassword(auth, email, password)
      .then(async (cred) => {
        methods.updateProfile(cred.user, {
          displayName: name,
        });
        dispatch(
          login({
            userId: cred.user.uid,
            name: name,
            email: email,
          })
        );
        const user: User = {
          userId: cred.user.uid,
          name: name,
          email: email,
        };
        const res = await apiUserService.register(user);
        if (res.error) {
          setError('User Create Error!');
        }
        // access token is not yet sent to slice
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
        const user: User = {
          userId: cred.user.uid,
          name: cred.user.displayName!,
          email: cred.user.email!,
        };
        const res = await apiUserService.register(user);
        // access token is not yet sent to slice
        dispatch(login(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSignOut = async () => {
  //   await methods
  //     .signOut(auth)
  //     .then(() => {
  //       dispatch(logout());
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="register">
      <h2 className="register__title">Register</h2>

      {/* {userAuth ? <div>user logged in</div> : <div>user logged out</div>}

      <button onClick={handleSignOut}>Sign Out</button> */}

      <form onSubmit={handleSubmit} className="register__form">
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleOnChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleOnChange}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            required
          />
        </fieldset>

        <div className="cookieCheck">
          <div className="textBox">
            <p>
              This app uses cookies to provide a better user experience. By
              choosing to accept, you consent to ALL cookies necessary to
              provide an optimal user experience.
            </p>
          </div>
          <div className="checkBox">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckbox}
              id="box"
            />

            <div className="accept">
              <span>Accept</span>
            </div>
          </div>
        </div>

        <button type="submit" className="--fixed-width">
          Register
        </button>
      </form>
      <button onClick={handleSignInWithGoogle} className="--fixed-width">
        Sign In with Google
      </button>
      <p>{error}</p>
      <p>
        Already registered?
        <Link to="/login" className="register__link">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
