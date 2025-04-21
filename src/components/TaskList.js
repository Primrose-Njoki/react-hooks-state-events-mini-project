/*import React from "react";


function TaskList({tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component 
    </div>
  );
}

export default TaskList;*/
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task 
          key={task.text} 
          task={task} 
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;