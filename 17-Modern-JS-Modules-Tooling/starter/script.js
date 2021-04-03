// Importing module
/* import {
  addToCart,
  totalPrice as price,
  tq,
} from './shoppingCart.js';


addToCart('bread', 5);
console.log(price, tq);*/

console.log('Importing module');

// Import everything at once
//import * as ShoppingCart from './shoppingCart.js'; // undefined because properties are private (scoped only to the module) // Closures allow functions to have access to their //values present at their birth moment // // // // --- CommonJS Modules --- // Export //export.addToCart =  function (product, quantity) { //  cart.push({ product, quantity }); //  console.log(`${quantity} ${product} added to cart`); //}; // Import //const {addToCart} = require('./shoppingCart.js');
/*ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice); */

// Import 'export default' function from shoppingCart.js
/*import add from './shoppingCart.js';
//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price); */
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// --- The Module Pattern ---
// the goal is to encapsulate functionality to have private data
//and expose public API

// the best way to achieve it is using functions
// IIF (immedeately invoked function) to create a new scope and
//return data just once
/* const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuality = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuality,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2.shippingCost); */
//
//
// --- A Brief Introduction to the Command Line ---
//
//
// --- Introduction to NPM ---

// Let's copy deeply nested object
//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
//import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

// Let's change the nested object and see what happens in
//console.log
//state.user.loggedIn = false;
//console.log(stateClone); // 1st loggedIn has also changed to false

// It is really hard to copy manually
//Therefore better using ready function for deepCopy from lodash
const stateDeepCopy = cloneDeep(state);
console.log(stateDeepCopy);

// --- Building with Parcel and NPM Scripts
// Keeps the state of the page whenever reload
if (module.hot) {
  module.hot.accept();
}

// --- Configuring Babel and Polyfilling ---
/* class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas'); */

// Even though find() method is ES6+, it is not being converted
//by Babel because it is not possible
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// However it can be fixed with polyfilling
import 'core-js/stable';
//import 'core-js/stable/array/find';

// Polyfilling async functions
import 'regenerator-runtime/runtime';
