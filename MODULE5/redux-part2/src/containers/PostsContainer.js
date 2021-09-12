import React, { useEffect } from "react";
// import axios from "axios"
// import useSelector and useDispatch from "react-redux"
// import our addPosts function from "../actions/actionTypes"
import Posts from "../components/Posts";

const PostsContainer = () => {
  // replace placeholder array with our Redux posts state with useSelector 
  // passing in a callback that takes in state and returns our posts slice of state
  const posts = [];

  // define dispatch with useDispatch

  // useEffect hook to fetch API data

  useEffect(() => {
      // create async function to:
      // 1. fetchPosts from  JSON Placeholder API("https://jsonplaceholder.typicode.com/posts") with axios.get
      // 2. dispatch our addPosts action creator with the res.data from our response as the argument

      // invoke our async function

  }, [])


  return <Posts posts={posts} />;
};

export default PostsContainer;
