# Task Manager Application

This is a **Task Manager Application** built with **React**, **Vite**, and **TailwindCSS**. It allows users to create, manage, and filter tasks with features like priority levels, due dates, and search functionality.

## Features

- **Add Tasks**: Create new tasks with a title, description, due date, and priority.
- **Task Management**: Mark tasks as completed or delete them.
- **Filters**: Filter tasks by status (all, completed, pending) and sort by due date or priority.
- **Search**: Search tasks by title.
- **Persistent Storage**: Tasks are saved in `localStorage` to persist across page reloads.
- **Responsive Design**: Fully responsive UI built with TailwindCSS.

## Tech Stack

- **React**: Frontend library for building the user interface.
- **Vite**: Fast development build tool.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Toastify**: For notifications.
- **React Icons**: For icons.
- **UUID**: For generating unique task IDs.

## Project Structure

src/ ├── App.css # Global styles ├── App.jsx # Main application component ├── index.css # TailwindCSS import ├── main.jsx # Entry point ├── assets/ # Static assets ├── components/ # Reusable components │ ├── Filters.jsx # Task filtering and sorting │ ├── Navbar.jsx # Navigation bar with search │ ├── TaskForm.jsx # Form to add new tasks │ ├── TaskItem.jsx # Individual task item │ └── TaskList.jsx # List of tasks ├── context/ # Context for task management │ └── TaskContext.jsx ├── pages/ # Page components │ └── Home.jsx # Home page


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AayushAtMars/Task-Manager.git
   cd task-manager

2. Install dependencies:
   npm install
   
4. Start the development server:
   npm run dev

5. Open the app in your browser at http://localhost:5173.

Configuration
TailwindCSS: Configured in tailwind.config.js to scan index.html and all files in src/ for class names.
ESLint: Configured in eslint.config.js with React and hooks rules.

Dependencies
React: ^19.0.0
React DOM: ^19.0.0
React Toastify: ^11.0.5
React Icons: ^5.5.0
TailwindCSS: ^4.1.4
UUID: ^11.1.0

Dev Dependencies
Vite: ^6.3.1
ESLint: ^9.22.0
@vitejs/plugin-react: ^4.3.4

Demo Link
https://task-manager-pi-eight-33.vercel.app/
