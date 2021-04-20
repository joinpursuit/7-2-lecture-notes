import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList; 