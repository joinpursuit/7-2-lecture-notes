import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { addPosts } from "../actions/postActions";
import Posts from "../components/Posts";

const PostsContainer = () => {
  // replace placeholder array with our Redux posts state with useSelector 
  // passing in a callback that takes in state and returns our posts slice of state
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // useEffect hook to fetch API data
  useEffect(() => {
    const fetchPosts = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      let res = await axios.get(url);

      const action = addPosts(res.data);
      dispatch(action);
    };

    fetchPosts();

      // create async function to:
      // 1. fetchPosts from  JSON Placeholder API("https://jsonplaceholder.typicode.com/posts") with axios.get
      // 2. dispatch our addPosts action creator with the res.data from our response as the argument

      // invoke our async function

  }, [])


  return <Posts posts={posts} />;
};

export default PostsContainer;
