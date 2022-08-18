import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../Css/components/Modal.css';
import { Carousel } from 'react-responsive-carousel';
import { User } from '../../../globalUtils/Types';

function PictureModal({ userAuth }: { userAuth: User | null }) {
  const images = userAuth?.dog?.images;

  return (
    <div className="pictureModal">
      <Carousel className="carousel">
        {images &&
          images.map((image, index) => (
            <div key={index}>
              <img src={image} />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default PictureModal;
