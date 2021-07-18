// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const bookmarksController = require("./controllers/bookmarks");
const reviewsController = require("./controllers/reviews");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const middlewareLogger = (req, res, next) => {
  console.log("\x1b[37m\x1b[44m", 'LOGGER -- RECEIVED REQUEST');
  console.log("\x1b[43m\x1b[30m", 'INFO::: method = ', req.method);
  console.log("\x1b[43m\x1b[30m", 'INFO:::    url = ', req.url);
  console.log("\x1b[0m"); // reset color
  next();
};

app.use(middlewareLogger);

// ROUTES
app.get("/", (req, res) => {
	res.send("Welcome to Bookmarks App");
});

//BOOKMARKS ROUTE
app.use("/bookmarks", bookmarksController);
app.use("/reviews", reviewsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});  

// EXPORT
module.exports = app;