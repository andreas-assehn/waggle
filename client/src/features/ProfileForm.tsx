import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import '../Css/features/EditProfileForm.css';
import '../Css/components/geocoderInput.css';
import { EditUserProfile } from '../utils/types/user';
import { LocationType } from '../utils/types/location';
import { useSelector } from 'react-redux';
import apiUserService from '../utils/services/apiUserService';
import { useNavigate } from 'react-router-dom';

export default function ProfileForm() {
  const [user, setUser] = useState({
    _id: '',
    location: {},
    dog: {
      name: '',
      size: '',
      gender: '',
      energyLevel: 0,
      images: [] as string[],
    },
    ownerImage: '',
  } as EditUserProfile);
  const [errorMessage, setErrorMessage] = useState('');
  const geocoderContainer = useRef(null);
  const initialized = useRef(false);
  const currentUser = useSelector((state: any) => state.userAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.userAuth) {
      setUser({ ...user, _id: currentUser.userAuth._id });
    }
  }, [currentUser]);

  //image upload
  const showCloudinaryWidget = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_URL,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          if (event.target.id === 'dogImages') {
            setUser({
              ...user,
              dog: {
                ...user.dog!,
                images: [...user.dog!.images!, result.info.secure_url],
              },
            });
          }
          if (event.target.id === 'ownerImage') {
            setUser({
              ...user,
              ownerImage: result.info.secure_url,
            });
          }
        } else if (error) {
          setErrorMessage(`Upload failed of ${result.info.original_filename}`);
        }
      }
    );
    widget.open();
  };

  useEffect(() => {
    if (
      !initialized.current &&
      process.env.REACT_APP_GEOAPIFY_KEY &&
      geocoderContainer.current
    ) {
      const autocomplete = new GeocoderAutocomplete(
        geocoderContainer.current,
        process.env.REACT_APP_GEOAPIFY_KEY,
        {
          placeholder: 'Area/location...',
          skipDetails: false,
          skipIcons: true,
        }
      );
      autocomplete.on('select', (location) => {
        if (location.properties.city) {
          setUser((prevUser) => ({
            ...prevUser,
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
          setUser((prevUser) => ({
            ...prevUser,
            location: {} as LocationType,
          }));
        }
      });
      initialized.current = true;
    }
  }, []);

  function handleInputChanges(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setUser({
      ...user,
      dog: { ...user.dog!, [event.target.id]: event.currentTarget.value },
    });
  }

  //Api call
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await apiUserService.updateUser(user);
    navigate('/profile');
  }

  return (
    <form className='profile-form' onSubmit={handleSubmit}>
      <button
        onClick={showCloudinaryWidget}
        id='dogImages'
        className='--fixed-width'
      >
        Upload dog image(s)
      </button>

      <button
        onClick={showCloudinaryWidget}
        id='ownerImage'
        className='--fixed-width'
      >
        Upload an image of you
      </button>

      <div className='profile-form__input-row'>
        <label htmlFor='dog-name' className='profile-form__input-row__label'>
          Name
        </label>
        <input
          type='text'
          placeholder="Dog's name..."
          id='name'
          onChange={handleInputChanges}
          required
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='dog-age' className='profile-form__input-row__label'>
          Age
        </label>
        <input
          type='number'
          placeholder="Dog's Age..."
          id='age'
          onChange={handleInputChanges}
        />
      </div>

      <div className='profile-form__input-row'>
        <label
          htmlFor='briefDescription'
          className='profile-form__input-row__label'
        >
          Tagline
        </label>
        <input
          type='text'
          placeholder='Tagline...'
          id='briefDescription'
          onChange={handleInputChanges}
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='description' className='profile-form__input-row__label'>
          Bio
        </label>
        <input
          type='text'
          placeholder='Bio...'
          id='description'
          onChange={handleInputChanges}
        />
      </div>

      <div className='profile-form__input-row'>
        <label
          htmlFor='autocomplete'
          className='profile-form__input-row__label'
        >
          Location
        </label>
        <div
          className='autocomplete-container'
          id='autocomplete'
          style={{ position: 'relative' }}
          ref={geocoderContainer}
        ></div>
      </div>

      <div className='profile-form__input-row'>
        <label
          htmlFor='size-selector'
          className='profile-form__input-row__label'
        >
          Size
        </label>
        <select name='size' id='size' onChange={handleInputChanges}>
          <option value='' disabled selected>
            Please select...
          </option>
          <option value='Large'>Large ({'>'}25kg)</option>
          <option value='Medium'>Medium (10-25kg)</option>
          <option value='Small'>Small ({'<'}10kg)</option>
        </select>
      </div>

      <div className='profile-form__input-row'>
        <label
          htmlFor='gender-selector'
          className='profile-form__input-row__label'
        >
          Gender
        </label>
        <select name='gender' id='gender' onChange={handleInputChanges}>
          <option value='' disabled selected>
            Please select...
          </option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Both'>Both (multiple dogs)</option>
        </select>
      </div>

      <div className='profile-form__input-row'>
        <label
          htmlFor='energy-selector'
          className='profile-form__input-row__label'
        >
          Energy
        </label>
        <select name='energy' id='energyLevel' onChange={handleInputChanges}>
          <option value='' disabled selected>
            Please select...
          </option>
          <option value='4'>Very high</option>
          <option value='3'>High</option>
          <option value='2'>Moderate</option>
          <option value='1'>Low</option>
          <option value='0'>Very Low</option>
        </select>
      </div>

      <div className='profile-form__input-row'>
        <label
          htmlFor='human-friendly-selector'
          className='profile-form__input-row__label'
        >
          Human friendliness
        </label>
        <select
          name='human-friendly'
          id='humanFriendliness'
          onChange={handleInputChanges}
        >
          <option value='' disabled selected>
            Please select...
          </option>
          <option value='4'>Very high</option>
          <option value='3'>High</option>
          <option value='2'>Moderate</option>
          <option value='1'>Low</option>
          <option value='0'>Very Low</option>
        </select>
      </div>

      <div className='profile-form__input-row'>
        <label
          htmlFor='dog-friendly-selector'
          className='profile-form__input-row__label'
        >
          Dog friendliness
        </label>
        <select
          name='dog-friendly'
          id='dogFriendliness'
          onChange={handleInputChanges}
        >
          <option value='' disabled selected>
            Please select...
          </option>
          <option value='4'>Very high</option>
          <option value='3'>High</option>
          <option value='2'>Moderate</option>
          <option value='1'>Low</option>
          <option value='0'>Very Low</option>
        </select>
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='breed' className='profile-form__input-row__label'>
          Breed
        </label>
        <input
          type='text'
          placeholder='Breed...'
          id='breed'
          onChange={handleInputChanges}
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='likes' className='profile-form__input-row__label'>
          Likes
        </label>
        <input
          type='text'
          placeholder='Likes...'
          id='likes'
          onChange={handleInputChanges}
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='dislikes' className='profile-form__input-row__label'>
          Dislikes
        </label>
        <input
          type='text'
          placeholder='Dislikes...'
          id='dislikes'
          onChange={handleInputChanges}
        />
      </div>

      {errorMessage && (
        <div className='errorMessage'>
          <p>{errorMessage}</p>
        </div>
      )}

      <input
        type='submit'
        disabled={
          !(
            user.dog!.name &&
            user.location.city &&
            user.dog!.size &&
            user.dog!.gender &&
            user.dog!.energyLevel
          )
        }
        className={
          !(
            user.dog!.name &&
            user.location.city &&
            user.dog!.size &&
            user.dog!.gender &&
            user.dog!.energyLevel
          )
            ? '--disabled'
            : ''
        }
      />
    </form>
  );
}
