const bookmarks = require("../controllers/bookmarks.js");
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

const getBookmark = async (id) => {
    try {
				// sanitize query by passing SECOND argument to db.one()
				const bookmark = await db.one(`SELECT * FROM bookmarks WHERE id = $1`, id)
				// const bookmark = await db.one(`SELECT * FROM bookmarks WHERE id = $[id]`, {id:id})
				return bookmark
    } catch (error) {
        console.log(error)
    }
};
// \
const createBookmark = async (newBookmark) => {
	const { name, url, category, is_favorite } = newBookmark 
    try {
        const theBookmark = await db.one(
					"INSERT INTO bookmarks(name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
					 [name, url, category, is_favorite]
				)
				return theBookmark
    } catch (error) {
			console.log(error)
		}
};

const deleteBookmark = async () =>{
	try{} 
	catch (err) {
		return err
	}
}

const updateBookmark = async () =>{
	try{} 
	catch (err) {
		return err
	}
}

// module.exports = { getAllBookmarks: getAllBookmarks, getBookmark: getBookmark };
module.exports = { getAllBookmarks, getBookmark, createBookmark, updateBookmark, deleteBookmark}