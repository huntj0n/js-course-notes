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
const age = 18;
if (age === 18) console.log("You just became an adult");

console.log(18 === 18, 18 === 19, 18 == "18", 18 === 18);

//=== strict equality operator (does not do type coercion)
//== loose equality operator (does type coercion)
//its better to do conversion/coercion BEFORE you use the equality operator

const favorite = prompt("Whats your favorite number");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favorite == 7) {
  console.log("Cool!  7  is a cool number");
} else {
  console.log("nice number, but its not 23 or 7");
}