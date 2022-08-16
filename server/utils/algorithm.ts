import { Dog, User } from './Types';

// SORTING BASELINE ALGORITHM
// No geo! This doesn't take user preferences into account,
// but will sort dogs matching energylevel, size and age.
export function sortWaggles(user: User, users: User[]) {
  if (!user.dog) return new Error('Please complete your profile');
  const myDog: Dog = user.dog;
  const filteredUsers: User[] = users.filter((user) => {
    if (user.dog) return user;
  });

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

// MOCK DATA ( Let it stay for now. )
// console.log(sortWaggles(dogToFindSwagglesFor, dogs));

// const dogs = [
//   {
//     name: 'chico',
//     energyLevel: 3,
//     size: 3,
//     age: 4,
//     gender: 'male',
//   },
//   {
//     name: 'equador',
//     energyLevel: 2,
//     size: 3,
//     age: 4,
//     gender: 'male',
//   },
//   {
//     name: 'salva',
//     energyLevel: 1,
//     size: 4,
//     age: 10,
//     gender: 'female',
//   },
//   {
//     name: 'chia',
//     energyLevel: 3,
//     size: 2,
//     age: 1,
//     gender: 'female',
//   },
//   {
//     name: 'chivas',
//     energyLevel: 4,
//     size: 2,
//     age: 5,
//     gender: 'male',
//   },
// ];
// const dogToFindSwagglesFor = {
//   name: 'maestra',
//   energyLevel: 3,
//   size: 2,
//   age: 1,
//   gender: 'female',
// };

// const user = {
//   preferences: {
//     distance: 500,
//     size: [1, 2, 3],
//     gender: 'any',
//     energy_level: [3, 4, 5],
//   },
//   dog: {
//     name: 'maestra',
//     energyLevel: 3,
//     size: 2,
//     age: 1,
//     gender: 'female',
//   },
// };
