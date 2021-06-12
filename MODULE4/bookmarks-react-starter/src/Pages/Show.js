import { useState } from "react";
import { useParams } from "react-router-dom";
import BookmarkDetails from "../Components/BookmarkDetails";

function Show({ deleteBookmark, bookmarks }) {
  let { index } = useParams();
  const [bookmark] = useState(bookmarks[index]);
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <BookmarkDetails
          bookmark={bookmark}
          index={index}
          deleteBookmark={deleteBookmark}
        />
      </section>
    </div>
  );
}

export default Show;
