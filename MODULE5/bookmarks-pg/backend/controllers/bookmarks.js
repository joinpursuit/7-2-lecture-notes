const express = require("express");
const reviewsController = require('./reviews');
const bookmarks = express.Router();
const { 
    getAllBookmarks, 
    getBookmark, 
    createBookmark,
    updateBookmark,
    deleteBookmark
} = require("../queries/bookmarks");

bookmarks.use("/:bookmark_id/reviews", reviewsController);

bookmarks.get("/", async (req, res) => {
    const bookmarks = await getAllBookmarks();
    res.json({ success: true, payload: bookmarks });
});

bookmarks.post("/", async (req, res) => {
    const newBookmark = req.body;
    const result = await createBookmark(newBookmark);
    res.json(result);
});

bookmarks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const bookmark = await getBookmark(id);
    res.json({ success: true, payload: bookmark });
});

bookmarks.put('/:id', async (req, res) => {
    const { body, params } = req;
    const { name, category, url } = body;

    if (!name || !category || !url) {
        res.status(422).json({ 
            error: true, success: false, message: 'Whatever' 
        });
    } else {
        const result = await updateBookmark(params.id, body);
        res.json(result);
    }
});

bookmarks.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedBookmark = await deleteBookmark(id);
    res.json({ success: true, payload: deletedBookmark });
});


module.exports = bookmarks;