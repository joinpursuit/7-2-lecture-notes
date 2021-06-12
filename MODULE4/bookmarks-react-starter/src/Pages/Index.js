import Bookmarks from "../Components/Bookmarks";

function Index({ bookmarks }) {
  return (
    <div className="Index">
      <h2>Index</h2>
      <Bookmarks bookmarks={bookmarks} />
    </div>
  );
}

export default Index;
