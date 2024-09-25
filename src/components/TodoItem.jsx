import React from 'react';
import { Button  } from 'react-md';
import { FontIcon } from "@react-md/icon";
import {  ListItem } from "@react-md/list";
import { Checkbox } from "@react-md/form";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (

    <ListItem
      leftAddon={
        <Checkbox
        id="textarea-animate"
        checked={todo.status}
        onChange={() => toggleTodo(todo.id, todo.status)}
        theme="primary"
        />
      }
      leftAddonType="avatar"
      rightAddon={
        <Button
        id="icon-button-1"
        buttonType="icon"
        theme="primary"
        aria-label="Favorite"
        onClick={() => deleteTodo(todo.id)}
      >
        <FontIcon>delete</FontIcon>
      </Button>
      }
      rightAddonPosition="top"
    >
      
      <span className={todo.status ? 'strikethrough' : ''}>
        {todo.task}
      </span>
      
    </ListItem>
  );
};

export default TodoItem;
