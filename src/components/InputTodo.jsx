import React from 'react';
import {
  Form,
  TextField,
} from "@react-md/form";
import { Button  } from 'react-md';


const InputTodo = ({ newTodo, onInputChange, onAddTodo }) => {

  return (
    <Form className="form-todo">
      <TextField
        type="text"
        value={newTodo}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="New Todo"
      />
      <Button onClick={onAddTodo} theme="secondary" themeType="contained">Add Todo</Button>
    </Form>
  )
}

export default InputTodo;
