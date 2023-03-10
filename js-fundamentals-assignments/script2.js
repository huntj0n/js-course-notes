"use strict";
/*
LECTURE: Functions
    1. Write a function called 'describeCountry' which takes three parameters:
    'country', 'population' and 'capitalCity'. Based on this input, the
    function returns a string with this format: 'Finland has 6 million people and its
    capital city is Helsinki'
    2. Call this function 3 times, with input data for 3 different countries. Store the
    returned values in 3 different variables, and log them to the console
*/
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital ciy is ${capitalCity}`;
};

console.log(describeCountry("USA", 350, "Washington DC"));
console.log(describeCountry("France", 55, "Paris"));
console.log(describeCountry("Mexico", 75, "Mexico City"));

/*
LECTURE: Function Declarations vs. Expressions
    1. The world population is 7900 million people. Create a function declaration
    called 'percentageOfWorld1' which receives a 'population' value, and
    returns the percentage of the world population that the given population
    represents. For example, China has 1441 million people, so it's about 18.2% of
    the world population
    2. To calculate the percentage, divide the given 'population' value by 7900
    and then multiply by 100
    3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
    store the results into variables, and log them to the console
    4. Create a function expression which does the exact same thing, called
    'percentageOfWorld2', and also call it with 3 country populations (can be
    the same populations)
*/
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
let popPerChina = percentageOfWorld1(1441);
console.log(popPerChina);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
let popPerChina2 = percentageOfWorld2(1441);
console.log(popPerChina2);

/*
LECTURE: Arrow Functions
    1. Recreate the last assignment, but this time create an arrow function called
    'percentageOfWorld3'
*/
const percentageOfWorld3 = (population) => (population / 7900) * 100;
let popPerChina3 = percentageOfWorld3(1441);
console.log(popPerChina3);

/*
LECTURE: Functions Calling Other Functions
    1. Create a function called 'describePopulation'. Use the function type you
    like the most. This function takes in two arguments: 'country' and
    'population', and returns a string like this: 'China has 1441 million people,
    which is about 18.2% of the world.'
    2. To calculate the percentage, 'describePopulation' call the
    'percentageOfWorld1' you created earlier
    3. Call 'describePopulation' with data for 3 countries of your choice
*/
const describePopulation = function (country, population) {
  percentage = popPerChina2(population);
  return `${country} has ${population} million people which is ${percentage} of the world.`;
};
console.log(describePopulation("China", 1441));

/*
LECTURE: Introduction to Arrays
    1. Create an array containing 4 population values of 4 countries of your choice.
    You may use the values you have been using previously. Store this array into a
    variable called 'populations'
    2. Log to the console whether the array has 4 elements or not (true or false)
    3. Create an array called 'percentages' containing the percentages of the
    world population for these 4 population values. Use the function
    'percentageOfWorld1' that you created earlier to compute the 4
    percentage values
*/
const populations = [1441, 350, 55, 6];
console.log(populations.length === 4);
const percentages = [];
for (i = 0; i <= populations.length; i++) {
  percentages.push(percentageOfWorld2(i));
}
console.log(populations, percentages);

/*
LECTURE: Basic Array Operations (Methods)
    1. Create an array containing all the neighbouring countries of a country of your
    choice. Choose a country which has at least 2 or 3 neighbours. Store the array
    into a variable called 'neighbours'
    2. At some point, a new country called 'Utopia' is created in the neighbourhood of
    your selected country. So add it to the end of the 'neighbours' array
    3. Unfortunately, after some time, the new country is dissolved. So remove it from
    the end of the array
    4. If the 'neighbours' array does not include the country ???Germany???, log to the
    console: 'Probably not a central European country :D'
    5. Change the name of one of your neighbouring countries. To do that, find the
    index of the country in the 'neighbours' array, and then use that index to
    change the array at that index position. For example, you can search for
    'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes("Germany"))
  console.log("Probably not a central European country :D");
neighbors[neighbors.indexOf("Mexico")] = "mexico";
console.log(neighbors);

/*
LECTURE: Introduction to Objects
    1. Create an object called 'myCountry' for a country of your choice, containing
    properties 'country', 'capital', 'language', 'population' and
    'neighbours' (an array like we used in previous assignments)
*/
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "English",
  population: 350,
  neighbors: neighbors,
};
console.log(myCountry);

/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people and ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`
);
myCountry["population"] = myCountry["population"] + 2;
console.log(myCountry.population);
myCountry.population = myCountry.population - 2;
console.log(myCountry.population);
