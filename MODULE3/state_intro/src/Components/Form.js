import React from "react";

// controlled components -
// 1. value of input reflects value in state;
// 2. changes in input update state.

// Add an email input that updates when someones typing

//   handleUserName = (e) => {
//     this.setState({ username: e.target.value });
//   };

//   handleEmail = (e) => {
//     this.setState({ email: e.target.value });
//   };

//   handleIceCream = (e) => {
//       this.setState({favoriteIceCreamFlavors: e.target.value});
//   }

class Form extends React.Component {
  state = {
    username: "",
    email: "",
    favoriteIceCreamFlavors: "",
    isHuman: false,
    tvOrMovies: "tv",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const {
      username,
      email,
      favoriteIceCreamFlavors,
      isHuman,
      tvOrMovies,
    } = this.state;
    if(!username) {
        alert("MUST ADD USERNAME")
    } else if (!email) {
        alert(`Excuse me ${username} you MUST ADD AN EMAIL`)
    } else {
        alert("You submitted successfully");
    }
    //API call with state info as POST request 
    // then reroute you to home page 
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCheckbox = (e) => {
    this.setState({ isHuman: e.target.checked });
  };

  render() {
    const {
      username,
      email,
      favoriteIceCreamFlavors,
      isHuman,
      tvOrMovies,
    } = this.state;
    // console.log(this.state);
    return (
      <div>
        <h1>Form Component</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              name="username"
              onChange={this.handleChange}
              value={username}
              placeholder="Username"
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
              value={email}
            />
          </label>

          <br />
          <br />
          <select
            name="favoriteIceCreamFlavors"
            value={favoriteIceCreamFlavors}
            onChange={this.handleChange}
          >
            <option value="" selected disabled={true}>
              Select Flavor
            </option>
            <option value="strawberry">Strawberry</option>
            <option value="chocolate">Chocolate</option>
            <option value="vanilla">Vanilla</option>
          </select>

          <br />
          <label>
            Confirm Human
            <input
              type="checkbox"
              onChange={this.handleCheckbox}
              checked={isHuman}
            />
          </label>
          <br />

          <label>
            Tv:
            <input
              type="radio"
              onChange={this.handleChange}
              name="tvOrMovies"
              value="tv"
              checked={tvOrMovies === "tv"}
            />
          </label>

          <label>
            Movies:
            <input
              type="radio"
              onChange={this.handleChange}
              name="tvOrMovies"
              value="movies"
              checked={tvOrMovies === "movies"}
            />
          </label>
          <br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
