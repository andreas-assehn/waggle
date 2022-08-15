# Schemas

## User

- userId: string, (firebase generated),
- name: string, (user input),
- email: string, (user input),
- location?: look at Location below,
- verified: boolean,
- notifications: boolean,
- darkMode: boolean,
- swipeYes: userId[],
- swipeNo: userId[],
- preferences: {  maxDistance: number (2.5K?);
  size: string[];
  gender: string[];
  energyLevel: string[]}
- dog?:
  - name: string,
  - breed?: string,
  - size: string, (dropdown, by weight category?,1smallest - 4 biggest)
  - gender: string, (dropdown, Male&Female option too)
  - energyLevel: string (dropdown), number? (scale?)
  - dogFriendliness?: string (dropdown), number? (scale?)
  - humanFriendliness?: string (dropdown), number? (scale?)
  - description?: string,
  - brief description?: string (100 chars);
  - likes?: string[] (pre approved options?),
  - dislikes?: string[] (pre approved options?),
  - images?: Images[]

get /users/
post /users/:userId
put /users/:userId

## Matches

- userId: string
- matchIds: string[]

get /matches/
post /matches/:userId
put /matches/:userId

## Events

- eventId: string,
- dateTime: Date,
- location: {
  city: string;
  county: string;
  state: string;
  postcode?: string;
  country: string;
  countryCode: string;
  lon: number;
  lat: number;
  stateCode: string;
  formatted: string;
  addressLine1: string;
  addressLine2: string;
}
- briefDescription?: string,
- description: string,
- images?: Images[],
- attendees: [{userdId:number, creator: boolean}]

get /events/
post /events/:userId
put /events/:eventId/:userId

## Messages? (How does websocket store prev messages?)

## Location

- city: string,
- county: string,
- state: string,
- postcode?: string,
- country: string,
- countryCode: string,
- lon: double,
- lat: double,
- stateCode?: string,
- formatted: string,
- addressLine1: string,
- addressLine2: string,

https://apidocs.geoapify.com/playground/geocoding#autocomplete
@geoapify/geocoder-autocomplete

user location input, autocomplete, or use my location (if this is clicked then take current log/lat and send to geoapify reverse geocoding)

Possible to update user location in settings page

## MongoAtlas setup

ROUTES = {
user-page: (id)=>`/user${id}`,
dashboard: '/dashboard'
}

Distance between users:
https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

## Extra Credits
Route Planning: https://apidocs.geoapify.com/playground/routing
Npm GeoApify
