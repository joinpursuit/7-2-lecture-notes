import React, { useState, useEffect } from "react";

// useState is a React hook that takes initialState as the argument and returns
// a two element array. The first element is the state. The second element is a
// function to set the state.

// useEffect - replaces componentDidMount, componentDidUpdate, componentWillUnmount
// takes in two arguments
//    1st - callback to run (on mount on update)
//    2nd - dependency array - any changes to the dependency will cause hook to run
// empty array makes it componentDidMount only

// if it returns a function, that function will be called on unmount

// cannot nest hooks or conditionally use them
// can make custom hooks - another day

const CounterAndResize = () => {
  const [count, setCount] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("WINDOW RESIZE");
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log("HOOK RAN");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("COMPONENT WILL UNMOUNT");
    };
  }, []);

//   useEffect(() => {
//     const handleResize = () => setWindowSize(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  return (
    <section>
      <div>
        <h2>Window Size: {windowSize}</h2>
      </div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset To Zero</button>
    </section>
  );
};
// const CounterAndResize = () => {
//     const [count, setCount] = useState(0)
//     const [ windowSize, setWindowSize ] = useState(window.innerWidth);
//     // const [state, setState] = useState({count: 0, windowSize: window.innerWidth})
//     // state = { count: 0, windowSize: window.innerWidth}

//     // const incrementCount = () => {
//     //     // this.setState({count: this.state.count + 1})
//     // //    setState((prevState) => {
//     // //        return {...state, count: prevState.count + 1}
//     // //    })
//     //     setCount((prevCount) => prevCount + 1)
//     // }

// handleResize = () => {
//     console.log("WINDOW RESIZE")
//     this.setState({windowSize: window.innerWidth});
// }

//     // componentDidMount() {
//     //     window.addEventListener("resize", this.handleResize)
//     // }

//     // componentWillUnmount() {
//     //     window.removeEventListener("resize", this.handleResize)
//     // }

//     // const { count, windowSize } = state;
//     return (
//       <section>
//         <div>
//           <h2>Window Size: {windowSize}</h2>
//         </div>
//         <p>{count}</p>
//         <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//           +
//         </button>
//       </section>
//     );

// }
// class CounterAndResize extends Component {
//     state = { count: 0, windowSize: window.innerWidth}

//     incrementCount = () => {
//         // this.setState({count: this.state.count + 1})
//         this.setState((prevState) => ({count: prevState.count + 1}))
//     }

//     handleResize = () => {
//         console.log("WINDOW RESIZE")
//         this.setState({windowSize: window.innerWidth});
//     }

//     componentDidMount() {
//         window.addEventListener("resize", this.handleResize)
//     }

//     componentWillUnmount() {
//         window.removeEventListener("resize", this.handleResize)
//     }

//     render() {
//         const { count, windowSize } = this.state;
//         return(
//             <section>
//                 <div>
//                     <h2>Window Size: {windowSize}</h2>
//                 </div>
//                 <p>{count}</p>
//                 <button onClick={this.incrementCount}>+</button>
//             </section>
//         )
//     }
// }

export default CounterAndResize;
