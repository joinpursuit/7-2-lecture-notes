const express = require('express');

const reviews = express.Router({ mergeParams: true });

const { 
    getAllReviewsForBookmark,
    getReview,
    newReviewForBookmark, 
    updateReview,
    deleteReview,
} = require('../queries/reviews');

reviews.get("/", async (req, res) => {
    const reviews = await getAllReviewsForBookmark(req.params.bookmark_id);
    res.json(reviews);
});

reviews.get("/:id", async (req, res) => {
    res.json(await getReview(req.params.id));
});

reviews.post("/", async (req, res) => {
    const { bookmark_id } = req.params
    const created = await newReviewForBookmark(req.body, bookmark_id);
    res.json(created);
});

reviews.put("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await updateReview(id, req.body);
    res.json(result);
});

reviews.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deleteReview(id);
    res.json(result);
});

module.exports = reviews;