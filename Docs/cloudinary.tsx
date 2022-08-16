import React from 'react';
import { buildUrl } from 'cloudinary-build-url'; // DOCS: https://cloudinary-build-url.netlify.app/

function AnyComponent() {
  const idFromDB = 'staff';
  const cld = buildUrl(idFromDB, {
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_URL,
    },
    // Here we can transform the image (Making it smaller/ be round etc.)
    transformations: {
      resize: {
        type: 'scale',
        width: 500,
      },
    },
  });

  return (
    <>
      <img src={cld} />
    </>
  );
}
