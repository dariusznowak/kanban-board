import React, { useState } from "react";

function TaskInput(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function submitNote(event) {
    props.onAddTask(inputText);
    event.preventDefault();
  }

  return (
    <div className="task-input">
      <form>
        <h2>Create a task</h2>
        <input
          onChange={handleChange}
          name="task-content"
          placeholder="Write a task..."
          value={inputText}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default TaskInput;
