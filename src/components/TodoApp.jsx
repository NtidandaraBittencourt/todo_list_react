import React, { Component } from 'react';
import { db } from '../utils/firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc  } from 'firebase/firestore';
import TodoList from './TodoList';
import FormTodo from './FormTodo';
import { Divider } from "@react-md/divider";
import Loading from '../Shared/Loading';

class TodoApp extends Component {
  state = {
    todos: [],
    newTodo: '',
    taskCollectionRef: collection(db, 'todos'),
    message: '',
    loading: true,
  };

  componentDidMount() {
    this.fetchTodos();
  }

  handleInputChange = (value) => {
    this.setState({ newTodo: value });
  };  

  fetchTodos = async () => {
    this.setState({ loading: true });
    try {
      const querySnapshot = await getDocs(this.state.taskCollectionRef);
      const todos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() 
      }));

      this.setState({ todos });
    } catch (error) {
      console.error("Erro ao buscar os todos:", error);
      this.setState({message : "Não foi possivel apresentar a lista de tarefas."});
    } finally {
      this.setState({ loading: false })
    }
  };

  addTodo = async (newTodoValue) => {
    this.setState({ loading: true });
    const newTodo = { task: newTodoValue, status: false };
    await addDoc(this.state.taskCollectionRef, newTodo )
    this.setState({ newTodo: '' });
    this.fetchTodos();
    this.setState({message: "Tarefa adicionada com sucesso!"});
    this.setState({ loading: false });
  };

  deleteTodo = async (id) => {
    const taskRef = doc(db, 'todos', id)
    await deleteDoc(taskRef)
    this.fetchTodos();
    this.setState({message: "Tarefa removida!"});
  };

  toggleTodo = async (id, status) => {
    const taskRef = doc(db, 'todos', id)
    await updateDoc(taskRef, { status: !status })
    this.fetchTodos();
  };

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <FormTodo onAddTodo={this.addTodo} />
        <Divider className='divider'/>
      
        {this.state.loading ? (
          <Loading />
        ) : (
          <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            toggleTodo={this.toggleTodo}
            message={this.state.message}
          />
        )}
      </div>
    );
  }
}

export default TodoApp;
