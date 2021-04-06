import React from "react";
import TaskBoard from "./TaskBoard";

function BoardsContainer() {
  return (
    <div id="boards-container">
      <form className="task-input">
        <input name="title" />
        <textarea name="content" placeholder="Write a task..." rows="3" />
        <button>Add</button>
      </form>
      <TaskBoard data="to-do-board" />
      <TaskBoard data="in-progress-board" />
      <TaskBoard data="completed-board" />
    </div>
  );
}

export default BoardsContainer;
