// let js = "amazing";
// // if (js === "amazing") alert("JS is FUN!");

// console.log(40 + 8 + 23 - 10);

// // VALUES //
// console.log("jonas");
// console.log(23);

// let firstName = "Matilda";

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJon = "teacher";

// ======== DATA TYPES ========
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof 34);
// console.log(typeof "string");

// javascriptIsFun = "YES!";
//dynamic typing

// ===== let, const, var =====
// let age = 30;
// age = 31;

// const birthYear = 1991
// birthYear = 1990
// you should be using let only when you know it will change. its good practice to have as little variable changes as possible. var is legacy and should be avoided, just know how it works.

//  ===== BASIC OPERATORS =====
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// // Comparison Operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////////////////////////
// =========== CODING CHALLENGE #1 ==========
// mark and john are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. create a boolean variable 'MarkHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John wights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// const marksMass = 78;
// const marksHeight = 1.69;
// const johnsMass = 92;
// const johnsHeight = 1.95;

// const marksMass = 95;
// const marksHeight = 1.95;
// const johnsMass = 85;
// const johnsHeight = 1.76;

// const marksBMI = marksMass / marksHeight ** 2;
// const johnsBMI = johnsMass / johnsHeight ** 2;

// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);
////////////////////////////////////////////////////////

//STRINGS AND TEMPLATE LITERALS
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`Just a normal string...`);

console.log(
  "string with \n\
multiple\n\
lines"
);
console.log(`another string with
multiple
lines`);
