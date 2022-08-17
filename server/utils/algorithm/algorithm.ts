import {
  usersWithDog,
  usersWithLocation,
  filterOutYourself,
  usersInArea,
  oneParameterMatches,
  twoParameterMatches,
  threeParameterMatches,
} from './helperFunctions';
import { Dog, User } from '../Types';

// Main algorithm
export function sortWaggles(user: User, users: User[]) {
  if (!user.dog || !user.location)
    return new Error('Please complete your profile');

  const myDog: Dog = user.dog;
  // Initial filtering, see function names
  const usersHavingDog: User[] = usersWithDog(user, users);
  const usersHavingLocation: User[] = usersWithLocation(user, usersHavingDog);
  const usersNotYou: User[] = filterOutYourself(user, usersHavingLocation);
  const filteredUsers: User[] = usersInArea(user, usersNotYou);

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
  ];
}
