import * as React from 'react';
import ProfileForm from '../features/ProfileForm';
import '../Css/features/EditProfileForm.css';

function EditProfile() {
  return (
    <div className='edit-form'>
      <div className='edit-form__title'>
        <h3> Details about your dog(s)</h3>
      </div>
      <ProfileForm />
    </div>
  );
}

export default EditProfile;
