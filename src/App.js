import React from 'react';

import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./App.css"

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

const handleClearing = (obj) => {
  const filtered = obj.todo.filter(item => item.completed === false);
  const filtered2 = obj.searched.filter(item => item.completed === false);
  obj.todo = filtered;
  obj.searched = filtered2;
  return obj;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      searched: [],
      name: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("todo")) {
      this.setState({
        todo: JSON.parse(localStorage.getItem("todo")),
        searched: JSON.parse(localStorage.getItem("todo"))
      });
    } else {
      localStorage.setItem("todo", JSON.stringify([]));
    }
  }

  componentDidUpdate() {localStorage.setItem("todo", JSON.stringify(this.state.todo));
}
  

  handleAdd = task => this.setState(addTask(this.state, task));
  

  todoChange = id => this.setState(editTask(this.state, id));
  

  handleClear = () => this.setState(handleClearing(this.state));
  

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
