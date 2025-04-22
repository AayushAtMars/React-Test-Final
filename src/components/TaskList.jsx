import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

const TaskList = ({ filteredTasks }) => {
  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <div key={task.id} className="mb-3">
          <TaskItem task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
