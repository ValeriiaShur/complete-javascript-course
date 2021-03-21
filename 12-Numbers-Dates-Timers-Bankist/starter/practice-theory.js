/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// --- Converting and checking numbers
// Base 10: numbers from 0 to 9
// Binary base 2: 0 and 1

//console.log(Number('23'));
//console.log(+'23'); // plus sign convers a string to a number

// Parse a number from a string
//console.log(Number.parseInt('30px', 10)); // passing number 10 helps
// to avoid bugs (means base 10)
// string starting from a string not gonna work
//console.log(Number.parseInt('e30px', 10));

//console.log(Number.parseFloat('2.5rem'));

// Checking if value in NaN (not a number)
//console.log(Number.isNaN(20)); // false
//console.log(Number.isNaN('20')); // false
//console.log(Number.isNaN(+'20X')); // true
//console.log(Number.isNaN(23 / 0)); // false

// Checking if value is a number
//console.log(Number.isFinite(20)); // true
//console.log(Number.isFinite('20')); // false
//console.log(Number.isFinite(23 / 0)); // false

//console.log(Number.isInteger(23)); // true
//console.log(Number.isInteger(23 / 0)); // false
//console.log(Number.isInteger(23.0)); // true

// --- Math and Rounding ---
// 1) Square (also cubic) root
//console.log(Math.sqrt(25));
//console.log(25 ** (1 / 2));
//console.log(8 ** (1 / 3));

//console.log(Math.max(5, 18, 23, 11, 2)); // 23
//console.log(Math.max(5, 18, '23', 11, 2)); // 23
//console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

//console.log(Math.min(5, 18, 23, 11, 2)); // 2

//console.log(Math.PI * Number.parseFloat('10px') ** 2);

//console.log(Math.trunc(Math.random() * 6) + 1);

// Give a random number between given min and max
//const randomInt = (min, max) =>
//  Math.floor(Math.random() * (max - min) + 1) + min;
//console.log(randomInt(10, 20));

// Rounding integers
// 1) regular round
//console.log(Math.trunc(23.3)); // 23
//console.log(Math.trunc(23.9)); // 24

// 2) round up
//console.log(Math.ceil(23.3)); // 24
//console.log(Math.ceil(23.9)); // 24

// 3) round down
//console.log(Math.floor(23.3)); // 23
//console.log(Math.floor('23.9')); // 23

// 4) negative numbers
//console.log(Math.trunc(-23.3)); // -23
//console.log(Math.floor(-23.3)); // 24

// 5) decimals
//console.log((2.7).toFixed(0)); // returns 3 which is a string
//console.log((2.7).toFixed(3)); // returns 2.700 where 3 is a
//number of charachters after comma
//console.log((2.453).toFixed(2)); // returns 2.45 which is a string
//console.log(+(2.453).toFixed(2)); // returns 2.45 which is a number

// --- The Reminder operator ---
//console.log(5 % 2); // 1
//console.log(8 % 2); // 2
//console.log(7 % 2); // 1

// Check if a number is even
//const isEven = n => n % 2 === 0;
//console.log(isEven(8)); // true
//console.log(isEven(5)); // false

// Color every 2nd row with orangered and ebery 3rd with blue
//labelBalance.addEventListener('click', function () {
//  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//    if (i % 3 === 0) row.style.backgroundColor = 'blue';
//  });
//});

// --- Working with BigInt ---
// the biggest number JS could safely represent
//console.log(2 ** 53 - 1);
//console.log(Number.MAX_SAFE_INTEGER);

// BigInt number
//console.log(2135468987651321345646846132131354686846n);
//console.log(BigInt(2135468987651321345));

// Operators
// BigInt does not work with regular numbers
//console.log(10000n + 10000n);

//const huge = 222154684651323n;
//const num = 23;
//console.log(huge * BigInt(num));

//console.log(20n > 15); // true
//console.log(20n === 20); // false because === does not do type coercion

// convert BigInt to a string
//console.log(huge + ' is REALLY big!!!');

// Simple Math operators do not work with BigInts
//console.log(Math.sqrt(16n)); // return TypeError

// Divisions
//console.log(10n / 3n); // 3n
//console.log(10 / 3); // 3.333333

// --- Creating Dates ---
// 1)
//const now = new Date();
//console.log(now);

// 2)
//console.log(new Date('Mar 15 2021 22:30:41'));
//console.log(new Date('December 25, 2015'));
//console.log(new Date(account1.movementsDates[0]));

// months are 0-based
//console.log(new Date(2037, 10, 19, 15, 23, 5));
// returns Thu Nov 19 2037 15:23:05 GMT+0100 (Central European Standard Time)
// Note: Nov is a 10th month

//console.log(new Date(0));
// Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

//convert to msec of 3rd day
//console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Methods for Dates
//const future = new Date(2037, 10, 19, 15, 23);
//console.log(future);
//console.log(future.getFullYear()); // 2037
//console.log(future.getMonth()); // 10
//console.log(future.getDate()); // 19
//console.log(future.getDay()); // 4
//console.log(future.getHours()); // 15
//console.log(future.getMinutes()); // 23
//console.log(future.getSeconds()); // 0
//console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z
//console.log(future.getTime()); // 2142253380000

//console.log(new Date(2142253380000));
// Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)

//console.log(Date.now());
// 1615844778125

//future.setFullYear(2040);
//console.log(future);
// Mon Nov 19 2040 15:23:00 GMT+0100 (Central European Standard Time)

// --- Opeartions with Dates ---
// Write a function that substracts one date from another
//const calcDaysPassed = (date1, date2) =>
//  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

//console.log(calcDaysPassed(new Date(2021, 9, 3), new Date(2037, 10, 15)));

// Internationalizing Numbers (Intl)
//const num = 3884764.23;

//const options = {
//  style: 'currency', // percent ot currency
//  unit: 'celsius',
//  currency: 'EUR',
// useGrouping: false
//};

//console.log(new Intl.NumberFormat('en-US', options).format(num));
//console.log(new Intl.NumberFormat('de-DE', options).format(num));
//console.log(new Intl.NumberFormat(navigator.language, options).format(num));

// Timers: SetTimeout and SetInterval
// setTimeout schedules a function to run one time after a certain amount of time
//const ingredients = ['olives', 'spinach'];

//const pizzaTimer = setTimeout(
//  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
//  5000,
//  ...ingredients
//);

// Delete the timer
//if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval schedules a function to run regularly every certain amount of time
//setInterval(function () {
//  const now = new Date();
//  console.log(now);
//}, 10000);
