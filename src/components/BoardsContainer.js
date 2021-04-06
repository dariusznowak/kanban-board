import React from "react";
import TaskBoard from "./TaskBoard";
import TaskInput from "./TaskInput";

function BoardsContainer() {
  return (
    <div id="boards-container">
      <TaskInput />
      <TaskBoard data="to-do-board" />
      <TaskBoard data="in-progress-board" />
      <TaskBoard data="completed-board" />
    </div>
  );
}

export default BoardsContainer;
