import React from 'react';
import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FormTodo from '../components/FormTodo';

describe('FormTodo Component', () => {
  let mockOnAddTodo;

  beforeEach(() => {
    mockOnAddTodo = jest.fn();
  });


  test('renderiza o campo de entrada e o botão', () => {
    render(<FormTodo onAddTodo={mockOnAddTodo} />);

    expect(screen.getByPlaceholderText('New Todo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add todo/i })).toBeInTheDocument();
  });

  test('mostra mensagem de erro quando o campo é submetido vazio', async () => {
    render(<FormTodo onAddTodo={mockOnAddTodo} />);

    fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

    expect(await screen.findByText('Todo is required!')).toBeInTheDocument();

    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });

  test('renders FormTodo component', () => {
    render(<FormTodo onAddTodo={mockOnAddTodo} />);
  
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('submete o formulário corretamente quando o campo é preenchido', async () => {
    render(<FormTodo onAddTodo={mockOnAddTodo} />);

    userEvent.type(screen.getByPlaceholderText('New Todo'), 'Estudar testes unitários');

    fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

    await waitFor(() => {
      expect(mockOnAddTodo).toHaveBeenCalledWith('Estudar testes unitários');
    });

    expect(screen.getByPlaceholderText('New Todo')).toHaveValue('');
  });

  test('não exibe mensagem de erro quando o campo é preenchido corretamente', async () => {
    render(<FormTodo onAddTodo={mockOnAddTodo} />);

    userEvent.type(screen.getByPlaceholderText('New Todo'), 'Aprender Formik e Yup');

    fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

    expect(screen.queryByText('Todo is required!')).not.toBeInTheDocument();
  });

});
