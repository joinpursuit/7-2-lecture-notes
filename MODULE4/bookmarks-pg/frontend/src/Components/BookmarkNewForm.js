import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";
const API = apiURL();

function BookmarkNewForm() {
  let history = useHistory();

  const addBookmark = async (newBookmark) => {
    console.log('ABOUT TO SEND THE REQUEST');
    try {
      await axios.post(`${API}/bookmarks`, newBookmark);
      console.log('SUCCESS, SENDING YOU TO INDEX PAGE')
      history.push(`/bookmarks`);
    } catch (err) {
      console.log(err);
    }
  };

  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setBookmark({ ...bookmark, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setBookmark({ ...bookmark, is_favorite: !bookmark.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBookmark(bookmark);
  };
  
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={bookmark.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={bookmark.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={bookmark.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={bookmark.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(BookmarkNewForm);
