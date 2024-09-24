import React, { Component } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc  } from 'firebase/firestore';
import TodoList from './components/TodoList';

class TodoApp extends Component {
  state = {
    todos: [],
    newTodo: '',
    taskCollectionRef: collection(db, 'todos')
  };


  componentDidMount() {
    this.fetchTodos();
  }
  

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
    }
  };

  addTodo = async () => {
    if (this.state.newTodo.trim() === '') return;

    const newTodo = { task: this.state.newTodo, status: false };
    await addDoc(this.state.taskCollectionRef, newTodo )
    this.setState({ newTodo: '' });
    this.fetchTodos();
  };

  deleteTodo = async (id) => {
    const taskRef = doc(db, 'todos', id)
    await deleteDoc(taskRef)
    this.fetchTodos();
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
        <input
          type="text"
          value={this.state.newTodo}
          onChange={(e) => this.setState({ newTodo: e.target.value })}
          placeholder="New Todo"
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
