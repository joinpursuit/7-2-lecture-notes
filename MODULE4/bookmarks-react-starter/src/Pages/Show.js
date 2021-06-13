import BookmarkDetails from "../Components/BookmarkDetails";

function Show({ deleteBookmark }) {
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <BookmarkDetails
          deleteBookmark={deleteBookmark}
        />
      </section>
    </div>
  );
}

export default Show;
