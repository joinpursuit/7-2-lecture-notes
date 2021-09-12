import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "../components/Form";
import { useSelector, useDispatch } from "react-redux";
import { addPost, addPosts } from "../actions/postActions";

const FormContainer = () => {
  const [title, setTitle] = useState("");
  
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      let res = await axios.get(url);

      const action = addPosts(res.data);
      dispatch(action);
    };

    fetchPosts();
  }, []);
  
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('HANDLE SUBMIT')
    const nextId = posts.length 
      ? posts[posts.length - 1].id + 1
      : 1;


    const postBody = "Dummy post data";
    const userId = 7;

    const action = addPost({
      title,
      id: nextId,
      body: postBody,
      userId,
    })    

    // console.log('ABOUT TO DISPATCH', action);
    dispatch(action);
    // console.log('ABOUT T ORESET')
    setTitle('');
    // define our post id based on the last post in the posts list
      // create a ternary that checks if there are posts in the array
          // if there ARE we grab the id of the last post (post[post.length -1].id) and add 1 to it
          // if there ARE NOT we set the id to 1
    // define dummy post body and userId (because we dont have inputs for these atm)
    // add a call to dispatch addPost and pass in our new post data (an object with our title, id, body, and  )
    // reset the local state to an empty string("") with setTitle
  };

  // typical handle submit
  // let res = await axios.post('/posts', postFromState);
  // // const action = addPost(res.data)    
  // dispatch(addPost(res.data));
  // setTitle('');

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={title}
    />
  );
};

export default FormContainer;
