const db = require("../db/config.js");
console.log(db.any.toString());


const getAllBookmarks = async () => {
    try {
        const allBookmarks = await db.any("SELECT * FROM bookmarks");
        return allBookmarks;
    } catch (error) {
        console.log(error);
    }
}

// const createBookmark = async (newBookmark) => {
//     try {
//         const theBookmark = await db.oneOrNone("INSERT INTO...")
//     }
// };

// module.exports = { getAllBookmarks: getAllBookmarks };
module.exports = { getAllBookmarks };