const express = require("express");
const bookmarksController = require("./controllers/bookmarks");

const app = express();

app.use("/bookmarks", bookmarksController);

app.get("/", (req, res) => {
  res.send("Bookmarks App");
});

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!!!")
})

module.exports = app;

// Model - works with Database and is singular 
// View - what the client sees - this will be a react layer later 
// Controller - plural, handles routes, works with models and sends info to client. Middleman. 