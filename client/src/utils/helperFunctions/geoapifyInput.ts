import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';

export const geoapifyInput = (
  initialized: React.MutableRefObject<boolean>,
  geocoderContainer: React.MutableRefObject<null>,
  location: any,
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
        placeholder: location?.formatted || 'enter location',
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
