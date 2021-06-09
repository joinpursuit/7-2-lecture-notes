const bookmarks = require("express").Router();
const bookmarksArray = require("../models/bookmark");

bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

module.exports = bookmarks; 