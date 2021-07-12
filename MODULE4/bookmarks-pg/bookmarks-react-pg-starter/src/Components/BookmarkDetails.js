import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();
function BookmarkDetails({ match }) {
  const [bookmark, setBookmark] = useState([]);
  let history = useHistory();

  const deleteBookmark = async () => {
    try {
      await axios.delete(`${API}/bookmarks/${match.params.id}`);
      history.push('/bookmarks');
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(async () => {
    try {
      const response = await axios.get(`${API}/bookmarks/${match.params.id}`);
      setBookmark(response.data);
    } catch(e) {
      console.log(e);
    }
  });
  
  return (
    <article>
      <a href={bookmark.url}>{bookmark.url}</a>
      <button onClick={deleteBookmark}>Delete</button>
    </article>
  );
}

export default withRouter(BookmarkDetails);
