const express = require("express");
const bookmarks = express.Router();
const { 
    getAllBookmarks, 
    getBookmark, 
    createBookmark 
} = require("../queries/bookmarks");


bookmarks.get("/", async (req, res) => {
    const bookmarks = await getAllBookmarks();
    console.log("RESPONSEEEE!!!", bookmarks);
    res.json({success: true, payload: bookmarks});
})

bookmarks.post("/", async (req, res) => {
    const newBookmark = req.body;
    const result = await createBookmark(newBookmark);
    res.json(result);
})

bookmarks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const bookmark = await getBookmark(id);
    res.json(bookmark);
})

module.exports = bookmarks;