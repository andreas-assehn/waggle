import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import { EditUserProfile } from '../utils/types/user';
import { LocationType } from '../utils/types/location';
import { useSelector } from 'react-redux';
import apiUserService from '../utils/services/apiUserService';

export default function ProfileForm() {
  const _id = useSelector((state: any) => state.userAuth);

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

  useEffect(() => {
    if (_id.userAuth) {
      setUser({ ...user, _id: _id.userAuth._id });
    }
  }, [_id]);

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
          placeholder: 'Enter your rough area/location...',
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
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h3> Details about your dog(s)</h3>

      <button onClick={showCloudinaryWidget} id="dogImages">
        Upload images of your dog
      </button>
      <br />

      <button onClick={showCloudinaryWidget} id="ownerImage">
        Upload image of you
      </button>
      <br />

      <label htmlFor="dog-name">Name</label>
      <input
        type="text"
        placeholder="Dog's name..."
        id="name"
        onChange={handleInputChanges}
        required
      />
      <br />

      <label htmlFor="dog-age">Age</label>
      <input
        type="number"
        placeholder="Dog's Age..."
        id="age"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="briefDescription">Tagline</label>
      <input
        type="text"
        placeholder="Tagline..."
        id="briefDescription"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="description">Bio</label>
      <input
        type="text"
        placeholder="Bio..."
        id="description"
        onChange={handleInputChanges}
      />
      <br />

      <div
        className="autocomplete-container"
        style={{ position: 'relative' }}
        ref={geocoderContainer}
      ></div>
      <br />

      <label htmlFor="size-selector">Size</label>
      <select name="size" id="size" onChange={handleInputChanges}>
        <option value="" disabled selected>
          Please select...
        </option>
        <option value="Large">Large ({'>'}25kg)</option>
        <option value="Medium">Medium (10-25kg)</option>
        <option value="Small">Small ({'<'}10kg)</option>
      </select>
      <br />

      <label htmlFor="gender-selector">Gender</label>
      <select name="gender" id="gender" onChange={handleInputChanges}>
        <option value="" disabled selected>
          Please select...
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Both">Both (multiple dogs)</option>
      </select>
      <br />

      <label htmlFor="energy-selector">Energy</label>
      <select name="energy" id="energyLevel" onChange={handleInputChanges}>
        <option value="" disabled selected>
          Please select...
        </option>
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />

      <label htmlFor="human-friendly-selector">Human friendliness</label>
      <select
        name="human-friendly"
        id="humanFriendliness"
        onChange={handleInputChanges}
      >
        <option value="" disabled selected>
          Please select...
        </option>
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />

      <label htmlFor="dog-friendly-selector">Dog friendliness</label>
      <select
        name="dog-friendly"
        id="dogFriendliness"
        onChange={handleInputChanges}
      >
        <option value="" disabled selected>
          Please select...
        </option>
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />

      <label htmlFor="breed">Breed</label>
      <input
        type="text"
        placeholder="Breed..."
        id="breed"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="likes">Likes</label>
      <input
        type="text"
        placeholder="Likes..."
        id="likes"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="dislikes">Dislikes</label>
      <input
        type="text"
        placeholder="Dislikes..."
        id="dislikes"
        onChange={handleInputChanges}
      />
      <br />

      {errorMessage && (
        <div className="errorMessage">
          <p>{errorMessage}</p>
        </div>
      )}

      <input
        type="submit"
        disabled={
          !(
            user.dog!.name &&
            user.location.city &&
            user.dog!.size &&
            user.dog!.gender &&
            user.dog!.energyLevel
          )
        }
      />
    </form>
  );
}
