import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), completed: false }]);
  };

  // Delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Toggle Complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Filter logic
  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="app">
  <h1 className="title">✨ Todo App</h1>

  <TodoInput addTodo={addTodo} />
  <FilterBar setFilter={setFilter} />
  <TodoList
    todos={filteredTodos}
    deleteTodo={deleteTodo}
    toggleTodo={toggleTodo}
  />
</div>
  );
}

export default App;