import React, { Component } from "react";
import "./styles/Controls.css";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTask: props.selectedTask,
      newTask: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if (this.props !== nextProps) {
      this.setState(nextProps);
    }
  }

  createButtonAction = () => {
    this.props.createCallback(this.state.newTask);
    this.setState({
      newTask: "",
    });
  };

  render() {
    return (
      <div className="controlContainer">
        <div className="title">
          <h1>Controls</h1>
        </div>
        <div className="controlTasksRow">
          <div className="controlTasksnRowItems">
            <input
              type="text"
              value={this.state.newTask}
              placeholder={"New task name"}
              onChange={(event) => {
                this.setState({
                  newTask: event.target.value,
                });
              }}
            />
          </div>
          <div className="controlTasksnRowItems">
            <button
              onClick={() => {
                this.createButtonAction();
              }}
            >
              Create
            </button>
          </div>
        </div>
        <div className="controlTasksRow">
          <div className="controlTasksnRowItems">
            <input
              type="text"
              value={this.state.selectedTask}
              placeholder={"Selected task name"}
            />
          </div>
          <div className="controlTasksnRowItems">
            <button
              onClick={() =>
                this.props.moveBackCallback(this.state.selectedTask)
              }
            >
              Move back
            </button>
          </div>
          <div className="controlTasksnRowItems">
            <button
              onClick={() =>
                this.props.moveForwardCallback(this.state.selectedTask)
              }
            >
              Move forward
            </button>
          </div>
          <div className="controlTasksnRowItems">
            <button
              onClick={() => this.props.deleteCallback(this.state.selectedTask)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
