import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import { useAppSelector } from '../app/hooks';
import '../Css/components/MatchPreferences.css';
import { RootState } from '../app/store';
import apiUserService from '../utils/services/apiUserService';
import { UserPreferences } from '../../../globalUtils/Types';
import { useDispatch } from 'react-redux';
import { login } from '../app/userAuthSlice';

function MatchPreferences() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const [distanceInKm, setDistanceInKm] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuth || !userAuth.preferences) return;
    setDistanceInKm(userAuth.preferences.maxDistance);
  }, [userAuth]);

  const handleChange = async (value: number) => {
    try {
      if (!userAuth || !userAuth.preferences)
        throw new Error('User preferences could not be found');
      const updatedPreferences: UserPreferences = {
        ...userAuth.preferences,
        maxDistance: value,
      };
      const preferences = await apiUserService.updateUserPreferences(
        userAuth,
        updatedPreferences
      );
      setDistanceInKm(value);
      dispatch(
        login({
          ...userAuth,
          preferences: preferences,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='match-preferences'>
      <div className='match-preferences__title'>
        <h2>Match preferences</h2>
      </div>
      <div className='match-preferences__text'>
        <span>
          Max distance: {distanceInKm === 16 ? 15 + '+' : distanceInKm} km
        </span>
      </div>
      <ReactSlider
        className='custom-slider'
        trackClassName='custom-slider__track'
        thumbClassName='custom-slider__thumb'
        min={1}
        max={16}
        defaultValue={5}
        value={distanceInKm}
        onChange={(value) => handleChange(value)}
      />
    </div>
  );
}

export default MatchPreferences;
