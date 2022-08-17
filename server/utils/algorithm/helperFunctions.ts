import { Dog, User } from '../../../globalUtils/Types';

// Filters out users who do not have a dog
export function usersWithDog(user: User, users: User[]) {
  const filteredUsers: User[] = users.filter((otherUser) => {
    if (otherUser.dog) return otherUser;
  });
  return filteredUsers;
}

// Filters out users who do not have a location
export function usersWithLocation(user: User, users: User[]) {
  const filteredUsers: User[] = users.filter((otherUser) => {
    if (otherUser.location) return otherUser;
  });
  return filteredUsers;
}

// Filters out yourself from users array
export function filterOutYourself(user: User, users: User[]) {
  const filteredUsers: User[] = users.filter((otherUser) => {
    if (user.userId !== otherUser.userId) return otherUser;
  });
  return filteredUsers;
}

// Filters out users already swiped
export function usersNotSwiped(user: User, users: User[]) {
  const filteredUsers: User[] = users.filter((otherUser) => {
    if (
      !user.swipeYes!.includes(otherUser.userId) &&
      !user.swipeNo!.includes(otherUser.userId)
    )
      return otherUser;
  });
  return filteredUsers;
}

// Filters out users that does not match your distance preference
export function usersInArea(user: User, users: User[]) {
  const filteredUsers = users.filter((otherUser) => {
    if (
      getDistanceFromLatLonInKm(user, otherUser) <=
      user.preferences!.maxDistance
    )
      return otherUser;
  });
  return filteredUsers;
}

// Calculates distance in km from one user to another
export function getDistanceFromLatLonInKm(user: User, otherUser: User) {
  const radiusOfEarth = 6371;
  const degreesLatitude = degreesToRadian(
    otherUser.location!.lat - user.location!.lat
  );
  const degreesLongitude = degreesToRadian(
    otherUser.location!.lon - user.location!.lon
  );
  const a =
    Math.sin(degreesLatitude / 2) * Math.sin(degreesLatitude / 2) +
    Math.cos(degreesToRadian(user.location!.lat)) *
      Math.cos(degreesToRadian(otherUser.location!.lon)) *
      Math.sin(degreesLongitude / 2) *
      Math.sin(degreesLongitude / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInKm = radiusOfEarth * c;
  return distanceInKm;
}
// Converts degrees to radian
export function degreesToRadian(degree: number) {
  return degree * (Math.PI / 180);
}

// Actual filter functions: When finding a match they will
// remove matched user from array copy, so they won't be iterated again
export function threeParameterMatches(
  myDog: Dog,
  filteredUsers: User[],
  paramOne: keyof Dog,
  paramTwo: keyof Dog,
  paramThree: keyof Dog
) {
  const filtered = filteredUsers.filter((user, index) => {
    if (
      myDog[paramOne] === user.dog![paramOne] &&
      myDog[paramTwo] === user.dog![paramTwo] &&
      myDog[paramThree] === user.dog![paramThree]
    ) {
      filteredUsers.splice(index, 1);
      return user;
    }
  });
  return filtered;
}

export function twoParameterMatches(
  myDog: Dog,
  filteredUsers: User[],
  paramOne: keyof Dog,
  paramTwo: keyof Dog
) {
  const filtered = filteredUsers.filter((user, index) => {
    if (
      myDog[paramOne] === user.dog![paramOne] &&
      myDog[paramTwo] === user.dog![paramTwo]
    ) {
      filteredUsers.splice(index, 1);
      return user;
    }
  });
  return filtered;
}

export function oneParameterMatches(
  myDog: Dog,
  filteredUsers: User[],
  paramOne: keyof Dog
) {
  const filtered = filteredUsers.filter((user, index) => {
    if (myDog[paramOne] === user.dog![paramOne]) {
      filteredUsers.splice(index, 1);
      return user;
    }
  });
  return filtered;
}
