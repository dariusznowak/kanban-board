import React from "react";

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

  return (
    <div className="single-task">
      <p>{props.content}</p>

      {(props.data === "to-do-board" || props.data === "in-progress-board") && (
        <button onClick={handleNextButton}>push next</button>
      )}
      {(props.data === "in-progress-board" ||
        props.data === "completed-board") && (
        <button onClick={handleBackButton}>push back</button>
      )}
      <button onClick={handleDeleteButton}>delete</button>
    </div>
  );
}

export default SingleTask;
