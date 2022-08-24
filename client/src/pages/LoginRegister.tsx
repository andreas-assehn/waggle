import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import SplashGraphics from '../components/SplashGraphics';
import '../Css/pages/LoginRegister.css';
import { motion, AnimatePresence } from 'framer-motion';

function LoginRegister() {
  const navigate = useNavigate();
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  if (userAuth) navigate('/matchingView');

  return (
    <>
      <SplashGraphics />
      <AnimatePresence>
        <motion.div
          className='link-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link to='/login'>
            <button className='link-container__button'>Login</button>
          </Link>
          <Link to='/register'>
            <button className='link-container__button '>Register</button>
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default LoginRegister;
