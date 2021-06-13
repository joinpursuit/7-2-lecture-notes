import BookmarkEditForm from "../Components/BookmarkEditForm";

function Edit({ updateBookmark }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <BookmarkEditForm updateBookmark={updateBookmark} />
    </div>
  );
}

export default Edit;
