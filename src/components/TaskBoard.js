import React from "react";
import SingleTask from "./SingleTask";

function TaskBoard(props) {
  return (
    <div className="task-board">
      <div className="task-board-heading">
        <h1>{props.headingText}</h1>
      </div>
      <div className={"board-like " + props.data}>
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
}

export default TaskBoard;
