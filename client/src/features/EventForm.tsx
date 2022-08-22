import React, { useState, useRef, useEffect } from 'react';
import { LocationType, Event } from '../../../globalUtils/Types';
import { geoapifyInput } from '../utils/helperFunctions/geoapifyInput';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import Loading from '../components/Loading';
import { showCloudinaryWidget } from '../utils/helperFunctions/cloudinaryWidget';
import { CloudinaryResult } from '../utils/types/general';
import apiEventService from '../utils/services/apiEventsService';
import { useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    if (allEvents && userAuth) {
      setEvent(() => {
        const newValue = { ...event, createdBy: userAuth._id! };

        geoapifyInput(
          initialized,
          geocoderContainer,
          undefined,
          geocoderOnSelectLogic
        ); //TODO update undefined to location using navigation params of editEventForm
        return newValue;
      });
    }
  }, [userAuth]);

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
      if ('_id' in newEvent) {
        navigate(`/eventDetail/${newEvent._id}`);
      } else {
        setErrorMessage('Failed to save your event');
      }
    } else {
      const updatedEvent: Event | { error: unknown } =
        await apiEventService.updateEvent(event);
      if ('_id' in updatedEvent) {
        setErrorMessage('');
        navigate(`/eventDetail/${updatedEvent._id}`);
      } else {
        setErrorMessage('Failed to update your event');
      }
    }
  };

  //TODO test post & put request working
  //TODO allow for editing form
  //TODO navigate to event
  return userAuth && allEvents ? (
    <>
      <h2>Enter event details</h2>
      <form className='event-form' onSubmit={handleSubmit}>
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

        <div
          className='autocomplete-container'
          id='autocomplete'
          style={{ position: 'relative' }}
          ref={geocoderContainer}
        ></div>

        <input
          type='datetime-local'
          id='dateTime'
          required
          onChange={handleInputChanges}
        />
        <input
          type='text'
          placeholder='Tagline'
          id='briefDescription'
          onChange={handleInputChanges}
        />
        <input
          type='text'
          placeholder='Event description'
          id='description'
          required
          onChange={handleInputChanges}
        />

        <input
          type='submit'
          value={'Save event'}
          disabled={
            !(
              event.createdBy &&
              event.dateTime &&
              event.location.city &&
              event.description
            )
          }
          className={
            !(
              event.createdBy &&
              event.dateTime &&
              event.location.city &&
              event.description
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
