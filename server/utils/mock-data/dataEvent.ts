export const events = [
  {
    eventId: '1',
    dateTime: new Date('2022-09-12T16:00'),
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'HA3 9JS',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.298049444,
      lat: 51.589386044,
      formatted: 'London, HA3 9JS, United Kingdom',
      addressLine1: 'London',
      addressLine2: 'HA3 9JS, United Kingdom',
    },
    briefDescription:
      'Meet up to socialize for German Shepards and their masters',
    description:
      'Fusce placerat facilisis fermentum. Vestibulum interdum justo eu dolor mollis pretium. Duis et purus risus. Sed sodales fermentum dignissim. Etiam magna nibh, luctus vel luctus a, gravida pretium orci. Nullam congue interdum libero, a auctor tortor vehicula a. Aenean sagittis rhoncus iaculis. In in volutpat tellus, a eleifend neque. Nunc non dui sem. Vestibulum et purus id velit laoreet hendrerit. Nam cursus odio urna, quis posuere lorem volutpat eget. In scelerisque sed orci vitae hendrerit.',
    images: ['https://cloudinary.com/imgId1', 'https://cloudinary.com/imgId2'],
    attendees: [
      { userId: 1, creator: true },
      { userId: 3, creator: false },
      { userId: 2, creator: false },
      { userId: 4, creator: false },
    ],
  },
  {
    eventId: '2',
    dateTime: new Date('2022-08-29T15:30'),
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'WC2A 3TP',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.1150552,
      lat: 51.5166156,
      // eslint-disable-next-line quotes
      formatted: "Lincoln's Inn Fields, London, WC2A 3TP, United Kingdom",
      // eslint-disable-next-line quotes
      addressLine1: "Lincoln's Inn Fields",
      addressLine2: 'London, WC2A 3TP, United Kingdom',
    },
    briefDescription: 'Bring your pup to meet up and socialize with other pups',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada efficitur elit, molestie pellentesque augue sollicitudin a. Curabitur volutpat aliquet sapien, vitae vulputate neque venenatis eget. Aenean feugiat tincidunt nunc quis faucibus. Donec sed nulla aliquam, tincidunt felis sed, blandit felis. Fusce tincidunt sapien turpis, at luctus purus pretium ac. Donec condimentum nisl eget pharetra pretium. Donec ac quam mauris. Quisque ullamcorper erat et nisi vulputate dapibus. Nulla facilisi. Aliquam ligula purus, pulvinar ut tortor non, bibendum mollis libero. Vestibulum porta elit risus, in sodales nisi commodo eu. Morbi fermentum, mauris sed lobortis fringilla, felis tortor mattis tellus, sit amet iaculis est libero eget lacus. Aenean iaculis commodo leo, eu interdum dui.',
    images: ['https://cloudinary.com/imgId3', 'https://cloudinary.com/imgId4'],
    attendees: [
      { userId: 1, creator: true },
      { userId: 3, creator: true },
      { userId: 2, creator: false },
      { userId: 4, creator: false },
      { userId: 5, creator: false },
    ],
  },
  {
    eventId: '3',
    dateTime: new Date('2022-09-02T09:00'),
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'WC2',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.1174991,
      lat: 51.5171721,
      formatted: 'Whetstone Park, London, WC2, United Kingdom',
      addressLine1: 'Whetstone Park',
      addressLine2: 'London, WC2, United Kingdom',
    },
    briefDescription:
      'Integer in nisi blandit diam egestas posuere a pellentesque mauris',
    description:
      'Nam molestie sagittis mi, ac eleifend metus. Donec vehicula vulputate porta. Maecenas eget porttitor elit, non tempor urna. Ut maximus purus auctor magna iaculis dignissim. Phasellus pulvinar volutpat nunc vitae tincidunt. Nullam mattis gravida dui eget malesuada. Maecenas bibendum auctor feugiat. Donec consectetur est dolor, eu porta diam malesuada ac. Phasellus a ex urna. Sed tempus urna vitae rhoncus tincidunt. Aenean fringilla gravida mi, eget vulputate felis dapibus id.',
    images: ['https://cloudinary.com/imgId5', 'https://cloudinary.com/imgId6'],
    attendees: [
      { userId: 3, creator: false },
      { userId: 2, creator: false },
      { userId: 4, creator: true },
    ],
  },
  {
    eventId: '4',
    dateTime: new Date('2022-09-15T18:00'),
    location: {
      city: 'Westminster',
      county: 'Greater London',
      state: 'England',
      postcode: '', // Watch out => API doesn't always return a postcode!
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.14371934483944357,
      lat: 51.504458150000005,
      formatted:
        'The Green Park, Belgravia, Westminster, London, ENG, United Kingdom',
      addressLine1: 'The Green Park',
      addressLine2: 'Belgravia, Westminster, London, ENG, United Kingdom',
    },
    briefDescription:
      'Sed aliquet, neque ac facilisis interdum, lacus lorem tempus nunc, a bibendum neque urna nec lorem.',
    description:
      'Fusce placerat facilisis fermentum. Vestibulum interdum justo eu dolor mollis pretium. Duis et purus risus. Sed sodales fermentum dignissim. Etiam magna nibh, luctus vel luctus a, gravida pretium orci. Nullam congue interdum libero, a auctor tortor vehicula a. Aenean sagittis rhoncus iaculis. In in volutpat tellus, a eleifend neque. Nunc non dui sem. Vestibulum et purus id velit laoreet hendrerit. Nam cursus odio urna, quis posuere lorem volutpat eget. In scelerisque sed orci vitae hendrerit.',
    images: ['https://cloudinary.com/imgId7', 'https://cloudinary.com/imgId8'],
    attendees: [
      { userId: 1, creator: false },
      { userId: 4, creator: true },
    ],
  },
  {
    eventId: '1',
    dateTime: new Date('2022-09-12T10:00'),
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'HA3 9JS',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.18042659722479423,
      lat: 51.50664635,
      formatted:
        'Kensington Gardens, South Kensington, London, ENG, United Kingdom',
      addressLine1: 'Kensington Gardens',
      addressLine2: 'South Kensington, London, ENG, United Kingdom',
    },
    briefDescription: 'Nunc at sem varius, bibendum diam nec, tempus magna.',
    description:
      'Suspendisse euismod nunc sed erat scelerisque, nec pulvinar enim tempor. Pellentesque luctus imperdiet lobortis. Cras volutpat eget lorem feugiat aliquet. Curabitur id cursus turpis, ullamcorper accumsan ante. Nulla cursus nisi vel eleifend maximus. Quisque scelerisque quam ut finibus lacinia. Maecenas venenatis massa quis velit ultricies interdum. Quisque a lectus odio.',
    images: ['https://cloudinary.com/imgId9', 'https://cloudinary.com/imgId10'],
    attendees: [
      { userId: 3, creator: true },
      { userId: 2, creator: false },
      { userId: 4, creator: false },
    ],
  },
];
