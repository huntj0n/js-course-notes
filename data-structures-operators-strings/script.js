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

//-----WORKING WITH STRINGS: Part 3-----
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtman".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");
capitalizeName("jon hunt");

//Padding. Start and End
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("destroy".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; //faster way than doing String(), since the addition operator doing addition with a string converts the result to a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(43567890));
console.log(maskCreditCard("54328769"));

//Repeat: allow us to repeat the same string multiple times
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"^".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

//-----WORKING WITH STRINGS: Part 2-----
// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passenger = "jOnAs"; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Compare email
// const email = "hello@jonas.io";
// const loginEmail = "   Hello@Jonas.io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
// const normalizedEmail = loginEmail.toLowerCase().trim();
// //Here, you can kind of take one string and add methods onto it. Each method here is returning a new string, which is itself another iterable, so you can just make a giant funnel to get to what you want
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = "288,97%";
// const priceUS = priceGB.replace("%", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23";

// console.log(announcement.replace("door", "gate"));
// // console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// //Booleans
// const plane = "A320neo";
// // const plane = "Airbus A320neo"
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family!");
// }

// //Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     ("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some Food, and a Pocket Knife");
// checkBaggage("I have socks and a camera");
// checkBaggage("I have some snacks and a gun for protection");

//-----WORKING WITH STRINGS: Part 1-----

// const airLine = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(indedOf("Portugal")); //case sensitive
// console.log(indedOf("portugal")); //will return -1 since its case sensitive

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); //length here is end minus beginning

// console.log(airline.slice(0, airline.indexOf(" "))); //extract first word
// console.log(airline.slice(lastIndexOf(" ") + 1)); //extract last word without the last space
// console.log(airline.slice(-2)); // starting at the end
// console.log(airline.slice(1, -1)); // starting at the beginning but ending at the second to last

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   let str;
//   s === "B" || s === "E"
//     ? (str = "You got the middle seat")
//     : (str = "You got lucky!");
//   console.log(str);
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("jonas"));
// console.log(typeof new String("jonas"));
// console.log(typeof new String("jonas").slice(1));

//a lot of these methods return a new string you can store in a variable and use later

//////////////////////////////////////////////////////////
//-----CODING CHALLENGE #3-----
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);
/*
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

//1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);

// //3.
// // average = 0;
// // const minutes = [... new Set(gameEvents.keys())]
// // for (const minute in minutes){
// //   average += Number(minute)
// //   console.log(average)
// // }
// // console.log(`An event happened, on average, every ${average/gameEvents.size} minutes`)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

//-----MAPS-----
//in JS, the other new data structure is a map. we use them to map values to keys. similar to objects. but with maps, keys can have any types rather than just strings. leads to some great and andvanced stuff

//Map Iteration
// const question = new Map([
//   ["questions", "What is the best programming language in the world"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"][(false, "Try again")],
// ]);
// console.log(question); //how this prints out is just like Object.entries(), which means that there is an easy way to convert from Maps to objects!

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //maps are iterables!

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = 3;
// // const answer = Number(prompt("Your Answer"));
// console.log(answer);

// // if (answer === 3) {
// //   console.log(question.get(true));
// // } else console.log(question.get(false ));

// console.log(question.get(question.get("correct") === answer));

// //convert map to array
// console.log([...question]);
// //console.log(question.entries()) //will give you a wierd iterator, so you need to spread them here to get a new array without that iterator
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//Map Fundamentals
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// const time = 21;
// // const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();
// rest.set([1, 2], "Test");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2])); //here, the array is NOT the same as the array we used in the rest.set method above. You need to change it to an external variable, then use the variable as the key to link them when retrieving information from the map.

//-----SETS-----
//common data structures that exist in other programming languages, introduced to JS with ES6.

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risottt",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);

// console.log(new Set("Jonas"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear()
// console.log(ordersSet);
// //you cant retrieve items out of a set but you can use them like any other iterabales

// for (const order of ordersSet) console.log(order);

// const staff = ["Waiter", "Chef", "waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "waiter", "Manager", "Chef", "Waiter"].size)
// );

/////////////////////////////////////////
//----- CODING CHALLENGE #2 -----
const game = {
  team1: "Bayern Munich",
  team2: "Borrusia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/
//1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

//   //notice here how for an array (game.scored) you just need the .entries() method, for 3. you need an Object so you need to use the Object.entries() and then pass in the given object

// //2.
// const odds = Object.values(game.odds)
// let average = 0
// for(const odd of odds){
//   average += odd;
// }
// average /= odds.length
// console.log(average)

// //3.
// for(const [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw': `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`)
// }
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5

// // BONUS
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
///////////////////////////////////////////////////////

//-----LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES-----
//property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;
// for (const day of Object.keys(openingHours)) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);

// //property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //property ENTRIES
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//-----OPTIONAL CHAINING (?.)
// console.log(restaurant.openingHours.mon.open //the 'mon' property is undefined so the open property will return an error

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);

// //Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   console.log(day);
//   restaurant.openingHours[day]?.open || "closed";
//   console.log(`on ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// //Arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// // const users = []

// console.log(users[0]?.name ?? "User arra empty");
// if (users.length > 0) console.log(user[0].name);
// else console.log("user array empty");

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
