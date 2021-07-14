import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();
function BookmarkDetails() {
  const [bookmark, setBookmark] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  const deleteBookmark = async () => {
    try {
      await axios.delete(`${API}/bookmarks/${id}`);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(async () => {
    try {
      const result = await axios.get(`${API}/bookmarks/${id}`);
      setBookmark(result.data.payload);
    } catch (err) {
      console.log(err);
    }
  }, [id]);
  
  const handleDelete = async () => {
    await deleteBookmark();
    history.push('/bookmarks');
  };

  return (
    <article>
      <a href={bookmark.url}>{bookmark.name}</a>
      <p>{bookmark.url}</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

export default withRouter(BookmarkDetails);
