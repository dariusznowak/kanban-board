import React, { useState } from "react";
import "../styles/TaskInput.scss";

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
    <div className="taskInput">
      <form>
        <h2 className="taskInput__text">Create a task</h2>

        <textarea
          className="taskInput"
          onChange={handleChange}
          name="task-content"
          rows="3"
          value={inputText}
          maxLength="300"
        />

        <button
          className="taskInput__button"
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
