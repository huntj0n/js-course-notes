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
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length - 1);
//remember, expressions are anything that produces a value

//only primitive values are immutable, you can mutate arrays even if they are declared with const
friends[2] = "Jay";
console.log(friends);
// friends = ['bob', 'alice'] // here, you cant redo the entire array, just specific indicies

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", [friends]];
console.log(jonas);

//exercise
const calcAge = function (birthyear) {
  return 2037 - birthyear;
};
const years = [1990, 1967, 2002, 2010, 2018];
calcAge(years); // ?, the function doesnt know how to handle an array since it was programmed with a number
console.log(years + 10, years - 10); // you cant do calculations on arrays outright, but you can do them on individual elements (you need to iterate through arrays)

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years.length - 1);
console.log(age1, age2, age3);

//each index just needs to be an expression
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
