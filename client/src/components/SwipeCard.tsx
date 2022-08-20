import React, { useState } from 'react';
import { User, Swiped } from '../../../globalUtils/Types';
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
import ProfileDetails from './ProfileDetails';
import apiUserService from '../utils/services/apiUserService';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

function SwipeCard({ user }: { user: User }) {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const [openModal, setOpenModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const dispatch = useDispatch();
  const updateUser = async (swipedData: Swiped, swipe: string) => {
    apiUserService
      .updateUserSwipes(swipedData, swipe)
      .catch((error) => console.log(error));
  };

  const onSwipe = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: any,
    swipedUserId: string
  ) => {
    console.log(info.point.x);
    if (info.point.x > -400 && info.point.x < 400) {
      return;
    } else if (info.point.x < -400) {
      console.log('swiped left');
      animControls.start({ x: '-200vw' });
      const swipedData: Swiped = {
        _id: userAuth!._id!,
        swipedUserId: swipedUserId,
      };
      updateUser(swipedData, 'No');
    } else if (info.point.x > 400) {
      console.log('swiped right');
      animControls.start({ x: '200vw' });
      const swipedData: Swiped = {
        _id: userAuth!._id!,
        swipedUserId: swipedUserId,
      };
      updateUser(swipedData, 'Yes');
    } else {
      return;
    }
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
      onDragEnd={(event, info) => onSwipe(event, info, user.userId)}
    >
      <ProfileDetails user={user} />
    </motion.li>
  );
}

export default SwipeCard;
