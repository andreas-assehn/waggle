import React, { useState } from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/ProfileDetails.css';
import PictureModal from './PictureModal';
import Scale from './Scale';

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion';
import { useDispatch } from 'react-redux';
import { shiftUnSwipedUsers } from '../app/unSwipedUsersSlice';
import ProfileDetails from './ProfileDetails';

function SwipeCard({ user }: { user: User }) {
  const [openModal, setOpenModal] = useState(false);
  const [showDetails, setShowDetails] = useState(true); //TODO revert back to false as default

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    console.log('handleOpenModal');
    setOpenModal(true);
  };

  const handleToggleDetails = () => {
    console.log('handleToggleDetails');
    setShowDetails(!showDetails);
  };

  const animControls = useAnimation();

  return (
    <motion.li
      key={user.userId}
      style={{
        position: 'absolute',
        maxWidth: '100vw',
        width: '100vw',
        height: '100vh',
        borderRadius: '8px',
        transformOrigin: 'center right',
        listStyle: 'none',
      }}
      animate={animControls}
      drag='x'
      // drag={openModal ? false : 'x'}
      dragConstraints={{
        right: 0,
        left: 0,
      }}
      onDragEnd={(event, info) => {
        console.log(info.point.x);
        if (info.point.x > -400 && info.point.x < 400) {
          return;
          // return animControls.start({ x: 0 });
        } else {
          console.log('Off Screen!');
          animControls.start({ x: info.point.x < 0 ? '-200vw' : '200vw' });
          // dispatch(shiftUnSwipedUsers());
        }
      }}
    >
      <ProfileDetails user={user} />
    </motion.li>
  );
}

export default SwipeCard;
