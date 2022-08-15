import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, methods } from '../utils/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogout } from '../app/isAuthSlice';
import { RootState } from '../app/store';

function Login() {
  // const [formFields: signInFields, setFormFields] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword:'',
  //   })
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.isAuthenticated
  );
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const { email, password } = formData;

  const handleOnChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignInWithGoogle = async () => {
    await methods
      .signInWithPopup(auth, methods.googleProvider)
      .then((cred) => {
        console.log({ cred });
        //send a fetch req with cred.user.uid, cred.user.email & cred.user.displayname to create our own version of user
        dispatch(
          setActiveUser({
            isAuthenticated: true,
            user: cred.user,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log('before', isAuthenticated);
    // dispatch(
    //   setActiveUser({
    //     isAuthenticated: true,
    //   })
    // );
    // console.log('after', isAuthenticated);
  };

  const handleSignOut = async () => {
    await methods
      .signOut(auth)
      .then(() => {
        dispatch(setUserLogout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //figure out what this type is?
  const handleSignInWithEmailAndPassword = async (e: any) => {
    e.preventDefault();
    // const { name, email, password, confirmPassword } = e.target;

    // if (password !== confirmPassword) {
    //   return setError('Passwords do not match');
    // }

    // await methods
    //   .signInWithEmailAndPassword(auth, email, password)
    //   .then(() => {
    //     dispatch(
    //       setActiveUser({
    //         isAuthenticated: true,
    //       })
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    console.log('before', isAuthenticated);
    dispatch(
      setActiveUser({
        isAuthenticated: true,
      })
    );
    console.log('after', isAuthenticated);
  };

  return (
    <>
      <div>Login</div>
      {`${isAuthenticated}`}
      {isAuthenticated ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <h3>Login</h3>
          <p>{error}</p>
          <form onSubmit={handleSignInWithEmailAndPassword}>
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

            <button onSubmit={handleSignInWithEmailAndPassword}>Login</button>
          </form>
          <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
        </div>
      )}
    </>
  );
}

export default Login;
