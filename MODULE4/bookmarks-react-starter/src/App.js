// DEPENDENCIES

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

import { apiURL } from './util/apiURL';
const API = apiURL();

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (newBookmark) => {};
  const deleteBookmark = (index) => {};
  const updateBookmark = (updatedBookmark, index) => {};

  const fetchBookmarks = async () => {
    let res;
    try {
      res = await axios.get(`${API}/bookmarks`);
      setBookmarks(res.data);
    } catch(err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchBookmarks();

    // componentWillUnmount
    // if we return a function here its for cleanup purposes
    // otherwise we shouldn't return anything
    // return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/bookmarks">
              <Index bookmarks={bookmarks} />
            </Route>
            <Route path="/bookmarks/new">
              <New addBookmark={addBookmark} />
            </Route>
            <Route exact path="/bookmarks/:index">
              <Show bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
            </Route>
            <Route path="/bookmarks/:index/edit">
              <Edit bookmarks={bookmarks} updateBookmark={updateBookmark} />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
