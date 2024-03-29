import React from "react";
import { useDrag } from "react-dnd";
import "../styles/SingleTask.scss";

const SingleTask = (props) => {
  const handleNextButton = () => {
    props.pushNext(props.taskTab[props.id], props.data);
    props.deleteFun(props.id, props.data);
  };

  const handleDeleteButton = () => {
    props.deleteFun(props.id, props.data);
  };

  const handleBackButton = () => {
    props.pushToPrevious(props.taskTab[props.id], props.data);
    props.deleteFun(props.id, props.data);
  };

  /*drag and drop - useDrag() */
  const [{ isDragging }, drag] = useDrag({
    //type: ItemTypes.TODO /*deklaracja typu tego co wróci*/,
    type: props.data /*deklaracja typu tego co wróci*/,
    item: {
      //obiekt zawierający nowe propsy, które będą wykorzystane w komponencie Taskboard w użycie hooka useDrop()!!!
      id: props.id,
      boardType: props.data,
      noteContent: props.taskTab[props.id],
    },
    collect: (monitor) => ({
      //funkcja collect sprawi, że gdy isDragging jest true to doda ona propa do komponentu (wyżej)
      isDragging: !!monitor.isDragging(), //monitor has a prop isDragging, which is true <=> gdy tylko ten item is dragged
    }),
  });

  return (
    <div
      className="singleTask"
      ref={drag}
      style={{ opacity: isDragging ? "0.1" : "1" }}
    >
      <p className="singleTask__content">{props.content}</p>
      <div className="singleTask__buttonsBox">
        {(props.data === "to-do-board" ||
          props.data === "in-progress-board") && (
          <button className="singleTask__button" onClick={handleNextButton}>
            <span className="fas fa-check" />
          </button>
        )}
        {(props.data === "in-progress-board" ||
          props.data === "completed-board") && (
          <button className="singleTask__button" onClick={handleBackButton}>
            <span className="fas fa-backward" />
          </button>
        )}
        <button className="singleTask__button" onClick={handleDeleteButton}>
          <span className="far fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
