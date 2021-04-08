import React from "react";
import SingleTask from "./SingleTask";

function TaskBoard(props) {
  return (
    <div className="task-board">
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
}

export default TaskBoard;
