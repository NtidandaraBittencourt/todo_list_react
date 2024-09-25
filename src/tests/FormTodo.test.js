import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import '@testing-library/jest-dom';
import FormTodo from '../components/FormTodo';

describe('FormTodo Component', () => {
  test('renders input and submit button', () => {
    render(<FormTodo onAddTodo={jest.fn()} />);

    expect(screen.getByPlaceholderText('New Todo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add todo/i })).toBeInTheDocument();
  });

  test('shows validation error if submitted without text', async () => {
    render(<FormTodo onAddTodo={jest.fn()} />);

    fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

    expect(await screen.findByText('Todo is required!')).toBeInTheDocument();
  });

  test('renders FormTodo component', () => {
    render(<FormTodo onAddTodo={jest.fn()} />);
  
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

//   test('calls onAddTodo when form is submitted with valid input', () => {
//     const mockOnAddTodo = jest.fn();
  
//     // Renderiza o componente
//     render(<FormTodo onAddTodo={mockOnAddTodo} />);
  
//     // Seleciona o input diretamente via querySelector
//     const input = document.querySelector('input[name="newTodo"]');
  
//     // Simula digitação no campo de texto
//     fireEvent.change(input, {
//       target: { value: 'Learn Testing' },
//     });
  
//     // Simula clique no botão de submit
//     const submitButton = screen.getByText(/Add Todo/i);
//     fireEvent.click(submitButton);
  
//     // Verifica se onAddTodo foi chamado corretamente
//     expect(mockOnAddTodo).toHaveBeenCalledWith('Learn Testing');
//   });



//   test('calls onAddTodo when form is submitted with valid input', async () => {
//     const mockOnAddTodo = jest.fn();

//     await act(async () => {
//       render(<FormTodo onAddTodo={mockOnAddTodo} />);

//       screen.debug();

//       const input = document.querySelector('input[name="newTodo"]');

//       // Simula digitação no campo de texto
//       fireEvent.change(screen.getByPlaceholderText('New Todo'), {
//         target: { value: 'Learn Testing' },
//       });


//       // Simula o clique no botão de submissão
//       fireEvent.click(screen.getByRole('button', { name: /add todo/i }));
//     });

//     // Verifica se a função onAddTodo foi chamada
//     expect(mockOnAddTodo).toHaveBeenCalledWith('Learn Testing');
//   });
});
