import React from "react";

function TaskBoard(props) {
  return (
    <div className={"board-like " + props.data}>taskboard {props.data}</div>
  );
}

export default TaskBoard;
