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
const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear) => {
  //if you had multiple parameters you just need to wrap them all in paranthesis
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement2 = (birthyear, firstName) => {
  //if you had multiple parameters you just need to wrap them all in paranthesis
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement2(1991, "Jonas"));
console.log(yearsUntilRetirement2(1980, "Bob"));
