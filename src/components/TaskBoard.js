import React from "react";
import { useDrop } from "react-dnd";
import SingleTask from "./SingleTask";

const TaskBoard = (props) => {
  //funkcja do aktualizacji tablic tasków przy drag-drop
  function moveTaskToDropzone(id, boardName, content) {
    props.moveTask(content, props.data);
    props.deleteFun(id, boardName);
  }

  const [{ isOver }, drop] = useDrop({
    accept: ["to-do-board", "in-progress-board", "completed-board"].filter(
      (noteItem) => {
        return props.data !== noteItem;
      }
    ), //podajemy jakie typy akceptować
    drop: (item, monitor) =>
      moveTaskToDropzone(item.id, item.boardType, item.noteContent),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className="task-board"
      ref={drop}
      style={{ background: isOver && "rgba(77, 77, 77, 0.426)" }}
    >
      <div className="task-board-heading">
        <h1>{props.headingText}</h1>
      </div>
      <div className={"board-like " + props.data}>
        {props.taskTab.map((noteItem, index) => {
          return (
            <SingleTask
              content={noteItem}
              key={index}
              id={index}
              data={props.data}
              pushNext={props.pushNext}
              deleteFun={props.deleteFun}
              pushToPrevious={props.pushToPrevious}
              taskTab={props.taskTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskBoard;
