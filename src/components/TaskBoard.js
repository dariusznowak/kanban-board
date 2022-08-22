import React from "react";
import { useDrop } from "react-dnd";
import SingleTask from "./SingleTask";
import "../styles/TaskBoard.scss";

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
      className="taskBoard"
      ref={drop}
      style={{ background: isOver && "rgba(77, 77, 77, 0.426)" }}
    >
      {/* <div className="task-board-heading"> */}
      <div className="taskBoard__header">
        <h1 className="taskBoard__headerText">{props.headingText}</h1>
      </div>
      <div className={"taskBoard__taskList " + props.data}>
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
