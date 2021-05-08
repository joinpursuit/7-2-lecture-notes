import { Component } from "react";
import axios from "axios";
import Dog from "./Dog";

// write a dog container.
// This should fetch 5 pictures and display them based
// on the breed of the dog selected.

// Hint - when does this need to fetch the next set of dog pics.

// use your Dog.js for showing individual dogs.

class DogContainer extends Component {
  state = { imageURLs: [] };

  fetchDogImages = async () => {
    try {
      const { breed } = this.props;
      const res = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/5`
      );
      this.setState({imageURLs: res.data.message});
    } catch (error) {
      console.log(error);
      this.setState({ imageURLs: [] });
    }
  };

  componentDidUpdate(prevProps) {
      const oldBreed = prevProps.breed; 
      const newBreed = this.props.breed; 
      if(oldBreed !== newBreed) {
          this.fetchDogImages();
      }
  }

  render() {
      const { imageURLs } = this.state; 
    return (
      <section>
        <h1>Dog Container</h1>
        {imageURLs.map(image => {
            return <Dog url={image} key={image}/>
        })}
      </section>
    );
  }
}

export default DogContainer;
