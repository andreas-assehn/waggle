User:

- userId: number, (firebase generated),
- name: string, (user input),
- email: string, (user input),
- password: hash string, (user input/firebase generated),
- location: (find out data type), (looks like float tuple), possible {long: float, lat: float}?
- verified: boolean,
- notifications: boolean/string,
- dark mode: boolean,
- swipe_yes: userId[],
- swipe_no: userId[],
- images: Images[]
- Dog:
  - name: string,
  - breed?: string,
  - size: string, (dropdown, by weight category?)
  - gender: string, (dropdown, Male&Female option too)
  - energy_level: string (dropdown), number? (scale?)
  - dog friendliness: string (dropdown), number? (scale?)
  - human friendliness: string (dropdown), number? (scale?)
  - description: string,
  - brief description: string (150 chars);
  - likes: string[] (pre approved options?),
  - dislikes: string[] (pre approved options?),
  - preferences: [{}]

get /users/
post /users/:userId
put /users/:userId

Matches

- userId: userIds[]

get /matches/
post /matches/:userId
put /matches/:userId

Events:

- EventId: number,
- DateTime: number/Date,
- Location: string, map pinned?, possible {long: float, lat: float}?
- Brief Description: string,
- Description: string,
- images: Images[],
- Attendees: [{userdId:number, creator: boolean}]

get /events/
post /events/:userId
put /events/:eventId/:userId

Messages? (How does websocket store prev messages?)

Location: https://nominatim.org/
https://nominatim.org/release-docs/develop/api/Reverse/
use above API to convert a long/lat point into an address. Test to see what data is sent back
Google Maps API: distance calulated

MongoAtlas setup
