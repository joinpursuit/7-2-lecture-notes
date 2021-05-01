import { Component } from "react";
import DogSelector from "./DogSelector";

class DogAppTwo extends Component {
  state = { breed: "" };

  updateBreed = (e) => {
    this.setState({ breed: e.target.value });
  };

  render() {
    const { breed } = this.state;
    return (
      <div>
        <DogSelector breed={breed} updateBreed={this.updateBreed} />
        <h1>Dog container</h1>
      </div>
    );
  }
}

export default DogAppTwo;
