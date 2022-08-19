import {
  usersWithDog,
  usersWithLocation,
  filterOutYourself,
  usersNotSwiped,
  usersInArea,
  oneParameterMatches,
  twoParameterMatches,
  threeParameterMatches,
} from './helperFunctions';
import { Dog, User } from '../../../globalUtils/Types';

// Main algorithm
export function sortWaggles(user: User, users: User[]) {
  if (!user.dog || !user.location)
    return new Error('Please complete your profile');

  const myDog: Dog = user.dog;
  const usersCopy: User[] = users;

  // Initial filtering
  const getUsersWithDog: User[] = usersWithDog(user, usersCopy);
  const getUsersWithLocation: User[] = usersWithLocation(user, getUsersWithDog);
  const getUsersNotYou: User[] = filterOutYourself(user, getUsersWithLocation);
  const getUsersNotSwiped: User[] = usersNotSwiped(user, getUsersNotYou);
  const getUsersInArea: User[] = usersInArea(user, getUsersNotSwiped);
  const filteredUsers: User[] = getUsersInArea;

  // Sorting parameters
  const paramOne: keyof Dog = 'energyLevel';
  const paramTwo: keyof Dog = 'size';
  const paramThree: keyof Dog = 'age';

  // Actual Sorting:
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
  ].map((user) => ({
    _id: user._id,
    userId: user.userId,
    name: user.name,
    verified: user.verified,
    dog: user.dog,
    ownerImage: user.ownerImage,
    distance: user.distance,
  }));
}

export function matchedWaggles(user: User, users: User[]) {
  if (user.matches?.length) {
    return users.filter((eachUser) => user.matches?.includes(eachUser.userId));
  } else return {};
}
