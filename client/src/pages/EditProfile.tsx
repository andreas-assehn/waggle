import * as React from 'react';
import ProfileForm from '../features/ProfileForm';
import '../Css/features/EditProfileForm.css';

function EditProfile() {
  return (
    <>
      <div className='edit-form-title'>
        <h3> Details about your dog(s)</h3>
      </div>
      <ProfileForm />
    </>
  );
}

export default EditProfile;
