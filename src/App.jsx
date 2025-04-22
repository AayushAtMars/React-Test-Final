import React from "react";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <TaskProvider>
      <Home />
      <ToastContainer />
    </TaskProvider>
  );
}

export default App;
