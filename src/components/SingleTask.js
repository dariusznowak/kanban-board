import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";

function SingleTask(props) {
  function handleNextButton() {
    props.pushNext(props.taskTab[props.id], props.data);
    props.deleteFun(props.id, props.data);
  }

  function handleDeleteButton() {
    props.deleteFun(props.id, props.data);
  }

  function handleBackButton() {
    props.pushToPrevious(props.taskTab[props.id], props.data);
    props.deleteFun(props.id, props.data);
  }

  /*drag and drop - useDrag() */
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD /*deklaracja typu tego co wróci*/,
    collect: (monitor) => ({
      //funkcja collect sprawi, że gdy isDragging jest true to doda ona propa do komponentu (wyżej)
      isDragging: !!monitor.isDragging(), //monitor has a prop isDragging, which is true <=> gdy tylko ten item is dragged
    }),
  });

  return (
    <div
      className="single-task"
      ref={drag}
      style={{ opacity: isDragging ? "0.1" : "1" }}
    >
      <p>{props.content}</p>
      <div className="single-task-buttons-box">
        {(props.data === "to-do-board" ||
          props.data === "in-progress-board") && (
          <button className="button button-next" onClick={handleNextButton}>
            <span class="fas fa-check" />
          </button>
        )}
        {(props.data === "in-progress-board" ||
          props.data === "completed-board") && (
          <button className="button button-back" onClick={handleBackButton}>
            <span class="fas fa-backward" />
          </button>
        )}
        <button className="button button-delete" onClick={handleDeleteButton}>
          <span class="far fa-trash-alt" />
        </button>
      </div>
    </div>
  );
}

export default SingleTask;
