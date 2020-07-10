import React from "react";
import Task from "./Task";
import "./styles/Stage.css";

// { name, stageId, tasks }
const Stage = (props) => {
  const renderTasks = (listOfTasks) =>
    listOfTasks.map((task) => <Task name={task} callback={props.callback} />);

  return (
    <div className="stageContainer" data-testid={`stage-${props.stageId}`}>
      <h3>{props.name}</h3>
      {renderTasks(props.tasks)}
    </div>
  );
};

export default Stage;
