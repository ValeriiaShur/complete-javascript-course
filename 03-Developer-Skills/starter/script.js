// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
// if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
//console.log(calcAge(1950));

// LECTURE: Using Google, StackOverflow, and MDN
const temps1 = [10, 15, 5, 3, 0, 'error', -1, -2, -5, -10, 2, 10, 16];
const temps2 = ['error', -30, -15, -5, 10, 16, 20];

const calcTemperature = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  // console.log(max, min);
  return max - min;
};
const amplitude = calcTemperature(temps1, temps2);
// console.log(amplitude);

// problem 2
// The function should recieve two arrays of temperatures
// Therefore merging two arrays in the beginning

// LECTURE: Debugging with the Consnole and Breakpoints
/* const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    // C1 FIX
    value: Number(prompt(`Degrees celsius:`)),
  };

  // B) FIND
  //console.log(measurement);
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY A BUG
console.log(measureKelvin()); */

//////////////////////////
//  Coding Challenge #1 //
//////////////////////////
/* Given an array of forecasted maximum temperatures, the 
thermometer displays a string with the given temperatures. 
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 
21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks: */
/* 1. Create a function 'printForecast' which takes in an 
array 'arr' and logs a string like the above to the console. 
Try it with both test datasets. */
const maxTemps1 = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = ` `;
  for (let i = 0; i < arr.length; i++) {
    string = string + `...${arr[i]}ºC in ${i + 1} days`;
  }
  // console.log(string);
  return string;
};
/* 2. Use the problem-solving framework: Understand the 
problem and break it up into sub-problems! */
// a)
printForecast(maxTemps2);
