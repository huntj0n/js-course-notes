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
// const lufthansa = {
//   airLine: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   //book: funciton(){},
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas Schmedtmann");
// lufthansa.book(635, "Mike Smith");
// console.log(lufthansa);

// const eurowings = {
//   airLine: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23, "Sarah Williams"); //this book function is no longer a method, its a regular function called. therefore, the 'this' keyword now points to undefined rather than the object on which we wanted it to be called

// //Call Method
// book.call(eurowings, 23, "Sarah Williams"); //remember that a function is really just an object, and objects have methods, and therefore functions can have methods
// console.log(eurowings);

// book.call(lufthansa, 2239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airLine: "Swiss Airlines",
//   iataCode: "LX",
//   bookings: [],
// };
// book.call(swiss, 583, "Mary Cooper");
// console.log(swiss);

// //Apply Method: same as the call method, but takes an array of args instead of straight args
// //              not really used in modern JS
// const flightData = [583, "George Cooper"];
// book.apply(swiss, [flightData]);
// console.log(swiss);

// book.call(swiss, ...flightData); //using the spread operator here is the exact same as the apply method

// //BIND Method
// // book.call(eurowings, 23, "Sarah Williams")

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);
// //does not call the function! just binds it to the eurowings object
// bookEW(23, "Steven Williams");
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Charles Oliveira");
// console.log(eurowings);

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * rate

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(100));
// console.log(addVAT2(23));

//-----CODING CHALLENGE 1---
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
*/
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = prompt(
//       "What is your favourite programming language? \n0: JavaScript\n1 Python, \n2: Rust, \n3: C++, \n(Write option number)"
//     );
//     console.log(answer);
//     this.answers[answer] += 1;
//     this.displayResults();
//   },
//   displayResults() {
//     console.log(this.answers);
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Get Answer
//     const answer = Number(
//       prompt(
//         `${this.question} \n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     //Register Answer
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Results are ${this.answers.join(", ")}`);
//     }
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");

//////////////////////////////////////////////////////////////
//
//

//-----IMMEDIATELY INVOKED FUNCTION EXPRESSIONS-----
// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// (function () {
//   console.log("this will really never run again");
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);
// () => console.log("This will ALSO never run again");

//-----CLOSURES-----
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// //f is reassigned by h
// h();
// f();

// const boardPassengers = function (n, wait) {
//   const preGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${preGroup} passengers`);
//   }, wait * 1000);

//   console.log(`We will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

////////////////////////////////
//-----CODING CHALLENGE 2-----
//
/*
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
//its necessary, or useful, because by the time the event listener is initiated the 'header' variable is executed and long gone. But still, the addeventlistener function is attached to the body, and even though the specific execution context is gone, the event callback function still has access to those variables it had at its 'birth' essentially
