import { useEffect, useMemo, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

const STORAGE_KEY = "todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      setTodos(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((current) => [
      { ...todo, id: Date.now(), completed: false, createdAt: new Date().toISOString() },
      ...current,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const stats = useMemo(() => {
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = todos.length - completed;
    const today = new Date().toISOString().slice(0, 10);
    const dueToday = todos.filter((todo) => todo.dueDate === today).length;
    const categories = [...new Set(todos.map((todo) => todo.category).filter(Boolean))];

    return {
      all: todos.length,
      completed,
      pending,
      dueToday,
      categories,
    };
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesFilter =
        filter === "completed"
          ? todo.completed
          : filter === "pending"
            ? !todo.completed
            : true;

      const haystack = `${todo.title} ${todo.category} ${todo.dueDate}`.toLowerCase();
      const matchesQuery = haystack.includes(query.trim().toLowerCase());

      return matchesFilter && matchesQuery;
    });
  }, [filter, query, todos]);

  return (
    <main className="shell">
      <section className="workspace">
        <aside className="sidebar">
          <div className="sidebar__top">
            <div>
              <p className="eyebrow">Workspace</p>
              <h1>Sticky Wall</h1>
            </div>
            <button className="icon-button" type="button" aria-label="Board menu">
              <span />
              <span />
              <span />
            </button>
          </div>

          <label className="search">
            <span className="search__icon">/</span>
            <input
              type="text"
              placeholder="Search notes"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="sidebar__section">
            <p className="section-label">Tasks</p>
            <div className="stat-list">
              <button className={`stat-card ${filter === "all" ? "is-active" : ""}`} onClick={() => setFilter("all")} type="button">
                <span>All Notes</span>
                <strong>{stats.all}</strong>
              </button>
              <button className={`stat-card ${filter === "pending" ? "is-active" : ""}`} onClick={() => setFilter("pending")} type="button">
                <span>Pending</span>
                <strong>{stats.pending}</strong>
              </button>
              <button className={`stat-card ${filter === "completed" ? "is-active" : ""}`} onClick={() => setFilter("completed")} type="button">
                <span>Done</span>
                <strong>{stats.completed}</strong>
              </button>
              <div className="stat-card stat-card--muted">
                <span>Due Today</span>
                <strong>{stats.dueToday}</strong>
              </div>
            </div>
          </div>

          <div className="sidebar__section">
            <p className="section-label">Lists</p>
            <div className="tag-group">
              {stats.categories.length > 0 ? (
                stats.categories.map((category) => (
                  <span className="tag-pill tag-pill--soft" key={category}>
                    {category}
                  </span>
                ))
              ) : (
                <span className="empty-copy">Add categories to create quick lists.</span>
              )}
            </div>
          </div>

          <div className="sidebar__footer">
            <p>Keep ideas visible, sortable, and easy to finish.</p>
          </div>
        </aside>

        <section className="board">
          <div className="board__header">
            <div>
              <p className="eyebrow">Board View</p>
              <h2>Your action wall</h2>
            </div>
            <FilterBar filter={filter} setFilter={setFilter} />
          </div>

          <TodoInput addTodo={addTodo} />

          <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
