import React from "react";
import Stage from "./Stage";
import "./styles/Board.css";

// { stagesNames, stagesTasks }
const Board = (props) => {
  // const renderTasks = (listOfTasks) =>
  //   listOfTasks.map((task) => <Task name={task} callback={props.callback} />);

  const renderStages = (stages) =>
    stages.map((stage) => (
      <Board
        callback={this.callbackSetSelected}
        stagesNames={stage}
        stagesTasks={["a", "b"]}
      />
    ));

  return (
    <div>
      <div className="title">
        <h1>Kanban board</h1>
      </div>
      <div className="boardContainer">
        {/* {renderStages(props.stagesNames)} */}
        <Stage
          name={"Backlog"}
          tasks={props.stagesTasks[0]}
          callback={props.callback}
        />
        <Stage
          name={"To Do"}
          tasks={props.stagesTasks[1][0]}
          callback={props.callback}
        />
        <Stage
          name={"Ongoing"}
          tasks={props.stagesTasks[2][0]}
          callback={props.callback}
        />
        <Stage
          name={"Done"}
          tasks={props.stagesTasks[3][0]}
          callback={props.callback}
        />
      </div>
    </div>
  );
};

export default Board;
