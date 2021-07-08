const express = require("express");
const { getAllBookmarks } = require("../queries/bookmarks");
const bookmarks = express.Router();

bookmarks.get("/", async (req, res) => {
    const bookmarks = await getAllBookmarks();
    console.log("RESPONSEEEE!!!", bookmarks);
    res.json({success: true, payload: bookmarks});
})

bookmarks.post("/", async (req, res) => {
    // const newBookmark = req.body;
    // await createBookmark(newBookmark);

})

module.exports = bookmarks;