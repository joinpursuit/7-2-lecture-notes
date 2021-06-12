import BookmarkNewForm from "../Components/BookmarkNewForm";

function New({ addBookmark }) {
  return (
    <div className="New">
      <h2>New</h2>
      <BookmarkNewForm addBookmark={addBookmark} />
    </div>
  );
}

export default New;
