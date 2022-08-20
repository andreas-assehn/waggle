import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import { MutableRefObject } from 'react';

export const geoapifyInput = (
  initialized: MutableRefObject<boolean>,
  geocoderContainer: MutableRefObject<null>,
  locationArg: any,
  geocoderOnSelectLogic: any
) => {
  if (
    !initialized.current &&
    process.env.REACT_APP_GEOAPIFY_KEY &&
    geocoderContainer.current
  ) {
    const autocomplete = new GeocoderAutocomplete(
      geocoderContainer.current,
      process.env.REACT_APP_GEOAPIFY_KEY,
      {
        placeholder: locationArg?.formatted || 'enter location...',
        skipDetails: false,
        skipIcons: true,
      }
    );
    autocomplete.on('select', (location) => {
      geocoderOnSelectLogic(location);
    });
    initialized.current = true;
  }
};
