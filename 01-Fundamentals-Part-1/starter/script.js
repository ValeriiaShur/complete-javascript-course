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
/* const age = 15;

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
} */

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



// LECTURE: Type Conversion and Coercion

// type conversion - manual explicit conversion
const inputYear = '1991';
const inputYearConverted = Number(inputYear);
//console.log(inputYearConverted + 18);

//console.log(String(23));

// type coercion - convert values of one type to another
/* console.log(`I am ` + 23 + ` years old`);
console.log(`I am ` + `23` + ` years old`);
console.log('23' - '10' - 3); // numbers
console.log('23' + '10' + 3); // strings
console.log('23' * '10'); // numbers
console.log('23' > '10'); // numbers */

/* let n = '1' + 1;
n = n - 1;
console.log(n); // result is a number 10 */



// LECTURE: Truthy and Falsy Values

/* 5 falsy values:
1. 0
2. ''
3. undefined
4. null
5. NaN
 */
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`)
} */



// LECTURE: Equality Operators: == vs. ===
/* const age = '18';
if (age === 18) console.log(`You just became an adult! (strict)`)

if (age == 18) console.log(`You just became an adult! (loose)`)

const favourite = Number(prompt("What's your favourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 7) {
    console.log(`${favourite} is also an cool number!`);
} else {
    console.log(`Number is not 23 or 7`);
}

// 'different' or not equal operator
if (favourite !== 23) console.log(`Why not 23?`); */



// LECTURE: Logical Operators
const hasDriverLisence = true; // A
const hasGoodVision = true; // B

/* console.log(hasDriverLisence && hasGoodVision); // AND
console.log(hasDriverLisence || hasGoodVision); // OR
console.log(!hasDriverLisence); // NOT */

const shouldDrive = hasDriverLisence && hasGoodVision;
/* if (shouldDrive) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
} */

/* const isTired = false; // C
console.log(hasDriverLisence || hasGoodVision || isTired);

if (hasDriverLisence && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
} */



//////////////////////////
//  Coding Challenge #3 //
//////////////////////////
/* There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. The winner 
with the highest average score wins a trophy! Your tasks:
1. Calculate the average score for each team, using the 
test data below */
dolphinesScore1 = 96;
dolphinesScore2 = 108;
dolphinesScore3 = 89;
koalasScore1 = 88;
koalasScore2 = 91;
koalasScore3 = 110;
dolphinesAverageScore = (dolphinesScore1 + dolphinesScore2 + dolphinesScore3) / 3;
koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

/* 2. Compare the team's average scores to determine
the winner of the competition, and print it to the
console. Don't forget that there can be a draw, so test
for that as well (draw means they have the same average
score) */
/* if (dolphinesAverageScore > koalasAverageScore) {
    console.log(`Dolphines are the winners (${dolphinesAverageScore})!`);
} else if (dolphinesAverageScore < koalasAverageScore) {
    console.log(`Koalas are the winners (${koalasAverageScore})!`);
} else if (dolphinesAverageScore === koalasAverageScore) {
    console.log(`It is a draw (${koalasAverageScore})!`);
} */


/* 3. Bonus 1: Include a requirement for a minimum
score of 100. With this rule, a team only wins if it
has a higher score than the other team, and the same
time a score of at least 100 points. Hint: Use a
logical operator to test for minimum score, as well as
multiple else-if blocks � */
/* if (dolphinesAverageScore > koalasAverageScore && dolphinesAverageScore > 100) {
    console.log(`Dolphines are the winners (${dolphinesAverageScore})!`);
} else if (dolphinesAverageScore < koalasAverageScore && koalasAverageScore > 100) {
    console.log(`Koalas are the winners (${koalasAverageScore})!`);
} else if (dolphinesAverageScore === koalasAverageScore) {
    console.log(`It is a draw (${koalasAverageScore})!`);
} else console.log(`No winners`); */


/* 4. Bonus 2: Minimum score also applies to a draw! So
a draw only happens when both teams have the same score
and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy */
/* if (dolphinesAverageScore > koalasAverageScore && dolphinesAverageScore > 100) {
    console.log(`Dolphines are the winners (${dolphinesAverageScore})!`);
} else if (dolphinesAverageScore < koalasAverageScore && koalasAverageScore > 100) {
    console.log(`Koalas are the winners (${koalasAverageScore})!`);
} else if ((dolphinesAverageScore === koalasAverageScore) && dolphinesAverageScore > 100 && koalasAverageScore > 100) {
    console.log(`It is a draw (${koalasAverageScore})!`);
} else console.log(`No winners`); */



// LECTURE: The switch Statement
const day = 'monday';

/* switch (day) {
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory vedeos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend!`);
        break;
    default:
        console.log(`Not a valid day!`)
}

// IF statement
if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory vedeos`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend!`);
} else {
    console.log(`Not a valid day!`);
} */



// LECTURE: The Conditional (Ternary) Operator

// Expression is a piece of code that produces value
// Example: 3 + 4
// Example: 1991
// Example: true && false && !falsee

// Statement is a sequence of actions
/* if (23 > 10) {
    const str = '23 is bigger';
}

const age = 23;
age >= 18 ? console.log(`I like to drink wine`) :
    console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`); */



//////////////////////////
//  Coding Challenge #4 //
//////////////////////////

// Switch operator
const bill = 100;
switch (bill) {
    case bill >= 50 && bill <= 300:
        console.log(`The bill was ${bill}, the tip was ${tip = bill * 15 / 100}, and the total value ${bill + tip}`);
        break;
    default:
        console.log(`The bill was ${bill}, the tip was ${tip = bill * 20 / 100}, and the total value ${bill + tip}`);
}

// Ternary operator
const calc = bill >= 50 && bill <= 300 ? `The bill was ${bill}, the tip was ${tip = bill * 15 / 100}, and the total value ${bill + tip}` :
    `The bill was ${bill}, the tip was ${tip = bill * 20 / 100}, and the total value ${bill + tip}`;
console.log(calc);