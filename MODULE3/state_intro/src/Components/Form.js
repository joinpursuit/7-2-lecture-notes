import React from 'react'

// controlled components - 
  // 1. value of input reflects value in state; 
  // 2. changes in input update state in state. 

class Form extends React.Component {
  state = { username: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };

  handleUserName = (e) => {
    this.setState({username: e.target.value})
  }

  render() {
      const { username } = this.state; 
    return (
      <div>
        <h1>Form Component</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              onChange={this.handleUserName}
              value={username}
              placeholder="Username"
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form; 