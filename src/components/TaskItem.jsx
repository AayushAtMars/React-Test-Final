import React from "react";
import { useTasks } from "../context/TaskContext";
import { FaTrash, FaCheckSquare } from "react-icons/fa";
import { toast } from "react-toastify";

const TaskItem = ({ task }) => {
  const { deleteTask, updateTask } = useTasks();

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
    toast.info(`Marked as ${!task.completed ? "completed" : "pending"}`);
  };

  return (
    <div className={`p-4 border border-gray-700 rounded mb-3 bg-gray-900 ${task.completed ? "opacity-70" : ""}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className={`text-lg font-bold text-white ${task.completed ? "line-through" : ""}`}>
            {task.title}
          </h3>
          <p className="text-sm text-gray-300">{task.description}</p>
          <p className="text-xs text-gray-400">
            Due: {task.dueDate} | Priority: {task.priority}
          </p>
        </div>
        <div className="flex gap-3 text-lg">
          <button onClick={toggleComplete} className="text-green-400 hover:text-green-300 cursor-pointer text-2xl">
          <FaCheckSquare />
          </button>
          <button onClick={() => {
            deleteTask(task.id);
            toast.success("Task deleted");
          }} className="text-red-400 hover:text-red-300 cursor-pointer text-xl">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
