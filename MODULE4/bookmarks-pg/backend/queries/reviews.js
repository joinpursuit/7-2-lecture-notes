const db = require('../db/config');

const getAllReviewsForBookmark = async (bookmarkId) => {
    try {
        const allReviews = await db.any(`
            SELECT * FROM reviews 
            WHERE bookmark_id = $1
        `, bookmarkId);
        return { success: true, payload: allReviews };
    } catch (e) {
        console.log(e);
        return { success: false, payload: e };
    }
};

const getReview = async (id) => {
    try {
        const review = await db.one("SELECT * FROM reviews WHERE id = $1", id);
        return { success: true, payload: review };
    } catch (e) {
        console.log(e);
        return { success: false, payload: e };
    }
};

const newReviewForBookmark = async (review, bookmarkId) => {
    const { reviewer, title, content, rating } = review;
    try {
        const created = await db.one(`
            INSERT INTO reviews (reviewer, title, content, rating, bookmark_id) 
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [reviewer, title, content, rating, bookmarkId]);

        return { success: true, payload: created };
    } catch (e) {
        console.log(e);
        return { success: false, payload: e };
    }
};

const updateReview = async (id, review) => {
    const { reviewer, title, content, rating, bookmark_id } = review;
    try {
        const res = await db.one(`
            UPDATE reviews 
            SET reviewer = $1, title = $2, content = $3, rating = $4, bookmark_id = $5
            WHERE id = $6
            RETURNING * 
        `, [reviewer, title, content, rating, bookmark_id, id]);
        return { success: true, payload: res };
    } catch (e) {
        return { success: false, payload: e };
    }
};

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one(`
            DELETE FROM reviews
            WHERE id = $1
            RETURNING * 
        `, id);
        return { success: true, payload: deletedReview };
    } catch (e) {
        console.log(e);
        return { success: false, payload: e };
    } 
};

module.exports = {
    getAllReviewsForBookmark,
    getReview,
    newReviewForBookmark,
    updateReview,
    deleteReview,
}