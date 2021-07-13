import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import BookmarkListItem from "./BookmarkListItem";

const API = apiURL();

function BookmarksList() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(async () => {
    // fetch all the bookmarks 
    // ensure those are in state 
  }, []);
  
  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark) => {
              return <BookmarkListItem key={bookmark.id} bookmark={bookmark} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default BookmarksList;
