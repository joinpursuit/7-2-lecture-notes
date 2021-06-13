const bookmarks = require("express").Router();
const bookmarksArray = require("../models/bookmark");

// localhost:3003/bookmarks
bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

// 'http://localhost:3001      /bookmarks    ?arrayId=25'
// GET /bookmarks ----- arrayId=25
// GET /bookmarks/banana ----- arrayId=25

// 'http://localhost:3001      /bookmarks/banana    ?arrayId=25'

bookmarks.get("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  const bookmark = bookmarksArray[arrayIdx];
  // bookmark and all its details...
  if (bookmark) {
    res.json(bookmark);
  } else {
    res.redirect("/404");
  }
});

// POST = /bookmarks
bookmarks.post("/", (req, res) => {
  const { body } = req;
  bookmarksArray.push(body);
  const newIdx = bookmarksArray.length - 1;
  res.json(bookmarksArray[newIdx]);
});

// PUT - update action - /bookmarks/:id - put has a body
// /bookmarks/idx
bookmarks.put("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  const { body } = req;
  bookmarksArray[arrayIdx] = body;
  res.json(bookmarksArray[arrayIdx]);
}); 

// DELETE - destroy action - /bookmarks/:id
bookmarks.delete("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params; 
  const deletedBookmark = bookmarksArray.splice(arrayIdx, 1);
  res.json(deletedBookmark[0]);
});

module.exports = bookmarks;