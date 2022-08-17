import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import { User } from '../utils/types/user';

export default function ProfileForm() {
  const [user, setUser] = useState({
    // dog: {
    //   name: '',
    //   age: 0,
    //   size: '',
    //   gender: '',
    //   energyLevel: 0,
    //   images: [] as string[],
    // },
    // ownerImage: '',
  } as User);
  const [errorMessage, setErrorMessage] = useState('');
  const geocoderContainer = useRef(null);
  const initialized = useRef(false);

  //image upload
  const showCloudinaryWidget = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(event.target.id);
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_URL,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          console.log(result.info);
          if (event.target.id === 'dogImages') {
            setUser({
              ...user,
              dog: {
                ...user.dog,
                images: [...user.dog.images, result.info.secure_url],
              },
            });
          }
          if (event.target.id === 'ownerImage') {
            setUser({ ...user, ownerImage: result.info.secure_url });
          }
        } else {
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
        console.log(location);
      });
      initialized.current = true;
    }
  }, []);

  function handleInputChanges(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.id, event.currentTarget.value);
    setUser({
      ...user,
      dog: { ...user.dog, [event.target.id]: event.currentTarget.value },
    });
  }

  //Api call
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h3> Details about your dog(s):</h3>

      <button onClick={showCloudinaryWidget} id="dogImages">
        Upload images of your dog
      </button>
      <br />

      <button onClick={showCloudinaryWidget} id="ownerImage">
        Upload image of you
      </button>
      <br />

      <label htmlFor="dog-name">Name {user.dog!.name}</label>
      <input
        type="text"
        placeholder="Dog's name..."
        id="name"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="dog-age">Age {user.dog!.age}</label>
      <input
        type="number"
        placeholder="Dog's Age..."
        id="age"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="briefDescription">
        Tagline {user.dog!.briefDescription}
      </label>
      <input
        type="text"
        placeholder="Tagline..."
        id="briefDescription"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="description">Bio {user.dog!.description}</label>
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
      <select name="size" id="size">
        <option value="Large">Large ({'>'}25kg)</option>
        <option value="Medium">Medium (10-25kg)</option>
        <option value="Small">Small ({'<'}10kg)</option>
      </select>
      <br />

      <label htmlFor="gender-selector">Gender</label>
      <select name="gender" id="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Both">Both (multiple dogs)</option>
      </select>
      <br />

      <label htmlFor="energy-selector">Energy</label>
      <select name="energy" id="energyLevel">
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />

      <label htmlFor="human-friendly-selector">Human friendliness</label>
      <select name="human-friendly" id="humanFriendliness">
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />

      <label htmlFor="dog-friendly-selector">Dog friendliness</label>
      <select name="dog-friendly" id="dogFriendliness">
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />

      <label htmlFor="breed">Breed {user.dog!.breed}</label>
      <input
        type="text"
        placeholder="Breed..."
        id="breed"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="likes">Likes {user.dog!.likes}</label>
      <input
        type="text"
        placeholder="Likes..."
        id="likes"
        onChange={handleInputChanges}
      />
      <br />

      <label htmlFor="dislikes">Dislikes {user.dog!.dislikes}</label>
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

      <input type="submit" />
    </form>
  );
}
