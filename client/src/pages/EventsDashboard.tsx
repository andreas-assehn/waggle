import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import { Event } from '../../../globalUtils/Types';
import EventCard from '../components/EventCard';
import Loading from '../components/Loading';
import '../Css/pages/EventsDashboard.css';
import { Attendee } from '../utils/types/event';

function EventsDashboard() {
  // const [openModal, setOpenModal] = useState(false);
  const { userAuth } = useSelector((state: RootState) => state.userAuth);
  const { allEvents } = useAppSelector((state: RootState) => state.allEvents);
  const [attendingEvents, setAttendingEvents] = useState([] as Event[]);
  const [nonAttendingEvents, setNonAttendingEvents] = useState([] as Event[]);

  useEffect(() => {
    if (allEvents![0].attendees!.length && userAuth!._id) {
      setAttendingEvents(
        allEvents.filter((eventObj: Event) => {
          return eventObj.attendees!.filter(
            (attendee: Attendee) => attendee.userId === userAuth!._id
          );
        })
      );
      setNonAttendingEvents(
        allEvents.filter((eventObj) => {
          return eventObj.attendees!.filter(
            (attendee: Attendee) => attendee.userId !== userAuth!._id
          );
        })
      );
    }
  }, [allEvents, userAuth]);
  //TODO to test

  // const handleOpenModal = () => {
  //   setOpenModal(true);
  // };

  // const handleModalConfirm = () => {
  //   // whatever your function wants to do on confirm
  // };

  return allEvents && allEvents.length ? (
    <div className='events-dashboard'>
      <div className='events-dashboard'>
        {allEvents.map((eventData: Event) => (
          <EventCard key={eventData._id} event={eventData} />
        ))}
      </div>
      <div className='events-dashboard__add-events'>
        <button className='--round --pop'>+</button>
      </div>
      <div className='events-dashboard__add-events-padding'></div>
    </div>
  ) : (
    <Loading />
  );
}

export default EventsDashboard;
