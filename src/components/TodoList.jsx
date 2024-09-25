import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';
import { List, ListSubheader } from "@react-md/list";

const TodoList = ({ todos, deleteTodo, toggleTodo, message }) => {
  const [displayMessage, setDisplayMessage] = useState(message);
  
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setDisplayMessage('');
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <List>
        <ListSubheader> {displayMessage} </ListSubheader>
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
