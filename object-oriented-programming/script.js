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
console.log(jonas);

//4 steps behind the scenes
//1. New {} is created
//2. function is called, this = {}
//3. {} is linked to prototype
//4.function automatically returns {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "Jay";

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

/////////////////////////
//PROTOTYPES

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
