export const likesDislikes = [
  'hugs',
  'pets',
  'walks',
  'sniffs',
  'horses',
  'outdoors',
  'cars',
  'bicycles',
  'roads',
  'grass',
  'ball games',
  'children',
  'other pets',
  'hot',
  'cold',
  'fireworks',
];

export const matches = [
  {
    userId: '4jg6OCap5PQ3FANMuoG1FONJBvF2',
    matched: ['HsUxOdRgSbeq2oxCgAIox63m8oA3', 'pBpXPtTC8tP3ARlhUn45IzHgKyp2'],
  },
  {
    userId: 'HsUxOdRgSbeq2oxCgAIox63m8oA3',
    matched: ['8qw4gtm1VhWfcQDlfdNw7y9sQVm2'],
  },
  {
    userId: '8qw4gtm1VhWfcQDlfdNw7y9sQVm2',
    matched: ['HsUxOdRgSbeq2oxCgAIox63m8oA3', 'Z9R01fG87SYOQg1ASouLqPDskso2'],
  },
  {
    userId: 'pBpXPtTC8tP3ARlhUn45IzHgKyp2',
    matched: ['4jg6OCap5PQ3FANMuoG1FONJBvF2', 'Z9R01fG87SYOQg1ASouLqPDskso2'],
  },
  {
    userId: 'Z9R01fG87SYOQg1ASouLqPDskso2',
    matched: ['8qw4gtm1VhWfcQDlfdNw7y9sQVm2', 'pBpXPtTC8tP3ARlhUn45IzHgKyp2'],
  },
];

export const users = [
  {
    userId: '4jg6OCap5PQ3FANMuoG1FONJBvF2',
    name: 'Keval',
    email: 'keval@test.com',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 4YR',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.09292904665889001,
      lat: 51.49983975,
      stateCode: 'ENG',
      formatted:
        'CAN Mezzanine, 7-14 Great Dover Street, London, SE1 4YR, United Kingdom',
      addressLine1: 'CAN Mezzanine',
      addressLine2: '7-14 Great Dover Street, London, SE1 4YR, United Kingdom',
    },
    verified: true,
    notifications: true,
    darkMode: false,
    swipeYes: ['HsUxOdRgSbeq2oxCgAIox63m8oA3', 'pBpXPtTC8tP3ARlhUn45IzHgKyp2'],
    swipeNo: ['8qw4gtm1VhWfcQDlfdNw7y9sQVm2'],
    ownerImage:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    dog: {
      name: 'Hendrix',
      breed: 'Maltese',
      age: 5,
      size: 'small',
      gender: 'male',
      energyLevel: 4,
      dogFriendliness: 3,
      humanFriendliness: 5,
      images: [
        'https://images.dog.ceo/breeds/maltese/n02085936_4506.jpg',
        'https://images.dog.ceo/breeds/maltese/n02085936_899.jpg',
        'https://images.dog.ceo/breeds/maltese/n02085936_5488.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum mi, egestas eget ornare eu, blandit quis massa. In scelerisque blandit libero, a commodo lectus commodo sed. Proin ultricies justo vitae sapien ullamcorper, at ultrices turpis facilisis. Duis tempor accumsan quam, id pharetra est rhoncus egestas. ',
      briefDescription:
        'In tortor tortor, elementum eu lobortis nec, semper vitae nisl. In magna eros, suscipit ac libero a.',
      likes: ['sniffs', 'horses', 'outdoors'],
      dislikes: ['cars', 'bicycles', 'fireworks'],
    },
    preferences: {
      size: ['small', 'medium'],
      maxDistance: 0.5,
      gender: 'male',
      energyLevel: ['3', '4', '5'],
    },
  },
  {
    userId: 'HsUxOdRgSbeq2oxCgAIox63m8oA3',
    name: 'Kevin',
    email: 'kevin@test.com',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 0AR',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.08947282617611846,
      lat: 51.50335215,
      stateCode: 'ENG',
      formatted:
        'Roman Southwark, 18–20 Newcomen Street, London, SE1 0AR, United Kingdom',
      addressLine1: 'Roman Southwark',
      addressLine2: '18–20 Newcomen Street, London, SE1 0AR, United Kingdom',
    },
    verified: true,
    notifications: true,
    darkMode: true,
    swipeYes: ['4jg6OCap5PQ3FANMuoG1FONJBvF2', '8qw4gtm1VhWfcQDlfdNw7y9sQVm2'],
    swipeNo: ['pBpXPtTC8tP3ARlhUn45IzHgKyp2'],
    ownerImage:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    dog: {
      name: 'Bear',
      breed: 'Husky',
      age: 6,
      size: 'medium',
      gender: 'male',
      energyLevel: 5,
      dogFriendliness: 4,
      humanFriendliness: 4,
      images: [
        'https://images.dog.ceo/breeds/husky/n02110185_4186.jpg',
        'https://images.dog.ceo/breeds/husky/n02110185_1614.jpg',
        'https://images.dog.ceo/breeds/husky/n02110185_10047.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum mi, egestas eget ornare eu, blandit quis massa. In scelerisque blandit libero, a commodo lectus commodo sed. Proin ultricies justo vitae sapien ullamcorper, at ultrices turpis facilisis. Duis tempor accumsan quam, id pharetra est rhoncus egestas. ',
      briefDescription:
        'In tortor tortor, elementum eu lobortis nec, semper vitae nisl. In magna eros, suscipit ac libero a.',
      likes: ['sniffs', 'horses', 'outdoors', 'hugs', 'pets'],
      dislikes: ['hot', 'cars', 'bicycles', 'fireworks'],
    },
    preferences: {
      size: ['medium', 'small'],
      maxDistance: 0.5,
      gender: 'any',
      energyLevel: ['3', '4', '5'],
    },
  },
  {
    userId: '8qw4gtm1VhWfcQDlfdNw7y9sQVm2',
    name: 'Freya',
    email: 'freya@test.com',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 1DF',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.0946555,
      lat: 51.4989975,
      stateCode: 'ENG',
      formatted:
        'Gloucester Court, Swan Street, London, SE1 1DF, United Kingdom',
      addressLine1: 'Gloucester Court',
      addressLine2: 'Swan Street, London, SE1 1DF, United Kingdom',
    },
    verified: true,
    notifications: true,
    darkMode: true,
    swipeYes: [
      'HsUxOdRgSbeq2oxCgAIox63m8oA3',
      'pBpXPtTC8tP3ARlhUn45IzHgKyp2',
      'Z9R01fG87SYOQg1ASouLqPDskso2',
    ],
    swipeNo: [],
    ownerImage:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    dog: {
      name: 'Lacey',
      breed: 'Golden Retriever',
      age: 5,
      size: 'medium',
      gender: 'female',
      energyLevel: 5,
      dogFriendliness: 4,
      humanFriendliness: 4,
      images: [
        'https://images.dog.ceo/breeds/retriever-golden/n02099601_6820.jpg',
        'https://images.dog.ceo/breeds/retriever-golden/n02099601_2691.jpg',
        'https://images.dog.ceo/breeds/retriever-golden/nina.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum mi, egestas eget ornare eu, blandit quis massa. In scelerisque blandit libero, a commodo lectus commodo sed. Proin ultricies justo vitae sapien ullamcorper, at ultrices turpis facilisis. Duis tempor accumsan quam, id pharetra est rhoncus egestas. ',
      briefDescription:
        'In tortor tortor, elementum eu lobortis nec, semper vitae nisl. In magna eros, suscipit ac libero a.',
      likes: ['sniffs', 'horses', 'outdoors', 'hugs', 'pets'],
      dislikes: ['hot', 'cars', 'bicycles', 'fireworks'],
    },
    preferences: {
      size: ['small', 'medium', 'large'],
      maxDistance: 0.5,
      gender: 'female',
      energyLevel: ['3', '4', '5'],
    },
  },
  {
    userId: 'pBpXPtTC8tP3ARlhUn45IzHgKyp2',
    name: 'Andreas',
    email: 'andreas@test.com',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 8QH',
      country: 'United Kingdom',
      countryCode: 'gb',
      lon: -0.10572646114155257,
      lat: 51.5016975,
      stateCode: 'ENG',
      result_type: 'building',
      formatted: '5 Valentine Place, London, SE1 8QH, United Kingdom',
      addressLine1: '5 Valentine Place',
      addressLine2: 'London, SE1 8QH, United Kingdom',
    },
    verified: true,
    notifications: true,
    darkMode: false,
    swipeYes: ['4jg6OCap5PQ3FANMuoG1FONJBvF2', 'Z9R01fG87SYOQg1ASouLqPDskso2'],
    swipeNo: ['HsUxOdRgSbeq2oxCgAIox63m8oA3'],
    ownerImage:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    dog: {
      name: 'Cleo',
      breed: '',
      age: 4,
      size: 'medium',
      gender: 'female',
      energyLevel: 3,
      dogFriendliness: 4,
      humanFriendliness: 3,
      images: [
        'https://images.dog.ceo/breeds/samoyed/n02111889_10059.jpg',
        'https://images.dog.ceo/breeds/samoyed/n02111889_2136.jpg',
        'https://images.dog.ceo/breeds/samoyed/n02111889_2650.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum mi, egestas eget ornare eu, blandit quis massa. In scelerisque blandit libero, a commodo lectus commodo sed. Proin ultricies justo vitae sapien ullamcorper, at ultrices turpis facilisis. Duis tempor accumsan quam, id pharetra est rhoncus egestas. ',
      briefDescription:
        'In tortor tortor, elementum eu lobortis nec, semper vitae nisl. In magna eros, suscipit ac libero a.',
      likes: ['sniffs', 'horses', 'outdoors', 'hugs', 'pets'],
      dislikes: ['hot', 'cars', 'bicycles', 'fireworks'],
    },
    preferences: {
      size: ['small', 'medium'],
      maxDistance: 0.75,
      gender: 'female',
      energyLevel: ['3', '4', '5'],
    },
  },
  {
    userId: 'Z9R01fG87SYOQg1ASouLqPDskso2',
    name: 'Kara',
    email: 'kara@test.com',
    location: {
      countryCode: 'gb',
      country: 'United Kingdom',
      city: 'London',
      state: 'England',
      postcode: 'SE17',
      county: 'Greater London',
      lon: -0.092989,
      lat: 51.491489,
      stateCode: 'ENG',
      formatted: '22-44 Walters Close, London, SE17, United Kingdom',
      addressLine1: '22-44 Walters Close',
      addressLine2: 'London, SE17, United Kingdom',
    },
    verified: true,
    notifications: true,
    darkMode: false,
    swipeYes: [
      '4jg6OCap5PQ3FANMuoG1FONJBvF2',
      '8qw4gtm1VhWfcQDlfdNw7y9sQVm2',
      'pBpXPtTC8tP3ARlhUn45IzHgKyp2',
    ],
    swipeNo: [],
    ownerImage:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    dog: {
      name: 'Hannah',
      breed: '',
      age: 3,
      size: 'medium',
      gender: 'female',
      energyLevel: 4,
      dogFriendliness: 5,
      humanFriendliness: 3,
      images: [
        'https://images.dog.ceo/breeds/germanshepherd/n02106662_13912.jpg',
        'https://images.dog.ceo/breeds/germanshepherd/n02106662_16149.jpg',
        'https://images.dog.ceo/breeds/germanshepherd/Hannah.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum mi, egestas eget ornare eu, blandit quis massa. In scelerisque blandit libero, a commodo lectus commodo sed. Proin ultricies justo vitae sapien ullamcorper, at ultrices turpis facilisis. Duis tempor accumsan quam, id pharetra est rhoncus egestas. ',
      briefDescription:
        'In tortor tortor, elementum eu lobortis nec, semper vitae nisl. In magna eros, suscipit ac libero a.',
      likes: ['sniffs', 'horses', 'outdoors', 'hugs', 'pets'],
      dislikes: ['hot', 'cars', 'bicycles', 'fireworks'],
    },
    preferences: {
      size: ['small', 'medium', 'large'],
      maxDistance: 0.75,
      gender: 'any',
      energyLevel: ['3', '4', '5'],
    },
  },
];
