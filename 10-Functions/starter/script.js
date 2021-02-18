'use strict';

/* // --- Default Parameters ---
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // ES5 JS default values
  //numPassenger = numPassenger || 1;
  //price = price || 199;

  // ES6 JS is to write it in the brackets passing parameters

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
createBooking('LM123', 2, 200);
createBooking('LM123', 2);
createBooking('LM123', undefined, 1000);

// --- How passing arguments works: Values ---
const flight = 'LM234';
const jonas = {
  name: 'Jonas Sch',
  passport: 6513218,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 6513218) {
    alert('Checked In');
  } else alert('Wrong passport!');
};
checkIn(flight, jonas);
console.log(flight); // primitives do not mutate
console.log(jonas); // object name mutated

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random()) + 100000000;
};
newPassport(jonas); // passport changed
checkIn(flight, jonas); */

// --- First-class and Higher-order functions
// First class functions:
// means that the function is treated as a value
// therefore it is possible to call methods on the function

// Higher-order functions:
// A function that recieves another function as an argument
// returns a new function, or both with original
// call-back function is a function that gets passed into higher-order function

/* // --- Functions accepring call back functions ---
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
};

transformer('JacaScript is the best!', upperFirstWord);
transformer('JacaScript is the best!', oneWord);

// --- Functions returning functions ---
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Valeriia');

greet('Hello')('Jonas');

// Challenge: rewrite it into an arrow function
const greetArr = greeting => name => console.log(`${greeting}, ${name}!`);
greetArr('Hello')('Jonas');

// ---The Call and Apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Sch');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Sarah Williams');

// Call method helps THIS key word point to another opbects' properties
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// Apply methos does the same thing as Call BUT
// it passes an array of arguments
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);
console.log(eurowings);

// --- Bind Method ---
// Same as Call method BUT
// does not immediately calls the function INSTEAD
// returns a new function where THIS key word is bind
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steven Williams');
console.log(eurowings);

// Multiple arguments in Bind Method
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Sch');
bookEW23('Martha Cooper');
console.log();
// Partial application - when a part of the function
// (its argument) is predefined

// Example: Objects with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Example 2: Pertial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Let's say we always have the same tax
const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23)); */

//////////////////////////
//  Coding Challenge #1 //
//////////////////////////
//Let's build a simple poll app!
//A poll has a question, an array of options from which
//people can choose, and an array with the number of
//replies for each option. This data is stored in the
//starter 'poll' object below.
//Your tasks:
//1. Create a method called 'registerNewAnswer' on the
//'poll' object. The method does 2 things:
//1.1. Display a prompt window for the user to input
//the number of the selected option. The prompt should
//look like this:
//What is your favourite programming language?
//0: JavaScript
//1: Python
//2: Rust
//3: C++
//(Write option number)

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', `3: C++`],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

//1.2. Based on the input number, update the 'answers'
//array property. For example, if the option is 3,
//increase the value at position 3 of the array by
//1. Make sure to check if the input is a number and if the number makes
//sense (e.g. answer 52 wouldn't make sense, right?)

//2. Call this method whenever the user clicks the
//"Answer poll" button.

//3. Create a method 'displayResults' which displays the
//poll results. The method takes a string as an input
//(called 'type'), which can be either 'string'
//or 'array'. If type is 'array', simply display the
//results array as it is, using console.log(). This
//should be the default option. If type is 'string',
//display a string like "Poll results are 13, 2, 4, 1".

//4. Run the 'displayResults' method at the end of each
//'registerNewAnswer' method call.

//5. Bonus: Use the 'displayResults' method to display
//the 2 arrays in the test data. Use both the 'array'
//and the 'string' option. Do not put the arrays in the
//poll object! So what should the this keyword look
//like in this situation?

// --- Immediately invoked functions expressions ---
// Function that executes only once

const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// Transforming function to expression
// IIFE / immediately invoked function expression
(function () {
  console.log(`This will never run again`);
})();

(() => console.log(`This will ALSO never run again`))();

// --- Closures ---
// Is not a feature that is explicitly used
//
// It is when a function has access to the variable
// environment (VE) of the execution context in which
// it was created
//
// VE attached to the function, exactly at the time
// and place the function was created

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passenger
booker(); // 2 passenger
booker(); // 3 passenger

console.dir(booker);

// --- Closure Examples ---

// Example 1:
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // has the variable a

// Re-assigning f function
h();
f();
console.dir(f); // does not have the variable a

// Example 2:
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // is not used because it is in the outer scope
boardPassengers(180, 3);

//////////////////////////
//  Coding Challenge #2 //
//////////////////////////
//This is more of a thinking challenge than a coding
//challenge �
//Your tasks:
//1. Take the IIFE below and at the end of the
//function, attach an event listener that changes the
//color of the selected h1 element ('header') to blue,
//each time the body element is clicked. Do not select
//the h1 element again!
//2. And now explain to yourself (or someone around you)
//why this worked! Take all the time you need. Think
//about when exactly the callback function is executed,
//and what that means for the variables involved in
//this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // It has access to the old VE due to enclosure
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
