import React from "react";

function SingleTask(props) {
  return (
    <div className="single-task">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque
        molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.
      </p>

      {(props.data === "to-do-board" || props.data === "in-progress-board") && (
        <button>push next</button>
      )}
      {(props.data === "in-progress-board" ||
        props.data === "completed-board") && <button>push back</button>}
      <button>delete</button>
    </div>
  );
}

export default SingleTask;
