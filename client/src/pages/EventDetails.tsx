import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { findCurrentEvent } from '../utils/helperFunctions/findCurrenEvent';
import { useNavigate, useParams } from 'react-router-dom';
import PictureModal from '../components/PictureModal';
import LogoIcon from '../assets/waggle-logo-icon.svg';
import '../Css/pages/EventDetails.css';
import '../Css/components/AddToCalendarButton.css';
import Loading from '../components/Loading';
import apiEventService from '../utils/services/apiEventsService';
import { Attendee, EventUpdates } from '../../../globalUtils/Types';
import { useDispatch } from 'react-redux';
import { setAllEventsState } from '../app/allEventsSlice';
import { atcb_action } from 'add-to-calendar-button';

function EventDetails() {
  const [organizer, setOrganizer] = useState(false);
  const [attending, setAttending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [attendees, setAttendees] = useState([] as Attendee[]);
  const { allEvents } = useAppSelector((state: RootState) => state.allEvents);
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { eventId } = useParams();
  const thisEvent = findCurrentEvent(allEvents!, eventId!);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    setAttending(() => {
      if (
        thisEvent?.attendees?.find(
          (attendee) => attendee.userId === userAuth?.userId
        )
      ) {
        setOrganizer(() => {
          const currentUserFromAttendees = thisEvent?.attendees?.find(
            (attendee) => attendee.userId === userAuth?.userId
          );
          return currentUserFromAttendees!.creator;
        });
        return true;
      } else {
        return false;
      }
    });
    if (thisEvent?.attendees?.length) {
      setAttendees([...thisEvent.attendees]);
    }
  }, [thisEvent, userAuth]);

  const toggleAttending = async () => {
    let eventUpdate: EventUpdates = {};
    let attendeesArray = [...attendees];
    if (attending) {
      const currentUserIndex = attendees.findIndex(
        (attendee) => attendee.userId === userAuth?.userId
      );
      attendeesArray.splice(currentUserIndex, 1);
      setAttending(false);
    } else {
      attendeesArray = [
        ...attendees,
        { creator: false, userId: userAuth!.userId! },
      ];
      setAttending(true);
    }
    eventUpdate = {
      _id: thisEvent!._id,
      attendees: attendeesArray,
    };
    setAttendees(attendeesArray);
    await apiEventService.updateEvent(eventUpdate);
    const updatedEventsData: Event[] = await apiEventService.getAllEvents(
      userAuth!.userId
    );
    dispatch(setAllEventsState(updatedEventsData));
  };

  const navigateToEditForm = () => {
    navigate(`/editEvent/${thisEvent?._id}`);
  };

  return thisEvent ? (
    <div className='event-details'>
      <img
        src={thisEvent?.images?.length ? thisEvent?.images![0] : LogoIcon}
        alt='Event image'
        onClick={handleOpenModal}
        className='event-details__images'
      />
      <PictureModal
        event={thisEvent}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

      <div className='event-details__details-container'>
        <div className='event-details__details-container__headlines'>
          <h2>{thisEvent?.briefDescription}</h2>
          <h4>{thisEvent?.location.formatted}</h4>
          <div className='event-details__distance'>
            <p>
              {thisEvent.distance! <= 250
                ? 'under 250m'
                : `${(thisEvent.distance! / 1000).toFixed(1)}km`}
            </p>
          </div>
          <h4
            className={
              attending
                ? 'event-details__details-container__headlines__attending'
                : 'event-details__details-container__headlines__not-attending'
            }
          >
            {attending ? 'Attending' : 'Not attending'}
          </h4>
        </div>
        <p>{thisEvent?.description}</p>
      </div>
      <div className='event-details__button-wrapper'>
        {organizer ? (
          <button
            className='event-details__attending-button'
            onClick={navigateToEditForm}
          >
            Edit event
          </button>
        ) : attending ? (
          <button
            className='event-details__attending-button'
            onClick={toggleAttending}
          >
            Toggle Attending
          </button>
        ) : (
          <button
            className='event-details__attending-button'
            onClick={toggleAttending}
          >
            Toggle Attending
          </button>
        )}

        <button
          className='event-details__calendar-button'
          onClick={() => {
            atcb_action({
              name: thisEvent.description,
              startDate: thisEvent.dateTime.toString().split('T')[0],
              endDate: thisEvent.dateTime.toString().split('T')[0],
              startTime: thisEvent!.dateTime
                .toString()
                .split('T')[1]
                .slice(0, -8),
              endTime: '23:59',
              location: thisEvent.location.formatted,
              options: ['Apple', 'Google', 'Outlook.com'],
              timeZone: 'Europe/Berlin',
              iCalFileName: 'Reminder-Event',
            });
            window.scrollBy(0, 50);
          }}
        >
          Add to calendar
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default EventDetails;
