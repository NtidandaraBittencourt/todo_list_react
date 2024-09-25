// import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import TodoApp from '../components/TodoApp';
import { getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Mocks do Firebase
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  getDocs: jest.fn(),
  addDoc: jest.fn(),
  deleteDoc: jest.fn(),
  updateDoc: jest.fn(),
}));

const mockTodos = [
  { id: '1', task: 'Estudar React', status: false },
  { id: '2', task: 'Aprender Firebase', status: true },
];

describe('TodoApp Component', () => {
  beforeEach(() => {
    getDocs.mockResolvedValue({
      docs: mockTodos.map(todo => ({
        id: todo.id,
        data: () => todo,
      })),
    });
  });

  test('renderiza o componente corretamente com a lista de tarefas', async () => {
    await act(async () => {
      render(<TodoApp />);

      // Verifica se o indicador de carregamento está presente
      expect(screen.getByText('Loading...')).toBeInTheDocument();

      // Espera até que as tarefas mockadas sejam renderizadas
      await waitFor(() => {

        expect(screen.getByText('Estudar React')).toBeInTheDocument();
      });
      expect(screen.getByText('Aprender Firebase')).toBeInTheDocument();
    });
  });
});

//   test('adiciona uma nova tarefa corretamente', async () => {
//     addDoc.mockResolvedValueOnce({ id: '3' }); // Simula a adição de uma nova tarefa

//     render(<TodoApp />);

//     // Simula a digitação no campo de novo todo
//     userEvent.type(screen.getByPlaceholderText('New Todo'), 'Nova Tarefa');

//     // Simula o clique no botão de adicionar
//     fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

//     // Verifica se a função addDoc foi chamada
//     await waitFor(() => {
//       expect(addDoc).toHaveBeenCalledWith(expect.any(Object), {
//         task: 'Nova Tarefa',
//         status: false,
//       });
//     });

//     // Verifica se a nova tarefa foi renderizada
//     await waitFor(() => {
//       expect(screen.getByText('Nova Tarefa')).toBeInTheDocument();
//     });
//   });

//   test('deleta uma tarefa corretamente', async () => {
//     deleteDoc.mockResolvedValueOnce(); // Simula a exclusão da tarefa

//     render(<TodoApp />);

//     // Espera a lista ser carregada
//     await waitFor(() => {
//       expect(screen.getByText('Estudar React')).toBeInTheDocument();
//     });

//     // Simula o clique no botão de deletar para a primeira tarefa
//     fireEvent.click(screen.getAllByRole('button', { name: /delete/i })[0]);

//     // Verifica se a função deleteDoc foi chamada com o ID correto
//     await waitFor(() => {
//       expect(deleteDoc).toHaveBeenCalledWith(expect.any(Object), '1');
//     });

//     // Verifica se a tarefa foi removida da tela
//     await waitFor(() => {
//       expect(screen.queryByText('Estudar React')).not.toBeInTheDocument();
//     });
//   });

//   test('altera o status de uma tarefa corretamente', async () => {
//     updateDoc.mockResolvedValueOnce(); // Simula a atualização do status da tarefa

//     render(<TodoApp />);

//     // Espera a lista ser carregada
//     await waitFor(() => {
//       expect(screen.getByText('Estudar React')).toBeInTheDocument();
//     });

//     // Simula o clique no checkbox para alterar o status da primeira tarefa
//     fireEvent.click(screen.getAllByRole('checkbox')[0]);

//     // Verifica se a função updateDoc foi chamada com o ID correto e o novo status
//     await waitFor(() => {
//       expect(updateDoc).toHaveBeenCalledWith(expect.any(Object), { status: true });
//     });

//     // Aqui você poderia verificar se a interface foi atualizada, mas como estamos simulando
//     // o Firebase, o mock não reflete essa atualização. Contudo, o importante é que o método foi chamado.
//   });
// });
