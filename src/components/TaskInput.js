import React, { useState } from "react";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const submitNote = (event) => {
    props.onAddTask(inputText);
    event.preventDefault();
    setInputText("");
  };

  return (
    <div className="task-input">
      <form>
        <h2>Create a task</h2>
        <textarea
          className="text-area-input"
          onChange={handleChange}
          name="task-content"
          rows="3"
          value={inputText}
          maxLength="300"
        ></textarea>

        <button
          className="input-button"
          onClick={submitNote}
          disabled={!inputText || !inputText.trim()}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
