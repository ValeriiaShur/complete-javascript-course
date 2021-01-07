// LECTURE: Values and Variables

/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";


console.log(firstName); */



// LECTURE: Data Types

let javascriptIsFun = true;
//console.log(javascriptIsFun);

//console.log(typeof true);
//console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
//console.log(typeof javascriptIsFun);

let year;
//console.log(year);
//console.log(typeof year);

year = 1991;
//console.log(typeof year);

/*console.log(typeof null); retuns the type of object,
which is a JS bug * /



// LECTURE: let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann'; //better always declare let or var
//console.log(lastName);



// LECTURE: Basic Operators

/* Operator helps to transform values or combine multiple
values

Categories:
1. Mathematical
2. Comparison
3. Logical
4. Assignment
5. etc. */

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
//console.log(ageJonas, ageSarah);

//console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedmann';
//console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
//console.log(x);

// Comparison operators
//console.log(ageJonas > ageSarah); // >, <, >=, <=
//console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);



// LECTURE: Strings and Template Literals
