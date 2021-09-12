import React, { useState } from "react";
import Form from "../components/Form";
// import useSelector and useDispatch from "react-redux"
// import addPost from "../actions/postActions"

const FormContainer = () => {
  const [title, setTitle] = useState("");

  // use use Selector to get posts from global state by passing in our 
  // callback that takes in state and returns our post slice of state

  // define our dispatch by creating a variable equal to useDispatch invoked

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // define our post id based on the last post in the posts list
      // create a ternary that checks if there are posts in the array
          // if there ARE we grab the id of the last post (post[post.length -1].id) and add 1 to it
          // if there ARE NOT we set the id to 1
    // define dummy post body and userId (because we dont have inputs for these atm)
    // add a call to dispatch addPost and pass in our new post data (an object with our title, id, body, and  )
    // reset the local state to an empty string("") with setTitle
  };

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={title}
    />
  );
};

export default FormContainer;
