import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

export default function ProfileForm() {
  const [dogImages, setDogImages] = useState([] as string[]);
  const [ownerImage, setOwnerImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
            setDogImages([...dogImages, result.info.secure_url]);
          }
          if (event.target.id === 'ownerImage') {
            setOwnerImage(result.info.secure_url);
          }
        } else {
          setErrorMessage(`Upload failed of ${result.info.original_filename}`);
        }
      }
    );
    widget.open();
  };

  const geocoderContainer: any = useRef(null);
  useEffect(() => {
    const autocomplete = new GeocoderAutocomplete(
      geocoderContainer.current,
      process.env.REACT_APP_GEOAPIFY_KEY!,
      {
        placeholder: 'Enter your rough area/location...',
        skipDetails: false,
        skipIcons: true,
      }
    );
    autocomplete.on('select', (location) => {
      console.log(location);
    });
  }, [geocoderContainer]);

  //Api call
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('hello');
  }

  return (
    <form className="profile-form" onSubmit={(event) => handleSubmit(event)}>
      <h3> Please fill out the following about your dog(s):</h3>

      <button onClick={showCloudinaryWidget} id="dogImages">
        Upload images of your dog
      </button>
      <br />
      <button onClick={showCloudinaryWidget} id="ownerImage">
        Upload image of you
      </button>
      <br />
      <label htmlFor="dog-name">Name</label>
      <input type="text" placeholder="Dog's name..." id="dog-name" />
      <br />
      <label htmlFor="dog-age">Age</label>
      <input type="number" placeholder="Dog's Age..." id="dog-age" />
      <br />
      <label htmlFor="tagline">Tagline</label>
      <input type="text" placeholder="Tagline..." id="tagline" />
      <br />
      <label htmlFor="bio">Bio</label>
      <input type="text" placeholder="Bio..." id="bio" />
      <br />
      <div
        className="autocomplete-container"
        style={{ position: 'relative' }}
        ref={geocoderContainer}
      ></div>

      <br />
      <label htmlFor="size-selector">Size</label>
      <select name="size" id="size-selector">
        <option value="Large">Large ({'>'}25kg)</option>
        <option value="Medium">Medium (10-25kg)</option>
        <option value="Small">Small ({'<'}10kg)</option>
      </select>
      <br />
      <label htmlFor="gender-selector">Gender</label>
      <select name="gender" id="gender-selector">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Both">Both (multiple dogs)</option>
      </select>
      <br />
      <label htmlFor="energy-selector">Energy</label>
      <select name="energy" id="energy-selector">
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />
      <label htmlFor="human-friendly-selector">Human friendliness</label>
      <select name="human-friendly" id="human-friendly-selector">
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />
      <label htmlFor="dog-friendly-selector">Dog friendliness</label>
      <select name="dog-friendly" id="dog-friendly-selector">
        <option value="4">Very high</option>
        <option value="3">High</option>
        <option value="2">Moderate</option>
        <option value="1">Low</option>
        <option value="0">Very Low</option>
      </select>
      <br />
      <label htmlFor="breed">Breed</label>
      <input type="text" placeholder="Breed..." id="breed" />
      <br />
      <label htmlFor="likes">Likes</label>
      <input type="text" placeholder="Likes..." id="likes" />
      <br />
      <label htmlFor="dislikes">Dislikes</label>
      <input type="text" placeholder="Dislikes..." id="dislikes" />
      <br />
      <input type="submit" />
    </form>
  );
}
