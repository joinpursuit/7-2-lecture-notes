import React from "react";
import "./Color.css";

class Color extends React.Component {
    state = { index: 0, colors: ["red", "blue", "pink"] };

  changeColor = () => {
    const { index, colors } = this.state;
    this.setState({ index: (index + 1) % colors.length });
  };

  render() {
    //   console.log("PROPS ", this.props)
    //   console.log("STATE ", this.state)
    const { index, colors } = this.state;
    return (
      <div className={colors[index]}>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default Color;

// In state add an index property starting at 0
// and an array of three colors (red, blue, pink).

// Add a button and for each click on the button
// a div should be colored the next color in the array.

// hint: update className property
