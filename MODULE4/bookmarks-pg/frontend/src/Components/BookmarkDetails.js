import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();
function BookmarkDetails({ match }) {
  const [bookmark, setBookmark] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  const deleteBookmark = async () => {
    // send off request to delete
    // where is the id coming from?
  }

  useEffect(async () => {
    // send off request to fetch single bookmarks
  }, [id]);
  
  return (
    <article>
      {/* <a href={bookmark.url}>{bookmark.name}</a>
      <p>{bookmark.url}</p>
      <button onClick={deleteBookmark}>Delete</button> */}
    </article>
  );
}

export default withRouter(BookmarkDetails);
