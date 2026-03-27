# Engineering To-Do List

A simple and functional to-do list application built with React and Vite. This app allows you to manage your tasks with Create, Read, Update, and Delete (CRUD) operations.

## Features

- ✅ **Add Tasks** - Create new to-do items with a simple form
- ✅ **Mark Complete** - Click on tasks to toggle completion status (shows strikethrough)
- ✅ **Delete Tasks** - Remove completed or unwanted tasks
- ✅ **Persistent UI** - Real-time updates to the task list

## Project Structure

```
my-todo-app/
├── src/
│   ├── App.jsx           # Main app component with CRUD logic
│   ├── App.css           # Styling for the app
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── component/
│       ├── TodoForm.jsx  # Form to add new tasks
│       └── TodoItem.jsx  # Individual task display and controls
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── index.html            # HTML template
```

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## How It Works

- **App.jsx** manages the state of all todos using React's `useState` hook
- **TodoForm.jsx** provides an input field to add new tasks
- **TodoItem.jsx** displays each task with options to toggle completion or delete
- Each task has a unique ID, text, and completion status

## Technologies Used

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **JavaScript** - Application logic
- **CSS** - Styling
