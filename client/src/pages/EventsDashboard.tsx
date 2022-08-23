import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import { Event } from '../../../globalUtils/Types';
import EventCard from '../components/EventCard';
import Loading from '../components/Loading';
import '../Css/pages/EventsDashboard.css';
import { Attendee } from '../utils/types/event';
import { useNavigate } from 'react-router-dom';

function EventsDashboard() {
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { allEvents } = useAppSelector((state: RootState) => state.allEvents);
  const [isLoading, setIsLoading] = useState(true);
  const [attendingEvents, setAttendingEvents] = useState([] as Event[]);
  const [nonAttendingEvents, setNonAttendingEvents] = useState([] as Event[]);
  const navigate = useNavigate();

  useEffect(() => {
    if (allEvents.length && userAuth?.userId) {
      setAttendingEvents(
        allEvents.filter((eventObj: Event) => {
          return !!eventObj.attendees!.filter((attendee: Attendee) => {
            return attendee.userId === userAuth!.userId;
          }).length;
        })
      );
      setNonAttendingEvents(
        allEvents.filter((eventObj) => {
          return !eventObj.attendees!.filter(
            (attendee: Attendee) => attendee.userId === userAuth!.userId
          ).length;
        })
      );
      setIsLoading(false);
    } else if (userAuth?.userId) {
      setIsLoading(false);
    }
  }, [allEvents, userAuth]);

  return isLoading ? (
    <Loading />
  ) : allEvents.length ? (
    <div className='events-dashboard'>
      <div className='events-dashboard__attending'>
        <h2 className='events-dashboard__attending__title'>Attending</h2>
        {attendingEvents.map((eventData: Event) => (
          <EventCard key={eventData._id} event={eventData} />
        ))}
      </div>
      <div className='events-dashboard__not-attending'>
        {nonAttendingEvents.map((eventData: Event) => (
          <EventCard key={eventData._id} event={eventData} />
        ))}
      </div>
      <div className='events-dashboard__add-events'>
        <button
          className='--round --pop'
          onClick={() => navigate('/addEventForm')}
        >
          +
        </button>
      </div>
      <div className='events-dashboard__add-events-padding'></div>
    </div>
  ) : (
    <div className='error-message'>
      <h3 className='error-message__text'>No events in your area</h3>
      <p className='error-message__text'>
        Consider extending your distance preferences if you want to see events.
      </p>
    </div>
  );
}

export default EventsDashboard;
