import React from "react";
import SingleTask from "./SingleTask";

//function createSingleTask
//jeden z propsow: props.data - wysylam go po to zeby wiedziec ile buttonow
//dla single taska zrobic

function TaskBoard(props) {
  return (
    <div className="task-board">
      <div className="task-board-heading">
        <h1>{props.headingText}</h1>
      </div>
      <div className={"board-like " + props.data}>
        <SingleTask data={props.data} />
        <SingleTask data={props.data} />
        <SingleTask data={props.data} />
        <SingleTask data={props.data} />
        <SingleTask data={props.data} />
      </div>
    </div>
  );
}

export default TaskBoard;
