import React from "react";
import axios from "axios";
import Dog from './Dog';

class DogApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
    // console.log("Dog APP constructor");
  }

  fetchDog = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      this.setState({ url: res.data.message });
    } catch (error) {
        console.log(error)
      this.setState({ url: "" });
    }
  };

  componentDidMount() {
    //   console.log("DidMount");
    this.fetchDog();
  }

  componentDidUpdate(prevProps) {
    //   console.log("DidUPdate");
  }

  render() {
    //   console.log("render");
    const { url } = this.state;
    console.log(url);
    return (
      <div>
        <h2>Dog App</h2>
        <Dog url={url}/>
        <button onClick={this.fetchDog}>New Dog!</button>
      </div>
    );
  }
}

export default DogApp;
