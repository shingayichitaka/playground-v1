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
