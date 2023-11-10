"use strict";

const Person = function (firstName, birthyear) {
  //instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;

  //never create a method inside a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthyear);
  //   };
};

const jonas = new Person("Jonas", 1991);
// console.log(jonas);

//4 steps behind the scenes
//1. New {} is created
//2. function is called, this = {}
//3. {} is linked to prototype
//4.function automatically returns {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
// console.log(matilda, jack);

const jay = "Jay";

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

/////////////////////////
//PROTOTYPES

// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

jonas.calcAge();
matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

////////////////
//Prototypal Inheritance on Built-in Objects
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__); //Object.prototype is usually the top of the prototype chain
// console.log(jonas.__proto__.__proto__.__proto__); //null

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3, 6, 9, 7, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  [...new Set(this)];
};
// console.log(arr.unique);

//the prototype chain for html elements
const h1 = document.querySelector("h1");
// console.dir(h1);

// console.dir((x) => x + 1);

///////
// ES6 Classes

const PersonClexp = class {}; //class expression
class PersonCldec {} //class declaration

class PersonCl {
  constructor(fullName, birthyear) {
    this.fullName = fullName;
    this.birthyear = birthyear;
  }

  calcAge() {
    console.log(2037 - this.birthyear);
  }
  get age() {
    return 2037 - this.birthyear;
  }

  set fullName(name) {
    if (name.includes(" ")) this.fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this._firstName}`);
};
jessica.greet();

//1. Classes ARE NOT hoisted, even if they are class declarations
//2. Classes, like functions, are first class citizens
//3. the body of a Class is executed in strict mode, even if we dont declare it

////////
// Setters and Getters

//functions that get or set a value

const account = {
  owner: "Jonas",
  movments: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a car. A Car has a make and a speed property.The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease car's speed by 5, and log the new speed to the console;

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA Car 1: 'BMW' going at 120 km/h
DATA Car 2: "Mercedes" going at 95 km/h
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();
