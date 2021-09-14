import { combineReducers } from "redux";
import bookmarksReducer from "./bookmarks"

export default combineReducers({
    bookmarks: bookmarksReducer,
    fruit: () => "banana"
})