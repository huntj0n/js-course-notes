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
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`Just a normal string...`);

// console.log(
//   "string with \n\
// multiple\n\
// lines"
// );
// console.log(`another string with
// multiple
// lines`);

// =============== IF ELSE STATETMENTS ================
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait ${yearsLeft} more years`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 19;
// } else {
//   century = 21;
// }
// console.log(century);

/////////////////////////////////////////////////
//========== CODING CHALLENGE 2 =============
//Use the BMI example from Challenge #1, and the code you already wrote, and impore it!

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than Jon's!" or "John's BMI (28.3) is higher than John's (23.9)!"

//hint: Use an if/else statement

// const marksMass = 78;
// const marksHeight = 1.69;
// const johnsMass = 92;
// const johnsHeight = 1.95;

// // const marksMass = 95;
// // const marksHeight = 1.95;
// // const johnsMass = 85;
// // const johnsHeight = 1.76;

// const marksBMI = marksMass / marksHeight ** 2;
// const johnsBMI = johnsMass / johnsHeight ** 2;

// let markHigherBMI = marksBMI > johnsBMI;
// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})`
//   );
// } else {
//   console.log(
//     `Mark's BMI (${marksBMI}) is lower than John's BMI (${johnsBMI})`
//   );
// }

////////////
//=========== TYPE CONVERSION AND COERCION ===========
// const inputYear = "1991";
// console.log(inputYear + 19);
// console.log(Number(inputYear));

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// //JS can only convert to 3 types: string, number, or boolean. not undefined or NaN

// //type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); //subtraction coerces to numbers
// console.log("23" + "10" + 3); //addition coerces to strings
// console.log("23" * "2");
// console.log("23" / "2");

// //guess what will print
// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// let y = 2 + 3 + 4 + "5";
// console.log(y);

// let z = "10" - "4" - "3" - 2 + "5";
// console.log(z);

//========= TRUTHY AND FALSEY VALUES ==========
// 5 'falsy' values: 0, '', undefined, null, NaN
// everything else is 'truthy'
// ie, converts/boils down to true or false evaluations

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// // logical operators and if/else conditions
// const money = 10;
// if (money) {
//   console.log("dont spend it all");
// } else {
//   console.log("you should get a job");
// }

// // let height;
// // if (height) {
// //   console.log("YAY! Height is defined");
// // } else {
// //   console.log("Height is UNDEFINED");
// // }
// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }
// //this is an example of a bug using this method, 0 evaluates to false even though it is technically 'defined'

//======= EQUALITY OPERATORS =======
// const age = 18;
// if (age === 18) console.log("You just became an adult");

// console.log(18 === 18, 18 === 19, 18 == "18", 18 === 18);

// //=== strict equality operator (does not do type coercion)
// //== loose equality operator (does type coercion)
// //its better to do conversion/coercion BEFORE you use the equality operator

// const favorite = prompt("Whats your favorite number");
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) {
//   console.log("Cool! 23 is an amazing number");
// } else if (favorite == 7) {
//   console.log("Cool!  7  is a cool number");
// } else {
//   console.log("nice number, but its not 23 or 7");
// }

//======= BOOLEAN LOGIC/LOGICAL OPERATORS =======
//and, or, not
//!A, A AND B, A OR B, !A and B, A OR !B...
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense && hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (shouldDrive && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

/////////////////////////////////////////////////
//======= CODING CHALLENGE #3 =======
//
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy.

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Dont forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greate or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91, 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolpphins score 97, 112 and 101. Koalas score 109, 95 and 106.

// initial
// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

//bonus 1
// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 123) / 3;

//bonus2
// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 106) / 3;

// if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
//   console.log("Its a draw!");
// } else if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log("Dolphins win!");
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//   console.log("Koalas win!");
// } else {
//   console.log("No one was over 100 points");
// }

////////////////////////////////////////////////////////////////

//======== THE SWITCH STATEMENT =======
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("preparing theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("preparing theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("not a valid day");
// }

//======= STATESMENTS AND EXPRESSIONS =======

// expressions produce values
// 3 + 4;
// 1991;
// true && false && !false;

// // declarations are like sentences
// if (23 > 10) {
//   const str = "23 is bigger";
// }
//these dont really produce a value, they just declare something (a statement)
// expressions produce values, statements are like full sentences that translate our actions that we want our program to perform
// statements wont work/make sense where JS expects an expression

//
//======= TERNERY: THE CONDITIONAL OPERATOR =======
//
// const age = 23;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log("i like to drink water");
//  condition ? if : else
// operators produce a value, in other words, operators are expressions
// exppressions can be stored in a variable, we can conditionally declare them with ternaries

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }

// console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
// operator = expressions
//ternaries arent a replacement for if/else statements. We still need if statements for bigger blocks of code and conditionals, but ternaries are great for quick decisions

//
////////////////////////////////////
//======= CODING CHALLENGE 4 =======
////////////////////////////////////
//

/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, its usual to tip 15% if the bill value is between 50 and 300. If the value is different , the tip is 20%

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. Its not allowed to use an if/else statement (if its easier or you, you can start with an if/else statement, and then try to convert it to a ernary operator)
2. Print a string to the console containing the bill value, the tip, and final value (bill + tip). Example: 'the bill was 275, the tip was 41.25, and the total value was 316.25'

test data: Test for the bill values 275, 40 and 430
*/

const bill = 275;
// const bill = 40
// const bill = 430

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const total = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total was ${total}`
);
