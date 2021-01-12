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

// let year;
//console.log(year);
//console.log(typeof year);

// year = 1991;
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
let a, b;
a = b = 25 - 10 - 5;
//console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);



//////////////////////////
//  Coding Challenge #1 //
//////////////////////////

// 1. Store Mark's and John's mass and height in variables
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;

// 2. Calculate both their BMIs using the formula (you can 
// even implement both versions)
BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;

// 3. Create a Boolean variable 'markHigherBMI' containing 
// information about whether Mark has a higher BMI than John.
markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);



// LECTURE: Strings and Template Literals
const job = 'teacher';
const birthYear = 1991;
year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);
// console.log(`Just a regular string...`);
/* console.log(`String with \n\
multiple \n\
lines`); */



// LECTURE: Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
    // console.log(`Sarah can start driving license!`);
} else {
    const yearsLeft = 18 - age;
    // console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

// console.log(century);



//////////////////////////
//  Coding Challenge #2 //
//////////////////////////

/* 1. Print a nice output to the console, saying who has the
higher BMI. The message is either "Mark's BMI is higher than
John's!" or "John's BMI is higher than Mark's!" */

/* if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
} */


/* 2. Use a template literal to include the BMI values in the
outputs. Example: "Mark's BMI (28.3) is higher than John's
(23.9)!" */

/* if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} */

