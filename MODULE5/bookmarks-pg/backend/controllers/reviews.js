const express = require('express');
// gives access to our nested wildcard params
const reviews = express.Router({
    mergeParams: true
});

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

    // if (reviews.success) {
    //     // we changed the queries/reviews.js file to return { success: BOOL, payload: }
    //     res.json(reviews); // { success: true, payload: [revs] }
    // } else {
    //     console.log(reviews);
    //     res.status(404).send(`Message: ${reviews}`);
    // }
});

reviews.get("/:id", async (req, res) => {
   

    // const { id } = req.params;
    // const rev = await getReview(id);
    // res.json(rev);

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