import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../Css/components/MatchPreferences.css';

function MatchPreferences() {
  const [distanceInKm, setDistanceInKm] = useState(0);
  return (
    <div className="matchPreferencesBackground">
      <div className="matchPreferencesTitle">
        <h1>Match preferences</h1>
      </div>
      <div className="matchPreferencesText">
        <span>Max distance: {distanceInKm} km </span>
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