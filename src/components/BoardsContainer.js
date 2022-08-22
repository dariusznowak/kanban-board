import React, { useState, useEffect } from "react";
import TaskBoard from "./TaskBoard";
import TaskInput from "./TaskInput";
import "../styles/BoardsContainer.scss";

const BoardsContainer = () => {
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

  const onAddTask = (inputText) => {
    setToDoTask(() => {
      return [inputText, ...toDoTable];
    });
  };

  const pushToNext = (note, boardNameProp) => {
    if (boardNameProp === "to-do-board") {
      setInProgressTask(() => {
        return [note, ...inProgressTable];
      });
    } else if (boardNameProp === "in-progress-board") {
      setCompletedTask(() => {
        return [note, ...completedTable];
      });
    }
  };

  const pushToPrevious = (note, boardNameProp) => {
    if (boardNameProp === "in-progress-board") {
      setToDoTask(() => {
        return [note, ...toDoTable];
      });
    } else if (boardNameProp === "completed-board") {
      setInProgressTask(() => {
        return [note, ...inProgressTable];
      });
    }
  };

  const deleteNote = (id, boardNameProp) => {
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
  };

  const moveTask = (content, whereToMove) => {
    if (whereToMove === "to-do-board") {
      setToDoTask(() => {
        return [content, ...toDoTable];
      });
    } else if (whereToMove === "in-progress-board") {
      setInProgressTask(() => {
        return [content, ...inProgressTable];
      });
    } else if (whereToMove === "completed-board") {
      setCompletedTask(() => {
        return [content, ...completedTable];
      });
    }
  };

  return (
    <div className="home">
      <TaskInput onAddTask={onAddTask} />

      <div className="home__boards">
        <TaskBoard
          taskTab={toDoTable}
          pushNext={pushToNext}
          deleteFun={deleteNote}
          pushToPrevious={pushToPrevious}
          moveTask={moveTask}
          data="to-do-board"
          headingText={"To do"}
        />
        <TaskBoard
          taskTab={inProgressTable}
          pushNext={pushToNext}
          deleteFun={deleteNote}
          pushToPrevious={pushToPrevious}
          moveTask={moveTask}
          data="in-progress-board"
          headingText={"In progress"}
        />
        <TaskBoard
          taskTab={completedTable}
          pushNext={pushToNext}
          deleteFun={deleteNote}
          pushToPrevious={pushToPrevious}
          moveTask={moveTask}
          data="completed-board"
          headingText={"Completed"}
        />
      </div>
    </div>
  );
};

export default BoardsContainer;
