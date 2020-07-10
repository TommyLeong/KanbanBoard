import React, { Component } from "react";
import "./App.css";

import Controls from "./components/Controls";
import Board from "./components/Board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTask: "",
      stagesNames: ["Backlog", "To Do", "Ongoing", "Done"],
      stageTasks: [["a", "b"], [["c", "d"]], [["e", "f"]], [["g", "h"]]],
    };
  }

  callbackSetSelected = (value) => {
    console.log(value);
    this.setState({
      selectedTask: value,
    });
  };

  createCallback = (newTask) => {
    const currentValue = this.state.stageTasks;
    currentValue[0].push(newTask);
    this.setState((prevState) => ({
      stageTasks: currentValue,
    }));
  };

  moveBackCallback = () => {};

  moveForwardCallback = () => {};

  deleteCallback = () => {};

  render() {
    console.log(this.state.selectedTask);
    return (
      <div className="App">
        <Controls
          selectedTask={this.state.selectedTask}
          createCallback={this.createCallback}
          moveBackCallback={this.moveBackCallback}
          moveForwardCallback={this.moveForwardCallback}
          deleteCallback={this.deleteCallback}
        />
        <Board
          callback={this.callbackSetSelected}
          stagesNames={this.state.stagesNames}
          stagesTasks={this.state.stageTasks}
        />
      </div>
    );
  }
}

export default App;
