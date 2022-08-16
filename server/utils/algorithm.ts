import { Dog, User } from './Types';

// Function that returns only users who have a dog
function usersWithDog(user: User, users: User[]) {
  const filteredUsers: User[] = users.filter((user) => {
    if (user.dog) return user;
  });
  return filteredUsers;
}

// Function that return only users who match distance preference
function usersInArea(user: User, users: User[]) {
  const filteredUsers = users.filter((otherUser) => {
    if (
      getDistanceFromLatLonInKm(user, otherUser) <= user.preferences.maxDistance
    )
      return otherUser;
  });
  return filteredUsers;
}

function getDistanceFromLatLonInKm(user: User, otherUser: User) {
  const radiusOfEarth = 6371;
  const degreesLatitude = degreesToRadiant(
    otherUser.location!.lat - user.location!.lat
  );
  const degreesLongitude = degreesToRadiant(
    otherUser.location!.lon - user.location!.lon
  );
  const a =
    Math.sin(degreesLatitude / 2) * Math.sin(degreesLatitude / 2) +
    Math.cos(degreesToRadiant(user.location!.lat)) *
      Math.cos(degreesToRadiant(otherUser.location!.lon)) *
      Math.sin(degreesLongitude / 2) *
      Math.sin(degreesLongitude / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInKm = radiusOfEarth * c;
  return distanceInKm;
}

function degreesToRadiant(degree: number) {
  return degree * (Math.PI / 180);
}

// SORTING BASELINE ALGORITHM
// No geo! This doesn't take user preferences into account,
// but will sort dogs matching energylevel, size and age.
export function sortWaggles(user: User, users: User[]) {
  if (!user.dog) return new Error('Please complete your profile');
  const myDog: Dog = user.dog;
  const filteredUsers: User[] = usersInArea(user, usersWithDog(user, users));

  const paramOne: keyof Dog = 'energyLevel';
  const paramTwo: keyof Dog = 'size';
  const paramThree: keyof Dog = 'age';

  // First to sixth filter function is calling the actual
  // filter functions with varyring amounts of parameters
  // and in different order, according to algorithm description.
  const firstFilter = threeParameterMatches(
    myDog,
    filteredUsers,
    paramOne,
    paramTwo,
    paramThree
  );
  const secondFilter = twoParameterMatches(
    myDog,
    filteredUsers,
    paramOne,
    paramTwo
  );
  const thirdFilter = oneParameterMatches(myDog, filteredUsers, paramOne);
  const fourthFitler = twoParameterMatches(
    myDog,
    filteredUsers,
    paramTwo,
    paramThree
  );
  const fifthFilter = oneParameterMatches(myDog, filteredUsers, paramTwo);
  const sixthFilter = oneParameterMatches(myDog, filteredUsers, paramThree);

  // Returning results in order plus the remaining users
  // whose dog who doesn't match any parameter.
  return [
    ...firstFilter,
    ...secondFilter,
    ...thirdFilter,
    ...fourthFitler,
    ...fifthFilter,
    ...sixthFilter,
    ...filteredUsers,
  ];
}

// Actual filter functions: When finding a match they will
// remove matched dog from array copy, so they won't be iterated again
function threeParameterMatches(
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

function twoParameterMatches(
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

function oneParameterMatches(
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
