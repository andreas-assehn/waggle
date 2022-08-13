User:

- userId: number, (firebase generated),
- name: string, (user input),
- email: string, (user input),
- password: hash string, (user input/firebase generated),
- location: look at samplelocation data page,
- verified: boolean,
- notifications: boolean/string,
- dark mode: boolean,
- swipe_yes: userId[],
- swipe_no: userId[],
- images: Images[]
- Dog:
  - name: string,
  - breed?: string,
  - size: string, (dropdown, by weight category?,1smallest - 4 biggest)
  - gender: string, (dropdown, Male&Female option too)
  - energy_level: string (dropdown), number? (scale?)
  - dog friendliness: string (dropdown), number? (scale?)
  - human friendliness: string (dropdown), number? (scale?)
  - description: string,
  - brief description: string (100 chars);
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

Location:
https://apidocs.geoapify.com/playground/geocoding#autocomplete
@geoapify/geocoder-autocomplete

user location input, autocomplete, or use my location (if this is clicked then take current log/lat and send to geoapify reverse geocoding)

Possible to update user location in settings page

MongoAtlas setup

ROUTES = {
user-page: (id)=>`/user${id}`,
dashboard: '/dashboard'
}

Distance between users:
https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

Extra Credits:
Route Planning: https://apidocs.geoapify.com/playground/routing
Npm GeoApify
