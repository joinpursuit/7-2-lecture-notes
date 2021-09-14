export default (state = {}, action) => {
    switch (action.type){
        case "ADD_BOOKMARKS":
            const newBookmarksState = {}
            action.bookmarks.forEach( bookmark => {
                newBookmarksState[bookmark.id] = bookmark;
            })
            return newBookmarksState;
        case "ADD_BOOKMARK":
            return {...state, [action.bookmark.id]: action.bookmark}
        default:
            return state;
    }
}