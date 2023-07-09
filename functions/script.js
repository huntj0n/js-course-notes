"use strict";

const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5 way of doing it
//   // numPassenders = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 150); //you cant skip parameters, the undefined is a nice trick to get around that. its like it wasnt defined, therefore, it will get the default parameter set at the function declaration

// const flight = "LH234";

// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   (flightNum = "LH999"), (passenger.name = "Mr " + passenger.name);

//   if (passenger.passport === 24739479284) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //passing a primitive type to a function is really just like making a copy outside of the function, otherhand, when we pass an object to a function, it is really just like copying the object so any changes we make in the function changes the original object.

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(jonas);
// console.log(jonas);
// checkIn(flight, jonas);

//2 functions changing the original object

//passing by value vs passing by reference: javascript ONLY has passing by value, not passing by reference. JS DOES NOT HAVE PASS BY REFERENCE

//-----HIGHER ORDER AND CALLBACK FUNCTIONS
// const oneWord = function (str) {
//   return str.replace(/ /g, "".toLowerCase());
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("Javascript is the best!", upperFirstWord);

// //Callbacks: JS uses callbacks ALL THE TIME
// const high5 = function () {
//   console.log("HIGHFIVE");
// };
// document.body.addEventListener("click", high5);

// ["Jonas", "Martha", "Adam"].forEach(high5);

//-----FUNCTIONS RETURNING FUNCTIONS-----
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");
// //these works due to closures, more on that later

// greet("Hello")("Jonas");
// //this type of function callbacks and closures is very useful for the functional programming paradigm

// //greet arrow
// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArrow("Hey there")("Jonas");

//-----THE CALL AND APPLY METHODS-----
const lufthansa = {
  airLine: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //book: funciton(){},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "Mike Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah Williams"); //this book function is no longer a method, its a regular function called. therefore, the 'this' keyword now points to undefined rather than the object on which we wanted it to be called

//Call Method
book.call(eurowings, 23, "Sarah Williams"); //remember that a function is really just an object, and objects have methods, and therefore functions can have methods
console.log(eurowings);

book.call(lufthansa, 2239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

//Apply Method: same as the call method, but takes an array of args instead of straight args
//              not really used in modern JS
const flightData = [583, "George Cooper"];
book.apply(swiss, [flightData]);
console.log(swiss);

book.call(swiss, ...flightData); //using the spread operator here is the exact same as the apply method
