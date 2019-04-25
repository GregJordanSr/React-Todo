// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";

const TodoList = props => {
  return (
    <div className="list">
      {props.list.map(item => (
        <Todo
          todoChange={props.todoChange}
          id={item.id}
          key={item.id}
          task={item.task}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
 
