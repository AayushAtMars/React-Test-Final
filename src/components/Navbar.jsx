import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <nav className="bg-gray-900 shadow-md mb-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Task Manager</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Search title..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;