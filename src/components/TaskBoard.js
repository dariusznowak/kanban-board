import React from "react";
import SingleTask from "./SingleTask";

function TaskBoard(props) {
  return (
    <div className={"board-like " + props.data}>
      <SingleTask />
      <SingleTask />
      <SingleTask />
      <SingleTask />
      <SingleTask />
    </div>
  );
}

export default TaskBoard;
