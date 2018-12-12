import React, { Component } from 'react';
import './css/App.css';
import Todo from './components/Todo/Todo';
import NewTodo from './components/Todo/NewTodo';
import CreateTodo from './components/Todo/CreateTodo';
import Header from './components/Header';

class TodoApp extends Component {
    state = {
      title: 'My Todos',
      todos: [],
      newTodoTitle: '',
    }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        const todos = json.slice(0, 5).map(todo =>
            CreateTodo(todo.title, todo.completed, todo.id)
          );
        this.setState({
              todos
            });
      })
  }
  updateTodo = (updatedTodo) => {
    const todoIndex = this.state.todos.findIndex(t => t.id === updatedTodo.id);
    const newTodos = this.state.todos.slice(0);
    newTodos[todoIndex] = updatedTodo;
    this.setState({todos: newTodos});
  }
  addTodo = () => {
    const newTodo = CreateTodo(this.state.newTodoTitle, false, this.state.todos.length + 1);
    this.setState({
      todos: this.state.todos.concat(newTodo),
      newTodoTitle: ''
    });
  }
  updateNewTodoTitle = (event) => {
    this.setState({newTodoTitle: event.target.value});
  }
  updateEditingTodo = (todo, editing) => {
    if (!todo.title) {
      return;
    }
    const todoIndex = this.state.todos.findIndex(t => t.id === todo.id);
    const todos = this.state.todos.slice(0);
    todos[todoIndex] = Object.assign({}, todo, {editing});
    this.setState({ todos });
  }
  render() {
    const todosList = this.state.todos.map(todo =>
      <Todo
        todo={todo}
        key={todo.id}
        updateTodo={this.updateTodo}
        updateEditingTodo={this.updateEditingTodo}
      />
    );
    return (
      <div className="App">
        <Header
          listName={this.state.title}/>
        {todosList}
        <NewTodo
          addTodo={this.addTodo}
          newTodoTitle={this.state.newTodoTitle}
          updateNewTodoTitle={this.updateNewTodoTitle}
        />
      </div>
    );
  }
}

export default TodoApp;
