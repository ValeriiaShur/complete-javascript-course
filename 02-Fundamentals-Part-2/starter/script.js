'use strict';

let hasDriversLisence = false;
const passTest = true;

if (passTest) hasDriversLisence = true;
// if (hasDriversLisence) console.log(`I can drive :D`);

//Reserved words that throw errors
// const interface = 'Audio';
// const private = 534;



// LECTURE: Functions
// a piece of code that is reusable
function logger() {
    console.log(`My name is Jonas!`);
}

// calling / running / envoking function
// logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// LECTURE: Function Declarations vs. Expressions

// Funstion declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

// const age1 = calcAge1(1991);
// console.log(age1);

// Function expression - they produce values
// Anonymous function - a function without a name
const calcAge2 = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age2 = calcAge2(1991);
// console.log(age1, age2);



// LECTURE: Arrow Functions

// Funstion declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
//console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement; // return statement
    return `${firstName} retieres in ${retirement} years`;
}

//console.log(yearsUntilRetirement(1991, `Jonas`));



// LECTURE: Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

// console.log(fruitProcessor(2, 3));



// LECTURE: Introduction to Arrays
/* const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

// Literal syntax
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

// Arrays are zero-based
console.log(friends[0]);

// Not zero-based length
console.log(friends.length);
// Get the last element of the array
console.log(friends[friends.length - 1]);

// Mutate array by replacing element value
friends[2] = `Jay`;
console.log(friends);

// Arrays hold values of different types
const jonas = [`Jonas`, `Schnedtmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const years1 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge3(years1[0]);
console.log(age1);

// Arrays can consist of function elements
const ages = [calcAge3(years1[0])];
console.log(ages); */



// LECTURE: Basic Array Operations (Methods)
// Methods are functions applied to arrays


// ADD ELEMENTS
/* const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`); // add an element to the end of the array
// .push methos can be also used to calculate length
// does not have type coercion
console.log(friends);
console.log(newLength);

friends.unshift(`John`); // add an element to the beginning of the array
// it also returns the length of the array
console.log(friends);


// REMOVE ELEMENTS
friends.pop();
const popped = friends.pop(); // remove the last element
// does not return the length but the element that was removed
console.log(popped);
console.log(friends);

friends.shift(); // remove the first element
console.log(friends);

console.log(friends.indexOf(`Steven`)); // return idex of the element
console.log(friends.indexOf(`Bob`)); // throws -1 as an error (there is no Bob)

console.log(friends.includes(`Steven`)); // boolean to show if there is the element in the array
console.log(friends.includes(`Bob`));

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven`);
} */



// LECTURE: Introduction to Objects
// Object is a data structure with key-value pairs

// Object literal syntax
/* const jonas = {
    firstName: `Jonas`,
    lastName: `Sh`,
    age: 2037 - 1991,
    job: `teacher`,
    firends: [`Michael`, `Peter`, `Steven`]
} */



// LECTURE: Dot vs. Bracket Notation

// Retrieve values with a key
// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

// Retrieve values with an operation for the key
const nameKey = `Name`;
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);


// const interestedIn = prompt(`What do you want to know about Jonas? Choose between
// firstName, lastName, age, job, and friends`);
// console.log(jonas[interestedIn]);

/* if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request! Choose between
    firstName, lastName, age, job, and friends`);
} */


// Adding new properties to the object
// jonas.location = `Portugal`;
// jonas[`twitter`] = `@jonassch`;
// console.log(jonas);

// Chanllenge
// "Jonas has 3 friends, and his best friend is Michael"
// console.log(`${jonas.firstName} has ${jonas.firends.length} friends, and his best friend is ${jonas.firends[0]}`);



// LECTURE: Object Methods

// Store function in objects
/* const jonas = {
    firstName: `Jonas`,
    lastName: `Sh`,
    birthYear: 1991,
    job: `teacher`,
    firends: [`Michael`, `Peter`, `Steven`],
    hasDriversLisence: true,

    // this is an expression and not a declaration
    // calcAge: function (birthYear) { // calcAge is a property of the object that carries function
    //    return 2037 - birthYear;
    //}
    //calcAge: function (this) {
    //    return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year
            old ${this.job}, and he has 
            ${jonas.hasDriversLisence == true ? `a` : `no`} 
            driver's license`;
        return this.summary;
    }
}; */

// Call property calcAge() to show return
/* console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age); */
//console.log(jonas[`calcAge`](jonas.birthYear));


//Challenge
// `Jonas is 48-year old teacher, and he has 
// a/no driver's license`

// My fisrt solution
/* console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job},
and he has ${jonas.hasDriversLisence == true ? `a` : `no`}
driver's license`) */

// My second solution
// Call the method/property getSummary() to show return
/* console.log(jonas.getSummary()); */



// LECTURE: Iteration: The for Loop
// help to automate repetitive tasks
/* console.log(`Lifting weights repetirion 1`);
console.log(`Lifting weights repetirion 2`);
console.log(`Lifting weights repetirion 3`);
console.log(`Lifting weights repetirion 4`);
console.log(`Lifting weights repetirion 5`); */

// for loop keep running while condition is TRUE
/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetirion ${rep}`);
} */



// LECTURE: Looping Arrays, Breaking and Continuing
/* const jonas = [
    `Jonas`,
    `Sch`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

const types = [];

for (let i = 0; i <= jonas.length - 1; i++) {
    // console.log(jonas[i], typeof jonas[i]);
    // filling the types array
    // types[i] = typeof jonas[i]; option 1
    types.push(typeof jonas[i]) // option 2
};
// console.log(types)

// loop through years array and calculate ages
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}; */
// console.log(ages);


// continue and break statements
// continue exits the current iteration of the loop and continue to the nex one
/* console.log(`---ONLY STRINGS---`);
for (let i = 0; i <= jonas.length - 1; i++) {
    if (typeof jonas[i] !== `string`) continue;
    console.log(jonas[i], typeof jonas[i]);
}; */

// break terminated the entire loop
/* console.log(`---BREAK WITH NUMBER---`);
for (let i = 0; i <= jonas.length - 1; i++) {
    if (typeof jonas[i] === `number`) break;
    console.log(jonas[i], typeof jonas[i]);
}; */



// LECTURE: Looping Backwards and Loops in Loops
const jonas = [
    `Jonas`,
    `Sch`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

// Backward loop decrementing i by one
/* for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


// Loops in loops
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
} */



// LECTURE: The while Loop
// 
/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetirion ${rep}`);
} */


/* let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetirion ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log(`Loop is about to end...`);
}; */

