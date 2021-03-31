'use strict';

///////////////////////////////////////
// Option 1
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    //console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
   `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}; 

getCountryData('russia');
getCountryData('netherlands');
//getCountryData('germany');
//getCountryData('austria'); */

// Option 2

/*const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    //console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      //console.log(data2);

      // Render country 2
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('estonia'); */

// Option 3
/* const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
}; */

// Option 4

/* const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
        .then(response => {
          if (!response.ok)
            throw new Error(`Country not found (${response.status})`);

          return response.json();
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err =>
          //console.log(`${err}`); // catches all errors from the promise chain
          renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
        )
        .finally(() => {
          countriesContainer.style.opacity = 1;
        });
    });
}; */

/* const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      //console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
}); */

//////////////////////////
//  Coding Challenge #1 //
//////////////////////////
//In this challenge you will build a function 'whereAmI' which renders a country
//only based on GPS coordinates. For that, you will use a second API to geocode
//coordinates. So in this challenge, you’ll use an API on your own for the first time �
//Your tasks:
//PART 1
//1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
//and a longitude value ('lng') (these are GPS coordinates, examples are in test
//data below).
//2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
//to convert coordinates to a meaningful location, like a city and country name.
//Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
//will be done to a URL with this format:
//https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
//promises to get the data. Do not use the 'getJSON' function we created, that
//is cheating �
//3. Once you have the data, take a look at it in the console to see all the attributes
//that you received about the provided location. Then, using this data, log a
//message like this to the console: “You are in Berlin, Germany”
//4. Chain a .catch method to the end of the promise chain and log errors to the
//console
//5. This API allows you to make only 3 requests per second. If you reload fast, you
//will get this error with code 403. This is an error with the request. Remember,
//fetch() does not reject the promise in this case. So create an error to reject
//the promise yourself, with a meaningful error message
//PART 2
//6. Now it's time to use the received data to render a country. So take the relevant
//attribute from the geocoding API result, and plug it into the countries API that
//we have been using.
//7. Render the country and catch any errors, just like we have done in the last
//lecture (you can even copy this code, no need to type the same code)

/* const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(function (response) {
      //console.log(response);
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return (
        fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
          .then(function (response) {
            if (!response.ok)
              throw new Error(`Country not found (${response.status})`);
            return response.json();
          })
          .then(data => renderCountry(data[0], `${data[0].name}`))
      );
    })
    .catch(err => console.error(err.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381); // Berlin
whereAmI(19.037, 72.873); // British Indian
whereAmI(-33.933, 18.474); // South Africa */

//console.log(`Test start`);
//setTimeout(() => console.log('0 sec timer'), 0);

//Promise.resolve('Resolved promise 1').then(response => console.log(response));
//console.log('Test end');

// --- Building a simple Promise ---
//const lotteryPromise = new Promise(function (resolve, reject) {
//  console.log('Lottery draw is happening');
//  setTimeout(function () {
//    if (Math.random() >= 0.5) {
//      resolve('You WIN!!!');
//    } else {
//      reject(new Error('You lost your money!'));
//    }
//  }, 2000);
//});
//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promosifying setTimeout
//const wait = function (seconds) {
//  return new Promise(function (resolve) {
//    setTimeout(resolve, seconds * 1000);
//  });
//};
//wait(2)
//  .then(() => {
//    console.log('I waited for 2 seconds');
//    return wait(1);
//  })
//  .then(() => {
//    console.log('I waited for 1 second');
//  });

//Promise.resolve('abc').then(x => console.log(x));
//Promise.reject(new Error('Problem!')).catch(x => console.log(x));

/* const whereAmI = function () {
  getPosition().then(pos => {
    //console.log(pos.coords);
    const { latitude: lat, longitude: lng } = pos.coords;

    return fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
      .then(function (response) {
        //console.log(response);
        if (!response.ok)
          throw new Error(`Problem with geocoding (${response.status})`);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
          .then(function (response) {
            if (!response.ok)
              throw new Error(`Country not found (${response.status})`);
            return response.json();
          })
          .then(data => renderCountry(data[0], `${data[0].name}`));
      })
      .catch(err => console.error(err.message))
      .finally(() => {
        countriesContainer.style.opacity = 1;
      });
  });
};
btn.addEventListener('click', whereAmI); */

//////////////////////////
//  Coding Challenge #2 //
//////////////////////////
//Your tasks:
//Tasks are not super-descriptive this time, so that you can figure out some stuff by
//yourself. Pretend you're working on your own �
//PART 1
//1. Create a function 'createImage' which receives 'imgPath' as an input.
//This function returns a promise which creates a new image (use
//document.createElement('img')) and sets the .src attribute to the
//provided image path
//2. When the image is done loading, append it to the DOM element with the
//'images' class, and resolve the promise. The fulfilled value should be the
//image element itself. In case there is an error loading the image (listen for
//the'error' event), reject the promise
//3. If this part is too tricky for you, just watch the first part of the solution
//PART 2
//4. Consume the promise using .then and also add an error handler
//5. After the image has loaded, pause execution for 2 seconds using the 'wait'
//function we created earlier
//6. After the 2 seconds have passed, hide the current image (set display CSS
//property to 'none'), and load a second image (Hint: Use the image element
//returned by the 'createImage' promise to hide the current image. You will
//need a global variable for that �)
//7. After the second image has loaded, pause execution for 2 seconds again
//8. After the 2 seconds have passed, hide the current image
const imageContainer = document.querySelector('.images');
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      imageContainer.append(this);
      resolve(this);
    });

    image.addEventListener('error', function () {
      reject(new Error(`Image not found`));
    });
  });
};

let currentImage;
createImage(`img/img-1.jpg`)
  .then(img => {
    currentImage = img;
    console.log(`Image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage(`img/img-2.jpg`);
  })
  .then(img => {
    currentImage = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(err)); */

// to return a string from a async function
//whereAmI().then(city = console.log(city));

//console.log(`1: Will get location`);
////whereAmI()
////  .then(city => console.log(`2: ${city}`))
////  .catch(err => console.log(`2: ${err.message}`))
////  .finally(() => console.log(`3: Finished getting location`));

//(async function () {
//  try {
//    const city = await whereAmI();
//    console.log(`2: ${city}`);
//  } catch (err) {
//    console.log(`2: ${err.message}`);
//  }
//  console.log(`3: Finished getting location`);
//})();

// --- Running Promises in Parallel ---
/* const get3Countries = async function (c1, c2, c3) {
  try {
    //const [data1] = await getJSON(
    //  `https://restcountries.eu/rest/v2/name/${c1}`
    //);
    //const [data2] = await getJSON(
    //  `https://restcountries.eu/rest/v2/name/${c2}`
    //);
    //const [data3] = await getJSON(
    //  `https://restcountries.eu/rest/v2/name/${c3}`
    //);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('russia', 'canada', 'tanzania'); */

// --- Other Promise Combinators: race, allSettled, and any ---

// Promise.race - returns a promise for one of the requests
/* (async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/russia`),
  ]);
  console.log(res[0]);
})();

// Using Promise.race() for showing something like 'request got expired'
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, sec);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/russia`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled() [ES2020]
// - takes an array and returns all settled promises (even rejected ones)
Promise.allSettled([
  Promise.resolve(`Success`),
  Promise.resolve(`Success`),
  Promise.resolve(`ERROR`),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve(`Success`),
  Promise.resolve(`Success`),
  Promise.resolve(`ERROR`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any() [ES2021]
// - takes an array and returns only fulfilled promises (rejected stay ignored)
Promise.any([
  Promise.resolve(`Success`),
  Promise.resolve(`Success`),
  Promise.resolve(`ERROR`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err)); */

//////////////////////////
//  Coding Challenge #3 //
//////////////////////////
//Your tasks:
//PART 1
//1. Write an async function 'loadNPause' that recreates Challenge #2, this time
//using async/await (only the part where the promise is consumed, reuse the
//'createImage' function from before)
//2. Compare the two versions, think about the big differences, and see which one
//you like more
//3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
//in the dev tools Network tab
//PART 2
//1. Create an async function 'loadAll' that receives an array of image paths
//'imgArr'
//2. Use .map to loop over the array, to load all the images with the
//'createImage' function (call the resulting array 'imgs')
//3. Check out the 'imgs' array in the console! Is it like you expected?
//4. Use a promise combinator function to actually get the images from the array �
//5. Add the 'parallel' class to all the images (it has some CSS styles)
/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      imageContainer.append(this);
      resolve(this);
    });

    image.addEventListener('error', function () {
      reject(new Error(`Image not found`));
    });
  });
}; */

// Part 1
/* const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage(`img/img-1.jpg`);
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage(`img/img-2.jpg`);
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
loadNPause(); */

// Part 2
/* const loadAll = async function (imgArray) {
  try {
    const imgs = imgArray.map(async img => await createImage(img));
    console.log(imgs); // returns promises (NOT images)

    const imgsElements = await Promise.all(imgs);
    console.log(imgsElements);

    imgsElements.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll([`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`]); */

/* 
let currentImage;
createImage(`img/img-1.jpg`)
  .then(img => {
    currentImage = img;
    console.log(`Image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage(`img/img-2.jpg`);
  })
  .then(img => {
    currentImage = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(err)); */
