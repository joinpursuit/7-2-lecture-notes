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