import { Component } from "react";
// import uuid from 'react-uuid';

// class TodoForm extends Component {
// //   state = { userInput: "" };

// //   handleChange = (event) => this.setState({userInput: event.target.value})

// //   handleSubmit = (event) => {
// //       event.preventDefault(); 
// //     //   const { userInput } = this.state; 
// //     const { userInput } = this.props;
// //       const newTodo = { id: uuid(), text: userInput, completed: false }
// //       this.props.addTodo(newTodo)
// //       this.setState({userInput: ""})
// //   }

//   render() {
//     //   const { userInput } = this.state; 
//     return (
//       <form onSubmit={this.props.handleSubmit}>
//         <label>
//           Todo:
//           <input onChange={this.props.handleChange} type="text" value={this.props.userInput}/>
//         </label>
//         <button type="submit">Add Todo!</button>
//       </form>
//     );
//   }
// }

const TodoForm = ({handleChange, handleSubmit, userInput}) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input
            onChange={handleChange}
            type="text"
            value={userInput}
          />
        </label>
        <button type="submit">Add Todo!</button>
      </form>
    );
}

export default TodoForm;
