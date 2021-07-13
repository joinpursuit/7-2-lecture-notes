const db = require("../db/config.js");

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
		console.log('INSERTING INTO THE DATABASE!')
        const theBookmark = await db.one(
			"INSERT INTO bookmarks(name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
			[name, url, category, is_favorite]
		);
		return theBookmark
    } catch (error) {
		console.log(error)
	}
};

const deleteBookmark = async (id) => {
	try {
		const query = "DELETE FROM bookmarks WHERE id = $1 RETURNING *";
		const deletedBookmark = await db.one(query, id);
		return deletedBookmark;
	} catch (err) {
		return err;
	}
}

const updateBookmark = async (id, bookmark) => {
	try {
		const { name, category, url, is_favorite } = bookmark;
		const query = "UPDATE bookmarks SET name = $1, url = $2, category = $3, is_favorite = $4 WHERE id = $5 RETURNING *";
		const result = await db.one(query, [name, url, category, is_favorite, id]);
		return result;
	} catch (err) {
		return err
	}
}

// module.exports = { getAllBookmarks: getAllBookmarks, getBookmark: getBookmark };
module.exports = { 
	getAllBookmarks, 
	getBookmark, 
	createBookmark, 
	updateBookmark, 
	deleteBookmark
};