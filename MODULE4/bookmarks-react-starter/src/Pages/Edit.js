import BookmarkEditForm from "../Components/BookmarkEditForm";

function Edit({ updateBookmark, bookmarks }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <BookmarkEditForm updateBookmark={updateBookmark} bookmarks={bookmarks} />
    </div>
  );
}

export default Edit;
