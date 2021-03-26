'use strict';
//
//
// --- Object-Oriented Programming (OOP) ---
// is a programming paradigm based on the convept of
//objects

// objects are models of real-world or abstract
//features

// objects may contain data (properties) and code
//(methods). By using objects, we pack data and
//the corresponding behaviour into one block

// In OOP, objects are self-contained pieces/blocks of
//code

// Objects are building blocks of applications, and
//interact with one another

// Interactions happen through a public interface (API):
//methods that the code outside of the object can access
//and use with the object

// OOP was developed with the goal of organazing code,
// to make it more flexible and easier to maintain

// 4 Fundamental OOP Principles
//
// 1) Abstraction
// - ignoring or hiding details that don't matter
// - allows to get an overview perspective of the
//thing we're implementing
//
// 2) Encapsulation
// - keeping properties and methods private inside the
//class, so they are not accessible from outside the
//class
// - some methods can be exposed as a public interface
//(API)
//
// 3) Inheritance
// - making all properties and methods of a certain
//class available to a child class, forming a
//hierarchical relationship between classes
// - this allows us to reuse common logic and to model
//real-world relationships
//
// 4) Polymorphism
// - a child class can overwrite a method it inherited
//from a parent class
//
//
//
// --- OOP in JavaScript: Prototypes ---
// Objects are linked to a prototype object
//
// Prototypes contain methods
//
// Prototypal inheritance: The prototype contains
// methods (behavior) that are accessible to all
//objects linked to that prototype
//
// Behavior (methods) is delegated to the linked
//prototype object
//
// Ways to implement prototypal inheritance in JS:
// 1) Construction functions
//  - Technique to create objects from a function
//  - This is how in-built objects like Arrays, Maps
//  or Sets are actually implemented
//
// 2) ES6 Classes
//  - Modern alternative to constructor function syntax
//  - "Syntactic sugar": behind the scenes, ES6 classes
//  work exactly like construction functions
//  - ES6 classes do NOT behave like classes in
//"classical OOP"
//
// 3) Object.create()
//  - The easiest and most straightforward way of
//linking an object to a prototype object
//
//
//
// --- Construction Functions and the new Operator ---
// Construction function is a function that uses
//the new operator
//const Person = function (firstName, birthYear) {
//  // print empty Person object
//  //console.log(this);
//
//  // Instance properties
//  this.firstName = firstName;
//  this.birthYear = birthYear;
//
//  // Never create a method inside of construction
//  //function, use inheritance!
//  //this.calcAge = function () {
//  //  console.log(2037 - this.birthYear);
//  //};
//};

//const jonas = new Person('Jonas', 1991);
//console.log(jonas);

// 1. New empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {} from the
//beginning

//const matilda = new Person('Matilda', 2017);
//const jack = new Person('Jack', 1975);
//console.log(matilda, jack);

//console.log(jonas instanceof Person); // true

// Prototypes
//console.log(Person.prototype);
//Person.prototype.calcAge = function () {
//  console.log(2037 - this.birthYear);
//};

//jonas.calcAge();

//console.log(jonas.__proto__);
//console.log(jonas.__proto__ === Person.prototype); //true

//console.log(Person.prototype.isPrototypeOf(jonas)); //true
//console.log(Person.prototype.isPrototypeOf(matilda)); //true
//console.log(Person.prototype.isPrototypeOf(Person)); //false

//Person.prototype.species = 'Homo Sapiens';
//console.log(jonas.species, matilda.species);

//console.log(jonas.hasOwnProperty('spcies')); // false
//console.log(jonas.hasOwnProperty('firstName')); // true

// --- Prototypal Inheritance and The Prototype Chain ---
// --- Prototypal Inheritance on Built-In Objects ---
// Print prototype properties of Object
//console.log(jonas.__proto__.__proto__);

// Object.prototype is a top of prototype chain
//console.log(jonas.__proto__.__proto__.__proto__); // null

// Points back at the person object
//console.dir(Person.prototype.constructor);

// Prototype of arrays
//const arr = [3, 5, 6, 6, 6, 7]; // same as new Array()
//console.log(arr.__proto__); // shows all methods of
//arrays

//console.log(arr.__proto__ === Array.prototype); // true

//console.log(arr.__proto__.__proto__);

// add a new method to an Array object
//Array.prototype.unique = function () {
//  return [...new Set(this)];
//};

//console.log(arr.unique()); // [3,5,6,7]

//const h1 = document.querySelector('h1');
//console.dir(h1);

//console.dir(x => x + 1);

//////////////////////////
//  Coding Challenge #1 //
//////////////////////////
//Your tasks:
//1. Use a constructor function to implement a 'Car'. A
//car has a 'make' and a 'speed' property. The 'speed'
//property is the current speed of the car in km/h
//2. Implement an 'accelerate' method that will
//increase the car's speed by 10, and log the new speed
//to the console
//3. Implement a 'brake' method that will decrease the
//car's speed by 5, and log the new speed to the console
//4. Create 2 'Car' objects and experiment with calling
//'accelerate' and 'brake' multiple times on each of them
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
  this.speed += 10;
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
  this.speed -= 5;
};

bmw.accelerate(); // 130
mercedes.accelerate(); // 105

bmw.brake(); // 125
mercedes.brake(); // 100 */
//
//
//
// --- ES6 Classes ---

//class expression
//const PersonCl = class {
//
//}

// class declaration
//class PersonCl {
//  constructor(fullName, birthYear) {
//    this.fullName = fullName;
//    this.birthYear = birthYear;
//  }

// Instance methods
// Methods will be added to .prototype property
//  clacAge() {
//    console.log(2037 - this.birthYear);
//  }

//  greet() {
//    console.log(`Hey ${this.firstName}`);
//  }
//
//  get age() {
//    return 2037 - this.birthYear;
//  }
//
//  // Set a property that already exists
//  set fullName(name) {
//    if (name.includes(' ')) this._fullName = name;
//    else alert(`${name} is not a full name!`);
//  }
//
//  get fullName() {
//   return this._fullName;
// }
//
//  // Static method
//  static hey() {
//    console.log(`Hey there!`);
//    console.log(this);
//  }
//}
//
//const jessica = new PersonCl('Jessica Davis', 1996);
//console.log(jessica);
//jessica.clacAge();
//console.log(jessica.age);
//
//console.log(jessica.__proto__ === PersonCl.prototype); // true
//
////PersonCl.prototype.greet = function () {
////  console.log(`Hey ${this.firstName}`);
////};
//jessica.greet();
//
//// 1. Classes are NOT hoisted
//// 2. Class are first-class citizens
//// 3. Classes are executed in strict mode
//
//const walter = new PersonCl('Walter White', 1965);
//
//PersonCl.hey();
//
// --- Setter and Getters ---
//
//const account = {
//  owner: 'Jonas',
//  movements: [200, 300, 150, 600],
//
//  // Getter method
//  get latest() {
//    return this.movements.slice(-1).pop();
//  },
//
//  // Setter method
//  set latest(mov) {
//    this.movements.push(mov);
//  },
//};
//
//// Using getter
//console.log(account.latest);
//
//// Using setter
//account.latest = 50;
//console.log(account.movements);

// --- Static Methods ---
//are built-in functions (methods) that are attached to
//an object construction
//Array.from(document.querySelectorAll('h1'));
//Number.parseFloat(12);

// how they work on constructors
//PersonCl.hey = function () {
//  console.log(`Hey there!`);
//  console.log(this);
//};
//
//PersonCl.hey();
//
//
//
// --- Object.create ---
//const PersonProto = {
//  calcAge() {
//    console.log(2037 - this.birthYear);
//  },
//
//  // This is NOT construction function
//  //
//  init(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  },
//};
//
//const steven = Object.create(PersonProto);
//console.log(steven);
//
//steven.name = 'Steven';
//steven.birthYear = 2002;
//steven.calcAge(); // 35
//
//console.log(steven.__proto__ === PersonProto); // true
//
//const sarah = Object.create(PersonProto);
//sarah.init('Sarah', 1979);
//sarah.calcAge(); // 58

//////////////////////////
//  Coding Challenge #2 //
//////////////////////////
//Your tasks:
//1. Re-create Challenge #1, but this time using an ES6
//class (call it 'CarCl')
//2. Add a getter called 'speedUS' which returns the
//current speed in mi/h (divide by 1.6)
//3. Add a setter called 'speedUS' which sets the
//current speed in mi/h (but converts it to km/h before
//storing the value, by multiplying the input by 1.6)
//4. Create a new car and experiment with the
//'accelerate' and 'brake' methods, and with the getter
//and setter.

//class CarCl {
//  constructor(make, speed) {
//    this.make = make;
//    this.speed = speed;
//  }
//
//  // Instance methods
//  accelerate() {
//    this.speed += 10;
//    console.log(this.speed + 10);
//  }
//
//  brake() {
//    this.speed -= 5;
//    console.log(this.speed - 5);
//  }
//
//  get speedUS() {
//    console.log(this.speed / 1.6);
//    return this.speed / 1.6;
//  }
//
//  set speedUS(speed) {
//    this.speed = speed * 1.6;
//    console.log(speed * 1.6);
//  }
//}

//const ford = new CarCl('Ford', 120);
//ford.accelerate(); // 130 km/h
//ford.speedUS; // 377 mi/h

//ford.speedUS = 50;
//console.log(ford); // speed = 80 km/h
//
//
//
// --- Inheritance between "classes" ---
// --- Constructor functions ---
/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // Call Person as function and set this to this from Person
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Firstly to create instance of Person "class"
Student.prototype = Object.create(Person.prototype);

// Secondly to add custom methods
// Because object.create overwrites everything
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Cartography');
mike.introduce();
mike.calcAge(); // 17

console.log(mike.__proto__); // Student object instance
console.log(mike.__proto__.__proto__); // Person object instance

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); */

//////////////////////////
//  Coding Challenge #3 //
//////////////////////////
//Your tasks:
//1. Use a constructor function to implement an Electric
//Car (called 'EV') as a child "class" of 'Car'. Besides
//a make and current speed, the 'EV' also has the
//current battery charge in % ('charge' property)
//2. Implement a 'chargeBattery' method which takes an
//argument 'chargeTo' and sets the battery charge to
//'chargeTo'
//3. Implement an 'accelerate' method that will increase
//the car's speed by 20, and decrease the charge by 1%.
//Then log a message like this: 'Tesla going at 140 km/h,
//with a charge of 22%'
//4. Create an electric car object and experiment with
//calling 'accelerate', 'brake' and 'chargeBattery'
//(charge to 90%). Notice what happens when you
//'accelerate'! Hint: Review the definiton of
//polymorphism �

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
  this.speed += 10;
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
  this.speed -= 5;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype to the new project EV
EV.prototype = Object.create(Car.prototype);

// Add custom methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 140, 22);
tesla.accelerate(); */
//
//
//
// --- Inheritance Between "Classes": ES6 Classes ---
/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  clacAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey there!`);
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Deconstructor function: always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  clacAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Johnes', 2012, 'Cartography');
console.log(martha);
martha.introduce();
martha.clacAge(); // 25 */
//
//
//
// --- Inheritance Between "Classes": Object.create ---
/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // This is NOT construction function
  //
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  // Use methods from PersonProto
  PersonProto.init.call(this, firstName, birthYear);
  // Set this unique property for a Student
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Cartography');
jay.introduce();
jay.calcAge(); // 27 */
//
//
//
// --- Another Class Example ---

class Account {
  // 1) Public field (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Private field (property)
    this.#pin = pin;
    //this._movements = []; // _ sets convention
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // return this makes the methods chainable
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }

  // Static method that is accessible only on the class itself (not on instances)
  static helper() {
    console.log(`Helper`);
  }

  // 4) Private methods use # as well (should be in proto methods but Chrome reads it as property at the moment)
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1._approveLoan(1000); // shouldn't be accesible from outside of the class
console.log(acc1.getMovements());
console.log(acc1);
//console.log(acc1.pin); // shouldn't be accessible from outside of the class
//console.log(acc1.#movements); // syntax error since #movements private
//
//
//
// --- Encapsulation: Protected Properties and Methods ---
// --- Encapsulation: Private Class Fields and Methods ---
// Public fields
// Private fields
// Public methods
// Private methods
// (there is also the static version)

//Account.helper();

// --- Chaining methods ---
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

//////////////////////////
//  Coding Challenge #4 //
//////////////////////////
//Your tasks:
//1. Re-create Challenge #3, but this time using ES6 classes:
//create an 'EVCl' child class of the 'CarCl' class
//2. Make the 'charge' property private
//3. Implement the ability to chain the 'accelerate' and
//'chargeBattery' methods of this class, and also update the
//'brake' method in the 'CarCl' class. Then experiment with
//chaining!
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Instance methods
  accelerate() {
    this.speed += 10;
    console.log(this.speed + 10);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed - 5);
  }

  get speedUS() {
    console.log(this.speed / 1.6);
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(speed * 1.6);
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    //console.log(this.speed + 10);
    this.speed += 10;
    this.#charge--;
    return this;
  }

  brake() {
    //console.log(this.speed - 5);
    this.speed -= 5;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().brake().chargeBattery(50);
console.log(rivian);
