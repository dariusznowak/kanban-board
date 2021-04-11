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
