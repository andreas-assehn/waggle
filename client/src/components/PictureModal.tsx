import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../Css/components/Modal.css';
import { Carousel } from 'react-responsive-carousel';
import { User } from '../../../globalUtils/Types';

function PictureModal({
  user,
  setOpenModal,
  openModal,
  setModalActive,
}: {
  user: User | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}) {
  if (!openModal) return null;

  const images = user?.dog?.images;

  return (
    <div className='modalBackground'>
      <div className='pictureModalContainer'>
        <div className='titleCloseBtn'>
          <button
            className='titleCloseBtn__btn --round'
            onClick={() => {
              setOpenModal(false);
              setModalActive(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className='pictureModal'>
          <Carousel className='carousel'>
            {images &&
              images.map((image, index) => (
                <div key={index}>
                  <img src={image} />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PictureModal;
