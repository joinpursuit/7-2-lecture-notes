import { Component } from "react";
import DogContainer from "./DogContainer";
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
        <DogContainer breed={breed} />
      </div>
    );
  }
}

export default DogAppTwo;
