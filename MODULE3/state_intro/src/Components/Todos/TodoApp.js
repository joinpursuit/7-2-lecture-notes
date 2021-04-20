// if it requires state (or lifecycle) it will be a class component.
// what can go in state - ANY data type.
// state is always an object with keys. But the values cAN BE any data type.
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import React from "react";
import uuid from "react-uuid";

// A todo is an object. Each object has an id, and a text property.

class TodoApp extends React.Component {
  state = {
    todos: [{ id: 1, text: "Go To Work", completed: true }],
    userInput: "",
  };

  handleChange = (event) => this.setState({ userInput: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { userInput } = this.state;
    const newTodo = { id: uuid(), text: userInput, completed: false };
    this.addTodo(newTodo);
    this.setState({ userInput: "" });
  };

  addTodo = (todo) => {
    this.setState((prevState) => {
      return { todos: [todo, ...prevState.todos] };
    });
  };

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
      const newTodos = this.state.todos.filter(todo => {
        return todo.id !== id; 
      })
      this.setState({todos: newTodos})
  }

  render() {
    const { todos } = this.state;
    return (
      <section className={"TodoAppContainer"}>
        <h1>Todo APP</h1>
        <TodoForm
          addTodo={this.addTodo}
          userInput={this.state.userInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todos={todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
      </section>
    );
  }
}

export default TodoApp;
