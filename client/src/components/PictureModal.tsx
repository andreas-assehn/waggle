import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Css/components/Modal.css';
import { Carousel } from 'react-responsive-carousel';
import { User, Event } from '../../../globalUtils/Types';

function PictureModal({
  user,
  setOpenModal,
  openModal,
  setModalActive,
  event,
}: {
  user?: User | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  event?: Event;
}) {
  const images = user?.dog?.images || event?.images;
  if (!openModal) return null;

  return (
    <div className='modal'>
      <div>
        <div className='title-close-btn'>
          <button
            className='--round'
            onClick={() => {
              setOpenModal(false);
              if (setModalActive) {
                setModalActive(false);
              }
            }}
          >
            &times;
          </button>
        </div>
        <div className='modal__picture-carousel'>
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
