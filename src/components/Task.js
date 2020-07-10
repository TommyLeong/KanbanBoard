import React from "react";
import "./styles/Task.css";

const taskNameToId = (name) => {
  return `task-${name}`;
};
// { name }
const Task = (props) => {
  return (
    <div
      data-testid={taskNameToId(props.name)}
      onClick={() => {
        props.callback(props.name);
      }}
    >
      <div className="taskContainer">{props.name}</div>
    </div>
  );
};

export default Task;
