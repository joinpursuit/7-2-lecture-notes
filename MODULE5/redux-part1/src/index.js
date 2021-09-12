import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import createStore from "redux"
// import devToolsEnhancer from "redux-devtools-extension"
// import Provider from "react-redux"

// ACTION TYPE
  // a variable that describes what we aim to achieve with this action
  // we use this in our action creator as our action type and returned in a POJO

// ACTION CREATOR
  // a function that will return our action - a POJO with a key of type pointing to our action type

// REDUCER
  // we need two possibilities for state here - lights on/off
  // lightReducer will be a function that takes in a state (the default will be false because the lights are currently off)
  // and a action (the POJO returned by our action creator)
  // write a switch statemen to conditionally update our state depending on the action type
  // default to returning our state in the case none of our action types match

// REDUX STORE
  // create store by passing our reducer and the invoked devToolsEnchancer function to the createStore function

// **Now let's see what happens when we try to dispatch the action we created by calling .dispatch() 
// on the store we created above and passing it the action we created (invoked) 

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap App component in Provider and pass store as a prop */}
    {/* This should look familiar to you! BrowserRouter is a similar concept! */}
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
