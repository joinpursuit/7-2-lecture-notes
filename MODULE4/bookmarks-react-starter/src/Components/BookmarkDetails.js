import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();

function BookmarkDetails({ deleteBookmark }) {
  const [bookmark, setBookmark] = useState({});
  let { index } = useParams();
  let history = useHistory();

  const fetchBookmark = async () => {
    try {
      const res = await axios.get(`${API}/bookmarks/${index}`);
      setBookmark(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchBookmark();
  }, []);

  const handleDelete = () => {
    deleteBookmark(index);
    history.push('/bookmarks');
  };

  return (
    <article>
      <h3>
        {bookmark.isFavorite ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={bookmark.url}>{bookmark.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {bookmark.url}
      </h5>
      <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/bookmarks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/bookmarks/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(BookmarkDetails);
