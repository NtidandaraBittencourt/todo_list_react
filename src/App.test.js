import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TodoApp component', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /add todo/i });
    expect(buttonElement).toBeInTheDocument(); 
});
