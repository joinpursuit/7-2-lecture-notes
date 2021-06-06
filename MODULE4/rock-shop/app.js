const express = require("express");
const app = express();
const rocks = require("./models/rock.js");

app.get("/", (req, res) => {
  res.send("Welcome to the Rock Shop");
});

app.get("/rocks", (req, res) => {
  res.json(rocks);
});

app.get("/rocks/awesome", (req, res) => {
  res.send("Yes rocks are awesome!");
});

app.get("/rocks/:id", (req, res) => {
  const { id } = req.params;
  if (rocks[id]) {
    res.json({
      rock: rocks[id],
      message: "Rock at index " + id,
    });
  } else {
    res.status(404).send("Rock NOT FOUND");
  }
});

app.get("/calculator/:operator", (req, res) => {
  const { num1, num2 } = req.query;
  const { operator } = req.params; 
  if(operator === "add") {
      res.send("Sum of nums is: " + (Number(num1) + Number(num2)))
  }
});

app.get("/:firstName/:lastName", (req, res) => {
  const { firstName, lastName } = req.params;
  res.send(`Greetings ${firstName} ${lastName} and welcome!`);
});

module.exports = app;
// there are 3 ways to send data into the backend
// 1st way is parameters
// 2nd way is query strings
// 3rd way is through POST requests (PATCH, PUT)

// params, query strings/ always come in as strings