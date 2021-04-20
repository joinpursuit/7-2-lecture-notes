import React from "react";
import "./TodoListItem.css";
// const id = todo.id
// const text = todo.text
// const completed = todo.completed

const TodoListItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, text, completed } = todo;

  const removeTodo = (e) => {
    e.stopPropagation();
    deleteTodo(id);
  };

  return (
    <li className={completed ? "completed" : ""} onClick={() => toggleTodo(id)}>
      {text}
      <button onClick={removeTodo}>Delete Todo</button>
    </li>
  );
};

export default TodoListItem;
