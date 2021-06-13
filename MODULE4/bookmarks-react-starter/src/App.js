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

  const addBookmark = async (newBookmark) => {
    let res;
    try {
      // make our request
      // axios.post takes the first argument url, then body.
      res = await axios.post(`${API}/bookmarks`, newBookmark);
      setBookmarks(prevBookmarks => [...prevBookmarks, res.data]);

      // other way of doing it, potentially error prone when multiple 
      // setStates are happening 
      // setBookmarks([...bookmarks, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBookmark = async (index) => {
    try {
      await axios.delete(`${API}/bookmarks/${index}`);
      const dummyState = [...bookmarks];
      dummyState.splice(index, 1);
      setBookmarks(dummyState);
    } catch (err) {
      console.log(err);
    }
  };

  const updateBookmark = async (updatedBookmark, index) => {
    try {
      await axios.put(`${API}/bookmarks/${index}`, updatedBookmark);
      const newBookmarks = [...bookmarks];
      newBookmarks[index] = updatedBookmark;
      setBookmarks(newBookmarks);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBookmarks = async () => {
    let res;
    try {
      // GET - localhost:3003/bookmarks
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
              <Show deleteBookmark={deleteBookmark} />
            </Route>
            <Route path="/bookmarks/:index/edit">
              <Edit updateBookmark={updateBookmark} />
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
