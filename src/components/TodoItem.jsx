import React from 'react';
import { Button  } from 'react-md';
import { FontIcon } from "@react-md/icon";
import {  ListItem } from "@react-md/list";
import { Checkbox } from "@react-md/form";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (

    <ListItem
      id="two-line-item-0"
      leftAddon={<Checkbox
        id="textarea-animate"
        checked={todo.status}
        onChange={() => toggleTodo(todo.id, todo.status)}
      />}
      leftAddonType="avatar"
      rightAddon={
        <Button
        id="icon-button-1"
        buttonType="icon"
        theme="secondary"
        aria-label="Favorite"
        onClick={() => deleteTodo(todo.id)}
      >
        <FontIcon>delete</FontIcon>
      </Button>
      }
      rightAddonPosition="top"
    >
      
      {todo.task}
      
    </ListItem>
  );
};

export default TodoItem;
