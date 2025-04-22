import React, { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";

const Filters = ({ setFilteredTasks, searchQuery }) => {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("all");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    let filtered = [...tasks];

    if (searchQuery) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filter === "completed") {
      filtered = filtered.filter((t) => t.completed);
    } else if (filter === "pending") {
      filtered = filtered.filter((t) => !t.completed);
    }

    if (sortType === "dueDate") {
      filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortType === "priority") {
      const priorityMap = { high: 1, medium: 2, low: 3 };
      filtered.sort((a, b) => priorityMap[a.priority] - priorityMap[b.priority]);
    }

    setFilteredTasks(filtered);
  }, [tasks, filter, sortType, searchQuery]);

  return (
    <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
      <div className="flex gap-2">
        {["all", "completed", "pending"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded cursor-pointer ${filter === type ? "bg-gray-900 text-white" : "bg-gray-600 text-gray-300"}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex gap-1 items-center border-2 border-gray-700 rounded-lg px-2 bg-gray-800">
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="px-2 py-1 rounded bg-gray-800 text-white cursor-pointer focus:outline-none"
          value={sortType}
        >
          <option value="">Sort by</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
