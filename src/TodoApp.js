import React, { Component } from 'react';
import './App.css';

function Checkbox(props) {
  function _updateDone(event) {
  }
  return (
    <input
    type="checkbox"
    checked={props.done}
    disabled={props.disabled}
  />
  );
}

function InputText(props) {
  function _handleKeyPress(event) {

  }
  return (
    <input
    type="text"
    placeholder={props.placeholder}
    value={props.value}
  />
  );
}
function Todo(props) {
  return (
    <div className="todo">
      <Checkbox />
      <InputText/>
      {/*<span onClick={_handleTodoClick}>{ title }</span> */}
    </div>);
}

class TodoApp extends Component {
    state = {
    }

  componentWillMount() {

  }
  updateTodo = (updatedTodo) => {

  }

  addTodo = () => {

  }

  updateNewTodoTitle = (event) => {

  }

  updateEditingTodo = (todo, editing) => {

  }

  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default TodoApp;
