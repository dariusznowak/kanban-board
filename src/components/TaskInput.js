import React from "react";

function TaskInput() {
  return (
    <div className="task-input">
      <form>
        <h2>Create a task</h2>
        <input name="title" placeholder="Write a task..." />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskInput;
