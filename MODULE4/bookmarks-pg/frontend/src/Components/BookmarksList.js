import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import BookmarkListItem from "./BookmarkListItem";

const API = apiURL();

function BookmarksList() {
  const [bookmarks, setBookmarks] = useState([]);
  
  useEffect(() => {
    const getTheBookmarks = () => {
      try {
        console.log('About to make a "GET" to:', `${API}/bookmarks`);
        setTimeout(async () => { // putting call inside setTimeout to pause execution for a bit, educational purposes only.
          const res = await axios.get(`${API}/bookmarks`);
          console.log('Received a response', res.data);
          setBookmarks(res.data.payload);
        }, 5000)
      } catch (err) {
        console.log(err);
      }
    };

    getTheBookmarks();
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
