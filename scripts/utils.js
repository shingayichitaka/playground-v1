"use strict";

const capitalize = function (sentence) {
  const sentenceArray = sentence.split(" ");
  if (sentenceArray.length >= 1) {
    return sentenceArray
      .map((value) => {
        const [first, ...rest] = value.toLowerCase().split("");
        return `${first.toUpperCase()}${rest.join("")}`;
      })
      .join(" ");
  } else {
    const [first, ...rest] = sentenceArray
      .map((value) => value.toLowerCase())
      .split("");
    return `${first.toUpperCase()}${rest.join("")}`;
  }
};

const camelCase = function (sentence) {
  const [firstWord, ...rest] = sentence.toLowerCase().split(" ");
  return `${firstWord}${rest.map((value) => capitalize(value)).join("")}`;
};

export { capitalize, camelCase };
