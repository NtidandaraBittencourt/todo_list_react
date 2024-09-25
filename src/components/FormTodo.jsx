import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from "@react-md/form";
import { Button } from 'react-md';

const validationSchema = Yup.object().shape({
  newTodo: Yup.string()
    .trim()
    .required('Todo is required!'),
});

const FormTodo = ({ onAddTodo }) => {
  return (
    <Formik
      initialValues={{ newTodo: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddTodo(values.newTodo);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur }) => (
        <Form className="form-todo">
          <Field name="newTodo">
            {({ field }) => (
              <TextField
                {...field}
                type="text"
                placeholder="New Todo"
                theme="outline"
                error={!!field.error}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
          </Field>
          <ErrorMessage name="newTodo">
            {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
          <Button type="submit" theme="secondary" themeType="contained">
            Add Todo
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormTodo;
