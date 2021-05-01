import Clock from "./Components/Clock";
import DogApp from "./Components/DogApp";
import DogAppTwo from "./Components/DogAppTwo";
import "./App.css";
import React from "react";

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
      <DogAppTwo />
        {/* <DogApp />
        <button onClick={this.toggleClock}>Toggle Clock</button>
        {this.state.showClock && <Clock />} */}
      </div>
    );
  }
}

export default App;
