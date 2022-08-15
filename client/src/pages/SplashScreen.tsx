import React from 'react';

import { buildUrl } from 'cloudinary-build-url';

function SplashScreen() {
  const idFromDB = 73829173683254;
  const cld = buildUrl(`/waggle/${idFromDB}`, {
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_URL,
    },
  });

  return (
    <>
      <div>SplashScreen</div>
      <img src={cld} />
    </>
  );
}

export default SplashScreen;
