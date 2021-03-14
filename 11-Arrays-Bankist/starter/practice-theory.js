/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/* // --- Simple Array Methods ---
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice Method
// It DOES NOT mutates the original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]); // SPREAD Operator

// Splice Method
// It DOES mutates the original array
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr); // splice deleted elements
arr.splice(1, 2);
console.log(arr);

// Reverse Method
// It DOES mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // the original array mutated

// Concat Method
// It DOES NOT mutates the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Spread Operator

// Join Method
console.log(letters.join(' - '));

// --- Looping Arrays: forEach ---

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
//  if (movement > 0) {
//    console.log(`You deposited ${movement}`);
//  } else {
//    console.log(`You withdrew ${Math.abs(movement)}`);
//  }
//}

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`------------`);

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// There is no break in forEach loop

// --- forEach with Maps and Sets ---
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
}); */

//////////////////////////
//  Coding Challenge #1 //
//////////////////////////
//Julia and Kate are doing a study on dogs. So each
//of them asked 5 dog owners about their dog's age,
//and stored the data into an array (one array for
//each). For now, they are just interested in knowing
//whether a dog is an adult or a puppy.
//A dog is an adult if it is at least 3 years old,
//and it's a puppy if it's less than 3 years old.
//Your tasks:
//Create a function 'checkDogs', which accepts 2
//arrays of dog's ages ('dogsJulia' and 'dogsKate'),
//and does the following things:
//1. Julia found out that the owners of the first
//and the last two dogs actually have cats, not dogs!
//So create a shallow copy of Julia's array, and
//remove the cat ages from that copied array
//(because it's a bad practice to mutate function
//parameters)
//2. Create an array with both Julia's (corrected)
//and Kate's data
//3. For each remaining dog, log to the console
//whether it's an adult ("Dog number 1 is an adult,
//and is 5 years old") or a puppy ("Dog number 2 is
//still a puppy �")
//4. Run the function for both test datasets
/* const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(1, -2);
  const allAges = dogsJuliaCopy.concat(dogsKate);

  allAges.forEach(function (age, i) {
    age < 3
      ? console.log(`Dog number ${i} is still a puppy`)
      : console.log(`Dog number ${i} is an adult, and is ${age} years old`);
  });
};

checkDogs(juliaData, kateData); */

// --- Transformations: Map, Filter, and Reduce ---

// Map method returns a NEW array containing the
// results of applying an operation on all original
// elements

// Filter method returns a NEW array containing
// the array elements that passed a specified
// test condition

// Reduce method boils ("reduces") all array
// elements down to one single value (e.g. adding
// all elements together)

/* // --- The map method ---
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

// The same with FOR loop
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

// The same with arrow function
const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow);

// Map method has index as a second parameter
const movementDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementDescriptions);
 */

/* // --- Filter method ---
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(movements);
console.log(withdrawals);

// --- Reduce method ---
console.log(movements);

const balance = movements.reduce(function (accumulator, cur, i, arr) {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + cur;
}, 0);
console.log(balance);

// The same with FOR loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// The same with arrow function
const balance3 = movements.reduce((accumulator, cur) => accumulator + cur, 0);
console.log(balance3);

// Maximum value
const maximum = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maximum);
 */

//////////////////////////
//  Coding Challenge #2 //
//////////////////////////
//Create a function 'calcAverageHumanAge', which
//accepts an arrays of dog's ages ('ages'), and does
//the following things in order:
//1. Calculate the dog age in human years using the
//following formula: if the dog is <= 2 years old,
//humanAge = 2 * dogAge. If the dog is > 2 years old,
//humanAge = 16 + dogAge * 4
//2. Exclude all dogs that are less than 18 human
//years old (which is the same as keeping dogs that
//are at least 18 years old)
//3. Calculate the average human age of all adult
//dogs (you should already know from other challenges
//how we calculate averages �)
//4. Run the function for both test datasets
/* const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((dogAge, i) => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  const filteredHumanAges = humanAge.filter(age => age >= 18);
  const avgHumanAge = filteredHumanAges.reduce(
    (accum, cur, i, arr) => accum + cur / arr.length,
    0
  );
  return avgHumanAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
 */

/* // --- Chaining Methods ---
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); */

//////////////////////////
//  Coding Challenge #3 //
//////////////////////////
//Rewrite the 'calcAverageHumanAge' function from
//Challenge #2, but this time as an arrow function,
//and using chaining!
/* const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((accum, cur, i, arr) => accum + cur / arr.length, 0);

const a = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const b = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(a, b); */

/// --- Find Method ---
// Retrieves an array element based on a condition
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0); // returen boolean
console.log(movements);
console.log(firstWithdrawal); // returned only the
// first element satisfying condition

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); */

// --- FindIndex Method ---
// return an index of the element

/* // --- Some and Every Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Includes Method checks only for EQUALITY
console.log(movements);
console.log(movements.includes(-130));

// Some Method checks for ANY of the objects falling
// into CONDITION
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

// Every Method checks for EVERY object
// falling into CONDITION

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

// -- Flat and FlatMap Methods

/* // Flat removes nested arrays (only 1 level deep)
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr.flat());

// second level deep
const arrDeep = [
  [[1, 2], 3],
  [4, [5, 6]],
  [7, [8], 9],
];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
console.log(overalBalance);

const overalBalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overalBalance1);

// flatMap is a comination of map and flat
// it goes only 1 level deep
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overalBalance2); */

// --- Sorting Arrays ---
// Sort method DOES mutate the original array

// Strings
//const owners = ['Jonas', 'Zach', 'Martha', 'Adam'];
//console.log(owners.sort());
//console.log(owners);

// Numbers
// Sort method sorts based on strings
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0 B, A (switch order)

// Sort in ascending order
//movements.sort((a, b) => {
//  if (a > b) return 1;
//  if (b > a) return -1;
//});
// OR THE SAME
//movements.sort((a, b) => a - b);
//console.log(movements);

// Sort in descending order
//movements.sort((a, b) => {
//  if (a > b) return -1;
//  if (b > a) return 1;
//});
//movements.sort((a, b) => b - a);
//console.log(movements);

// --- More ways of creating and filling arrays ---
//console.log(new Array([1, 2, 3, 4, 5, 6, 8]));

// Create an array with 7 empty elements
//const x = new Array(7);
//console.log(x);

// Fill method
// Mutates the original array
//x.fill(1, 3, 5);
//console.log(x);

//const arr = [1, 2, 3, 4, 5, 6, 8];
//arr.fill(23, 4, 6);
//console.log(arr);

// Array.from method
//const y = Array.from({ length: 7 }, () => 1);
//console.log(y);

//const z = Array.from({ length: 7 }, (_, i) => i + 1);
//console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    el => Number(el.textContent.replace('€', ''))
  );
  //console.log(movementsUI);
});

// --- Array Methods Practice ---
// Exercise 1: Calculate sum of all the deposits
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
//console.log(bankDepositSum);

// Exercise 2: how many deposits with at least 1000EUR
// solution 1
//const numDeposits1000 = accounts
//  .flatMap(acc => acc.movements)
//  .filter(mov => mov > 1000).length;

// solution 2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
//console.log(numDeposits1000);

// Exercise 3: create a new object that contains sums of
// withdrawals and deposits
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
//console.log(deposits, withdrawals);

// Exresice 4: create function to capitalize strings
// this is a nice title => This Is a Nice Title
/* const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
}; */
//console.log(convertTitleCase('this is a nice title'));
//console.log(convertTitleCase('This Is a Nice Title'));
//console.log(convertTitleCase('this is a LONG title but not too long'));
//console.log(convertTitleCase('and here is another title with an EXAMPLE'));

//////////////////////////
//  Coding Challenge #4 //
//////////////////////////
//1. Loop over the 'dogs' array containing dog objects,
//and for each dog, calculate the recommended food
//portion and add it to the object as a new property.
// Do not create a new array, simply loop over the
//array. Forumla: recommendedFood = weight ** 0.75 * 28.
//(The result is in grams of food, and the weight needs
//to be in kg)
//2. Find Sarah's dog and log to the console whether
//it's eating too much or too little. Hint: Some dogs
//have multiple owners, so you first need to find Sarah
//in the owners array, and so this one is a bit tricky
//(on purpose) �
//3. Create an array containing all owners of dogs who
//eat too much ('ownersEatTooMuch') and an array with
//all owners of dogs who eat too little
//('ownersEatTooLittle').
//4. Log a string to the console for each array created
//in 3., like this: "Matilda and Alice and Bob's dogs
//eat too much!" and "Sarah and John and Michael's dogs
//eat too little!"
//5. Log to the console whether there is any dog eating
//exactly the amount of food that is recommended (just
//true or false)
//6. Log to the console whether there is any dog eating
//an okay amount of food (just true or false)
//7. Create an array containing the dogs that are
//eating an okay amount of food (try to reuse the
//condition used in 6.)
//8. Create a shallow copy of the 'dogs' array and sort
//it by recommended food portion in an ascending order
//(keep in mind that the portions are inside the
//array's objects �)

/* const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function (dog, i) {
  // Calculate portion
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog eats too ${
    dogSarah.curFood > dogSarah.dogrecFood ? 'much' : 'little'
  }`
); */

// 3
//const ownersEatTooMuch = dogs
//  .filter(dog => dog.curFood > dog.recFood)
//  .flatMap(dog => dog.owners);
//console.log(ownersEatTooMuch);

//const ownersEatTooLittle = dogs
//  .filter(dog => dog.curFood < dog.recFood)
//  .flatMap(dog => dog.owners);

// 4
//"Matilda and Alice and Bob's dogs eat too much!"
//"Sarah and John and Michael's dogs eat too little!"
//console.log(`${ownersEatTooMuch.join(` and `)} dogs eat too much`);
//console.log(`${ownersEatTooLittle.join(` and `)} dogs eat too little`);

// 5
//console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6
//const checkEatingOkay = dog =>
// dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
//console.log(dogs.some(checkEatingOkay));

// 7
//console.log(dogs.filter(checkEatingOkay));

// 8
//const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
//console.log(dogsSorted);
