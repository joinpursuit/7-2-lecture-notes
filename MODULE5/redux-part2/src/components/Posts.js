import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div>
      {/* map posts so that each post title is rendered */
      /* 1. Grab Object.keys of our posts which will be an array */
      /* 2. We can then map this array returning a p tag with our posts[key].title */
      }
      <Link to="/posts/new">Add New Post</Link>
    </div>
  );
};

export default Posts;
