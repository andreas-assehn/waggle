import React from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion';
import ProfileDetails from '../components/ProfileDetails';
import { User } from '../../../globalUtils/Types';
import { AuthErrorCodes } from 'firebase/auth';

function MatchingViewDetail({ image, user }: { image: string; user: User }) {
  const motionValue = useMotionValue(0);

  // const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );

  const animControls = useAnimation();

  return (
    <div>
      <motion.div
        // center
        drag='x'
        dragConstraints={{ left: -1000, right: 1000 }}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundColor: '#55CCFF',
          boxShadow: '2px 2px 10px 0 rgba(0,0,0,0.25)',
          borderRadius: 10,
          width: '90vw',
          height: '90vh',
          // margin: 'auto',
          x: motionValue,
          rotate: rotateValue,
          opacity: opacityValue,
        }}
        animate={animControls}
        onDragEnd={(event, info) => {
          // If the card is dragged only upto 150 on x-axis
          // bring it back to initial position
          if (Math.abs(info.point.x) <= 150) {
            animControls.start({ x: 0 });
          } else {
            // If card is dragged beyond 150
            // make it disappear
            // Making use of ternary operator
            animControls.start({ x: info.point.x < 0 ? -200 : 200 });
          }
        }}
      >
        <ProfileDetails user={user} />
      </motion.div>
    </div>
  );
}

export default MatchingViewDetail;
