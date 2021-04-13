import React from "react";

//working with inputs we listen for onChange 
// they should be controlled which means their value points to something in state.

class ShoppingForm extends React.Component {
  state = { input: "" };

  handleInputChange = (event) => {
      this.setState({input: event.target.value})
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const { addItem } = this.props;
      addItem(this.state.input);
      this.setState({input: ""})
  }

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="itemInput">Add Item: </label>
        <input onChange={this.handleInputChange} id="itemInput" value={input} />
      </form>
    );
  }
}

export default ShoppingForm; 

//challenge: 

// Write a component call Adder. It should have one input
// and one p tag that says the sum. Sum should start at 0. Each time 
// a user enters a number update the sum to include that number. 