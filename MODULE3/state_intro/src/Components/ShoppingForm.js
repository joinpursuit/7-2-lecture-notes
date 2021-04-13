import React from "react";

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