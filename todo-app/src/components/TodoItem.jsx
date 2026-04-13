function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todo-item">
  <div className="todo-top">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />

    <span
      className={`todo-text ${todo.completed ? "completed" : ""}`}
    >
      {todo.title}
    </span>

    <button onClick={() => deleteTodo(todo.id)}>❌</button>
  </div>

  <div className="meta">
    {todo.category && <span>🏷 {todo.category} </span>}
    {todo.dueDate && <span>📅 {todo.dueDate}</span>}
  </div>
</div>
  );
}

export default TodoItem;