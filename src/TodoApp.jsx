import React, { Component } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc  } from 'firebase/firestore';
import TodoList from './components/TodoList';
import FormTodo from './components/FormTodo';
import { Divider } from "@react-md/divider";

class TodoApp extends Component {
  state = {
    todos: [],
    newTodo: '',
    taskCollectionRef: collection(db, 'todos'),
    message: ''
  };

  componentDidMount() {
    this.fetchTodos();
  }

  handleInputChange = (value) => {
    this.setState({ newTodo: value });
  };  

  fetchTodos = async () => {
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
    }
  };

  addTodo = async () => {
    if (this.state.newTodo.trim() === '') return;

    const newTodo = { task: this.state.newTodo, status: false };
    await addDoc(this.state.taskCollectionRef, newTodo )
    this.setState({ newTodo: '' });
    this.fetchTodos();
    this.setState({message: "Tarefa adicionada com sucesso!"});
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
        <FormTodo newTodo={this.state.newTodo} onInputChange={this.handleInputChange} onAddTodo={this.addTodo} />
        <Divider className='divider'/>
      
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default TodoApp;
