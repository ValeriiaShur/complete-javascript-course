//const h1 = document.querySelector('h1');

//const alertH1 = function (e) {
//  alert('addEventListener: Great! Your are reding the heading ;D');
//};

//h1.addEventListener('mouseenter', alertH1);

//h1.onmouseenter = function (e) {
//  alert('addEventListener: Great! Your are reding the heading ;D');
//};

//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// rgb(255,255,255)
//const randomInt = (min, max) =>
//  Math.floor(Math.random() * (max - min + 1) + min);
//const randomColor = () =>
//  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//console.log(randomColor(0, 255));

//document.querySelector('.nav__link').addEventListener('click', function (e) {
//  this.style.backgroundColor = randomColor();
//  console.log('LINK', e.target, e.currentTarget);

//  // Stop event propagation
//  //e.stopPropagation();
//});

//document.querySelector('.nav__links').addEventListener('click', function (e) {
//  this.style.backgroundColor = randomColor();
//  console.log('CONTAINER', e.target, e.currentTarget);
//});

//document.querySelector('.nav').addEventListener('click', function (e) {
//  this.style.backgroundColor = randomColor();
//  console.log('NAV', e.target, e.currentTarget);
//});

// DOM Traversing
//const h1 = document.querySelector('h1');

// Going downwards child
//console.log(h1.querySelectorAll('.highlight'));
//console.log(h1.childNodes);
//console.log(h1.children); // live collection (get updated)
//h1.firstElementChild.style.color = 'white';
//h1.lastElementChild.style.color = 'black';

// Going upwards
//console.log(h1.parentNode);
//console.log(h1.parentElement);

//h1.closest('.header').style.background = 'var(--gradient-secondary)';

//h1.closest('h1').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
//console.log(h1.previousElementSibling);
//console.log(h1.nextElementSibling);

// nodes
//console.log(h1.previousSibling);
//console.log(h1.nextSibling);

//console.log(h1.parentElement.children); // collection
//[...h1.parentElement.children].forEach(function (el) {
//  if (el !== h1) el.style.transform = 'scale(0.5)';
//});

// --- Lifecycle DOM Events ---
//document.addEventListener('DOMContentLoaded', function (e) {
//  console.log('HTML parsed and dom tree built', e);
//});

//window.addEventListener('load', function (e) {
//  console.log('Page fully loaded', e);
//});

//window.addEventListener('beforeunload', function (e) {
//  e.preventDefault();
//  console.log(e);
//  e.returnValue = '';
//});

// --- Efficient Script Loading: defer and async ---
