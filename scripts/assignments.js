"use strict";

const country = "Zimbabwe";
const continent = "Africa";
let population = 15;

const isIsland = false;
const language = "Shona";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

if (population > 33) {
  console.log(
    `${country}'s population is ${population - 33} million above average`
  );
}

console.log("9" - "5"); // -> ?
console.log("19" - "13" + "17"); // -> ?
console.log("19" - "13" + 17); // -> ?
console.log("123" < 57); // -> ?
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?
