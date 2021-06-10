const express = require("express");
const bookmarksController = require("./controllers/bookmarks");
const usersController = require("./controllers/users");

const app = express();

// const appJson = express.json();
// console.log(appJson.toString());
app.use(express.json()); // this line is adding 'body' key to the req object

app.use((req, res, next) => {
  console.log(`${req.method} request made at ${req.url}`);
  next();
});

app.use("/bookmarks", bookmarksController);
app.use("/users", usersController);

// ROOT
app.get("/", (req, res) => {
  req.body;
  res.send("Bookmarks App");
});

// 404 catch all
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;

// Model - works with Database and is singular 
// View - what the client sees - this will be a react layer later 
// Controller - plural, handles routes, works with models and sends info to client. Middleman. 