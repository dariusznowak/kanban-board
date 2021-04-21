import React, { useState, useEffect } from "react";
import TaskBoard from "./TaskBoard";
import TaskInput from "./TaskInput";

function BoardsContainer() {
  const [toDoTable, setToDoTask] = useState(() => {
    const localStorageData = localStorage.getItem("toDoTable");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });
  const [inProgressTable, setInProgressTask] = useState(() => {
    const localStorageData = localStorage.getItem("inProgressTable");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });
  const [completedTable, setCompletedTask] = useState(() => {
    const localStorageData = localStorage.getItem("completedTable");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDoTable", JSON.stringify(toDoTable));
  }, [toDoTable]);

  useEffect(() => {
    localStorage.setItem("inProgressTable", JSON.stringify(inProgressTable));
  }, [inProgressTable]);

  useEffect(() => {
    localStorage.setItem("completedTable", JSON.stringify(completedTable));
  }, [completedTable]);

  function onAddTask(inputText) {
    setToDoTask(() => {
      return [inputText, ...toDoTable];
    });
  }

  function pushToNext(note, boardNameProp) {
    if (boardNameProp === "to-do-board") {
      setInProgressTask(() => {
        return [note, ...inProgressTable];
      });
    } else if (boardNameProp === "in-progress-board") {
      setCompletedTask(() => {
        return [note, ...completedTable];
      });
    }
  }

  function pushToPrevious(note, boardNameProp) {
    if (boardNameProp === "in-progress-board") {
      setToDoTask(() => {
        return [note, ...toDoTable];
      });
    } else if (boardNameProp === "completed-board") {
      setInProgressTask(() => {
        return [note, ...inProgressTable];
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
