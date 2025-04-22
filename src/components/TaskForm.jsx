import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      toast.error("Title is required!");
      return;
    }

    const newTask = {
      ...form,
      id: uuidv4(),
      completed: false,
    };

    addTask(newTask);
    toast.success("Task added!");
    setForm({ title: "", description: "", dueDate: "", priority: "low" });
    setShowModal(false);
  };

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowModal(true)}
        className="mt-5 flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition cursor-pointer"
      >
        <AiOutlinePlus /> Add Task
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded shadow-lg w-full max-w-lg border border-gray-700"
          >
            <h2 className="text-xl font-bold mb-4 text-white">Create New Task</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400"
              />
              <input
                type="date"
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
              />
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-900 cursor-pointer"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
