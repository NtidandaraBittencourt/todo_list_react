import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import '@testing-library/jest-dom';

const mockTodo = {
  id: 1,
  task: 'Testar componente TodoItem',
  status: false,
};

const mockDeleteTodo = jest.fn();
const mockToggleTodo = jest.fn();

describe('TodoItem Component', () => {
  test('renderiza corretamente o texto da tarefa', () => {
    render(<TodoItem todo={mockTodo} deleteTodo={mockDeleteTodo} toggleTodo={mockToggleTodo} />);
    
    expect(screen.getByText('Testar componente TodoItem')).toBeInTheDocument();
  });

  test('aplica a classe "strikethrough" quando o status está completo', () => {
    const completedTodo = { ...mockTodo, status: true }; // Mock do todo com status concluído

    render(<TodoItem todo={completedTodo} deleteTodo={mockDeleteTodo} toggleTodo={mockToggleTodo} />);
    
    const taskElement = screen.getByText('Testar componente TodoItem');

    expect(taskElement).toHaveClass('strikethrough');
  });

  test('não aplica a classe "strikethrough" quando o status está incompleto', () => {
    render(<TodoItem todo={mockTodo} deleteTodo={mockDeleteTodo} toggleTodo={mockToggleTodo} />);
    
    const taskElement = screen.getByText('Testar componente TodoItem');

    expect(taskElement).not.toHaveClass('strikethrough');
  });

  test('chama a função deleteTodo quando o botão de deletar é clicado', () => {
    render(<TodoItem todo={mockTodo} deleteTodo={mockDeleteTodo} toggleTodo={mockToggleTodo} />);
    
    const deleteButton = screen.getByLabelText('Favorite');

    fireEvent.click(deleteButton);

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });

  test('chama a função toggleTodo quando o checkbox é clicado', () => {
    render(<TodoItem todo={mockTodo} deleteTodo={mockDeleteTodo} toggleTodo={mockToggleTodo} />);
    
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(mockToggleTodo).toHaveBeenCalledWith(1, false);
  });
});
