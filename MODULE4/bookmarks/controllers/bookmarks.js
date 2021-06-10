const bookmarks = require("express").Router();
const bookmarksArray = require("../models/bookmark");

// /bookmarks/
bookmarks.get("/", (req, res) => {
  // const search = req.query.search; 
  // console.log(req.query);
  // console.log(search);
  res.json(bookmarksArray);
});

// const path = 'http://localhost:3001      /bookmarks    ?arrayId=25'
// GET /bookmarks ----- arrayId=25
// GET /bookmarks/banana ----- arrayId=25

bookmarks.get("/:arrayIdx", (req, res) => {
  console.log(req.params);
  const bookmark = bookmarksArray[req.params.arrayIdx];
  if (bookmark) {
    res.json(bookmark);
  } else {
    res.redirect('/404');
  }
});

bookmarks.post("/", (req, res) => {
  bookmarksArray.push(req.body);
  const newIdx = bookmarksArray.length - 1;
  // res.redirect("/");
  // res.json(bookmarksArray[bookmarksArray.length - 1]);
  // res.json(bookmarksArray);
});

module.exports = bookmarks; 