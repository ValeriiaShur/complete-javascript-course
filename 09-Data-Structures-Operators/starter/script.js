'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  nameRestaraunt: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Before ES6
  // openingHours: openingHours,

  // With ES6
  openingHours,

  /* openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }, */

  //With ES6 we can omit function JS word mor methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient, otherIngridients);
  },
};

/* // --- Working with Strings - Part 1 ---
const airline = `TAP Air Portugal`;
const plane = `A320`;

// Get an element
console.log(plane[0]);
console.log(`B737`[0]);

// Get length
console.log(plane.length);
console.log(`B737`.length);

// Methods
// 1) Indexof - get an index of an element
console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.lastIndexOf(`Portugal`));

// Example 1: Exract part of string with slice method
console.log(airline.slice(4)); // does not mutate string since they are primitives
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Example 2: a function recieving an airplane seat
// and logs whether it is a middle seat
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s === `B` || s === `E`
    ? console.log(`${seat} is middle`)
    : console.log(`${seat} is not middle`);
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// --- Working with Strings - Part 2 ---
// 2) Changing case of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Example: fix capitalization in name
const passenger = `jOnaS`; // Should be Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Example: comparing emails
const email = `hello@jonas.io`;
const loginEmail = ` Hello@Jonas.Io \n`;

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // gets rid of emty spaces and enters
console.log(trimmedEmail);

// The same but shorter
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// 3) Replace parts of strings
const priceGB = '289,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

// Replace all the occurances - option 1
const announcement1 =
  'All passengers come to the boarding door 23. Boarding door 23!';
console.log(announcement1.replaceAll('door', 'gate'));

// Replace all the occurances - option 2
const announcement2 =
  'All passengers come to the boarding door 23. Boarding door 23!';
console.log(announcement2.replace(/door/g, 'gate')); // g stands for global

// 4) Boolean methods
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));
console.log(plane2.startsWith('A'));

// Example: check if the plane is a part of newly produced family
if (plane2.startsWith('Airbus') && plane.endsWith('neo'))
  console.log(`Part of the NEW Airbus family`);

// Pratice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on the board`);
  } else {
    console.log(`Welcome aboard!`);
  }
};
checkBaggage('I have a laptop, some foof and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// --- Working with Strings - Part 3 ---
// 5) Split method
console.log('a=very=nice=string'.split('=')); // returns array
console.log('jonas sch'.split(' '));

const [firstName, lastName] = 'Jonas Sch'.split(' ');

// 6) Join method
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Example: Capitalize a name
const capitalizeName = function (name) {
  const names = name.split(' '); // returns an array
  const namesUp = [];

  for (const n of names) {
    // option 1
    // namesUp.push(n[0].toUpperCase() + n.slice(1));
    // option 2
    namesUp.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUp.join(' '));
};
capitalizeName('jessica ann smith devis');
capitalizeName('jonas sch');

// 7) Padding a string - filling a string untill necessary length
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(35, '+'));

// Example: masking credit card numbers
const maskCreditCard = function (number) {
  // Convert to a string
  const str = number + ' ';
  // Take last four digits
  const last = str.slice(-5);
  // Fill the rest with the symbol * and using original string length
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(2135468461532));
console.log(maskCreditCard('213564848613'));

// 8) Repeat method - repeat the same string several times
const message2 = 'Bad weather! All departures belayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'!'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12); */

/* // --- Maps: Iteration ---
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert objects to maps
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quizz app
console.log(question.get('question'));
// Loop over the Map
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt(`Your answer:`));
// console.log(answer);

// Print success/fail message
// option 1
question.get('correct') === answer
  ? console.log(question.get(true))
  : console.log(question.get(false));
// option 2
console.log(question.get(question.get('correct') === answer));

// Convert Map to an array
console.log([...question]);
// Other useful things
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]); */

/* // --- Maps ---
// Data structure that maps values to keys
// Keys can have any data types
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
// Chaining method of adding key-value pairs
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are close!');
console.log(rest);

// Retrieve data from a Map
console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));

// Example
const time = 24;
rest.get(
  time > rest.get('open') && time < rest.get('close')
    ? console.log(rest.get(true))
    : console.log(rest.get(false))
);

// Ckeck if the map contains a certain key
console.log(rest.has('categories'));
// Remove elements from a map with a certain key
rest.delete(2);
console.log(rest);

// Get a size of the map
console.log(rest.size);

// Remove all the elements from the Map
// rest.clear();
// console.log(rest);

// It is possible to use arrays or objects as map keys
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // returns undefined
// since [1,2] are not the same in the heap

// To make it work need to create the key object separately
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// Example with DOM elements: use objects as map keys
rest.set(document.querySelector('h1'), 'Heading1');
console.log(rest); */

/* // --- Sets ---
// Set is a collection  of unique values
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rizotto']);
console.log(ordersSet); // all duplicates are gone

// It is also possible to pass a string (any iterable data type)
console.log(new Set('Jonas'));

// Size of set
console.log(ordersSet.size);

// Check if an element in the set
console.log(ordersSet.has('Bread')); // returns FALSE

// Add a new element to the set
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Remove elements from the set
ordersSet.delete('Rizotto');
console.log(ordersSet);

// Retrieve values from the set - NOT POSSIBLE since there are no indexes
// Use an array for this purpose

// Loop over the set
for (const order of ordersSet) {
  console.log(order);
}

// Example of removing duplicates from an array using Sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// new Set variable unpacked with SPREAD operator into array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// check the size
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // returns 3 as 3 unqiue values in the array

// how many different letters in a string
console.log(new Set('jonasSch').size); */

/* // --- Looping Objects: Object Keys, Values, and Entries ---
// 1) Property names
const properties = Object.keys(openingHours);
console.log(openingHours);

let openStr = `We are open ${properties.length} days a week: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// 2) Property values
const values = Object.values(openingHours);
console.log(values);

// 3) Property entries
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

/* // --- Optional Chaining (?.) ---
// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // error

// We usually check if the property exists
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaninig
console.log(restaurant.openingHours.mon?.open); // undefined

//Example
for (const day of weekdays) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining on Methods
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// Optional Chaining on Arrays
const users = [{ name: 'Jonas', email: 'jonas@gmail.com' }];
console.log(users[0]?.name ?? `User array emtpy`);

// Whithout optional chaining, it would be a bit longer:
if (users.length > 0) console.log(users[0]?.name);
else console.log(`user array empty`); */

/* // ---Enhanced Object Literals ---
// Before ES6 it would be
console.log(restaurant); */

/* // --- Looping Arrays: The for-of Loop ---
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log([...menu.entries()]); */

/* // --- The Nullish Coalescing operator ---
restaurant.numGuests = 23;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and indefined (DOEST NOT INCLUDE 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); */

/* // --- OR operator ---
// Short curcuiting
// Logical operators can use ANY data type, short-curcuiting
// returns truethy values
// the opposite of AND operator
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// --- AND operator ---
// returns falsy values
// the opposite of OR operator
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); */

/* // 1) Descructuring
// SPREAD, because on the RIGHT side of the operator
const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of the operator
// REST operator is used to collect the elements
// that are unused in the destructuring assignement
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// REST with Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
// Add destructured array to the function
add(...x);

restaurant.orderPizza('mushrooms', 'tomatoes', 'pineapples', 'chicken');
restaurant.orderPizza('mushrooms'); */

/* // The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArray = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, but not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} S`) throws error

// Spread operator to pass multiple arguments
const ingridients = [
  prompt(`Let's make pasta! Ingridient 1?`),
  prompt(`Ingridient 2?`),
  prompt(`Ingridient 3?`),
];
console.log(ingridients);

restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
restaurant.orderPasta(...ingridients);

// Objects
// Create new from old with additions
const newRestaraunt = { ...restaurant, founder: 'Guiseppe', foundedIn: 1996 };
console.log(newRestaraunt);

// Copy object and change its properties
const restarauntCopy = { ...restaurant };
restarauntCopy.nameRestaraunt = 'Restaraunte Roma';
console.log(restarauntCopy.nameRestaraunt);
console.log(restaurant.nameRestaraunt); */

/* restaurant.orderDelivery({
  time: '22:38',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Another Destructuring example
const { nameRestaraunt, openingHours, categories } = restaurant;
console.log(nameRestaraunt, openingHours, categories);

// New property names
const {
  nameRestaraunt: restaurantNames,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantNames, hours, tags);

// Default names for not existing properties
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating valiables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring array
// Original array is not modified
const [x, y, z] = arr;
// console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
//console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;

[main, secondary] = [secondary, main];
//console.log(main, secondary);

// Recieve 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring array with nested array
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
// console.log(i, j);

// Nested destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values with unknown length of an array
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

// --- String methods practice
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Split 4 lines of information
//console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

// Log strings separetely to the console
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '*' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);

  console.log(output);
} */
