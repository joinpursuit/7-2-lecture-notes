// DEPENDENCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

//PROVIDER
import { Provider } from "react-redux";

//STORE
import store from "./Store";

window.store = store;

function App() {
  console.log(store);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
