import * as React from 'react';
import ProfileForm from '../features/ProfileForm';
import '../Css/features/EditProfileForm.css';

function EditProfile() {
  return (
    <>
      <h3 className='edit-form-title'> Details about your dog(s)</h3>
      <ProfileForm />
    </>
  );
}

export default EditProfile;
