import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";

const Home = () => {
  const { tasks } = useTasks();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-900">
      <Navbar onSearch={handleSearch} />
      <div className="max-w-4xl mx-auto p-4 pt-20">
        <TaskForm />
        <Filters setFilteredTasks={setFilteredTasks} searchQuery={searchQuery} />
        <TaskList filteredTasks={filteredTasks} />
      </div>
    </div>
  );
};

export default Home;
