import fetch from "node-fetch";

const { urlChecker } = require("./urlChecker");

export function handleSubmit(evt) {
  evt.preventDefault();

  let urlText = document.getElementById("url").value;
  console.log("Submitted");

  //check url is valid
  if (urlChecker) {
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
      });
  }
}
