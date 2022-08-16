import { Dog } from './Types';

// SORTING BASELINE ALGORITHM
// No geo! This doesn't take user preferences into account,
// but will sort dogs matching energylevel, size and age.
export function sortWaggles(myDog: Dog, otherDogs: Dog[]) {
  const arrayOfDogs: Dog[] = otherDogs;
  const paramOne: keyof Dog = 'energyLevel';
  const paramTwo: keyof Dog = 'size';
  const paramThree: keyof Dog = 'age';

  // First to sixth filter function is calling the actual
  // filter functions with varyring amounts of parameters
  // and in different order, according to algorithm description.
  const firstFilter = threeParameterMatches(
    myDog,
    arrayOfDogs,
    paramOne,
    paramTwo,
    paramThree
  );
  const secondFilter = twoParameterMatches(
    myDog,
    arrayOfDogs,
    paramOne,
    paramTwo
  );
  const thirdFilter = oneParameterMatches(myDog, arrayOfDogs, paramOne);
  const fourthFitler = twoParameterMatches(
    myDog,
    arrayOfDogs,
    paramTwo,
    paramThree
  );
  const fifthFilter = oneParameterMatches(myDog, arrayOfDogs, paramTwo);
  const sixthFilter = oneParameterMatches(myDog, arrayOfDogs, paramThree);
  // Returning results in order plus the remaining dogs
  // that doesn't match any parameter.
  return [
    ...firstFilter,
    ...secondFilter,
    ...thirdFilter,
    ...fourthFitler,
    ...fifthFilter,
    ...sixthFilter,
    ...arrayOfDogs,
  ];
}
// Actual filter functions: When finding a match they will
// remove matched dog from array copy, so they won't be iterated again
function threeParameterMatches(
  myDog: Dog,
  arrayOfDogs: Dog[],
  paramOne: keyof Dog,
  paramTwo: keyof Dog,
  paramThree: keyof Dog
) {
  const filtered = arrayOfDogs.filter((dog, index) => {
    if (
      myDog[paramOne] === dog[paramOne] &&
      myDog[paramTwo] === dog[paramTwo] &&
      myDog[paramThree] === dog[paramThree]
    ) {
      arrayOfDogs.splice(index, 1);
      return dog;
    }
  });
  return filtered;
}

function twoParameterMatches(
  myDog: Dog,
  arrayOfDogs: Dog[],
  paramOne: keyof Dog,
  paramTwo: keyof Dog
) {
  const filtered = arrayOfDogs.filter((dog, index) => {
    if (
      myDog[paramOne] === dog[paramOne] &&
      myDog[paramTwo] === dog[paramTwo]
    ) {
      arrayOfDogs.splice(index, 1);
      return dog;
    }
  });
  return filtered;
}

function oneParameterMatches(
  myDog: Dog,
  arrayOfDogs: Dog[],
  paramOne: keyof Dog
) {
  const filtered = arrayOfDogs.filter((dog, index) => {
    if (myDog[paramOne] === dog[paramOne]) {
      arrayOfDogs.splice(index, 1);
      return dog;
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
