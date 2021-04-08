import React from "react";
import SingleTask from "./SingleTask";

function TaskBoard(props) {
  //const a = ["darek", "aue", "kurła", "nie dziela", "haha", "xddd"];
  console.log(props.taskTab);
  console.log("siema");

  return (
    <div className="task-board">
      <div className="task-board-heading">
        <h1>{props.headingText}</h1>
      </div>
      <div className={"board-like " + props.data}>
        <SingleTask content={"darek"} data={props.data} />

        {props.taskTab.map((noteItem, index) => {
          return <SingleTask content={noteItem} key={index} id={index} />;
        })}
      </div>
    </div>
  );
}

export default TaskBoard;
