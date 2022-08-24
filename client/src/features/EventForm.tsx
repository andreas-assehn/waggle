import React, { useState, useRef, useEffect } from 'react';
import { LocationType, Event } from '../../../globalUtils/Types';
import { geoapifyInput } from '../utils/helperFunctions/geoapifyInput';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import Loading from '../components/Loading';
import { showCloudinaryWidget } from '../utils/helperFunctions/cloudinaryWidget';
import { CloudinaryResult } from '../utils/types/general';
import apiEventService from '../utils/services/apiEventsService';
import { useNavigate, useParams } from 'react-router-dom';
import { findCurrentEvent } from '../utils/helperFunctions/findCurrenEvent';
import { useDispatch } from 'react-redux';
import { setAllEventsState } from '../app/allEventsSlice';

type Props = { formType: 'add' | 'edit' };

export default function EventForm({ formType }: Props) {
  const [event, setEvent] = useState({
    dateTime: '' as unknown as Date,
    location: {} as LocationType,
    description: '',
    createdBy: '',
    images: [],
  } as Event);
  const [errorMessage, setErrorMessage] = useState('');
  const geocoderContainer = useRef(null);
  const initialized = useRef(false);
  const { allEvents } = useAppSelector((state: RootState) => state.allEvents);
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const navigate = useNavigate();
  const { eventId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (allEvents && userAuth) {
      setEvent(() => {
        let newValue = {
          ...event,
        };

        if (formType === 'edit' && allEvents.length) {
          const currentEvent = findCurrentEvent(allEvents, eventId!);
          const savedValues = [
            currentEvent?.dateTime,
            currentEvent?.description,
            currentEvent?.briefDescription,
            currentEvent?._id,
            currentEvent?.createdBy,
          ];
          const keys = [
            'dateTime',
            'description',
            'briefDescription',
            '_id',
            'createdBy',
          ];
          savedValues.forEach((value, i) => {
            if (value) {
              newValue = { ...newValue, [keys[i]]: value };
            }
          });
          if (currentEvent?.location.formatted) {
            newValue = { ...newValue, location: currentEvent.location };
          }
          if (currentEvent?.images?.length) {
            newValue = { ...newValue, images: currentEvent?.images };
          }
          if (currentEvent?.attendees?.length) {
            newValue = { ...newValue, attendees: currentEvent?.attendees };
          }

          geoapifyInput(
            initialized,
            geocoderContainer,
            newValue.location,
            geocoderOnSelectLogic
          );
        } else if (formType === 'add') {
          newValue = {
            ...newValue,
            createdBy: userAuth.userId!,
            attendees: [{ userId: userAuth.userId!, creator: true }],
          };

          geoapifyInput(
            initialized,
            geocoderContainer,
            undefined,
            geocoderOnSelectLogic
          );
        }
        return newValue;
      });
    }
  }, [userAuth, allEvents]);

  const geocoderOnSelectLogic = (location: any) => {
    if (location.properties.city) {
      setEvent((prevEvent) => ({
        ...prevEvent,
        location: {
          city: location.properties.city,
          country: location.properties.country,
          county: location.properties.county,
          state: location.properties.state,
          postcode: location.properties.postcode,
          countryCode: location.properties.countryCode,
          lon: location.properties.lon,
          lat: location.properties.lat,
          stateCode: location.properties.statecode,
          formatted: location.properties.formatted,
          addressLine1: location.properties.addressLine1,
          addressLine2: location.properties.addressLine2,
        },
      }));
    } else {
      setEvent((prevEvent) => ({
        ...prevEvent,
        location: {} as LocationType,
      }));
    }
  };

  const cloudinarySuccessCallback = (
    _: React.MouseEvent<HTMLButtonElement>,
    result: CloudinaryResult
  ) => {
    setEvent(() => ({
      ...event,
      images: [...event.images!, result.info.secure_url],
    }));
  };
  const cloudinaryErrorCallback = (filename: string) => {
    setErrorMessage(`Upload failed of ${filename}`);
  };

  const handleInputChanges = (
    clickEvent: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEvent({
      ...event,
      [clickEvent.target.id]: clickEvent.currentTarget.value,
    });
  };

  const handleSubmit = async (
    submitEvent: React.FormEvent<HTMLFormElement>
  ) => {
    submitEvent.preventDefault();
    if (formType === 'add') {
      const newEvent: Event | { error: unknown } =
        await apiEventService.addEvent(event);
      const updatedEventsData: Event[] = await apiEventService.getAllEvents(
        userAuth!.userId
      );
      dispatch(setAllEventsState(updatedEventsData));
      if ('_id' in newEvent) {
        navigate(`/eventDetails/${newEvent._id}`);
      } else {
        setErrorMessage('Failed to save your event');
      }
    } else {
      const updatedEvent: Event | { error: unknown } =
        await apiEventService.updateEvent(event);
      if ('_id' in updatedEvent) {
        setErrorMessage('');
        navigate(`/eventDetails/${updatedEvent._id}`);
      } else {
        setErrorMessage('Failed to update your event');
      }
    }
  };

  return userAuth && allEvents ? (
    <>
      <h2>Enter event details</h2>
      <form className='event-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Event name'
          id='briefDescription'
          onChange={handleInputChanges}
          value={event.briefDescription}
          required
        />

        <input
          type='text'
          placeholder='Event description'
          id='description'
          required
          onChange={handleInputChanges}
          value={event.description}
        />

        <input
          type='datetime-local'
          id='dateTime'
          required
          onChange={handleInputChanges}
          value={
            event.dateTime.toString().slice(-1) === 'Z'
              ? event.dateTime.toString().slice(0, -1)
              : event.dateTime.toString()
          }
        />

        <div
          className='autocomplete-container'
          id='autocomplete'
          style={{ position: 'relative' }}
          ref={geocoderContainer}
        ></div>

        <button
          onClick={(event) =>
            showCloudinaryWidget(
              event,
              cloudinarySuccessCallback,
              cloudinaryErrorCallback
            )
          }
        >
          Upload event image
        </button>
        <br />

        <input
          type='submit'
          value={'Save event'}
          disabled={
            !(
              event.createdBy &&
              event.dateTime &&
              event.location.city &&
              event.description &&
              event.briefDescription
            )
          }
          className={
            !(
              event.createdBy &&
              event.dateTime &&
              event.location.city &&
              event.description &&
              event.briefDescription
            )
              ? '--disabled'
              : ''
          }
        />
        {errorMessage && <p className='--error-message'>{errorMessage}</p>}
      </form>
    </>
  ) : (
    <Loading />
  );
}
