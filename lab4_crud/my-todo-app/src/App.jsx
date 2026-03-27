import { useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoItem from './component/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish LAB4", completed: false }
  ]);

  // CREATE
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // UPDATE (Toggle)
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Engineering To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;