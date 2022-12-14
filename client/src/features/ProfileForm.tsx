import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import '../Css/features/EditProfileForm.css';
import '../Css/components/geocoderInput.css';
import { EditUserProfile } from '../utils/types/user';
import { LocationType } from '../utils/types/location';
import { useSelector } from 'react-redux';
import apiUserService from '../utils/services/apiUserService';
import { useNavigate } from 'react-router-dom';
import { showCloudinaryWidget } from '../utils/helperFunctions/cloudinaryWidget';
import { geoapifyInput } from '../utils/helperFunctions/geoapifyInput';
import { useDispatch } from 'react-redux';
import { login } from '../app/userAuthSlice';
import { setAllEventsState } from '../app/allEventsSlice';

export default function ProfileForm() {
  const currentUser = useSelector((state: any) => state.userAuth);
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser.userAuth) {
      const savedValues = [
        currentUser.userAuth.dog.name,
        currentUser.userAuth.dog.breed,
        currentUser.userAuth.dog.age,
        currentUser.userAuth.dog.size,
        currentUser.userAuth.dog.gender,
        currentUser.userAuth.dog.energyLevel,
        currentUser.userAuth.dog.dogFriendliness,
        currentUser.userAuth.dog.humanFriendliness,
        currentUser.userAuth.dog.description,
        currentUser.userAuth.dog.briefDescription,
        currentUser.userAuth.dog.likes,
        currentUser.userAuth.dog.dislikes,
        currentUser.userAuth.dog.images,
      ];
      const keys = [
        'name',
        'breed',
        'age',
        'size',
        'gender',
        'energyLevel',
        'dogFriendliness',
        'humanFriendliness',
        'description',
        'briefDescription',
        'likes',
        'dislikes',
        'images',
      ];
      setUser(() => {
        let newValue = { ...user, _id: currentUser.userAuth._id };
        savedValues.forEach((value, i) => {
          if (value && (value.length || typeof value === 'number')) {
            newValue = {
              ...newValue,
              dog: { ...newValue.dog!, [keys[i]]: value },
            };
          }
        });
        if (currentUser.userAuth.ownerImage) {
          newValue = {
            ...newValue,
            ownerImage: currentUser.userAuth.ownerImage,
          };
        }
        if (
          currentUser &&
          currentUser.userAuth &&
          currentUser.userAuth.location &&
          currentUser.userAuth.location.city
        ) {
          newValue = {
            ...newValue,
            location: currentUser.userAuth.location,
          };
        }

        geoapifyInput(
          initialized,
          geocoderContainer,
          newValue.location,
          geocoderOnSelectLogic
        );

        return newValue;
      });
    }
  }, [currentUser]);

  const geocoderOnSelectLogic = (location: any) => {
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
  };

  const succesCloudinaryCallback = (
    event: React.MouseEvent<HTMLButtonElement>,
    result: any
  ) => {
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
  };

  const errorCloudinaryCallback = (result: any) => {
    setErrorMessage(`Upload failed of ${result.info.original_filename}`);
  };

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

    const updatedCurrentUser = await apiUserService.getUser(
      currentUser.userAuth.userId
    );
    dispatch(login(updatedCurrentUser));
    navigate('/profile');
  }

  return (
    <form className='profile-form' onSubmit={handleSubmit}>
      <div className='profile-form__button'>
        <button
          onClick={(event) =>
            showCloudinaryWidget(
              event,
              succesCloudinaryCallback,
              errorCloudinaryCallback
            )
          }
          id='dogImages'
          className='profile-form__button --fixed-width'
        >
          Upload dog image(s)
        </button>

        <button
          onClick={(event) =>
            showCloudinaryWidget(
              event,
              succesCloudinaryCallback,
              errorCloudinaryCallback
            )
          }
          id='ownerImage'
          className='--fixed-width'
        >
          Upload an image of you
        </button>
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='dog-name' className='profile-form__input-row__label'>
          Name
        </label>
        <input
          className='profile-form__input-row__input'
          type='text'
          placeholder="Dog's name..."
          id='name'
          onChange={handleInputChanges}
          value={user.dog!.name}
          required
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='dog-age' className='profile-form__input-row__label'>
          Age
        </label>
        <input
          className='profile-form__input-row__input'
          type='number'
          placeholder="Dog's Age..."
          id='age'
          onChange={handleInputChanges}
          value={user.dog!.age}
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
          className='profile-form__input-row__input'
          type='text'
          placeholder='Tagline...'
          id='briefDescription'
          onChange={handleInputChanges}
          value={user.dog!.briefDescription}
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='description' className='profile-form__input-row__label'>
          Bio
        </label>
        <input
          className='profile-form__input-row__input'
          type='text'
          placeholder='Bio...'
          id='description'
          onChange={handleInputChanges}
          value={user.dog!.description}
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
        <select
          className='profile-form__input-row__input'
          name='size'
          id='size'
          onChange={handleInputChanges}
          value={user.dog?.size ? user.dog?.size : ''}
        >
          <option value='' disabled hidden>
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
        <select
          className='profile-form__input-row__input'
          name='gender'
          id='gender'
          onChange={handleInputChanges}
          value={user.dog?.gender ? user.dog?.gender : ''}
        >
          <option value='' disabled hidden>
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
        <select
          className='profile-form__input-row__input'
          name='energy'
          id='energyLevel'
          onChange={handleInputChanges}
          value={user?.dog?.energyLevel ? user?.dog?.energyLevel : ''}
        >
          <option value='' disabled hidden>
            Please select...
          </option>
          <option value={5}>Very high</option>
          <option value={4}>High</option>
          <option value={3}>Moderate</option>
          <option value={2}>Low</option>
          <option value={1}>Very Low</option>
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
          className='profile-form__input-row__input'
          name='human-friendly'
          id='humanFriendliness'
          onChange={handleInputChanges}
          value={user.dog?.humanFriendliness ? user.dog?.humanFriendliness : ''}
        >
          <option value='' disabled hidden>
            Please select...
          </option>
          <option value={5}>Very high</option>
          <option value={4}>High</option>
          <option value={3}>Moderate</option>
          <option value={2}>Low</option>
          <option value={1}>Very Low</option>
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
          className='profile-form__input-row__input'
          name='dog-friendly'
          id='dogFriendliness'
          onChange={handleInputChanges}
          value={user.dog?.dogFriendliness ? user.dog?.dogFriendliness : ''}
        >
          <option value='' disabled hidden>
            Please select...
          </option>
          <option value={5}>Very high</option>
          <option value={4}>High</option>
          <option value={3}>Moderate</option>
          <option value={2}>Low</option>
          <option value={1}>Very Low</option>
        </select>
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='breed' className='profile-form__input-row__label'>
          Breed
        </label>
        <input
          className='profile-form__input-row__input'
          type='text'
          placeholder='Breed...'
          id='breed'
          onChange={handleInputChanges}
          value={user.dog!.breed}
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='likes' className='profile-form__input-row__label'>
          Likes
        </label>
        <input
          className='profile-form__input-row__input'
          type='text'
          placeholder='Likes...'
          id='likes'
          onChange={handleInputChanges}
          value={user.dog!.likes?.join(', ')}
        />
      </div>

      <div className='profile-form__input-row'>
        <label htmlFor='dislikes' className='profile-form__input-row__label'>
          Dislikes
        </label>
        <input
          className='profile-form__input-row__input'
          type='text'
          placeholder='Dislikes...'
          id='dislikes'
          onChange={handleInputChanges}
          value={user.dog!.dislikes?.join(', ')}
        />
      </div>

      {errorMessage && (
        <div className='errorMessage'>
          <p>{errorMessage}</p>
        </div>
      )}

      <div className='profile-form__button'>
        <input
          type='submit'
          disabled={
            !(
              user.dog!.name &&
              user.location.formatted &&
              user.dog!.size &&
              user.dog!.gender &&
              user.dog!.energyLevel
            )
          }
          className={
            !(
              user.dog!.name &&
              user.location.formatted &&
              user.dog!.size &&
              user.dog!.gender &&
              user.dog!.energyLevel
            )
              ? ' --disabled'
              : ' '
          }
        />
      </div>
    </form>
  );
}
