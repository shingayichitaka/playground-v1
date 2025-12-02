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

// const numNeighbours = Number(
//   prompt(`How many neighbours does ${country} have?`)
// );
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log(`No borders!`);
// }

if (language === "English" && population < 50 && isIsland === false) {
  console.log(`⭐ You should live in ${country}! ⭐`);
} else {
  console.log(`😭 ${country} does not meet your criteria! 😭`);
}

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "Spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`3rd place`);
    break;
  case "Hindi":
    console.log(`Number 4`);
    break;
  case "Arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average!`
);
