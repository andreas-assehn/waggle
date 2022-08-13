const event1 = {
  EventId: 1,
  DateTime: '2022-09-12', // YYYY-MM-DD => input type date output
  Location: {
    city: 'London',
    county: 'Greater London',
    state: 'England',
    postcode: 'HA3 9JS',
    country: 'United Kingdom',
    country_code: 'gb',
    lon: -0.298049444,
    lat: 51.589386044,
    formatted: 'London, HA3 9JS, United Kingdom',
    address_line1: 'London',
    address_line2: 'HA3 9JS, United Kingdom',
  },
  short_description:
    'Meet up to socialize for German Shepards and their masters',
  Description:
    'Fusce placerat facilisis fermentum. Vestibulum interdum justo eu dolor mollis pretium. Duis et purus risus. Sed sodales fermentum dignissim. Etiam magna nibh, luctus vel luctus a, gravida pretium orci. Nullam congue interdum libero, a auctor tortor vehicula a. Aenean sagittis rhoncus iaculis. In in volutpat tellus, a eleifend neque. Nunc non dui sem. Vestibulum et purus id velit laoreet hendrerit. Nam cursus odio urna, quis posuere lorem volutpat eget. In scelerisque sed orci vitae hendrerit.',
  images: [
    { url: 'https://cloudinary.com/imgId1' },
    { url: 'https://cloudinary.com/imgId2' },
  ],
  Attendees: [
    { userdId: 1, creator: true },
    { userdId: 3, creator: false },
    { userdId: 2, creator: false },
    { userdId: 4, creator: false },
  ],
};

const event2 = {
  EventId: 2,
  DateTime: '2022-08-29', // YYYY-MM-DD => input type date output
  Location: {
    city: 'London',
    county: 'Greater London',
    state: 'England',
    postcode: 'WC2A 3TP',
    country: 'United Kingdom',
    country_code: 'gb',
    lon: -0.1150552,
    lat: 51.5166156,
    formatted: "Lincoln's Inn Fields, London, WC2A 3TP, United Kingdom",
    address_line1: "Lincoln's Inn Fields",
    address_line2: 'London, WC2A 3TP, United Kingdom',
  },
  short_description: 'Bring your pup to meet up and socialize with other pups',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada efficitur elit, molestie pellentesque augue sollicitudin a. Curabitur volutpat aliquet sapien, vitae vulputate neque venenatis eget. Aenean feugiat tincidunt nunc quis faucibus. Donec sed nulla aliquam, tincidunt felis sed, blandit felis. Fusce tincidunt sapien turpis, at luctus purus pretium ac. Donec condimentum nisl eget pharetra pretium. Donec ac quam mauris. Quisque ullamcorper erat et nisi vulputate dapibus. Nulla facilisi. Aliquam ligula purus, pulvinar ut tortor non, bibendum mollis libero. Vestibulum porta elit risus, in sodales nisi commodo eu. Morbi fermentum, mauris sed lobortis fringilla, felis tortor mattis tellus, sit amet iaculis est libero eget lacus. Aenean iaculis commodo leo, eu interdum dui.',
  images: [
    { url: 'https://cloudinary.com/imgId3' },
    { url: 'https://cloudinary.com/imgId4' },
  ],
  Attendees: [
    { userdId: 1, creator: true },
    { userdId: 3, creator: true },
    { userdId: 2, creator: false },
    { userdId: 4, creator: false },
    { userdId: 5, creator: false },
  ],
};

const event3 = {
  EventId: 3,
  DateTime: '2022-09-02', // YYYY-MM-DD => input type date output
  Location: {
    city: 'London',
    county: 'Greater London',
    state: 'England',
    postcode: 'WC2',
    country: 'United Kingdom',
    country_code: 'gb',
    lon: -0.1174991,
    lat: 51.5171721,
    formatted: 'Whetstone Park, London, WC2, United Kingdom',
    address_line1: 'Whetstone Park',
    address_line2: 'London, WC2, United Kingdom',
  },
  short_description:
    'Integer in nisi blandit diam egestas posuere a pellentesque mauris',
  Description:
    'Nam molestie sagittis mi, ac eleifend metus. Donec vehicula vulputate porta. Maecenas eget porttitor elit, non tempor urna. Ut maximus purus auctor magna iaculis dignissim. Phasellus pulvinar volutpat nunc vitae tincidunt. Nullam mattis gravida dui eget malesuada. Maecenas bibendum auctor feugiat. Donec consectetur est dolor, eu porta diam malesuada ac. Phasellus a ex urna. Sed tempus urna vitae rhoncus tincidunt. Aenean fringilla gravida mi, eget vulputate felis dapibus id.',
  images: [
    { url: 'https://cloudinary.com/imgId5' },
    { url: 'https://cloudinary.com/imgId6' },
  ],
  Attendees: [
    { userdId: 3, creator: false },
    { userdId: 2, creator: false },
    { userdId: 4, creator: true },
  ],
};

const event4 = {
  EventId: 4,
  DateTime: '2022-09-15', // YYYY-MM-DD => input type date output
  Location: {
    city: 'Westminster',
    county: 'Greater London',
    state: 'England',
    postcode: '', // Watch out => API doesn't always return a postcode!
    country: 'United Kingdom',
    country_code: 'gb',
    lon: -0.14371934483944357,
    lat: 51.504458150000005,
    formatted:
      'The Green Park, Belgravia, Westminster, London, ENG, United Kingdom',
    address_line1: 'The Green Park',
    address_line2: 'Belgravia, Westminster, London, ENG, United Kingdom',
  },
  short_description:
    'Sed aliquet, neque ac facilisis interdum, lacus lorem tempus nunc, a bibendum neque urna nec lorem.',
  Description:
    'Fusce placerat facilisis fermentum. Vestibulum interdum justo eu dolor mollis pretium. Duis et purus risus. Sed sodales fermentum dignissim. Etiam magna nibh, luctus vel luctus a, gravida pretium orci. Nullam congue interdum libero, a auctor tortor vehicula a. Aenean sagittis rhoncus iaculis. In in volutpat tellus, a eleifend neque. Nunc non dui sem. Vestibulum et purus id velit laoreet hendrerit. Nam cursus odio urna, quis posuere lorem volutpat eget. In scelerisque sed orci vitae hendrerit.',
  images: [
    { url: 'https://cloudinary.com/imgId7' },
    { url: 'https://cloudinary.com/imgId8' },
  ],
  Attendees: [
    { userdId: 1, creator: false },
    { userdId: 4, creator: true },
  ],
};

const event5 = {
  EventId: 1,
  DateTime: '2022-09-12', // YYYY-MM-DD => input type date output
  Location: {
    city: 'London',
    county: 'Greater London',
    state: 'England',
    postcode: 'HA3 9JS',
    country: 'United Kingdom',
    country_code: 'gb',
    lon: -0.18042659722479423,
    lat: 51.50664635,
    formatted:
      'Kensington Gardens, South Kensington, London, ENG, United Kingdom',
    address_line1: 'Kensington Gardens',
    address_line2: 'South Kensington, London, ENG, United Kingdom',
  },
  short_description: 'Nunc at sem varius, bibendum diam nec, tempus magna.',
  Description:
    'Suspendisse euismod nunc sed erat scelerisque, nec pulvinar enim tempor. Pellentesque luctus imperdiet lobortis. Cras volutpat eget lorem feugiat aliquet. Curabitur id cursus turpis, ullamcorper accumsan ante. Nulla cursus nisi vel eleifend maximus. Quisque scelerisque quam ut finibus lacinia. Maecenas venenatis massa quis velit ultricies interdum. Quisque a lectus odio.',
  images: [
    { url: 'https://cloudinary.com/imgId9' },
    { url: 'https://cloudinary.com/imgId10' },
  ],
  Attendees: [
    { userdId: 3, creator: true },
    { userdId: 2, creator: false },
    { userdId: 4, creator: false },
  ],
};
