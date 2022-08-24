import React from 'react';
import { Event } from '../../../globalUtils/Types';
import moment from 'moment';
import '../Css/components/Eventcard.css';
import { useNavigate } from 'react-router-dom';

type Props = {
  event: Event;
};

export default function EventCard({ event }: Props) {
  const navigate = useNavigate();
  const eventDate = event.dateTime.toString();

  const goToDetails = () => {
    navigate(`/eventDetails/${event._id}`);
  };

  return (
    <div className='event-card'>
      <div className='event-card__text'>
        <h3 className='event-card__text__name'>{event.briefDescription}</h3>
        <p className='--small'>
          {moment(eventDate).format('ddd MMM Do, h:mm a')}
        </p>
        <p className='--small'>{event.location.formatted}</p>
      </div>
      <div className='event-card__right'>
        {event.images![0] && (
          <img
            src={event.images![0]}
            alt='event image'
            className='event-card__image'
          />
        )}
        <p>
          {event.distance! <= 250
            ? 'under 250m'
            : `${(event.distance! / 1000).toFixed(1)}km`}
        </p>
        <button className='event-card__more-info' onClick={goToDetails}>
          Details
        </button>
      </div>
    </div>
  );
}
