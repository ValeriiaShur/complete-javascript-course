'use strict';

// LECTURE: Functions
/* 1. Write a function called 'describeCountry' which 
takes three parameters: 'country', 'population' and 
'capitalCity'. Based on this input, the function 
returns a string with this format: 'Finland has 6 
million people and its capital city is Helsinki' */
function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has ${population} people and its capital is ${capitalCity}`;
    return countryDescription;
}

/* 2. Call this function 3 times, with input data for 
3 different countries. Store the returned values in 
3 different variables, and log them to the console */
const russiaDescription = describeCountry(`Россия`, 144500000, `Москва`);
const netherlandsDescription = describeCountry(`Nederland`, 17470000, `Den Haag`);
const germanyDescription = describeCountry(`Deutschland`, 83200000, `Berlin`);

/* console.log(russiaDescription);
console.log(netherlandsDescription);
console.log(germanyDescription); */



// LECTURE: Function Declarations vs. Expressions
/* 1. The world population is 7900 million people.
Create a function declaration called
'percentageOfWorld1' which receives a 'population'
value, and returns the percentage of the world
population that the given population represents. For
example, China has 1441 million people, so it's about
18.2% of the world population */
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

/* 2. To calculate the percentage, divide the given
'population' value by 7900 and then multiply by 100 */
/* 3. Call 'percentageOfWorld1' for 3 populations of
countries of your choice, store the results into
variables, and log them to the console */
const russiaPopulation1 = percentageOfWorld1(144.5);
const netherlnadsPopulation1 = percentageOfWorld1(17.5);
const germanyPopulation1 = percentageOfWorld1(83.2);

/* console.log(russiaPopulation1);
console.log(netherlnadsPopulation1);
console.log(germanyPopulation1); */

/* 4. Create a function expression which does the exact
same thing, called 'percentageOfWorld2', and also
call it with 3 country populations (can be the same
populations) */

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const russiaPopulation2 = percentageOfWorld2(144.5);
const netherlnadsPopulation2 = percentageOfWorld2(17.5);
const germanyPopulation2 = percentageOfWorld2(83.2);

/* console.log(russiaPopulation2);
console.log(netherlnadsPopulation2);
console.log(germanyPopulation2); */



// LECTURE: Arrow Functions
/* 1. Recreate the last assignment, but this time
create an arrow function called 'percentageOfWorld3' */
const percentageOfWorld3 = population => population / 7900 * 100;
const russiaPopulation3 = percentageOfWorld3(144.5);
const netherlnadsPopulation3 = percentageOfWorld3(17.5);
const germanyPopulation3 = percentageOfWorld3(83.2);

/* console.log(russiaPopulation3);
console.log(netherlnadsPopulation3);
console.log(germanyPopulation3); */



// LECTURE: Functions Calling Other Functions
/* 1. Create a function called 'describePopulation'.Use
the function type you like the most.This function takes
in two arguments: 'country' and 'population', and returns
a string like this: 'China has 1441 million people,
which is about 18.2 % of the world.' */
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
}

/* 2. To calculate the percentage, 'describePopulation'
call the 'percentageOfWorld1' you created earlier */
/* 3. Call 'describePopulation' with data for 3 countries
of your choice */
const russiaName = `Russia`;
const russiaPopulation = 144.5;
// console.log(describePopulation(russiaName, russiaPopulation));



// Reviewing functions and Coding Challenge #1
/* 1. Create an arrow function 'calcAverage' to calculate
the average of 3 scores 2. Use the function to calculate
the average for both teams 3. Create a function 'checkWinner'
that takes the average score of each team as parameters
('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according
to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner
for both Data 1 and Data 2.
5. Ignore draws this time */

function calcAverage(score1, score2, score3) {
    const aveargeScore = (score1 + score2 + score3) / 3;
    return aveargeScore;
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= avgKoalas * 2) {
        return console.log(`Dolphines win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolhins * 2) {
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        return console.log(`No winner :(`);
    }

}

const dolphinesScore1 = 85;
const dolphinesScore2 = 54;
const dolphinesScore3 = 41;

const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

const dolphinesAvgScore = calcAverage(dolphinesScore1, dolphinesScore2, dolphinesScore3);
const koalasAvgScore = calcAverage(koalasScore1, koalasScore2, koalasScore3);

// const winner = checkWinner(dolphinesAvgScore, koalasAvgScore);



// LECTURE: Introduction to Arrays
/* 1. Create an array containing 4 population values of
4 countries of your choice. You may use the values you
have been using previously.Store this array into a
variable called 'populations' */
const countries = [`Russia`, `Germany`, `Austria`, `The Netherlands`];

/* 2. Log to the console whether the array has 4 elements 
or not(true or false) */
// console.log(countries.length == 4);

/* 3. Create an array called 'percentages' containing
the percentages of the world population for these 4
population values.Use the function 'percentageOfWorld1'
that you created earlier to compute the 4 percentage values */
const percentages = [percentageOfWorld1(144.5), percentageOfWorld1(83.2), percentageOfWorld1(8.86), percentageOfWorld1(17.5)];
// console.log(percentages);



// LECTURE: Basic Array Operations (Methods)
/* 1. Create an array containing all the neighbouring
countries of a country of your choice. Choose a country
which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours' */
const neighbours = [`Belgium`, `Luxemburg`, `Germany`];

/* 2. At some point, a new country called 'Utopia' is created
in the neighbourhood of your selected country. So add it to
the end of the 'neighbours' array */
neighbours.push(`Utopia`);
//console.log(neighbours);

/* 3. Unfortunately, after some time, the new country is
dissolved. So remove it from the end of the array */
neighbours.pop(`Utopia`);
//console.log(neighbours);

/* 4. If the 'neighbours' array does not include the country
‘Germany’, log to the console: 'Probably not a central
European country :D' */
if (!neighbours.includes(`Germany`)) {
    //console.log('Probably not a central European country :D');
}

/* 5. Change the name of one of your neighbouring countries.
To do that, find the index of the country in the 'neighbours'
array, and then use that index to change the array at that
index position. For example, you can search for 'Sweden' in
the array, and then replace it with 'Republic of Sweden'. */
const luxIndex = neighbours.indexOf(`Luxemburg`);
neighbours.splice(1, luxIndex, `The Grand Duchy of Luxembourg`);
//console.log(neighbours);



//////////////////////////
//  Coding Challenge #2 //
//////////////////////////
/* 1. Write a function 'calcTip' that takes any bill value
as an input and returns the corresponding tip, calculated
based on the rules above (you can check out the code from
first tip calculator challenge if you need to). Use the
function type you like the most. Test the function using a
bill value of 100 */
/* function calcTip(billValue) {
    if (billValue >= 50 && billValue < 300) {
        return billValue * 15 / 100;
    } else {
        return billValue * 20 / 100;
    }
}
const bill = 100;
// console.log(calcTip(bill));

/* 2. And now let's use arrays! So create an array 'bills'
containing the test data below */
/* const bills = [125, 555, 44];

/* 3. Create an array 'tips' containing the tip value for
each bill, calculated from the function you created before */
/* const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

/* 4. Bonus: Create an array 'total' containing the total
values, so the bill + tip */
/* const totalValue = [];
function calcTotal(billValues, tipValues) {
    let i = 0;
    for (; i < billValues.length; i++) {
        totalValue[i] = billValues[i] + tipValues[i];
    }
    return totalValue;
}
console.log(calcTotal(bills, tips)); */



// LECTURE: Introduction to Objects
/* 1. Create an object called 'myCountry' for a country of 
your choice, containing properties 'country', 'capital',
'language', 'population' and 'neighbours'(an array like we
used in previous assignments) */
/* const myCountry = {
    country: `The Netherlands`,
    capital: `The Hague`,
    language: `Dutch`,
    population: 17.8,
    neighbors: [`Belgium`, `Luxemburg`, `Germany`]
} */

//console.log(myCountry);



// LECTURE: Dot vs. Bracket Notation
/* 1. Using the object from the previous assignment, log a
string like this to the console: 'Finland has 6 million
finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.' */
/* console.log(`${myCountry.country} has ${myCountry.population}
million ${myCountry.language}-speaking people,
${myCountry.neighbors.length} neighboring countries and
a capital called ${myCountry.capital}`); */

/* 2. Increase the country's population by two million using
dot notation, and then decrease it by two million using
brackets notation */
/* myCountry.population = myCountry.population + 2;
console.log(`${myCountry.country} has ${myCountry.population}
million ${myCountry.language}-speaking people,
${myCountry.neighbors.length} neighboring countries and
a capital called ${myCountry.capital}`);

myCountry[`population`] = myCountry[`population`] - 2;
console.log(`${myCountry.country} has ${myCountry.population}
million ${myCountry.language}-speaking people,
${myCountry.neighbors.length} neighboring countries and
a capital called ${myCountry.capital}`); */



// LECTURE: Object Methods
/* 1. Add a method called 'describe' to the 'myCountry'
object. This method will log a string to the console, similar
to the string logged in the previous assignment, but this
time using the 'this' keyword. */
const myCountry = {
    country: `The Netherlands`,
    capital: `The Hague`,
    language: `Dutch`,
    population: 17.8,
    neighbors: [`Belgium`, `Luxemburg`, `Germany`],
    describe: function () {
        return `${this.country} has ${this.population}
        million ${this.language}-speaking people,
        ${this.neighbors.length} neighboring countries and
        a capital called ${this.capital}`;
    },
    checkIsland: function () {
        return this.neighbors.length > 0 ? this.isIsland = true : this.isIsland = false;
    }
};

/* 2. Call the 'describe' method */
//console.log(myCountry.describe());

/* 3. Add a method called 'checkIsland' to the 'myCountry'
object. This method will set a new property on the object,
called 'isIsland'. 'isIsland' will be true if there are no
neighbouring countries, and false if there are. Use the
ternary operator to set the property */
//console.log(myCountry.checkIsland());



//////////////////////////
//  Coding Challenge #3 //
//////////////////////////
/* Let's go back to Mark and John comparing their BMIs! This 
time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter) */

/* Your tasks:
1. For each of them, create an object with properties for 
their full name, mass, and height(Mark Miller and John Smith) */
const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmiValue = this.mass / this.height ** 2;
        return this.bmiValue;
    }
}

const john = {
    firstName: `John`,
    lastName: `Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmiValue = this.mass / this.height ** 2;
        return this.bmiValue;
    }
}

/* 2. Create a 'calcBMI' method on each object to calculate
the BMI(the same method on both objects).Store the BMI value
to a property, and also return it from the method */
/* 3. Log to the console who has the higher BMI, together
with the full name and the respective BMI.Example: "John's
BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall.John
weights 92 kg and is 1.95 m tall. */
/* console.log(`${mark.firstName} weights ${mark.mass} kg and is ${mark.height} m tall.
${john.firstName} weights ${john.mass} kg and is ${john.height} m tall.`); */



// LECTURE: Iteration: The for Loop
/* 1. There are elections in your country! In a small town,
there are only 50 voters. Use a for loop to simulate the 50
people voting, by logging a string like this to the console
(for numbers 1 to 50): 'Voter number 1 is currently voting' */
/* for (let rep = 1; rep <= 50; rep++) {
    console.log(`Voter number ${rep} is currently voting`);
} */



// LECTURE: Looping Arrays, Breaking and Continuing
/* 1. Let's bring back the 'populations' array from a previous
assignment */
const populations = [144.5, 83.2, 8.86, 17.5];


/* 2. Use a for loop to compute an array called 'percentages2'
containing the percentages of the world population for the 4
population values. Use the function 'percentageOfWorld1'
that you created earlier */
const percentages2 = [];
for (let i = 0; i <= populations.length - 1; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
};

/* 3. Confirm that 'percentages2' contains exactly the same
values as the 'percentages' array that we created manually
in the previous assignment, and reflect on how much better
this solution is */
// console.log(percentages2);



// LECTURE: Looping Backwards and Loops in Loops
/* 1. Store this array of arrays into a variable called 
'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']]; */
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];

/* 2. Log only the neighbouring countries to the console,
one by one, not the entire arrays. Log a string like
'Neighbour: Canada' for each country */
/* console.log(`---LIST OF NEIGHBORING COUNTRIES---`);
for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
    // console.log(listOfNeighbours[i]);
    for (let e = 0; e <= listOfNeighbours[i].length - 1; e++) {
        console.log(`Neighbor: ${listOfNeighbours[i][e]}`);
    }
} */

/* 3. You will need a loop inside a loop for this. This is
actually a bit tricky, so don't worry if it's too difficult
for you! But you can still try to figure this out anyway */



// LECTURE: The while Loop
/* 1. Recreate the challenge from the lecture
'Looping Arrays, Breaking and Continuing', but this time
using a while loop (call the array 'percentages3') */
/* const percentages3 = [];
for (let i = 0; i <= populations.length - 1; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
};

let i = 0;
while (i <= populations.length - 1) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3); */

/* 2. Reflect on what solution you like better for this task:
the for loop or the while loop? */
/// For loop is better matching the task due to the known number of iterations



//////////////////////////
//  Coding Challenge #4 //
//////////////////////////
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
    if (billValue >= 50 && billValue < 300) {
        return billValue * 15 / 100;
    } else {
        return billValue * 20 / 100;
    }
};

function calcTotal(billValues, tipValues) {
    const totalValue = billValues + tipValues;
    return totalValue;
};

// Calculate a tip for each bill
for (let i = 0; i <= bills.length - 1; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTotal(bills[i], tips[i]));
}
console.log(bills, tips, totals);

