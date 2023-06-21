"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(
      `order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: "22.30",
  address: "Via del Sol 21",
  mainIndex: 2,
  starterIndex: 2,
});

//-----THE SPREAD OPERATOR-----
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.maiunMenu, "Gnocci"];
console.log(newMenu);
//spreading creates a new array from scratch, it doesnt manipulate the original array
//spreading is similar to destructuring because it also helps us get elements out of arrays. the big difference is that the spread operator takes all the elements from the array and it also doesnt create new variables. As a consequence we can only use it in places where we would separate values by commas.

//two important use cases for the spread operator: shallow copying and merging
//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy)

//join 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//the spread operator works on all iterables: arrays, strings, maps, sets, but NOT objects
const str = "Jonas";
const letters = [...str, " ", "s."];
console.log(letters);
// console.log(`${...str} Schmedtman`) doesnt work because a template literal isnt expecting multiple things seperated by a comma

//real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1"),
  prompt("Ingredient 2"),
  prompt("Ingredient 3"),
];
console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//now, since 2016, the spread operator also works on objects, even though they arent interables
//Objects
const newRestaurant = { founding: "1998", ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

//instead of object.assign
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurant.name, restaurantCopy.nane);

//----- DESTRUCTURING ARRAYS -----//
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)[(main, secondary)] = [secondary, main];

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //-----nested destructuring-----
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //-----default values-----
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//
//
//-----DESTRUCTURING OBJECTS-----
//
// const { name, openingHours, categories } = retaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //manipulating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
