const NOTE_COLORS = [
  "note--butter",
  "note--sky",
  "note--blush",
  "note--peach",
  "note--mint",
];

function formatDate(value) {
  if (!value) {
    return "No due date";
  }

  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function TodoItem({ todo, deleteTodo, toggleTodo, index }) {
  const colorClass = NOTE_COLORS[index % NOTE_COLORS.length];

  return (
    <article className={`todo-note ${colorClass} ${todo.completed ? "is-done" : ""}`}>
      <div className="todo-note__top">
        <label className="check-wrap">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.completed ? "Done" : "Open"}</span>
        </label>

        <button
          className="ghost-button"
          type="button"
          onClick={() => deleteTodo(todo.id)}
          aria-label={`Delete ${todo.title}`}
        >
          x
        </button>
      </div>

      <div className="todo-note__body">
        <h3 className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.title}</h3>
        <p>{todo.completed ? "Wrapped up and ready to archive." : "Keep this visible until it moves."}</p>
      </div>

      <div className="todo-note__meta">
        {todo.category ? <span className="tag-pill">{todo.category}</span> : <span className="tag-pill tag-pill--ghost">General</span>}
        <span className="meta-date">{formatDate(todo.dueDate)}</span>
      </div>
    </article>
  );
}

export default TodoItem;
