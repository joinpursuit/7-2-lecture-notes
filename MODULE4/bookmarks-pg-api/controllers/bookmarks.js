const express = require("express");
const bookmarks = express.Router();
const { 
    getAllBookmarks, 
    getBookmark, 
    createBookmark,
    updateBookmark,
    deleteBookmark
} = require("../queries/bookmarks");


bookmarks.get("/", async (req, res) => {
    const bookmarks = await getAllBookmarks();
    console.log("RESPONSEEEE!!!", bookmarks);
    res.json({success: true, payload: bookmarks});
})

bookmarks.post("/", async (req, res) => {
    const newBookmark = req.body;
    // { name:string, url:string, is_favorite:boolean, category:string}
    const result = await createBookmark(newBookmark);
    console.log(result);
    res.json(result);
})

bookmarks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const bookmark = await getBookmark(id);
    res.json(bookmark);
})

bookmarks.put('', async (req, res) => {
  
})

bookmarks.delete('/', async (req, res) => {
 
})


module.exports = bookmarks;