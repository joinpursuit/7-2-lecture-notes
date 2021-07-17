const express = require('express');
const reviews = express.Router({
    mergeParams: true
});

const { 
    getAllReviews,
    getReview,
    newReview, 
    updateReview,
    deleteReview,
} = require('../queries/reviews');

reviews.get("/", async (req, res) => {
    const reviews = await getAllReviews();
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
    const created = await newReview(req.body);
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