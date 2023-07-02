"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
  //this works the exact same wasy as the ones below

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  // },

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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//-----OPTIONAL CHAINING (?.)
// console.log(restaurant.openingHours.mon.open //the 'mon' property is undefined so the open property will return an error

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  restaurant.openingHours[day]?.open || "closed";
  console.log(`on ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = []

console.log(users[0]?.name ?? "User arra empty");
if (users.length > 0) console.log(user[0].name);
else console.log("user array empty");

//-----ENHANCED OBJECT LITERALS-----

//-----LOOPING ARRAYS: THE FOR-OF LOOP-----
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// //basically an abstraction from the regular for loop, built in counters and conditions essentially
// //you can still use the continue and break keywords here too
// //does make it harder to access the current index of the arra
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log(...menu.entries());

/////////////////////////////////
//-----CODING CHALLANGE #1-----
/*
We're building a football betting app!

suppose we get data from a web service about a certain game (below). In this challenge we're gonna weork with the data. so Here are you tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the foalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeprs name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich(team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw', 'team2')
6. Write a function ('printGoals') that recieves an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed ins)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with platers from game.scored
*/
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrusia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnabry",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// //3.
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(gk, fieldPlayers, allPlayers);

// //4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
// console.log(players1Final);

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game.console.log(team1, team2, draw);

// //6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
// printGoals(game.scored); //this doesnt give you the result you want because its seeing the whole array as one argument. you need to take the players out of that array with the rest pattern
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 1 is more likely to win`);
////////////////////////////////////////////////////////////////

/*
//-----LOGICAL ASSIGNMENT OPERATORS-----
const rest1 = {
  name: "Capri",
  numGuests: 20,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};


//--- OR assignment operator
// what the OR assignment operator assigns a value to a variable IF that variable is currently falsy

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//---NULLISH coalescing assignment operator (null or undefined)
//here we can basically do that same thing as the OR operator but it will work in case its 0
// the nullish operator will assign a value to a variable if that exact variable is currently nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//---AND logical assignment operator
//  the and operator assigns a value to a variable if it is currently truthy
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);


//-----THE NULLISH COALESCING OPERATOR (??)-----
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//Nullish: null and undfined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

//-----SHORT CIRCUITING (&& AND ||)

//logical operators can use any data type, they cann return any data type, and they do something called short curcuiting or short circuit evaluation

//OR: will return the first 'truthy' value. if its the first javascript doesnt even look at the second
// console.log(3 || "Jonas"); //3
// console.log(0 || "Jonas"); //'Jonas'
// console.log("" || "Jonas"); //'Jonas'
// console.log(true || 0); //true
// console.log(undefined || null || 0 || "" || "Hello" || 23); //'Hello'

// const guests1 = restaurant.numGuests
//   ? restaurant.numGuests || restaurant.numGuests
//   : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //AND short circuits when the first value is falsy and then returns that falsy value without even considering the next value, meaning it returns the first falsy value
// console.log("---- AND ----");
// console.log(0 && "Jonas"); //here it will return the first falsy value
// console.log(7 && "Jonas"); //here, since both are truthy, the last value is returned
// console.log("hello" && 23 && null && "jonas"); //here, it will return null, the first falsy value

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
// //you can use the && short circuit to evaluate if a certain property exists. if it does, only then do we execute it. essentially in the same way as the if block above does it

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// /////

// restaurant.orderDelivery({
//   time: "22.30",
//   address: "Via del Sol 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("pepperoni");

// //---REST PATTERN AND PARAMETERS-----
// //does the opposite of the spread operator: which was build new arrays, and pass mutiple arguments into a function. In both cases we use it to extend an array into individual elements. The rest pattenr uses the same syntax but to collect multiple elements into an array..
// //spread = on the right side of the assignment operator
// const arr = [1, 2, ...[3, 4]];
// //rest = because its on the left side of the assignment operator
// const [a, b, ...others] = [2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //notice that the rest operator picks up all elements after the last named variable... the REST of them, it didnt pick up the skipped element above. So you need to make sure that the REST pattern is used at the end and there can only be one rest in any given assignment

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) Functions
// const add = function (...numbers) {
//   //using the rest pattern here allows the function to accept an array and all the single values like things are written below
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
//rest arguments = (the numbers above)
//with rest we compress, with the spread we expand

//-----THE SPREAD OPERATOR-----
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.maiunMenu, "Gnocci"];
// console.log(newMenu);
// //spreading creates a new array from scratch, it doesnt manipulate the original array
// //spreading is similar to destructuring because it also helps us get elements out of arrays. the big difference is that the spread operator takes all the elements from the array and it also doesnt create new variables. As a consequence we can only use it in places where we would separate values by commas.

// //two important use cases for the spread operator: shallow copying and merging
// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy)

// //join 2 arrays together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //the spread operator works on all iterables: arrays, strings, maps, sets, but NOT objects
// const str = "Jonas";
// const letters = [...str, " ", "s."];
// console.log(letters);
// // console.log(`${...str} Schmedtman`) doesnt work because a template literal isnt expecting multiple things seperated by a comma

// //real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Ingredient 2"),
//   prompt("Ingredient 3"),
// ];
// console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //now, since 2016, the spread operator also works on objects, even though they arent interables
// //Objects
// const newRestaurant = { founding: "1998", ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// //instead of object.assign
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurant.name, restaurantCopy.nane);

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

*/
