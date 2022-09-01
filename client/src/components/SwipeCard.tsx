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
import MatchModal from './MatchModal';
import { updateSwipes } from '../app/userAuthSlice';

function SwipeCard({ user }: { user: User }) {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const [matchModal, setMatchModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [viewCard, setViewCard] = useState(true);

  const dispatch = useDispatch();
  const animControls = useAnimation();

  const updateUser = async (swipedData: Swiped, swipe: string) => {
    const res = await apiUserService
      .updateUserSwipes(swipedData, swipe)
      .catch((error) => console.log(error));
    dispatch(
      updateSwipes({
        swipeYes: res.currentUser.swipeYes,
        swipeNo: res.currentUser.swipeNo,
        matches: res.currentUser.matches,
      })
    );
    res.roomId &&
      setMatchModal(() => {
        return true;
      });
    res.roomId &&
      setModalActive(() => {
        return true;
      });
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
      const swipedData: Swiped = {
        _id: userAuth!._id!,
        swipedUserId: swipedUserId,
      };
      updateUser(swipedData, 'No');
      setViewCard(false);
    } else if (info.point.x > 400) {
      const swipedData: Swiped = {
        _id: userAuth!._id!,
        swipedUserId: swipedUserId,
      };
      updateUser(swipedData, 'Yes');
      setViewCard(false);
    } else {
      return;
    }
  };

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(180deg, ##ff2c90 0%, #ff0000  100%)',
    'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
    'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)',
  ]);

  return (
    <div>
      {matchModal && (
        <MatchModal
          user={user}
          setMatchModal={setMatchModal}
          matchModal={matchModal}
          setModalActive={setModalActive}
        />
      )}
      <motion.div
        key={user.userId}
        style={{
          position: 'fixed',
          maxWidth: '100%',
          width: '100%',
          height: '92%',
          borderRadius: '10px',
          transformOrigin: 'center right',
          listStyle: 'none',
          x,
          background,
          display: `${viewCard ? 'block' : 'none'}`,
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
    </div>
  );
}

export default SwipeCard;
