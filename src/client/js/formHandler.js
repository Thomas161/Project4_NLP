const { fetch } = require("node-fetch");

import { checkTheUrl } from "./urlChecker.js";

/**Global Variables for DOM */
let score = document.querySelector("#score");
let subjectivity = document.querySelector("#subjectivity");
let confidence = document.querySelector("#confidence");
let irony = document.querySelector("#irony");

export function handleSubmit(evt) {
  evt.preventDefault();

  let urlText = document.getElementById("url").value;
  console.log("Submitted");

  //check url is valid
  if (checkTheUrl) {
    console.log("Valid url");

    fetch("http://localhost:8080/document", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "text/plain",
      },
      body: urlText,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data returned from UI", data);
        updateHTML(data);
      });
  } else {
    console.log("Invalid url");
  }
}

export const updateHTML = (d) => {
  document.getElementsByTagName("article")[0].style.visibility = "visible";
  score.innerHTML = data.score_tag;
  subjectivity.innerHTML = data.subjectivity;
  confidence.innerHTML = data.confidence;
  irony.innerHTML = data.irony;
};
