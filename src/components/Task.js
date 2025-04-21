/*import React from "react";

function Task() {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;*/

import React from "react";

function Task({ task, text, category, onDelete }) {
  // Handle both prop patterns:
  // 1. When receiving a task object
  // 2. When receiving separate text and category props
  const taskText = text || task?.text;
  const taskCategory = category || task?.category;

  const handleDelete = () => {
    onDelete(taskText);
  };

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;