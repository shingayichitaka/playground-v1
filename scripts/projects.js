"use strict";

import * as utils from "./utils.js";

const projects = [];

projects.push("demo", "Change Background Color", "Change Background Color");

const projectsContainerEl = document.querySelector(".projects");

projects.forEach((value, index) => {
  const link = `/projects/${utils.camelCase(value)}/${utils.camelCase(
    value
  )}.html`;
  const html = `<li><a href="${link}" target="_blank">${
    index + 1
  }) ${utils.capitalize(value)}</a></li>`;
  projectsContainerEl.insertAdjacentHTML("beforeend", html);
});
