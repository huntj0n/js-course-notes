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

console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

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
