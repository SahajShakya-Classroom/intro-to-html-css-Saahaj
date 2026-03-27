function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
      <span 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;