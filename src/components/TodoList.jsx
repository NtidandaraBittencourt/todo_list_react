import React from 'react';
import TodoItem from './TodoItem';
import { List, ListSubheader } from "@react-md/list";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <List>
        <ListSubheader></ListSubheader>
        {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
      </List>
  );
};

export default TodoList;
