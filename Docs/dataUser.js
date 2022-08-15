const likesDislikes = [
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

const matches = [
  {
    userId: 1,
    matched: [2, 4],
  },
  {
    userId: 2,
    matched: [3],
  },
  {
    userId: 3,
    matched: [2, 5],
  },
  {
    userId: 4,
    matched: [1, 5],
  },
  {
    userId: 5,
    matched: [3, 4],
  },
];

const users = [
  {
    userId: 1,
    name: 'Keval',
    email: 'keval@test.com',
    password: 'passkeval',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 4YR',
      country: 'United Kingdom',
      country_code: 'gb',
      lon: -0.09292904665889001,
      lat: 51.49983975,
      state_code: 'ENG',
      formatted:
        'CAN Mezzanine, 7-14 Great Dover Street, London, SE1 4YR, United Kingdom',
      address_line1: 'CAN Mezzanine',
      address_line2: '7-14 Great Dover Street, London, SE1 4YR, United Kingdom',
    },
    profilePicture: 'https://images.dog.ceo/breeds/maltese/n02085936_899.jpg',
    verified: true,
    notifications: true,
    darkMode: false,
    swipeYes: [2, 4],
    swipeNo: [3],
    dog: {
      name: 'Hendrix',
      breed: 'Maltese',
      size: 2,
      gender: 'male',
      energy_level: 4,
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
      preferences: [
        {
          distance: 500,
          size: [1, 2, 3],
          gender: 'any',
          energy_level: [3, 4, 5],
        },
      ],
    },
  },
  {
    userId: 2,
    name: 'Kevin',
    email: 'kevin@test.com',
    password: 'passkevin',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 0AR',
      country: 'United Kingdom',
      country_code: 'gb',
      lon: -0.08947282617611846,
      lat: 51.50335215,
      state_code: 'ENG',
      formatted:
        'Roman Southwark, 18–20 Newcomen Street, London, SE1 0AR, United Kingdom',
      address_line1: 'Roman Southwark',
      address_line2: '18–20 Newcomen Street, London, SE1 0AR, United Kingdom',
    },
    profilePicture: 'https://images.dog.ceo/breeds/husky/n02110185_1614.jpg',
    verified: true,
    notifications: true,
    darkMode: true,
    swipeYes: [1, 3],
    swipeNo: [4],
    dog: {
      name: 'Bear',
      breed: 'Husky',
      size: 3,
      gender: 'male',
      energy_level: 5,
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
      preferences: [
        {
          distance: 500,
          size: [1, 2, 3, 4],
          gender: 'any',
          energy_level: [3, 4, 5],
        },
      ],
    },
  },
  {
    userId: 3,
    name: 'Freya',
    email: 'freya@test.com',
    password: 'passfreya',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 1DF',
      country: 'United Kingdom',
      country_code: 'gb',
      lon: -0.0946555,
      lat: 51.4989975,
      state_code: 'ENG',
      formatted:
        'Gloucester Court, Swan Street, London, SE1 1DF, United Kingdom',
      address_line1: 'Gloucester Court',
      address_line2: 'Swan Street, London, SE1 1DF, United Kingdom',
    },
    profilePicture: 'https://images.dog.ceo/breeds/retriever-golden/nina.jpg',
    verified: true,
    notifications: true,
    darkMode: true,
    swipeYes: [2, 4, 5],
    swipeNo: [],
    dog: {
      name: 'Lacey',
      breed: 'Golden Retriever',
      size: 3,
      gender: 'female',
      energy_level: 5,
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
      preferences: [
        {
          distance: 500,
          size: [1, 2, 3, 4],
          gender: 'female',
          energy_level: [3, 4, 5],
        },
      ],
    },
  },
  {
    userId: 4,
    name: 'Andreas',
    email: 'andreas@test.com',
    password: 'passandreas',
    location: {
      city: 'London',
      county: 'Greater London',
      state: 'England',
      postcode: 'SE1 8QH',
      country: 'United Kingdom',
      country_code: 'gb',
      lon: -0.10572646114155257,
      lat: 51.5016975,
      state_code: 'ENG',
      result_type: 'building',
      formatted: '5 Valentine Place, London, SE1 8QH, United Kingdom',
      address_line1: '5 Valentine Place',
      address_line2: 'London, SE1 8QH, United Kingdom',
    },
    profilePicture: 'https://images.dog.ceo/breeds/samoyed/n02111889_2650.jpg',
    verified: true,
    notifications: true,
    darkMode: false,
    swipeYes: [1, 5],
    swipeNo: [2],
    dog: {
      name: 'Cleo',
      breed: '',
      size: 3,
      gender: 'female',
      energy_level: 3,
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
      preferences: [
        {
          distance: 750,
          size: [2, 3, 4],
          gender: 'female',
          energy_level: [3, 4, 5],
        },
      ],
    },
  },
  {
    userId: 5,
    name: 'Kara',
    email: 'kara@test.com',
    password: 'passkara',
    location: {
      country_code: 'gb',
      country: 'United Kingdom',
      city: 'London',
      state: 'England',
      postcode: 'SE17',
      county: 'Greater London',
      lon: -0.092989,
      lat: 51.491489,
      state_code: 'ENG',
      formatted: '22-44 Walters Close, London, SE17, United Kingdom',
      address_line1: '22-44 Walters Close',
      address_line2: 'London, SE17, United Kingdom',
    },
    profilePicture: 'https://images.dog.ceo/breeds/germanshepherd/Hannah.jpg',
    verified: true,
    notifications: true,
    darkMode: false,
    swipeYes: [1, 3, 4],
    swipeNo: [],
    dog: {
      name: 'Hannah',
      breed: '',
      size: 4,
      gender: 'female',
      energy_level: 4,
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
      preferences: [
        {
          distance: 750,
          size: [3, 4, 5],
          gender: 'any',
          energy_level: [3, 4, 5],
        },
      ],
    },
  },
];