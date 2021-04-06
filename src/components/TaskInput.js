import React from "react";

function TaskInput() {
  return (
    <form>
      <input name="title" />
      <textarea name="content" placeholder="Write a task..." rows="3" />
      <button>Add</button>
    </form>
  );
}

export default TaskInput;
