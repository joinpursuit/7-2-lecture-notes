import Clock from "./Components/Clock";
import DogApp from "./Components/DogApp";
import DogAppTwo from "./Components/DogAppTwo";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import FourOFour from "./Components/FourOFour";

import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

//Switch allows me to only hit ONE Component in a switch

class App extends React.Component {
  state = { showClock: true };

  toggleClock = () => {
    this.setState((prevState) => {
      return { showClock: !prevState.showClock };
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path={"/clock"} component={Clock} />
          <Route path={"/dogs"} component={DogAppTwo} />
          <Route path={"/singledog"} component={DogApp} />
          <Route exact path={"/"} component={Home} />
          <Route path={"/*"} component={FourOFour} />
        </Switch>
        {/* <DogApp />
        <button onClick={this.toggleClock}>Toggle Clock</button>
        {this.state.showClock && <Clock />} */}
      </div>
    );
  }
}

export default App;
