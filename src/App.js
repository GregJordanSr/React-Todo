import React from 'react';

import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";


let showSearch = false;

const addTask = (obj, task) => {
  obj.todo.push({
    task: task,
    id: Date.now(),
    completed: false 
  });
  return obj;
}

const editTask = (obj, id) => {
  for(let i = 0; i < obj.todo.length; i++) { 
    if (obj.todo[i].id === id) {
      obj.todo[i].completed = !obj.todo[1].completed
    } 
  }
  return obj;
}

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <img className="logo" src={require("./img/logo.png")} alt="Todo logo" />
        <br></br>
        <h1 className="name">Gregory's Todo List App</h1>

        <TodoList
          todoChange={this.todoChange}
          list={showSearch ? this.state.searched : this.state.todo}
        />
        <TodoForm handleClear={this.handleClear} onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
