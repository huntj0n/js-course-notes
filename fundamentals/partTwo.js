"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D')

//
//======= FUNCTIONS =======
//
//functions are pieces of code that we can reuse over and over again. like a variable but for whole sections of code.

//declaration
// function logger() {
//   console.log("my name is jonas");
// }

// //calling/running/invoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;

//   return juice;
// }
//here, you have to capture the returned result of the function in order to use it. fruitProcessor(5,0) is the result of the function, but we need to tell the computer what to do with it
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//
//===== FUNCTION DECLARATIONS VS EXPRESSIONS =====
//
//funciton declarations
// function calcAge1(birthyear){
//     // const age = 237 - birthyear
//     // return  age
//     return age = 2037-birthyear;
// }
// const age1 = calcAge1(1991)

// // function expressions
// const calcAge2 = function(birthyear){
//     return age = 2037 - birthyear
// }
// const age2 =  calcAge2(1991)

// console.log(age1, age2)

//which should you use? often its up to personal preference. expressions allow you to have things stored in variables but its up to you. you just need to know how to use and  distinguish each.

//
//======= ARROW FUNCTIONS =======
//
// a specially written function expression
// const calcAge2 = function(birthyear){
//     return age = 2037 - birthyear
// }
// const age2 =  calcAge2(1991)
// const calcAge3 = (birthyear) => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear) => {
//   //if you had multiple parameters you just need to wrap them all in paranthesis
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearsUntilRetirement(1991));

// const yearsUntilRetirement2 = (birthyear, firstName) => {
//   //if you had multiple parameters you just need to wrap them all in paranthesis
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement2(1991, "Jonas"));
// console.log(yearsUntilRetirement2(1980, "Bob"));

//
//===== FUNCTIONS CALLING OTHER FUNCTIONS =====
//

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2,3))

//
//======= REVIEWING FUNCTIONS =======
//
// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };
// const yearsUntilRetirement2 = function (birthyear, firstName) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

//   return retirement;
// };

// console.log(yearsUntilRetirement2(1991, "Jonas"));
// console.log(yearsUntilRetirement2(1950, "Mike"));

/////////////////////////////////////
//======= CODING CHALLENGE 1 =======
/////////////////////////////////////
/*
Back to the two gymnastic teams, the Dolphins and the Koalas. There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the three scores is calculated (so one average score per team.)
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins.

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins', 'aveKoalas') and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 to 13)"
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// const calcAvg = (a, b, c) => (a + b + c) / 3;

// // TEST DATA 1
// const avgDolphins1 = calcAvg(44, 23, 71);
// const avgKoalas1 = calcAvg(65, 54, 49);
// //TEST DATA 2
// const avgDolphins2 = calcAvg(85, 54, 41);
// const avgKoalas2 = calcAvg(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     const result = `Dolphins Win (${avgDolphins} to ${avgKoalas})`;
//     return result;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     const result = `Koalas Win (${avgKoalas} to ${avgDolphins})`;
//     return result;
//   } else {
//     return "no team wins!";
//   }
// };

// console.log(checkWinner(avgDolphins1, avgKoalas1));
// console.log(checkWinner(avgDolphins2, avgKoalas2));

//////////////////////////////////////////////////////

//
//======= INTRO TO ARRAYS =======
//
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends.length - 1);
// //remember, expressions are anything that produces a value

// //only primitive values are immutable, you can mutate arrays even if they are declared with const
// friends[2] = "Jay";
// console.log(friends);
// // friends = ['bob', 'alice'] // here, you cant redo the entire array, just specific indicies

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", [friends]];
// console.log(jonas);

// //exercise
// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// calcAge(years); // ?, the function doesnt know how to handle an array since it was programmed with a number
// console.log(years + 10, years - 10); // you cant do calculations on arrays outright, but you can do them on individual elements (you need to iterate through arrays)

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years.length - 1);
// console.log(age1, age2, age3);

// //each index just needs to be an expression
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//
//====== ARRAY OPERATIONS (METHODS) =======
//
// array methods: built in functions you can call on arrays

// //add elements to the end
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// //add element to the beginning
// friends.unshift("Jon");
// console.log(friends);

// //remove elements from the end of the array
// friends.pop(); //removes the last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// //remove the first element from the array
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); //if you dont have an element you'll get a -1

// console.log(friends.includes("Steven")); //returns a boolean based on if the element is in the array
// console.log(friends.includes("bob"));

// if (friends.includes("Peter")) {
//   //includes returns a boolean, which you can use for logical operators
//   console.log("You have a friend named Peter");
// }

////////////////////////////////////
//======= CODING CHALLENGE 2 =======
////////////////////////////////////

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the value is betwenn 50 and 300, otherwise tip 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first challenge if you need to). Use the function type you like the most. Test the function using a test value of 100.
2. And now lets use arrays! Create an array called 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function before.
4. BONUS: Create an array called 'total' containing the total values, so bill + tip.

TEST DATA: 125, 555, and 44
*/
// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill + bill * 0.15;
//   } else {
//     return bill + bill * 0.2;
//   }
// };
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // console.log(calcTip(100));
// // console.log(calcTip(500));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

////////////////////////////////////

//
//======= OBJECTS =======
//
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// // DOT NOTATION
// console.log(jonas.lastName);
// console.log(jonas["lastName"]); //main difference here is that with bracket notation you can put any EXPRESSION that you would like. ie you can compute the value from some operation

// const namekey = "Name";
// console.log(jonas["first" + namekey]);
// console.log(jonas["last" + namekey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtmann";
// console.log(jonas);

// //CHALLENGE
// //programatically write: 'Jonas has 3 friends and his best friend is called Michael'
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`
// );

//
//======= OBJECT METHODS =======
//
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthyear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   //   calcAge: function (birthyear) {
//   //     return 2037 - birthyear;
//   //   },
//   //   calcAge: function () {
//   //     return 2037 - this.birthyear; //'this' gives us access to the object on which  this method is called. more on it later
//   //   },
//   calcAge: function () {
//     this.age = 2037 - this.birthyear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age} year old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//   },
// };

// // console.log(jonas.calcAge(1991));
// // console.log(jonas["calcAge"](1991));
// console.log(jonas.calcAge());
// console.log(jonas.age);

// //CHALLENGE
// //compute using a method: 'Jonas is a 46-year old teacher and he has a drivers license
// console.log(jonas.getSummary());

////////////////////////////////////
//======= CODING CHALLENGE 3 =======
////////////////////////////////////
/*
Let's go back to Mark and John comparing their BMI's! This time, lets use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in m)

1. For each of them, create an object with properties for their full name, mass, height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name a respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)"

TEST DATA: Mark weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
*/

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// john.calcBMI() > mark.calcBMI()
//   ? console.log(
//       `Johns BMI (${john.bmi}) is higher than Marks BMI (${mark.bmi})`
//     )
//   : console.log(
//       `Marks BMI (${mark.bmi}) is higher than Johns BMI (${john.bmi})`
//     );

//
//====== ITERATION: THE FOR LOOP =======
//
//without loops:
// console.log("Lifting wieghts repitition: 1");
// console.log("Lifting wieghts repitition: 2");
// console.log("Lifting wieghts repitition: 3");
// console.log("Lifting wieghts repitition: 4");
// console.log("Lifting wieghts repitition: 5");
// console.log("Lifting wieghts repitition: 6");
// console.log("Lifting wieghts repitition: 7");
// console.log("Lifting wieghts repitition: 8");
// console.log("Lifting wieghts repitition: 9");
// console.log("Lifting wieghts repitition: 10");

//for loops keep running while the condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition: ${rep}`);
// }

//
//======= LOOPING ARRAYS: BREAKING AND CONTINUING =======
//
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //   types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
//continue: exit the current iteration and continue to the next
//break: exit the entire loop
console.log("---ONLY STRINGS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  //all we want to do is log strings, else we skip it
  console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  //all we want to do is log strings, else we skip it
  console.log(jonas[i], typeof jonas[i]);
}
