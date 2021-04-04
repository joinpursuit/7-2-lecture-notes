import {Component} from "react";
import Feed from "./Feed";
// Funtional components
// const Example = () => {
//     return <h1> Hello World </h1>
// }


// Class component
class Example extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1> Hello World </h1>
        <Feed />
      </>
    );
  }
}

export default Example;
