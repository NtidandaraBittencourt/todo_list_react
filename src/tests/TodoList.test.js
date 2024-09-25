import React from 'react';
import { render, screen, act } from '@testing-library/react';
import TodoList from '../components/TodoList';

jest.mock('../components/TodoItem', () => ({ todo, deleteTodo, toggleTodo }) => (
  <div>
    <span>{todo.text}</span>
    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </div>
));

describe('TodoList', () => {
  const mockDeleteTodo = jest.fn();
  const mockToggleTodo = jest.fn();
  const todos = [
    { id: 1, text: 'Tarefa 1', completed: false },
    { id: 2, text: 'Tarefa 2', completed: false },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renderiza a lista de tarefas e exibe a mensagem', () => {
    render(<TodoList todos={todos} deleteTodo={mockDeleteTodo} toggleTodo={mockToggleTodo} message="Mensagem de teste!" />);
    
    expect(screen.getByText('Mensagem de teste!')).toBeInTheDocument();
    
    todos.forEach(todo => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  test('limpa a mensagem após 3 segundos', () => {
    jest.useFakeTimers();
    render(<TodoList todos={todos} deleteTodo={mockDeleteTodo} toggleTodo={mockToggleTodo} message="Mensagem de teste!" />);

    expect(screen.getByText('Mensagem de teste!')).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    expect(screen.queryByText('Mensagem de teste!')).not.toBeInTheDocument();
    
    jest.useRealTimers();
  });
});
