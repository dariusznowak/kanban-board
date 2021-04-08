import React, { useState } from "react";
import TaskBoard from "./TaskBoard";
import TaskInput from "./TaskInput";

function BoardsContainer() {
  const [toDoTable, setToDoTask] = useState([]);
  const [inProgressTable, setInProgressTask] = useState([]);
  const [completedTable, setCompletedTask] = useState([]);

  function onAddTask(inputText) {
    setToDoTask(() => {
      return [...toDoTable, inputText];
    });
  }

  function pushToNext(note, boardNameProp) {
    if (boardNameProp === "to-do-board") {
      setInProgressTask(() => {
        return [...inProgressTable, note];
      });
    } else if (boardNameProp === "in-progress-board") {
      setCompletedTask(() => {
        return [...completedTable, note];
      });
    }
  }

  function pushToPrevious(note, boardNameProp) {
    if (boardNameProp === "in-progress-board") {
      setToDoTask(() => {
        return [...toDoTable, note];
      });
    } else if (boardNameProp === "completed-board") {
      setInProgressTask(() => {
        return [...inProgressTable, note];
      });
    }
  }

  function deleteNote(id, boardNameProp) {
    console.log("klik");
    if (boardNameProp === "to-do-board") {
      setToDoTask((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    } else if (boardNameProp === "in-progress-board") {
      setInProgressTask((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    } else if (boardNameProp === "completed-board") {
      setCompletedTask((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  }

  return (
    <div className="boards-container">
      <TaskInput onAddTask={onAddTask} />

      <div className="boards">
        <TaskBoard
          taskTab={toDoTable}
          pushNext={pushToNext}
          deleteFun={deleteNote}
          pushToPrevious={pushToPrevious}
          data="to-do-board"
          headingText={"To do"}
        />
        <TaskBoard
          taskTab={inProgressTable}
          pushNext={pushToNext}
          deleteFun={deleteNote}
          pushToPrevious={pushToPrevious}
          data="in-progress-board"
          headingText={"In progress"}
        />
        <TaskBoard
          taskTab={completedTable}
          pushNext={pushToNext}
          deleteFun={deleteNote}
          pushToPrevious={pushToPrevious}
          data="completed-board"
          headingText={"Completed"}
        />
      </div>
    </div>
  );
}

export default BoardsContainer;
