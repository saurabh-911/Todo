import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__plus">+</div>
        <h3>No notes match this view</h3>
        <p>Add a new task or switch the filter to reveal more notes on the board.</p>
      </div>
    );
  }

  return (
    <div className="todo-grid">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
