import Clock from "./Components/Clock";
import DogApp from "./Components/DogApp";
import DogAppTwo from "./Components/DogAppTwo";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import FourOFour from "./Components/FourOFour";

import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Characters from "./Components/Characters";
import CharacterDisplay from "./Components/CharacterDisplay";
import Person from "./Components/Person";
import CounterAndResize from "./Components/CounterAndResize";

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
          <Route path={"/person/:name"}>
            <Person />
          </Route>

          <Route path={"/characters/:id"}>
            <CharacterDisplay myName="Corey" />
          </Route>

          <Route path={"/characters"}>
            <Characters />
          </Route>

          <Route path={"/counter"}>
            <CounterAndResize />
          </Route>

          <Route path={"/clock"}>
            <Clock />
          </Route>

          <Route path={"/dogs"}>
            <DogAppTwo />
          </Route>

          <Route path={"/singledog"}>
            <DogApp />
          </Route>

          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route path={"/*"}>
            <FourOFour />
          </Route>
        </Switch>
        {/* <DogApp />
        <button onClick={this.toggleClock}>Toggle Clock</button>
        {this.state.showClock && <Clock />} */}
      </div>
    );
  }
}

// const Route = ({path, component}) => {
//   return(
//     <component history={"history"} location={"/locationInfo"} />
//   )
// }

export default App;
