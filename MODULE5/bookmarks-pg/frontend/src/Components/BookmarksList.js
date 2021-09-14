import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL.js";
import BookmarkListItem from "./BookmarkListItem";

const API = apiURL();

function BookmarksList() {
  const entireState = useSelector((state) => state);
  console.log(entireState)
  const { bookmarks } = entireState;
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getTheBookmarks = async () => {
      const res = await axios.get(`${API}/bookmarks`);
      dispatch({
        type: "ADD_BOOKMARKS", 
        bookmarks: res.data.payload
      });
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
            {Object.values(bookmarks).map((bookmark) => {
              return <BookmarkListItem key={bookmark.id} bookmark={bookmark} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default BookmarksList;
