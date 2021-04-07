import React from "react";
import TaskBoard from "./TaskBoard";
import TaskInput from "./TaskInput";

function BoardsContainer() {
  return (
    <div className="boards-container">
      <TaskInput />

      <div className="boards">
        <TaskBoard data="to-do-board" headingText={"To do"} />
        <TaskBoard data="in-progress-board" headingText={"In progress"} />
        <TaskBoard data="completed-board" headingText={"Completed"} />
      </div>
    </div>
  );
}

export default BoardsContainer;
