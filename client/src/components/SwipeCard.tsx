import React, { useState } from 'react';
import { User, Swiped } from '../../../globalUtils/Types';
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion';
import { useDispatch } from 'react-redux';
import apiUserService from '../utils/services/apiUserService';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import DogCard from './DogCard';
import apiChatService from '../utils/services/apiChatService';

function SwipeCard({ user }: { user: User }) {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);

  const [modalActive, setModalActive] = useState(false);

  const updateUser = async (swipedData: Swiped, swipe: string) => {
    const res = await apiUserService
      .updateUserSwipes(swipedData, swipe)
      .catch((error) => console.log(error));
    if (res.roomId) {
      await apiChatService
        .createChat({ roomId: res.roomId, message: [] })
        .catch((error) => console.log(error));
    }
  };

  const onSwipe = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: any,
    swipedUserId: string
  ) => {
    if (info.point.x > -400 && info.point.x < 400) {
      return;
    } else if (info.point.x < -400) {
      animControls.start({ x: '-200vw' });
      const swipedData: Swiped = {
        _id: userAuth!._id!,
        swipedUserId: swipedUserId,
      };
      updateUser(swipedData, 'No');
    } else if (info.point.x > 400) {
      animControls.start({ x: '-200vw' });
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

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(180deg, ##ff2c90 0%, #ff0000  100%)',
    'linear-gradient(180deg, #ffffff 0%, #bfbfbf 100%)',
    'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)',
  ]);

  return (
    <motion.div
      key={user.userId}
      style={{
        position: 'absolute',
        maxWidth: '100vw',
        width: '100vw',
        height: '92vh',
        borderRadius: '10px',
        transformOrigin: 'center right',
        listStyle: 'none',
        x,
        background,
      }}
      animate={animControls}
      drag={modalActive ? false : 'x'}
      dragConstraints={{
        right: 0,
        left: 0,
      }}
      onDragEnd={(event, info) => onSwipe(event, info, user.userId)}
    >
      <DogCard
        user={user}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </motion.div>
  );
}

export default SwipeCard;
