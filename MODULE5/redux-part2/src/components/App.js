import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import PostsContainer from "../containers/PostsContainer";
import FormContainer from "../containers/FormContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route exact path="/posts" component={PostsContainer} />
        <Route path="/posts/new" component={FormContainer} />
      </Switch>
    </div>
  );
}

export default App;
