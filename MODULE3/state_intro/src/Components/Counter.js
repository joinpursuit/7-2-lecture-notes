import React from "react";

//callback functions are invoked function style. This can cause
// them to lose their reference to `this`.

// this.setState will do two things
//    1. update the state asynchronously
//    2. call render
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.count = 0; doesn't work
    // this.increment = this.increment.bind(this); //old way of binding this to the context
  }

 
  increment = () => {
      this.setState((prevState, prevProps) =>{    // when referring to current or what will be prevous state
          return {count: prevState.count + 1} // technically you should pass in a callback instead of an object
      })
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 5 });
    
    //   this.state.count++; // You CANNOT manipulate state directly
    // state should NEVER be mutated
  };

  incrementByTwo = () => this.setState({count: this.state.count + 2});


  decrement = () => {
      const { count } = this.state;
      if(count === 0) return; 
      this.setState({count: count - 1})
  }

  render() {
      const { count } = this.state; 
    return (
      <div>
        <h2>Counter</h2>
        Clicks: {count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementByTwo}>Up by 2</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
