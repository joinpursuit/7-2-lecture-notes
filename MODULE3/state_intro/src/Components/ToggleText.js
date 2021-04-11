// Challenge: Create a component with 2 divs.
//  In the first div have the text Show Hidden Text.
//  When the mouse is hovered over Show Hidden Text,
//  the other div should say a secret message.
//   With the mouse is not on Show Hidden Text
//    the secret message should be hidden.
// Do NOT use DOM manipulation like you did last unit.

import React from "react";

class ToggleText extends React.Component {
  state = { showText: false};

  toggleText = () => {
    // this.setState({ showText: !this.state.showText });
    this.setState((prevState) => ({showText: !prevState.showText}))
  };

  render() {
    const { showText } = this.state;

    return (
      <div onMouseLeave={this.toggleText} onMouseEnter={this.toggleText}>
        <p>{showText ? "Remove cursor to HIDE Text" : "Show Text"}</p>
        {showText && <p>Secret Message, I love REACT</p>}
      </div>
    );
  }
}

// updateShowText = () => {
//     this.setState({showText: true})
// }

// removeText = () => {
//     this.setState({showText: false});
// }
// const dontShowText = (
//   <div onMouseEnter={this.updateShowText}>
//     <p>Show Text</p>
//   </div>
// );

// return showText ? showTextDisplay : dontShowText
export default ToggleText;
