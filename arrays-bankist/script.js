/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__value">${mov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      //   console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accts) {
  accts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//----- the .find() method -----
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

//-----CODING CHALLENGE 4-----
//
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �
*/
// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(data1);
// console.log(data2);

//-----CHAINING METHODS-----
// const eurToUSD = 1.1;
// //PIPELINE
// const totalDepositsUSD = movements
//   .filter((mov) => mov < 0)
//   //   .map((mov) => mov * eurToUSD)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUSD;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

//----- CODING CHALLENGE #2 -----
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (dogAges) {
//   const mapped = dogAges.map(function (age) {
//     if (age <= 2) 2 * age;
//     else 16 + age * 4;
//   });
//   const filtered = mapped.filter(function (age) {
//     return age > 18;
//   });
//   const reduced = filtered.reduce((acc, ages) => acc + ages, 0);

//   let average = reduced / dogAges.entries();
//   return average;
// };

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter((age) => age >= 18);
//   //   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   // average of 2 and 3 is 2.5. which is the same as 2/2 + 3/2. sooo.... because we have access to the array inside of the reduce method, we can immediately divide the age here by the length of the array
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };

// const average1 = calcAverageHumanAge(data1);
// const average2 = calcAverageHumanAge(data2);

// console.log(average1);
// console.log(average2);

//----- .map() method-----
// const createUsernames = function (accts) {
//   accts.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };
// createUsernames(accounts);

//----- .filter() method -----
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

//----- .reduce() method -----
// console.log(movements);

//accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// //Maximum value of array
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

//-----forEach WITH SETS AND MAPS-----
//map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });

//looping using a for of loop
// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }
// //  you cant break out of a for each loop, continue and break do not work
// console.log("---FOREACH---");
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// let arr = ["a", "b", "c", "d", "e"];

//--SLICE--  lets us extract any portion of the array without changing the original
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// //these next two do the same thing, making a shallow copy of the array. you can use either, use slice when you want to chain methods together
// console.log(arr.slice());
// console.log([...arr]);

// //--SPLICE--  like splice but DOES mutate the array. it takes a given element(s) out and returns them, the original loses what was extracted
// // console.log(arr.splice(2));
// arr.splice(-1); //common way to remove the last element of an array
// arr.splice(1, 2); //splice(start, deleteCount, item1, item2)
// console.log(arr);

// //--REVERSE-- DOES mutate the original array
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// //--CONCAT-- DOES NOT mutate the original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr], [...arr2]); //does the same thing as concat, doesnt mutate the origial array

// //--JOIN--
// console.log(letters.join("-"));

// //remember you also know push, unshift, pop, shift, indexOf and includes from the intro section

// //-- THE AT METHOD --
// const arr3 = [23, 11, 64];
// console.log(arr[0]);
// //but now we can do this same thing with a method
// console.log(arr.at(0));

// //getting the last array element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));
// console.log("jonas".at(0));
// console.log("jonas".at(-1));

//which should you use? method chaining, get the last element, count from the end; use at. otherwise its helpful but you can use what you want. the bracket notation is fast for getting the first element of the array

//-----LOOPING ARRAYS: the FOREACH method-----
//

//////////////////////////////////////////////////
//-----CODING CHALLENGE 1-----
//
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
*/

// const checkDogs = function (dogs1, dogs2) {
//   let catRemover = dogs1.slice(1, -1);
//   const combinedDogs = [...catRemover, ...dogs2];

//   combinedDogs.forEach(function (dog, i) {
//     if (dog > 3) {
//       console.log(
//         `Dog #${i + 1} is an adult, and is ${combinedDogs[i]} years old`
//       );
//     } else {
//       console.log(
//         `Dog #${i + 1} is a puppy, and is ${combinedDogs[i]} years old`
//       );
//     }
//   });
// };
// const juliasData1 = [3, 5, 2, 12, 7];
// const katesData1 = [4, 1, 15, 8, 3];

// const juliasData2 = [9, 16, 6, 8, 3];
// const katesData2 = [10, 5, 6, 1, 4];

// checkDogs(juliasData1, katesData1);
// checkDogs(juliasData2, katesData2);

// console.log(juliasData1);
// console.log(juliasData2);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //-----the MAP method-----

// //returns a new array containing the results of applying an operation (callback) on all original array elements

// const eurToUSD = 1.1;

// //.MAP is a little more in line with functional programming
// const movementsUSD = movements.map(function (mov) {
//   return mov * 1.1;
// });

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUSD);
// console.log(movementsUSDfor);

// const movementsUSDarrow = movements.map((mov) => mov * eurToUSD);
// console.log(movementsUSDarrow);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//     mov
//   )}`;
// });
// console.log(movementsDescriptions);
