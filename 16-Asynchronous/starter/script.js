'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} millions</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
      </article>
       `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //navigator.geolocation.getCurrentPosition(
    //  position => resolve(position),
    //  err => reject(err)
    //);
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
//getPosition().then(pos => console.log(pos));

// --- Consuming promises with Async/Await ---
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    //console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country data');
    const data = await res.json();
    //console.log(data[0].borders[0]);
    renderCountry(data[0]);

    // Neighbout country data
    const neighbour = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${data[0].borders[0]}`
    );
    if (!neighbour.ok)
      throw new Error(`Country not found (${response.status})`);

    const dataNeighbour = await neighbour.json();
    renderCountry(dataNeighbour, `neighbour`);

    //return `You are in ${dataGeo.city}, ${dataGeo.country}!`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);
  }
};

btn.addEventListener('click', whereAmI);
