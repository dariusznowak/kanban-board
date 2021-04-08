import React, { useState } from "react";
import TaskBoard from "./TaskBoard";
import TaskInput from "./TaskInput";

function BoardsContainer() {
  const [task, setTask] = useState([]);

  function onAddTask(inputText) {
    setTask(() => {
      return [...task, inputText];
    });
    //console.log(task);
  }

  //console.log(task);

  return (
    <div className="boards-container">
      <TaskInput onAddTask={onAddTask} />

      <div className="boards">
        <TaskBoard taskTab={task} data="to-do-board" headingText={"To do"} />
        <TaskBoard
          taskTab={[]}
          data="in-progress-board"
          headingText={"In progress"}
        />
        <TaskBoard
          taskTab={[]}
          data="completed-board"
          headingText={"Completed"}
        />
      </div>
    </div>
  );
}

export default BoardsContainer;
