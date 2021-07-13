// DEPENDENCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  

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
              <Index />
            </Route>
            <Route path="/bookmarks/new">
              <New />
            </Route>
            <Route exact path="/bookmarks/:id">
              <Show />
            </Route>
            <Route path="/bookmarks/:id/edit">
              <Edit />
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
