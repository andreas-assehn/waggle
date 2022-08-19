import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../Css/components/MatchPreferences.css';

//form
//slider with kilometer 1-10

function MatchPreferences() {
  const [distanceInKm, setDistanceInKm] = useState(0);
  return (
    <div className="matchPreferencesBackground">
      <div className="matchPreferencesText">
        <span>Max distance: {distanceInKm} km</span>
      </div>
      <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        max={10}
        defaultValue={5}
        value={distanceInKm}
        onChange={(value) => setDistanceInKm(value)}
      />
    </div>
  );
}

export default MatchPreferences;
